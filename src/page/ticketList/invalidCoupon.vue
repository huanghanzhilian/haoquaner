<template>
  <div class="exchange_container">
    <!-- <header class="header">
      <div class="hea_line">共{{orderListArr.length}}张可用优惠券</div>
    </header> -->
    <ul class="exchange_list_wrap" v-load-more="loaderMore">
      <li class="dopser_item" v-for="item in orderListArr">
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <div class="item_nunber"><span class="number_row">{{item.discount}}</span class="com_row">{{item.type|Statusdan}}</div>
            <div class="item_text">{{item.type|Status}}</div>
          </div>
          <div class="dopser_item_r_r">
            <p class="item_title ellipsis">{{item.name}}</p>
            <p class="item_time">{{dateFtt('yyyy-MM-dd hh:mm:ss',new Date(item.end_time*1000))}}  前使用</p>
          </div>
        </div>
        <span v-if="item.status==2" class="excha_go"></span>
        <span v-if="item.status==3" class="excha_go1"></span>
        <span v-if="item.status==4" class="excha_go2"></span>
      </li>
    </ul>
    <p v-if="orderLoading" class="empty_data">加载中...</p>

    <p v-if="touchend" class="empty_data">没有更多了</p>

    <div v-if="nothing" class="nothing_coupons">
      <img class="nothing_coupons_img" src="../../images/none_data_iocn.png">
      <p class="nothing_coupons_tpls">暂无不可用优惠券</p>
    </div>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getMemberCouponList } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'
import { imgBaseUrl } from 'src/config/env'
import errorControl from 'src/components/common/errorControl'


export default {
  //数据
  data() {
    return {
      //分页相关
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

      imgBaseUrl, //图片前缀
    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    //this.searchValue = this.$route.query.q;
    //this.productId = this.$route.query.productId;
  },

  //挂载前状态
  beforeMount() {

  },
  //挂载结束状态
  mounted() {
    this.initData();
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
  //需要使用的模块
  components: {
    errorControl
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
  filters: {
    Status: function(input) {
      if (input == 1) {
        return "折扣券" //处理中
      } else if (input == 2) {
        return "满减券"
      }
    },
    Statusdan: function(input) {
      if (input == 1) {
        return "折" //处理中
      } else if (input == 2) {
        return "元"
      }
    },
  },

  //方法
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ]),

    async initData() {
      //获取数据
      let res = await getMemberCouponList(this.page, this.querySize,2);

      this.SET_LOADING(false);
      if(!res.res){
        this.errorObj.status=true;
        return;
      }
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
      let res = await getMemberCouponList(this.page, this.querySize,2);            //请求
      this.hideLoading();                                                 //请求成功后关闭动画
      if(!res.res){
        this.errorObj.status=true;
        return;
      }
      this.orderListArr = [...this.orderListArr, ...res.data.data];

      //如果当前页等于总页数 到底了
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

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.exchange_container {
  /*background-color: #fff !important;*/
  padding: 0 .32rem .4rem;
}

.layout_buttom{
  margin-top:.2rem;
}
.btn {
    margin: auto;
    width: 3rem;
    height: .6rem;
    line-height: .6rem;
    margin-bottom: .3rem;
    text-align: center;
    color: #FAA71B;
    border: solid 0.025rem #FAA71B;
    border-radius: .3rem;
}


/*header*/

.header {
  padding: 0 .05rem;
  .hea_balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .37rem .05rem;
    .balance_l {
      font-size: .3rem;
      color: #333;
    }
    .balance_r {
      font-size: .46rem;
      color: #ed6753;
    }
  }
  .hea_line {
    line-height: .82rem;
    font-size: .28rem;
    color: #333;
  }
}


/*header*/


/*商品列表 s */

.exchange_list_wrap {
  padding-bottom: .3rem;
  padding-top: .35rem;
  .dopser_item {
    display: flex;
    font-size: .28rem;
    padding: .22rem 0;
    border-left: 0.1rem solid #CCCCCC;
    background-color: #fff;
    /*background-image: url(../../images/wenluse.png);
    background-repeat:no-repeat;
    background-size: 100%;*/
    margin-bottom: .3rem;
    border-radius:.08rem;
    position: relative;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.1);
    &:last-child {
      /*border-bottom: none;*/
    }

    .excha_go {
      @include ct;
      right: .36rem;
      width: 1.44rem;
      height: 1.44rem;
      display: block;
      background: url(../../images/yishiyong.png) no-repeat center;
      background-size: 100%;
    }
    .excha_go1 {
      @include ct;
      right: .36rem;
      width: 1.44rem;
      height: 1.44rem;
      display: block;
      background: url(../../images/yiguoqi.png) no-repeat center;
      background-size: 100%;
    }
    .excha_go2 {
      @include ct;
      right: .36rem;
      width: 1.44rem;
      height: 1.44rem;
      display: block;
      background: url(../../images/weijihuo.png) no-repeat center;
      background-size: 100%;
    }



    .dopser_item_r {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .dopser_item_r_l {
        width: 1.9rem;
        padding: .2rem 0;
        text-align: center;
        line-height: .45rem;
        border-right: solid .025rem #EDEDED;
        .item_nunber{
          color: #999999;
          .number_row{
            font-size: .44rem;
          }
        }
        .item_text{
          color: #999999;
          font-size: .28rem;
        }
      }
      .dopser_item_r_r {
        flex: 1;
        line-height: .5rem;
        padding: .14rem .3rem;
        /*width: 1rem;*/
      }
      .item_title {
        width: 4rem;
        font-size: .28rem;
        color: #999999;
      }
      .item_time {
        color: #999999;
        font-size: .24rem;
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


/*loading s */

.loading {
  background-color: #efefef;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  img {
    @include center();
    width: 2rem;
  }
}


/*loading e */

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
