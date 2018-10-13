<template>
  <div class="confirm_container">
    <div class="confirm_container_main" v-if="detailsObject">
      <div class="content_wrap">
        <ul class="list_item_wrap" v-if="detailsObject.goods_info">
          <li class="list_item">
            <div class="item_left" v-if="detailsObject.goods_info">{{detailsObject.goods_info.goods_name}}</div>
            <div class="item_right">x{{detailsObject.goods_info.goods_num}}</div>
          </li>
          <li class="list_item">
            <div class="item_left"></div>
            <div class="item_right" v-if="purchaseType==1&&detailsObject.goods_info">{{detailsObject.goods_info.integral_price*detailsObject.goods_info.goods_num}}{{userInfo.integral_unit}}</div>
            <div class="item_right" v-if="purchaseType==2&&detailsObject.goods_info">{{detailsObject.goods_info.integral_price*detailsObject.goods_info.goods_num}}{{userInfo.integral_unit}}+¥{{detailsObject.goods_info.renminbi_price*detailsObject.goods_info.goods_num}}</div>
            <div class="item_right" v-if="purchaseType==3&&detailsObject.goods_info">¥{{detailsObject.goods_info.renminbi_price*detailsObject.goods_info.goods_num}}</div>
          </li>
        </ul>

        <!-- 积分 -->
        <ul class="list_item_wrap" v-if="purchaseType==1&&detailsObject.price_info">
          <li class="list_item">
            <div class="item_left">使用积分</div>
            <div class="item_right active">{{detailsObject.price_info.score_price}}{{userInfo.integral_unit}}</div>
          </li>
        </ul>
        <!-- 积分 -->


        <!-- 现金+积分 -->
        <ul class="list_item_wrap" v-if="purchaseType==2">
          <li class="list_item">
            <div class="item_left">使用{{userInfo.integral_unit}}</div>
            <div class="item_right active">
              <div class="icon_wrap" v-if="detailsObject.goods_info">{{detailsObject.goods_info.integral_price*detailsObject.goods_info.goods_num}}{{userInfo.integral_unit}}</div>
            </div>
          </li>
          <li class="list_item" @click="toggleDialogue" v-if="ticket">
            <div class="item_left">使用优惠券</div>
            <div class="item_right">
              <div class="icon_wrap">
                <span class="text_dep">{{ticket.name}}</span>
                <i class="iconfont icon-go icon_styles"></i>
              </div>
            </div>
          </li>
          <li class="list_item" v-else>
            <div class="item_left">使用优惠券</div>
            <div class="item_right">
              <div class="icon_wrap">
                <span class="text_dep">无可用</span>
              </div>
            </div>
          </li>
          <li class="list_item" v-if="detailsObject.price_info">
            <div class="item_left">还需支付</div>
            <div class="item_right active">¥{{detailsObject.price_info.fill_price}}</div>
          </li>
          <li class="list_item" @click="selectpayList" v-if="paySelect">
            <div class="item_left">支付方式</div>
            <div class="item_right active" v-for="item in pay_sign_img" v-if="paySelect.pay_sign==item.pay_sign">
              <div class="img_wrap" >
                <img :src="item.img" alt="">
              </div>
            </div>
          </li>
        </ul>
        <!-- 现金+积分 -->

        <!-- 纯现金 -->
        <ul class="list_item_wrap" v-if="purchaseType==3||purchaseType==4">
          <li class="list_item" @click="toggleDialogue"  v-if="ticket">
            <div class="item_left">使用优惠券</div>
            <div class="item_right">
              <div class="icon_wrap">
                <span class="text_dep">{{ticket.name}}</span>
                <i class="iconfont icon-go icon_styles"></i>
              </div>
            </div>
          </li>
          <li class="list_item" v-else>
            <div class="item_left">使用优惠券</div>
            <div class="item_right">
              <div class="icon_wrap">
                <span class="text_dep">无可用</span>
              </div>
            </div>
          </li>
          <li class="list_item" v-if="detailsObject.score_info">
            <div class="item_left">积分抵扣
              <span class="text_dep">共{{detailsObject.score_info.total_score}}{{userInfo.integral_unit}}，可抵扣{{detailsObject.score_info.score_price}}元</span>
            </div>
            <div class="item_right">
              <mt-switch v-model="values"></mt-switch>
            </div>
          </li>
          <li class="list_item" v-else>
            <div class="item_left">积分抵扣
              <span class="text_dep">共0{{userInfo.integral_unit}}，可抵扣0元</span>
            </div>
            <div class="item_right">
              <mt-switch v-model="values"></mt-switch>
            </div>
          </li>
          <li class="list_item list_item_default" v-if="values">
            <div class="default" v-if="detailsObject.score_info">
              使用<span class="highlight">{{detailsObject.score_info.use_score}}</span>{{userInfo.integral_unit}}，抵扣{{detailsObject.score_info.score_price}}元
            </div>
            <div class="default" v-else>
              使用<span class="highlight">0</span>{{userInfo.integral_unit}}，抵扣0元
            </div>
          </li>
          <li class="list_item" v-if="detailsObject.price_info">
            <div class="item_left">还需支付</div>
            <div class="item_right active">¥{{detailsObject.price_info.fill_price}}</div>
          </li>
          <li class="list_item" @click="selectpayList" v-if="paySelect&&detailsObject.price_info.fill_price>0">
            <div class="item_left">支付方式</div>
            <div class="item_right active" v-for="item in pay_sign_img" v-if="paySelect.pay_sign==item.pay_sign">
              <div class="img_wrap" >
                <img :src="item.img" alt="">
              </div>
            </div>
          </li>
        </ul>
        <!-- 纯现金 -->

      </div>
      <div class="confirm_wrap">
        <span class="confirm_btn active" @click="goExchange">确认</span>
      </div>
    </div>
    <ticket-list-picker
    v-if="ticket"
    ref="ticket_picker"
    title="选择优惠券"
    v-model="ticket"
    :options="detailsObject.coupon_info"
    @ticketCallback="ticketCallback"></ticket-list-picker>

    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>

    <pay-list-picker v-if="paySelect" ref="ticket_pickerss" title="选择支付方式" v-model="paySelect" :options="detailsObject.pay_type_info"></pay-list-picker>


    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>

  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { Toast, Switch,MessageBox,Indicator} from 'mint-ui';

import {
  preSubmitOrder,//用户预下单
  continuePayOrder,//用户订单继续支付
  submitOrder,
  renewOrder,
  setWeixinOrder,//微信下单
  score_SubmitOrder,//纯积分支付
  getUserOrderInfo,//获取用户订单详情
} from 'src/service/getData'
import { setStore, getStore } from 'src/config/mUtils'
import myInputNumber from 'src/components/common/my-input-number'
import errorControl from 'src/components/common/errorControl'
import ticketListPicker from './picker/ticketListPicker'
import payListPicker from './picker/payListPicker'

export default {
  //数据
  data() {
    return {
      img: require('src/images/pay-icons/gonghang.png'),
      //异常处理数据
      errorObj: {
        status: false,
        text: '出现异常',
        type: 1,
      },
      detailsObject: {}, //商品详情信息
      values: true,

      //选择优惠券
      ticket:null,
      //选择支付方式
      paySelect:null,
      pay_sign_img: [{
          pay_sign:'wechat',
          img:require('src/images/pay-icons/weixin.png')
        }, {
          pay_sign:'gonghang',
          img:require('src/images/pay-icons/gonghang.png')
        }
      ],

      //订单支付方式：1只支持商户积分购买 2固定商户积分+补款购买 3任意商户积分+补款购买 4只支持补款购买
      purchaseType:0,

      //判断订单是否正向或是金额变动
      isMoneyChange:1,
    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    this.goods_id = this.$route.query.goods_id;
    this.goods_num = this.$route.query.goods_num;
    this.order_id = this.$route.query.order_id;
    this.order_num = this.$route.query.order_num;
  },

  //挂载前状态
  beforeMount() {

  },
  //挂载结束状态
  mounted() {
    var openinfowe = getStore('_payment');
    if (openinfowe) {
      var openinfowea = openinfowe;
      MessageBox.alert('确认支付是否完成?','提示',{
        confirmButtonText: '已完成支付'
      }).then(() => {
        this.isPayComplete(openinfowea);
      },() => {

      });
    }

    this.initData();
  },


  //需要使用的模块
  components: {
    myInputNumber,
    errorControl,
    ticketListPicker,
    payListPicker
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
    //判断是否h5支付完成
    async isPayComplete(openinfowea){
      if(!openinfowea){
        return;
      }
      await getUserOrderInfo(openinfowea).then(res => {
        if(!res.res){
          Toast('订单支付失败');
          setStore('_payment', '');
        }else{
          if(res.data.status==1){
            Toast('订单支付成功');
            setStore('_payment', '');
            this.$router.push('/result?psyStatus=1&title='+this.detailsObject.goods_info.goods_title+'&fill_price='+res.data.fill_price+'&score_price='+(parseFloat(res.data.coupon_price)+parseFloat(res.data.score_price)));
          }else{
            Toast('订单支付失败');
            setStore('_payment', '');
          }
        }
      })
    },
    /*=========================初始化请求数据==============================*/
    async initData() {
      let goods_id=this.goods_id;                   //商品ID
      let goods_num=this.goods_num;                 //商品数量
      let order_id=this.order_id;                   //订单ID
      //获取数据
      if(order_id){
        var res=await continuePayOrder(order_id);
      }else if(goods_id&&goods_num){
        var res=await preSubmitOrder(goods_id,goods_num);
      }
      if(res.res){
        this.detailsObject=res.data;

        //如果优惠券数量大于1
        if(res.data.coupon_info instanceof Array&&res.data.coupon_info.length>=1){
          let noneData={
            "id": '',
            "status": 1,
            "name": "不使用优惠券",
            "coupon_id": '',
            "dis_price": 0,
            "is_chosen":1
          }
          this.detailsObject.coupon_info=[...this.detailsObject.coupon_info,noneData];
        }
        //得到高亮优惠券
        this.ticket=res.data.coupon_info instanceof Array&&res.data.coupon_info.length>=1?this.couponSelect(res.data.coupon_info):null;
        

        //得到支付方式高亮选择
        this.paySelect=res.data.pay_type_info instanceof Array&&res.data.pay_type_info.length>=1?res.data.pay_type_info[0]:null;
        //得到支付方式
        this.purchaseType=res.data.pay_type;
      }else{
        document.title = '该商品不存在';
        this.errorObj.status=true;
        this.errorObj.text=res.message.mes;
      }
      this.SET_LOADING(false);
    },


    /*====================下单步骤==========================*/
    //确认
    async goExchange() {
      var payType=this.purchaseType;
      Indicator.open({
        text: '请等候...',
        spinnerType: 'fading-circle'
      });

      if(payType==1){
        //纯积分提交支付
        this.scoreSubmit();
      }else if(payType==2){
        //积分+现金提交支付
        this.score_rmbSubmit();
      }else if(payType==3){
        //纯现金提交支付
        this.rmbSubmit();
      }
    },

    //纯积分提交支付
    async scoreSubmit(){
      let goods_id=this.goods_id;                                            //商品ID
      let goods_num=this.goods_num;                                          //商品数量
      let order_id=this.order_id;                                            //订单ID
      let order_num=this.order_num;                                          //订单号

      let order_price=this.detailsObject.price_info.price;                   //订单金额
      let fill_price=this.detailsObject.price_info.fill_price;               //补款金额
      let coupon_price=(this.ticket&&this.ticket.dis_price)?this.ticket.dis_price:'';                 //优惠券金额
      let coupon_id= this.ticket?this.ticket.id:'';                          //优惠券ID

      let score_price=this.detailsObject.price_info.score_price;             //积分抵扣金额
      let dis_score=this.detailsObject.price_info.dis_score;                 //抵用积分

      //如果是从商品详情进来
      if(goods_id&&goods_num){
        //用户下单
        var res=await submitOrder({goods_id,goods_num,order_price,fill_price,coupon_price,coupon_id,score_price,dis_score});
        if(!res.res){
          Indicator.close();
          Toast(res.message.mes);
          return;
        };
      }else if(order_id&&order_num){//继续支付进来
        //用户切换优惠更新订单信息
        if(this.isMoneyChange==2){
          var res=await renewOrder({"order_id":order_id,order_price,fill_price,coupon_price,coupon_id,score_price,dis_score});
          if(!res.res){
            Indicator.close();
            Toast(res.message.mes);
            return;
          };
        }
      }
      var parameterId=order_num?order_num:res.data.order_num;




      //纯积分支付
      var payRes=await score_SubmitOrder(parameterId);
      Indicator.close();
      if(!payRes.res){
        Toast(payRes.message.mes);
        return;
      };
      Toast('订单支付成功');
      setStore('_payment', '');
      this.$router.push('/result?psyStatus=1&title='+this.detailsObject.goods_info.goods_title+'&fill_price='+this.detailsObject.price_info.fill_price+'&score_price='+this.detailsObject.price_info.score_price);

    },
    //积分+现金提交支付
    async score_rmbSubmit(){
      let goods_id=this.goods_id;                                            //商品ID
      let goods_num=this.goods_num;                                          //商品数量
      let order_id=this.order_id;                                            //订单ID
      let order_num=this.order_num;                                          //订单号

      let order_price=this.detailsObject.price_info.price;                   //订单金额
      let fill_price=this.detailsObject.price_info.fill_price;               //补款金额
      let coupon_price=(this.ticket&&this.ticket.dis_price)?this.ticket.dis_price:'';                 //优惠券金额
      let coupon_id= this.ticket?this.ticket.id:'';                          //优惠券ID

      let score_price=this.detailsObject.price_info.score_price;             //积分抵扣金额
      let dis_score=this.detailsObject.price_info.dis_score;                 //抵用积分

      //如果是从商品详情进来
      if(goods_id&&goods_num){
        //用户下单
        var res=await submitOrder({goods_id,goods_num,order_price,fill_price,coupon_price,coupon_id,score_price,dis_score});
        if(!res.res){
          Indicator.close();
          Toast(res.message.mes);
          return;
        };
      }else if(order_id&&order_num){//继续支付进来
        //用户切换优惠更新订单信息
        if(this.isMoneyChange==2){
          var res=await renewOrder({"order_id":order_id,order_price,fill_price,coupon_price,coupon_id,score_price,dis_score});
          if(!res.res){
            Indicator.close();
            Toast(res.message.mes);
            return;
          };
        }
      }
      var parameterId=order_num?order_num:res.data.order_num;

      //查看订单是否无需补款 走积分支付
      if(this.detailsObject.price_info.fill_price){
        //微信支付
        var payRes=await setWeixinOrder(parameterId,fill_price*100);
        Indicator.close();
        if(!payRes.res){
          Toast(payRes.message.mes);
          return;
        };
        MessageBox.alert('确认支付是否完成?','提示',{
          confirmButtonText: '已完成支付'
        });
        //h5支付开打开微信前，将订单号存入本地缓存
        setStore('_payment', payRes.data.order_id);
        location.href = payRes.data.wechat_wap_url;
      }else{
        //纯积分支付
        var payRes=await score_SubmitOrder(parameterId);
        Indicator.close();
        if(!payRes.res){
          Toast(payRes.message.mes);
          return;
        };
        Toast('订单支付成功');
        setStore('_payment', '');
        this.$router.push('/result?psyStatus=1&title='+this.detailsObject.goods_info.goods_title+'&fill_price='+this.detailsObject.price_info.fill_price+'&score_price='+this.detailsObject.price_info.score_price);
      }
    },





    //纯现金提交支付
    async rmbSubmit(){
      let goods_id=this.goods_id;                                            //商品ID
      let goods_num=this.goods_num;                                          //商品数量
      let order_id=this.order_id;                                            //订单ID
      let order_num=this.order_num;                                          //订单号

      let order_price=this.detailsObject.price_info.price;                   //订单金额
      let fill_price=this.detailsObject.price_info.fill_price;               //补款金额
      let coupon_price=(this.ticket&&this.ticket.dis_price)?this.ticket.dis_price:'';                 //优惠券金额
      let coupon_id= this.ticket?this.ticket.id:'';                          //优惠券ID

      let score_price=this.values?this.detailsObject.price_info.score_price:0;             //积分抵扣金额
      let dis_score=this.detailsObject.price_info.dis_score;                 //抵用积分

      if(goods_id&&goods_num){
        //用户下单
        var res=await submitOrder({goods_id,goods_num,order_price,fill_price,coupon_price,coupon_id,score_price,dis_score});
        if(!res.res){
          Indicator.close();
          Toast(res.message.mes);
          return;
        };
      }else if(order_id&&order_num){
        //用户切换优惠更新订单信息
        if(this.isMoneyChange==2){
          var res=await renewOrder({"order_id":order_id,order_price,fill_price,coupon_price,coupon_id,score_price,dis_score});
          if(!res.res){
            Indicator.close();
            Toast(res.message.mes);
            return;
          };
        }
      }
      var parameterId=order_num?order_num:res.data.order_num;

      //查看订单是否无需补款 走积分支付
      if(this.detailsObject.price_info.fill_price){
        //微信支付
        var payRes=await setWeixinOrder(parameterId,fill_price*100);
        Indicator.close();
        if(!payRes.res){
          Toast(payRes.message.mes);
          return;
        };
        MessageBox.alert('确认支付是否完成?','提示',{
          confirmButtonText: '已完成支付'
        });
        //h5支付开打开微信前，将订单号存入本地缓存
        setStore('_payment', payRes.data.order_id);
        location.href = payRes.data.wechat_wap_url;
      }else{
        //纯积分支付
        var payRes=await score_SubmitOrder(parameterId);
        Indicator.close();
        if(!payRes.res){
          Toast(payRes.message.mes);
          return;
        };
        Toast('订单支付成功');
        setStore('_payment', '');
        this.$router.push('/result?psyStatus=1&title='+this.detailsObject.goods_info.goods_title+'&fill_price='+this.detailsObject.price_info.fill_price+'&score_price='+this.detailsObject.price_info.score_price);
      }
    },




    /*===================方法=======================*/
    //触发open优惠券
    toggleDialogue() {
      this.$refs.ticket_picker.toggleDialogue();
    },
    //选择优惠券后回调 变动
    ticketCallback(){
      this.isMoneyChange=2;
      //如果开启积分抵扣
      if(this.values){
        this.detailsObject.price_info.fill_price=this.numConvert(
          this.detailsObject.price_info.price,                               //商品总价
          this.detailsObject.price_info.score_price,                         //积分抵扣金额
          ((this.ticket&&this.ticket.dis_price)?this.ticket.dis_price:0),    //优惠券金额
        );
      }else{
        this.detailsObject.price_info.fill_price=this.numConvert(
          this.detailsObject.price_info.price,
          ((this.ticket&&this.ticket.dis_price)?this.ticket.dis_price:0)
        );
      };
    },

    //积分抵扣发生变化
    dikouChang(){
      this.isMoneyChange=2;
      //如果开启积分抵扣
      if(this.values){
        this.detailsObject.price_info.fill_price=this.numConvert(
          this.detailsObject.price_info.price,                               //商品总价
          this.detailsObject.price_info.score_price,                         //积分抵扣金额
          ((this.ticket&&this.ticket.dis_price)?this.ticket.dis_price:0),    //优惠券金额
        );
      }else{
        this.detailsObject.price_info.fill_price=this.numConvert(
          this.detailsObject.price_info.price,
          ((this.ticket&&this.ticket.dis_price)?this.ticket.dis_price:0)
        );
      }

    },

    //选择支付方式 open
    selectpayList() {
      this.$refs.ticket_pickerss.toggleDialogue();
    },

    //数转换
    numConvert(num,digit){
      var args = arguments,//获取所有的参数
      lens = args.length;//获取参数的长度
      var num=args[0]*100;
      for(var key in args){//遍历所有的参数
          if(key>0){
          num-=args[key]*100;
        }
      }
      return num/100;
    },

    // 优惠券默认智能选中
    couponSelect(param){
      var selectItem=null;
      for (var i = 0; i < param.length; i++) {
        if(param[i].is_chosen){
          selectItem = param[i];
          break;
        }
      }
      return selectItem;
    },

  },


  //销毁前状态
  beforeDestroy() {
    MessageBox.close();
    setStore('_payment', '');
  },
  //销毁完成状态
  destroyed() {

  },
  //监听
  watch: {
    values(a,b){
      this.dikouChang();
    },
  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
.confirm_container {
  padding-bottom: 1.6rem;
}




/* 内容区域-列表 s */

.list_item_wrap {
  padding: .05rem .28rem;
  background-color: #fff;
  color: #333333;
  list-style: none;
  margin-bottom: .22rem;
  .list_item {
    height: 1rem;
    @include fj;
    align-items: center;
    border-bottom: solid .025rem #E0E0E0;
    &.list_item_default{
      display: block;
      .default{
        text-align: center;
        line-height: 1rem;
        color: #666666;
        font-size: .3rem;
        .highlight{
          display: inline-block;
          border: solid .025rem #E0E0E0;
          height: .56rem;
          line-height: .56rem;
          border-radius: .1rem;
          padding: 0 0.2rem;
          margin:0 .1rem;
          color: #F85A6A;
        }
      }
    }
    &:last-child {
      border-bottom: none;
    }
    .item_left {
      font-size: .32rem;
      .text_dep {
        margin-left: .2rem;
        font-size: .28rem;
        color: #999999;
      }
    }
    .item_right {
      font-size: .3rem;
      &.active {
        color: #F85A6A;
      }
      .icon_wrap {
        font-size: .28rem;
        .text_dep {
          color: #555555;
        }
        .icon_styles {
          color: #999999;
        }
      }
      .img_wrap {
        height: .6rem;
        img {
          width: auto;
          height: .6rem;
        }
      }
    }
  }
}




/* 内容区域-列表 e */


/* 底部按钮 s */

.confirm_wrap {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: .15rem;
  text-align: center;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, .1);
}

.confirm_btn {
  display: inline-block;
  width: 6.9rem;
  height: .88rem;
  line-height: .88rem;
  color: #fff;
  border-radius: .44rem;
  background-color: #ccc;
  &.active {
    background-color: #faa814;
  }
}




/* 底部按钮 e */

</style>