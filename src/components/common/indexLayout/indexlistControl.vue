<template>
  <!-- 组件盒子 -->
  <div class="content_box">
    <div class="content_top">
      <div class="content_top_title">{{commoArray.element_name}}</div>
      <router-link tag="span" to="goodsList" class="content_mone">更多&gt;&gt;</router-link>
    </div>
    <ul class="content_list_wrap">
      <router-link :to="{path: '/detail', query:{id:item.url_content}}" tag="li" class="content_list_item" v-for="item in commoArray.data">
        <div class="list_box">
          <div class="item_imgBox">
            <img :src="imgBaseUrl+item.banner_url" @error="imgError($event)" alt="">
          </div>
          <div class="item_title">
            <div class="item_name ellipsis">{{item.title||'None'}}</div>
            <div class="item_describe" v-if="item.goods_integral&&item.goods_price">
              <span class="text_yellow" style="margin-right: .06rem">{{item.goods_integral}}</span>{{userInfo.integral_unit}}+<span class="text_yellow" style="margin-right: .06rem">{{item.goods_price}}</span>元
            </div>
            <div class="item_describe" v-if="item.goods_integral&&!item.goods_price">
              <span class="text_yellow" style="margin-right: .06rem">{{item.goods_integral}}</span>{{userInfo.integral_unit}}
            </div>
            <div class="item_describe" v-if="!item.goods_integral&&item.goods_price">
              <span class="text_yellow" style="margin-right: .06rem">{{item.goods_price}}</span>元
            </div>
          </div>
          <div class="laber_wrap" v-if="item.goods_label">
            <div class="laber_text">{{item.goods_label}}</div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
import { mapMutations, mapState } from 'vuex'
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
  props: ['commoArray'],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {
    ...mapState([
      'userInfo','isGonghang'
    ]),
  },

  //方法
  methods: {
    
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

/*商品列表 s */

.content_box {
  margin-bottom: .10rem;
  .content_top {
    line-height: .64rem;
    height: .64rem;
    position: relative;
    .content_top_title {
      @include center();
      font-size: .3rem;
      color: #333333;
      &:before {
        content: "";
        width: .6rem;
        height: .012rem;
        background-color: #999999;
        @include ct();
        left: -.68rem;
        opacity:0.8;
      }
      &:after {
        content: "";
        width: .6rem;
        height: .012rem;
        background-color: #999999;
        @include ct();
        right: -.68rem;
        opacity:0.8;
      }
    }
    .content_mone {
      @include ct();
      right: .22rem;
      font-size: .24rem;
      color: #999999;
    }
  }

  .content_list_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    .laber_wrap{
      width: 1.65rem;
      height: 1.65rem;
      background-color: #ec4436;
      text-align: center;
      position: absolute;
      top: -.825rem;
      left: -.825rem;
      transform:rotate(-45deg);
      .laber_text{
        width: 100%;
        position: absolute;
        bottom: 0;
        line-height: .5rem;
        height: .5rem;
        font-size: .26rem;
        color: #fff;
      }
    }
    .content_list_item {
      width: 50%;
      list-style: none;
      margin-bottom: .10rem;
      &:nth-child(1n) {
        padding-right: .05rem;
      }
      &:nth-child(2n) {
        padding-left: .05rem;
      }
      .list_box{
        background-color: #fff;
        position: relative;
        overflow: hidden;
      }

      .item_title {
        line-height: .48rem;
        padding:.1rem .18rem;
        .item_name {
          font-size: .3rem;
          color: #333333;
        }
        .item_describe {
          font-size: .29rem;
          color: #666666;
          .text_yellow{
            color:#F85A6A;
          }
        }
      }

      .item_imgBox {
        width: 100%;
        height: 3.7rem;
        /*padding:.85rem .35rem;*/
        img {
          width: 100%;
          height: 100%;
          /*border-radius: .08rem;*/
          display: block;
        }
      }
    }
  }
}




/*商品列表 e */

</style>
