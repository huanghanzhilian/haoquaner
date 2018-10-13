<template>
  <div class="exchange_container">
    <ul class="exchange_list_wrap" v-load-more="loaderMore">
      <router-link :to="{path: '/orderDetail', query:{id:item.id}}" tag="li" class="dopser_item" v-for="item in orderListArr">
        <div class="dopser_item_l">
          <div class="item_line">
            <div class="item_line_l">{{item.goods_name}}</div>
            <div class="item_line_r" v-if="item.score_price&&!item.fill_price">{{item.score_price}}{{userInfo.integral_unit}}</div>
            <div class="item_line_r" v-if="!item.score_price&&item.fill_price">￥{{item.fill_price}}</div>
            <div class="item_line_r" v-if="item.score_price&&item.fill_price">{{item.score_price}}{{userInfo.integral_unit}}+￥{{item.fill_price}}</div>
          </div>
          <div class="item_line default">
            <div class="item_line_l">{{item.create_time}}</div>
            <div class="item_line_r">{{item.status|Status}}</div>
          </div>
        </div>
        <div class="dopser_item_r">
          <i class="iconfont icon-go icon_styles"></i>
        </div>
      </router-link>
    </ul>
    <p v-if="orderLoading" class="empty_data">加载中...</p>
    <p v-if="touchend" class="empty_data">没有更多了</p>
    <div v-if="nothing" class="nothing_coupons">
      <img class="nothing_coupons_img" src="../../images/none_data_iocn.png">
      <p class="nothing_coupons_tpls">暂无订单</p>
    </div>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getUserOrderList } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'
import errorControl from 'src/components/common/errorControl'

export default {
  //数据
  data() {
    return {
      page: 1, //页数
      querySize: 10, //请求条数
      orderListArr: [], // 店铺列表数据

      //分页相关状态
      touchend: false, //没有更多数据
      nothing: false, //无数据
      orderLoading: false, //显示加载动画
      preventRepeatReuqest: false, //到达底部加载数据，防止重复加载

      //请求异常
      errorObj:{
        status:false,
        text:'出现异常',
        type:1,
      },

    }
  },

  //创建完毕状态
  created() {
    this.searchValue = this.$route.query.q;
    //this.productId = this.$route.query.productId;
  },

  //挂载结束状态
  mounted() {
    this.initData();
  },
  //需要使用的模块
  components: {
    errorControl
  },

  filters: {
    Status: function(input) {
      if (input == 0) {
        return "等待"
      } else if (input == 1) {
        return "成功"
      } else if (input == 2) {
        return "关闭"
      } else if (input == 3) {
        return "取消"
      } else if (input == 4) {
        return "退款中"
      } else if (input == 5) {
        return "退款完成"
      }
    },
  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [loadMore, getImgPath],

  //计算值 这里可以实时监听某个数据的变化
  computed: {
    ...mapState([
      'userInfo'
    ]),
  },

  //方法
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ]),



    async initData() {
      //获取数据
      let res = await getUserOrderList(this.page, this.querySize);
      this.orderListArr = [...res.data.data];
      //如果当前页等于总页数 到底了
      if (this.orderListArr.length== res.data.total_num && this.orderListArr.length) {
        this.touchend = true;
      }

      //数据为空
      if (res.data.data.length == 0) {
        this.nothing = true;
      } else {
        this.nothing = false;
      }
      this.SET_LOADING(false);
    },


    //到达底部加载更多数据
    async loaderMore() {
      //数据到底了
      if (this.touchend) {
        return
      }
      //防止重复请求
      if (this.preventRepeatReuqest) {
        return
      }
      this.orderLoading = true;                                           //启动加载动画
      this.preventRepeatReuqest = true;                                   //开启请求数据模式

      this.page += 1;                                                     //累加页码
      let res = await getUserOrderList(this.page, this.querySize,1);            //请求
      this.hideLoading();                                                 //请求成功后关闭动画
      if(!res.res){
        this.errorObj.status=true;
        return;
      }
      this.orderListArr = [...this.orderListArr, ...res.data.data];

      if (this.orderListArr.length== res.data.total_num && this.orderListArr.length) {
        this.touchend = true;
      }
      this.preventRepeatReuqest = false;                                  //关闭请求模式，允许再次请求
    },

    //开发环境与编译环境loading隐藏方式不同
    hideLoading() {
      this.orderLoading = false;
    },

  },

  //监听
  watch: {
    '$route' (to, from) {
      //console.log(to)
      // if (to.path != '/huntfor') {
      //   this.searchValue = '';
      // }
    },
  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.exchange_container {
  /*background-color: #fff !important;*/
}


/*商品列表 s */

.exchange_list_wrap {
  background-color: #fff;
  .dopser_item {
    display: flex;
    align-items: center;
    font-size: .28rem;
    padding: .22rem;
    border-bottom: 0.025rem solid #f0f0f0;
    .dopser_item_l {
      flex: 1;
      padding-right: .2rem;
      .item_line{
        @include fj;
        align-items: center;
        line-height: .48rem;
        font-size: .32rem;
        color: #333333;
        &.default{
          margin-top: .1rem;
          font-size: .24rem;
          color: #999999;
        }
      }
    }
    .dopser_item_r {
      i{
        color: #B5B5B5;
      }
    }
  }
}




/*商品列表 e */


/*没有更多*/

.empty_data {
  @include sc(0.24rem, #666);
  text-align: center;
  line-height: 1rem;
}

/*没有更多end*/

/*暂无券 s */
.nothing_coupons{
  padding-top: 2.4rem;
  text-align: center;
  margin-bottom: 3rem;
  img{
    width: 1.3rem;
    margin-bottom: .28rem;
  }
  .nothing_coupons_tpls{
    font-size: .26rem;
    color: #575757;
  }
}
/*暂无券 e */

</style>
