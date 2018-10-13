import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import qs from 'qs';
import axios from 'axios'
import './config/rem'
//import xhrOverwrite from 'xhr-overwrite';
import util from './util'
import store from './store/'
import { routerMode } from './config/env'
import Bus from './bus.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { getUserInfo ,refreshToken} from './service/getData'
import { setStore, getStore } from 'src/config/mUtils'

import FastClick from 'fastclick'
import 'src/style/fontsr.css'


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Bus(Vue)
Vue.use(util);
Vue.use(VueRouter)
Vue.use(MintUI)


const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
});


// http request 拦截器
axios.interceptors.request.use(
  config => {
    var access_token = getStore('access_token');
    var refresh_token = getStore('refresh_token');
    if(access_token&&refresh_token){
      config.data.access_token=access_token;
      config.data.refresh_token=refresh_token;
      config.data=qs.stringify(config.data)
    }else{
      /*location.href=domain;*/
    }
    // if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `${store.state.token}`;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);


//受访白名单页面
const whiteList = ['test','androidTest'];
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (whiteList.indexOf(to.name) != -1) {
    next();
    return;
  }
  //如果是首页进来
  if(to.name=='msite'){
    //查看本地是否有token
    var get_access_token=getStore('access_token');
    var get_refresh_token=getStore('refresh_token');
    //获取url的token参数
    var url_access_token=to.query.access_token;
    var url_refresh_token=to.query.refresh_token;
    //如果url 缓存都没有参数 则跳页面
    if(!url_access_token&&!url_refresh_token&&!get_access_token&&!get_refresh_token){
      /*location.href=domain;*/
    }
    //如果参数都存在 以url参数为主 将本地token更新为url token
    if(url_access_token&&url_refresh_token&&get_access_token&&get_refresh_token){
      setStore('access_token', url_access_token);
      setStore('refresh_token', url_refresh_token);
    }
    //如果缓存没有参数 url有 进行赋值
    if(url_access_token&&url_refresh_token&&!get_access_token&&!get_refresh_token){
      setStore('access_token', url_access_token);
      setStore('refresh_token', url_refresh_token);
    }
    //如果缓存有参数 url没有有 运行缓存的参数
    if(!url_access_token&&!url_refresh_token&&get_access_token&&get_refresh_token){
      
    }
  }
  //所以路由走userinfo接口
  getUserInfo().then(res => {
    if(res.res){
      // alert(JSON.stringify(res));
      store.commit('KEEP_USERINFO', res.data);
      store.commit('SET_LOADING', true);
      next()
    }else{
      if(res.message.code==2){//token过期
        refreshToken().then(rese => {
          if(rese.res){//合法可以更新token
            if(rese.data.access_token&&rese.data.refresh_token){
              setStore('access_token', rese.data.access_token);
              setStore('refresh_token', rese.data.refresh_token);
              getUserInfo().then(resers=>{
                if(resers.res){
                  store.commit('KEEP_USERINFO', resers.data);
                  store.commit('SET_LOADING', true);
                  next()
                }else{
                  /*location.href=domain;*/
                }
              });
            }
          }else{
            console.log('token过期，重新请求依然出错，跳页面');
            //location.href=domain;
          }

        })
      }else if(res.message.code==0){
        console.log('跳页面')
        //location.href=domain;
        //token不存在
      }
      // store.commit('KEEP_USERINFO', {});
      // next()
    }
  })

  //next()
})







new Vue({
  router,
  store,
}).$mount('#app')
