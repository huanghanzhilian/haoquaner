<template>
  <!-- 组件盒子 -->
  <div class="threeControl">
    <div class="three_wrap">
      <div class="three_title">
        <i class="lisl"></i>
        <span class="text">{{threeObject.element_name}}</span>
      </div>
      <ul class="three_list">
        <li class="three_item" v-for="item in threeObject.data">
          <a v-if="item.url_type==1" :href="item.url_content?(/(https:\/\/|http:\/\/)/.test(item.url_content)?item.url_content:'//'+item.url_content):'javascript:;'" class="three_item_a">
            <div class="img_wrap">
              <img :src="imgBaseUrl+item.banner_url" @error="imgError($event)" alt="">
            </div>
          </a>
          <router-link v-if="item.url_type==2" :to="{path: '/detail', query:{id:item.url_content}}" tag="a" class="three_item_a">
            <div class="img_wrap">
              <img :src="imgBaseUrl+item.banner_url" @error="imgError($event)" alt="">
            </div>
          </router-link>

          <router-link v-if="item.url_type==3" :to="{path: '/'+item.url_content}" tag="a" class="three_item_a">
            <div class="img_wrap">
              <img :src="imgBaseUrl+item.banner_url" @error="imgError($event)" alt="">
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
//import { threeColumn } from 'src/service/getData'
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
  props: ['threeObject'],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },

  //方法
  methods: {
    async initData() {
      //获取数据
      await threeColumn().then(res => {
        this.threeObject = res.data;
      })
    },
  },

  //监听
  watch: {

  },
  //创建完毕状态
  created() {
    //this.openid = this.$route.query.openid;
    //this.productId = this.$route.query.productId;
  },

  //挂载结束状态
  mounted() {
    //this.initData();
  },
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin'; 

/*中间不规则布局 s*/

.threeControl {
  width: 100%;
  background-color: #fff;
  margin-bottom: .22rem;
  .three_wrap{
    .three_title{
      padding: .16rem .22rem;
      border-bottom: solid .025rem #E0E0E0;
      .lisl{
        width: .04rem;
        height: .25rem;
        background-color: #FAA71B;
        display: inline-block;
        vertical-align: middle;
      }
      .text{
        font-size: .3rem;
        color: #333333;
        vertical-align: middle;
      }
    }
    .three_list{
      padding: .18rem;
      display: flex;
      list-style: none;
      .three_item{
        flex: 1;
        padding-right: .2rem;
        &:last-child {
            padding-right:0;
        }
        .three_item_a{
          display: block;
        }
        .img_wrap{
          width: 100%;
          img{
            width: 100%;
            height: 2.3rem;
            border-radius: .08rem;
            display: block;
          }
        }
      }
    }
  }
}

</style>
