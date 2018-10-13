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
      <img src="./images/loading.gif">
    </div>


  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
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
  },
  //开始创建  vue后自动执行
  mounted() {
    this.initData();
  },
  //计算值 这里可以实时监听某个数据的变化
  computed: {
    ...mapState([
      'loadingbox', 'userInfo'
    ]),
  },
  //方法
  methods: {
    ...mapMutations([]),
    async initData() {
      
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
      //console.log(to)
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
  img{
    @include center();
    width: 2rem;
  }
}


</style>
