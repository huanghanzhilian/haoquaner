<template>
  <div class="orderDetail_container">
    <div class="orderDetail_wrap">
      <div class="layer_top">
        <div class="item_row">
          <div class="item_row_l">{{detailsObject.status|Status}}</div>
          <div class="item_row_r">
            <router-link :to="{path: '/voucherList', query:{order_id:detailsObject.id}}" tag="span" class="page_top_btn" v-if="detailsObject.status==1">查看商品</router-link>
          </div>
        </div>
        <div class="item_row" v-if="detailsObject.status==0">
          <div class="item_row_l"></div>
          <div class="item_row_r">
            <router-link :to="{path: '/confirm', query:{order_id:detailsObject.id,order_num:detailsObject.num}}" tag="span" class="page_top_btn">继续支付</router-link>
            <span class="page_top_btn" @click="cancelOrder">取消订单</span>
          </div>
        </div>
      </div>
      <div class="layer_content">
        <div class="item_title">
          <div class="item_title_l ellipsis">{{detailsObject.goods_name}}</div>
          <div class="item_title_r" v-if="detailsObject.use_score&&!detailsObject.fill_price">支付：{{detailsObject.use_score}}{{userInfo.integral_unit}}</div>
          <div class="item_title_r" v-if="!detailsObject.use_score&&detailsObject.fill_price">支付：¥{{FormatMoney(detailsObject.fill_price)}}</div>
          <div class="item_title_r" v-if="detailsObject.use_score&&detailsObject.fill_price">支付：{{detailsObject.use_score}}{{userInfo.integral_unit}}+¥{{FormatMoney(detailsObject.fill_price)}}</div>
        </div>
        <div class="list_row">
          <div class="item_row">
            <div class="item_row_l">下单时间</div>
            <div class="item_row_r">{{detailsObject.create_time}}</div>
          </div>
          <div class="item_row">
            <div class="item_row_l">订 单 号</div>
            <div class="item_row_r">{{detailsObject.num}}</div>
          </div>
          <div class="item_row" v-if="detailsObject.status!=2&&detailsObject.status!=3">
            <div class="item_row_l">优惠券优惠</div>
            <div class="item_row_r">-￥{{FormatMoney(detailsObject.coupon_price)}}</div>
          </div>
          <div class="item_row" v-if="detailsObject.status!=2&&detailsObject.status!=3">
            <div class="item_row_l">积分抵扣</div>
            <div class="item_row_r">{{detailsObject.use_score||'0'}}{{userInfo.integral_unit}}</div>
          </div>
          <div class="item_row" v-if="detailsObject.status!=2&&detailsObject.status!=3">
            <div class="item_row_l">支付</div>
            <div class="item_row_r">￥{{FormatMoney(detailsObject.fill_price)}}</div>
          </div>
          <div class="item_row" v-if="detailsObject.status==2&&detailsObject.close_msg">
            <div class="item_row_l">关闭原因</div>
            <div class="item_row_r">{{detailsObject.close_msg}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="phone_wrap" v-if="userInfo.telephone">
      <a :href="'tel:'+userInfo.telephone" class="call">
        <i data-v-36004bd8="" class="iconfont icon-dianhua call_icon"></i>
        <span class="call_text">联系客服</span>
      </a>
    </div>
    <!-- <div class="paley_bottom" v-if="detailsObject.status==1">
      <div class="item_btn">退款</div>
      <div class="item_btn">折现</div>
    </div> -->
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import {getUserOrderInfo,userCancelOrder} from 'src/service/getData'
import alertTip from '../../components/common/alertTip'
import errorControl from 'src/components/common/errorControl'
import { Toast, Switch,MessageBox,Indicator} from 'mint-ui';

export default {
  //数据
  data() {
    return {
      showAlert: false, //显示提示组件
      alertText: null, //提示的内容
      alertTitle: null, //提示title
      alertType:1,//弹窗类型

      //初始化获取数据
      detailsObject:{},

      //请求异常
      errorObj:{
        status:false,
        text:'出现异常',
        type:1,
      },

    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    this.id = this.$route.query.id;
  },

  filters: {
    Status: function(input) {
      if (input == 0) {
        return "待支付"
      } else if (input == 1) {
        return "成功"
      } else if (input == 2) {
        return "关闭"
      } else if (input == 3) {
        return "取消"
      } else if (input == 4) {
        return "发货中"
      } else if (input == 5) {
        return "退款中"
      } else if (input == 6) {
        return "已退款"
      }
    },
  },
  //挂载结束状态
  mounted() {
    this.initData();
  },
 
  //需要使用的模块
  components: {
    alertTip,
    errorControl
  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [],

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
      //获取布局数据
      let res=await getUserOrderInfo(this.id);
      this.SET_LOADING(false);
      if(res.res){
        this.detailsObject=res.data;
      }else{
        this.errorObj.status=true;
        this.errorObj.text=res.message.mes;
      }


    },
    //取消订单
    async cancelOrder(){
      Indicator.open({
        text: '请等候...',
        spinnerType: 'fading-circle'
      });
      let res=await userCancelOrder(this.detailsObject.id);
      Indicator.close();
      if(!res.res){
        Toast(res.message.mes);
        return;
      };
      Toast('取消成功');
      this.initData();
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.layer_top{
  margin-bottom: .2rem;
  .item_row{
    height: .86rem;
    line-height: .86rem;
    color: #333333;
    font-size: .3rem;
    background-color: #fff;
    padding: 0 .3rem;
    @include fj;
    align-items: center;
    .item_row_l{

    }
    .item_row_r{

    }
    .page_top_btn{
      border:solid .025rem #D7D7D7;
      padding: .1rem .25rem;
      font-size: .24rem;
      color: #666666;
      border-radius: .28rem;
    }
  }
}
.layer_content{
  background-color: #fff;
  padding: 0 .3rem;
  .item_title{
    height: .86rem;
    line-height: .86rem;
    color: #333333;
    font-size: .3rem;
    @include fj;
    align-items: center;
    border-bottom: 0.025rem solid #f0f0f0;
    .item_title_l{
      width: 40%;
    }
    .item_title_r{

    }
  }
  .list_row{
    padding: .2rem 0;
  }
  .item_row{
    height: .46rem;
    line-height: .46rem;
    color: #666666;
    font-size: .24rem;
    @include fj;
    align-items: center;
    .item_row_l{

    }
    .item_row_r{

    }
  }
}

/* 联系客服 s */
.phone_wrap{
  margin-top: 5rem;
  padding: .2rem;
  .call{
    width: 1.75rem;
    height: .56rem;
    line-height: .56rem;
    display: block;
    margin:0 auto;
    border:solid #D7D7D7 0.025rem;
    text-align: center;
    border-radius: .28rem;
    vertical-align: middle;
    .call_icon{
      color:#888888;
      font-size: .27rem;
      vertical-align: middle;
    }
    .call_text{
      color: #999999;
      font-size: .24rem;
    }
  }
}
/* 联系客服 e */

/* 底部按钮区域 s */
.paley_bottom{
  padding: .1rem 0;
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .item_btn{
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    flex: 1;
    border-right: 0.025rem solid #f0f0f0;
    color: #FAA71B;
    font-size: .32rem;
    &:last-child{
      border:none;
    };
  }
}
/* 底部按钮区域 e */

</style>
