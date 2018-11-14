<template>
  <div class="app_wrap">
    <!-- <img :src="require('src/images/loading.gif')"> -->
    <!-- <img src="~src/images/loading.gif"> -->
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <div class="loading" v-if="loadingbox">
      <!-- <img src="./images/loading.gif"> -->
      <div class="loading_svg_wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50"
             preserveAspectRatio="xMidYMid" class="lds-rolling">
          <circle cx="50" cy="50" r="20" stroke="#cccccc" stroke-width="3" fill="none"></circle>
          <circle cx="50" cy="50" 
                  fill="none" 
                  stroke="#FFA400" 
                  stroke-width="3" 
                  r="20" 
                  stroke-dasharray="16.93361431346415 156.97787143782138"
                  transform="rotate(78 50 50)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear"
                              values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
            </animateTransform>
          </circle>
        </svg>
        <p class="loading_text">加载中</p>
      </div>
    </div>

  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { setStore, getStore } from 'src/config/mUtils'
import headTop from 'src/components/header/head'
import alertTip from './components/common/alertTip'
import { getThemecss } from 'src/service/getData'


export default {
  //数据
  data() {
    return {
      colorsConfig: [{
        themeId: 1,
        familyPrimary: '#B7A3FF',
        familySecondary: '#879FFF',
        sideBarTop: '#8981D8'
      }, {
        themeId: 2,
        familyPrimary: '#FDC5C5',
        familySecondary: '#F070A0',
        sideBarTop: '#E7829F'
      }, {
        themeId: 3,
        familyPrimary: '#414D6C',
        familySecondary: '#2D1E3C',
        sideBarTop: '#423C50'
      }],
      color:null,
      themeType:3
    }
  },
  components: {

  },

  created() {
    // 绑定设置主题的事件，一旦触发修改主题，则将当前字体颜色改为对应颜色
    this.$bus.$on('set-theme', (color) => {
      let colorsConfig=this.colorsConfig;
      for (var i = 0; i < colorsConfig.length; i++) {
        if(color==colorsConfig[i].themeId){
          this.color=colorsConfig[i];
        }
      };
    });
    this.$bus.$on('execute-setcolor', () => {
      this.getAllData();
      this.setTheme();
    });
    this.$bus.$on('gonghangFn', (obj) => {
      this.localGonghangFn(obj)
    });
  },
  //开始创建  vue后自动执行
  mounted() {
    // if(this.userInfo){
    //   if(this.userInfo.app_key=='4df9ea96f1d2165a'){
    //     var gonghangSignin = getStore('_gonghangSignin');
    //     if (gonghangSignin) {
    //       console.log('不需要签到')
    //     }else{
    //       this.$bus.$emit('gonghangFn',{"transType": "LOGON","transData":{},"callback":this.gonghangSigninFn});
    //     }
    //   }
    // }
    var that=this;
    window.connectWebViewJavascriptBridge=this.connectWebViewJavascriptBridge;
    //注册回调函数，第一次连接时调用 初始化函数
    connectWebViewJavascriptBridge(function(bridge) {
        //初始化
        bridge.init(function(message, responseCallback) {
            var data = {
                'Javascript Responds': 'Wee!'
            };
            responseCallback(data);
        });


        //Android调用js方法：functionInJs方法名称需要保持一致 ，并返回给Android通知

        bridge.registerHandler("functionInJs", (data, responseCallback)=>{
          // data=JSON.stringify(data);
          data=JSON.parse(data);
          //alert('入口所以:'+JSON.stringify(data))
          //var data = document.getElementById("text1").value;
          if(data.transType=='LOGOUT'){
            //alert(JSON.stringify(data))
            //setStore('_gonghangSignin', '');
          }else if(data.transType=='MULTI_PURCHASE'){
            that.$bus.$emit('gonghangPayBeforePassFn',data);
          }

          var responseData = "我是Android调用js方法返回的数据---";
          responseCallback(responseData);
        });
    });
    this.initGonghangReturnFn();
    this.initData();
  },
  //计算值 这里可以实时监听某个数据的变化
  computed: {
    ...mapState([
      'loadingbox', 'userInfo','isGonghang'
    ]),
  },
  //方法
  methods: {
    ...mapMutations([]),
    async initData() {
      
    },
    //工行返回方法
    initGonghangReturnFn(){
      if(this.isGonghang){
        if(this.$route.name=='msite'){
          // alert('我是首页')
          this.$bus.$emit('gonghangFn', { "transType": "NOTICE_IS_INDEX", "transData": {},"status":true, "callback":function(data){
            // alert(data)
            // alert('我是首页通知你了android')
          }});
        }else{
          // alert('我不是首页');
          this.$bus.$emit('gonghangFn', { "transType": "NOTICE_IS_INDEX", "transData": {},"status":false, "callback":function(data){
            // alert(data)
            // alert('我不是首页通知你了android')
          }});
        }
      }
    },

    //签到成功的回调函数
    gonghangSigninFn(data){
      //存储工行签到
      setStore('_gonghangSignin', '1');
    },

    //JS注册事件监听
    connectWebViewJavascriptBridge(callback) {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function() {
            callback(WebViewJavascriptBridge)
          },
          false
        );
      }
    },

    //h5主动触发工行方法
    localGonghangFn(obj) {
      var transType=obj.transType,
          transData=obj.transData;
          status=obj.status;
      //参数一：调用java中的方法   submitFromWeb是方法名，必须和Android中注册时候的方法名称保持一致
      //参数二：返回给Android端的数据，可以为字符串，json等信息
      //参数三：js接收到Android传递过来的数据之后的相应处理逻辑
      try {
        window.WebViewJavascriptBridge.callHandler(
          'submitFromWeb',
          // {
          //   "transType": "MULTI_PURCHASE",
          //   "ctrlData": { "APP_NAME": "好券", "AIDL_VER": "V1.0.2" },
          //   "transData":{"AMOUNT":1,"TRANS_LIST":["INTEGRAL_PURCHASE"]}
          // },
          // { "transType": "LOGON", "ctrlData": { "APP_NAME": "好券", "AIDL_VER": "V1.0.2" } },
          {transType, "ctrlData": { "APP_NAME": "好券", "AIDL_VER": "V1.0.2" },transData,status},
          function(responseData) {
            if(obj.callback){
              obj.callback(responseData)
            }
            //alert(responseData)
          }

        );
      } catch (e) {
        console.log(e.name + ': ' + e.message,'请在工行pos机打开');
      }
    },



    getAllData () {
      if(this.themeType){
        window.localStorage.setItem('themeColor', this.themeType);
      }
      // 假装调用接口获取并设置个人数据 颜色 头像
      let colorType = localStorage.getItem('themeColor') || 1;
      colorType && this.$bus.$emit('set-theme', colorType)
    },
    // 设置颜色页面就在该view下, 因而改变颜色这里需要监听, 故设置主题的方法要封装复用
    setTheme () {
      this.setStyle('.topCon','color','familyPrimary');
      this.setStyle('.msiteCenterTopWrap','background','familyPrimary');
      this.setStyle('.activity_content','background','familyPrimary');
      this.setStyle('.confirm_btn','background','familyPrimary');
    },
    setStyle(name,attr,colorname){
      var _event=this.$el.querySelectorAll(name);
      if(_event.length){
        for (var i = 0; i < _event.length; i++) {
          _event[i].style.cssText =attr+":"+this.color[colorname]+"!important";
        }
      }
    },
  },
  watch: {
    '$route' (to, from) {
      this.initGonghangReturnFn();
    },
  }
}

</script>
<style lang="scss">
@import './style/common';
@import 'src/style/mixin';
#app{
  height: 100%;
  width: 100%;
}
.app_wrap{
  height: 100%;
  width: 100%;
  background-color: #f3f3f3;
}

/*淡入激活
  淡入淡出
*/
/*.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  //display: none;
  opacity: 0;
}*/
.router-fade{
  /*position: absolute;left:0;right: 0;*/
}
.router-fade-enter-active {
  transition: all 1.2s ease;
}
.router-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.router-fade-enter, .router-fade-leave-to
{
  /*left:0;right: 0;*/
  /*transform: translateX(50px);*/
  opacity: 0;
}

.loading {
  background-color: #efefef;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  .loading_svg_wrap{
    text-align: center;
    @include center();
    svg{
      width: .8rem;
      height: .8rem;
    }
    .loading_text{
      color: #888888;
    }
  }
  img{
    @include center();
    width: 2rem;
  }
}


</style>
