<template>
  <!-- 组件盒子 -->
  <nav class="msite_nav">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in roadcastArray" :key="index">
        <a v-if="item.url_type==1" :href="item.url_content?(/(https:\/\/|http:\/\/)/.test(item.url_content)?item.url_content:'//'+item.url_content):'javascript:;'" class="food_types_container">
          <div class="link_to_food">
            <img :src="imgBaseUrl+item.banner_url" @error="imgErrorBanner($event)">
          </div>
        </a>
        <router-link v-if="item.url_type==2" :to="{path: '/detail', query:{id:item.url_content}}" tag="a" class="food_types_container">
          <div class="link_to_food">
            <img :src="imgBaseUrl+item.banner_url" @error="imgErrorBanner($event)">
          </div>
        </router-link>
        <router-link v-if="item.url_type==3" :to="{path: '/'+item.url_content}" tag="a" class="food_types_container">
          <div class="link_to_food">
            <img :src="imgBaseUrl+item.banner_url" @error="imgErrorBanner($event)">
          </div>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </nav>
</template>
<script>
//引入存储
import { Swipe, SwipeItem } from 'mint-ui';

//import { setStore, getStore } from '@/config/mUtils'
import { roadcastList } from 'src/service/getData'
import { imgBaseUrl } from 'src/config/env'


export default {
  //数据
  data() {
    return {
      imgBaseUrl
    }
  },
  //需要使用的模块
  components: {

  },

  //父组件的参数书
  props: ['roadcastArray'],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },

  //方法
  methods: {
    async initData() {
      //获取轮播图数据
      await roadcastList().then(res => {
        this.roadcastArray = res.data;
      })
    },
    //轮播
    initBroadcast(){
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: 3000, //可选选项，自动滑动
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        // observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // observeParents: false, //修改swiper的父元素时，自动初始化swiper
        // onSlideChangeEnd: function(swiper) {　　　
        //   swiper.update();　　　
        //   mySwiper.startAutoplay();　　
        //   mySwiper.reLoop();
        // }
        loop: true,
      });
    },
  },

  //监听
  watch: {

  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    //this.openid = this.$route.query.openid;
    //this.productId = this.$route.query.productId;
  },

  //挂载前状态
  beforeMount() {

  },
  //挂载结束状态
  mounted() {
    //this.initBroadcast();
    //this.initData();
  },
  //更新前状态
  beforeUpdate() {

  },
  //更新完成状态
  updated() {

  },
  //销毁前状态
  beforeDestroy() {

  },
  //销毁完成状态
  destroyed() {

  },

}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin'; //初始化页面背景动画

/*轮播图*/

.msite_nav {
  /*background-color: #000;*/
  height: 3.6rem;
  .swiper-container {
    height: 100%;
  }
  .food_types_container {
    width: 100%;
    height: 100%;
    .link_to_food {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

</style>
