<template>
  <div class="confirm_container">
    <!-- <router-link :to="{ path: 'result', query:{ order_id: 1003}}" tag="div" replace class="btm">测试</router-link> -->
    <div class="confirm_container_main" v-if="detailsObject">
      <div class="content_wrap">
        <ul class="list_item_wrap" v-if="detailsObject.goods_info">
          <li class="list_item">
            <div class="item_left" v-if="detailsObject.goods_info">{{detailsObject.goods_info.goods_name}}</div>
            <div class="item_right">x{{detailsObject.goods_info.goods_num}}</div>
          </li>
          <li class="list_item" v-if="isGonghang">
            <div class="item_left"></div>
            <div class="item_right" v-if="detailsObject.goods_info">
              {{FormatMoney(detailsObject.goods_info.renminbi_price*detailsObject.goods_info.goods_num)}}元</div>
          </li>
          <li class="list_item" v-if="!isGonghang">
            <div class="item_left"></div>
            <div class="item_right" v-if="purchaseType==1&&detailsObject.goods_info">{{detailsObject.goods_info.integral_price*detailsObject.goods_info.goods_num}}{{userInfo.integral_unit}}</div>
            <div class="item_right" v-if="purchaseType==2&&detailsObject.goods_info">{{detailsObject.goods_info.integral_price*detailsObject.goods_info.goods_num}}{{userInfo.integral_unit}}+¥{{FormatMoney(detailsObject.goods_info.renminbi_price*detailsObject.goods_info.goods_num)}}</div>
            <div class="item_right" v-if="purchaseType==3||purchaseType==4&&detailsObject.goods_info">¥{{FormatMoney(detailsObject.goods_info.renminbi_price*detailsObject.goods_info.goods_num)}}</div>
          </li>
        </ul>
        <!-- 工行 -->
        <ul class="list_item_wrap" v-if="isGonghang&&(purchaseType==3||purchaseType==4)">
          <li class="list_item">
            <div class="item_left">使用金额</div>
            <div class="item_right active">{{detailsObject.price_info.fill_price}}元</div>
          </li>
        </ul>
        <!-- 工行 -->
        <!-- 积分 -->
        <ul class="list_item_wrap" v-if="!isGonghang&&purchaseType==1&&detailsObject.price_info">
          <li class="list_item">
            <div class="item_left">使用积分</div>
            <div class="item_right active">{{detailsObject.price_info.score_price}}{{userInfo.integral_unit}}</div>
          </li>
        </ul>
        <!-- 积分 -->
        <!-- 现金+积分 -->
        <ul class="list_item_wrap" v-if="!isGonghang&&purchaseType==2">
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
            <div class="item_right active">¥{{FormatMoney(detailsObject.price_info.fill_price)}}</div>
          </li>
          <li class="list_item" @click="selectpayList" v-if="paySelect&&parseFloat(detailsObject.price_info.fill_price)>0">
            <div class="item_left">支付方式</div>
            <div class="item_right active" v-for="item in pay_sign_img" v-if="paySelect.pay_sign==item.pay_sign">
              <div class="img_wrap">
                <img :src="item.img" alt="">
              </div>
            </div>
          </li>
        </ul>
        <!-- 现金+积分 -->
        <!-- 纯现金 -->
        <ul class="list_item_wrap" v-if="!isGonghang&&(purchaseType==3||purchaseType==4)">
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
          <li class="list_item" v-if="detailsObject.score_info">
            <div class="item_left">积分抵扣
              <span class="text_dep">共{{accMul(detailsObject.score_info.score_price,detailsObject.score_info.score_dis_per)}}{{userInfo.integral_unit}}，可抵扣{{FormatMoney(detailsObject.score_info.score_price)}}元</span>
            </div>
            <div class="item_right">
              <mt-switch v-model="values"></mt-switch>
            </div>
          </li>
          <!-- <li class="list_item" v-else>
            <div class="item_left">积分抵扣
              <span class="text_dep">共0{{userInfo.integral_unit}}，可抵扣0元</span>
            </div>
            <div class="item_right">
              <mt-switch v-model="values"></mt-switch>
            </div>
          </li> -->
          <!--  <li class="list_item list_item_default" v-if="detailsObject.score_info&&values">
            <div class="default" v-if="detailsObject.score_info">
              使用<span class="highlight">{{detailsObject.score_info.score_price*detailsObject.score_info.score_dis_per}}</span>{{userInfo.integral_unit}}，抵扣{{detailsObject.score_info.score_price}}元
            </div>
            <div class="default" v-else>
              使用<span class="highlight">0</span>{{userInfo.integral_unit}}，抵扣0元
            </div>
          </li> -->
          <li class="list_item" v-if="detailsObject.price_info">
            <div class="item_left">还需支付</div>
            <div class="item_right active">¥{{FormatMoney(detailsObject.price_info.fill_price)}}</div>
          </li>
          <li class="list_item" @click="selectpayList" v-if="paySelect&&parseFloat(detailsObject.price_info.fill_price)>0">
            <div class="item_left">支付方式</div>
            <div class="item_right active" v-for="item in pay_sign_img" v-if="paySelect.pay_sign==item.pay_sign">
              <div class="img_wrap">
                <img :src="item.img" alt="">
              </div>
            </div>
          </li>
        </ul>
        <!-- 纯现金 -->
      </div>
      
      <div class="confirm_wrap" style="bottom: 8rem; background-color: transparent; box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,0);" v-if="isGonghang">
        <span class="confirm_btn active" @click="goExchange">确认</span>
      </div>
      <div class="confirm_wrap" v-else>
        <span class="confirm_btn active" @click="goExchange">确认</span>
      </div>
    </div>
    <ticket-list-picker v-if="ticket" ref="ticket_picker" title="选择优惠券" v-model="ticket" :options="detailsObject.coupon_info"></ticket-list-picker>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
    <pay-list-picker v-if="paySelect" ref="ticket_pickerss" title="选择支付方式" v-model="paySelect" :options="detailsObject.pay_type_info"></pay-list-picker>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { Toast, Switch, MessageBox, Indicator } from 'mint-ui';

import {
  preSubmitOrder, //用户预下单
  continuePayOrder, //用户订单继续支付
  submitOrder,
  renewOrder,
  setWeixinOrder, //微信下单
  score_SubmitOrder, //纯积分支付
  getUserOrderInfo, //获取用户订单详情
} from 'src/service/getData'
import { setStore, getStore } from 'src/config/mUtils'
import myInputNumber from 'src/components/common/my-input-number'
import errorControl from 'src/components/common/errorControl'
import ticketListPicker from './picker/ticketListPicker'
import payListPicker from './picker/payListPicker'

export default {
  name: "confirm",
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
      ticket: null,
      //选择支付方式
      paySelect: null,
      pay_sign_img: [{
        pay_sign: 'wechat',
        img: require('src/images/pay-icons/weixin.png')
      }, {
        pay_sign: 'gonghang',
        img: require('src/images/pay-icons/gonghang.png')
      }],

      //订单支付方式：1只支持商户积分购买 2固定商户积分+补款购买 3任意商户积分+补款购买 4只支持补款购买
      purchaseType: 0,

      //判断订单是否正向或是金额变动
      isMoneyChange: 1,

      //默认积分支付 包含商户自有支付
      businessPay_type: 1, //1：纯积分支付 0：商家自有支付【工行等】


      gonghangOrderInfo: null, //工行下单信息

      gonghangOrderId: 0, //工行返回的id

      payingNumber:0, //订单状态轮询次数
      timeId:null,//订单状态定时器
    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {

    this.$bus.$on('gonghangPayBeforePassFn', (obj) => {
      this.gonghangPayBeforeFn(obj)
    });


    this.redirect_weixin = this.$route.query.redirect_weixin;
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
    

    this.initData();
  },
  //销毁前状态
  beforeDestroy() {
    MessageBox.close();
    // window.removeEventListener("popstate", myFunction,false);
  },
  //销毁完成状态
  destroyed() {

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
      'userInfo', 'isGonghang'
    ]),
    // watchDialog: function(){
    //   let obj = {}
    //   if(this.detailsObject&&this.detailsObject.price_info){
    //     Object.keys(this.detailsObject.price_info).forEach(key=>{
    //         obj[key] = this.detailsObject.price_info[key]
    //     })
    //   }
    //   return obj;
    // }

  },

  //方法
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ]),

    //判断是否h5支付完成
    async isPayComplete(openinfowea) {
      /*if (!openinfowea) {
        return;
      }
      await getUserOrderInfo(openinfowea).then(res => {
        Indicator.close();
        if (!res.res) {
          Toast('订单支付失败');
          setStore('_payment', '');
        } else {
          if (res.data.status == 1 || res.data.status == 4) {
            Toast('订单支付成功');
            this.$router.replace('/result?psyStatus=1&order_id=' + openinfowea);
          } else if (res.data.status == 0) {
            Toast('订单未支付');
            setStore('_payment', '');
          } else {
            Toast('订单支付失败');
            setStore('_payment', '');
          }
        }
      })*/
      ++this.payingNumber;

      if (!openinfowea) {
        Toast('订单号为空');
        clearInterval(this.timeId);
        Indicator.close();
        return;
      }
      console.log(this.payingNumber)
      if(this.payingNumber>=10){
        clearInterval(this.timeId);
      }
      await getUserOrderInfo(openinfowea).then(res => {
        if (!res.res) {
          if(this.payingNumber>=10){
            setStore('_payment', '');
            Indicator.close();
            Toast('订单支付失败');
          }
        } else {
          if (res.data.status == 1 || res.data.status == 4) {
            Indicator.close();
            setStore('_payment', '');
            Toast('订单支付成功');
            clearInterval(this.timeId);
            this.$router.replace('/result?psyStatus=1&order_id=' + openinfowea);
          } else if (res.data.status == 0) {
            if(this.payingNumber>=10){
              setStore('_payment', '');
              Indicator.close();
              Toast('订单未支付');
            }
          } else {
            if(this.payingNumber>=10){
              setStore('_payment', '');
              Indicator.close();
              Toast('订单支付失败');
            }
          }
        }
      })
    },
    /*=========================初始化请求数据==============================*/
    async initData() {
      var _openinfo = getStore('_payment');
      var _order_id = getStore('_order_id');
      var _order_num = getStore('_order_num');

      if(_openinfo&&_order_id&&_order_num){
        setStore('_payment', '');
        setStore('_order_id', '');
        setStore('_order_num', '');
        this.$router.replace({ path: '/confirm', query: { order_id: _order_id, order_num: _order_num,redirect_weixin:_openinfo } })
        return;
      }

      let redirect_weixin = this.redirect_weixin;
      let redirect_weixin_id = this.order_id; //微信回调回来
      

      if (redirect_weixin) {
        MessageBox.alert('确认支付是否完成?', '提示', {
          confirmButtonText: '已完成支付'
        }).then(() => {
          Indicator.open({
            text: '请等候...',
            spinnerType: 'fading-circle'
          });
          this.timeId = setInterval(() => {
            this.isPayComplete(redirect_weixin_id);
          }, 1000)
          // setTimeout(() => {
          //   this.isPayComplete(redirect_weixin_id);
          // }, 3000)
        }, () => {

        });

        //微信回调回来 控制物理返回键
        //刚一进到B页面就往history历史记录pushstate一个url
        // var state = {
        //   title: "",//可以传空值""
        // 　url: "#"
        // };
        // window.history.pushState(state, "title", "#");
        // window.addEventListener("popstate",function(e){　　//只要B页面按下手机物理返回键，就会被监听到
        //     //该干嘛干嘛
        //     history.go(-3)
        // },false);
      }



      let goods_id = this.goods_id; //商品ID
      let goods_num = this.goods_num; //商品数量
      let order_id = this.order_id; //订单ID
      //获取数据
      if (order_id) {
        var res = await continuePayOrder(order_id);
      } else if (goods_id && goods_num) {
        var res = await preSubmitOrder(goods_id, goods_num);
      }
      if (res.res) {
        this.detailsObject = res.data;

        //如果优惠券数量大于1
        if (res.data.coupon_info instanceof Array && res.data.coupon_info.length >= 1) {
          let noneData = {
            "id": '',
            "status": 1,
            "name": "不使用优惠券",
            "coupon_id": '',
            "dis_price": 0,
            "is_chosen": 1
          }
          this.detailsObject.coupon_info = [...this.detailsObject.coupon_info, noneData];
        }
        //得到高亮优惠券
        this.ticket = res.data.coupon_info instanceof Array && res.data.coupon_info.length >= 1 ? this.couponSelect(res.data.coupon_info) : null;


        //得到支付方式高亮选择
        this.paySelect = res.data.pay_type_info instanceof Array && res.data.pay_type_info.length >= 1 ? res.data.pay_type_info[0] : null;
        //得到支付方式
        this.purchaseType = res.data.pay_type;

        //积分抵扣是否开启
        if (res.data.price_info.score_price) {
          this.values = true;
        } else {
          this.values = false;
        }



      } else {
        document.title = '该商品不存在';
        this.errorObj.status = true;
        this.errorObj.text = res.message.mes;
      }
      this.SET_LOADING(false);
    },


    /*====================下单步骤==========================*/
    //确认
    async goExchange() {
      var payType = this.purchaseType;
      Indicator.open({
        text: '请等候...',
        spinnerType: 'fading-circle'
      });

      if (!this.isGonghang && payType == 1) {
        //纯积分提交支付
        this.scoreSubmit();
      } else if (!this.isGonghang && payType == 2) {
        //积分+现金提交支付
        this.score_rmbSubmit();
      } else if (!this.isGonghang && (payType == 3 || payType == 4)) {
        //纯现金提交支付
        this.rmbSubmit();
      } else if (this.isGonghang && (payType == 3 || payType == 4)) {
        //工行支付
        this.gonghangBeforeSubmit();
      }
    },
    //工行支付 唤起工行pos
    async gonghangBeforeSubmit() {
      let goods_id = this.goods_id; //商品ID
      let goods_num = this.goods_num; //商品数量
      let order_id = this.order_id; //订单ID
      let order_num = this.order_num; //订单号

      let order_price = this.detailsObject.price_info.price; //订单金额
      let fill_price = this.detailsObject.price_info.fill_price; //补款金额
      let coupon_price = (this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : ''; //优惠券金额
      let coupon_id = this.ticket ? this.ticket.id : ''; //优惠券ID

      let score_price = this.detailsObject.price_info.score_price; //积分抵扣金额
      let dis_score = this.detailsObject.price_info.dis_score; //抵用积分

      //如果是从商品详情进来
      if (goods_id && goods_num) {
        //用户下单
        var res = await submitOrder({ goods_id, goods_num, order_price, fill_price, coupon_price, coupon_id, score_price, dis_score });
        if (!res.res) {
          Indicator.close();
          Toast(res.message.mes);
          return;
        } else {
          this.gonghangOrderInfo = res;
          //alert(JSON.stringify(res))
        }
      }
      // console.log(this.accMul(fill_price,100))
      this.$bus.$emit('gonghangFn', { "transType": "MULTI_PURCHASE", "transData": { "AMOUNT": this.accMul(fill_price, 100), "TRANS_LIST": ["INTEGRAL_PURCHASE"] }, "callback": this.gonghangSubmitFn });
    },
    //唤起工行之前保存订单号
    gonghangPayBeforeFn(obj) {
      this.gonghangOrderId = (obj && obj.TRANS_SEQUENCE) ? obj.TRANS_SEQUENCE : 0;
    },
    //工行支付回调
    async gonghangSubmitFn(data) {
      data = JSON.parse(data);

      // alert('工行唤起app前保存ID:'+this.gonghangOrderId)
      // alert('工行唤起app后回调:'+JSON.stringify(data))

      // alert(JSON.stringify(data))
      var gonghangQueryId = (data && data.baseResult && data.baseResult.TRANS_SEQUENCE) ? data.baseResult.TRANS_SEQUENCE : this.gonghangOrderInfo;
      //回调查询工行支付是否成功
      // alert('要去请求查询了:'+gonghangQueryId)
      this.$bus.$emit('gonghangFn', { "transType": "QUERY_TRANS_REC", "transData": { "OLD_TRANS_SEQUENCE": gonghangQueryId }, "callback": this.gonghangPayStatus });
    },
    //工行支付查询状态
    async gonghangPayStatus(data) {
      var res = this.gonghangOrderInfo;
      data = JSON.parse(data);
      var parameterId = res.data.order_num;
      var parameterOrderId = res.data.order_id;
      if (data && data.transResult && data.transResult.OLD_BASE_RESULT && data.transResult.OLD_BASE_RESULT.RESULT == 0) {

        // alert('下单的num'+parameterId)
        // alert('订单的ID'+parameterOrderId)
        //工行支付
        var payRes = await score_SubmitOrder(parameterId, 0);
        Indicator.close();
        if (!payRes.res) {
          Toast(payRes.message.mes);
          return;
        };
        Toast('订单支付成功');
        this.$router.replace('/result?psyStatus=1&order_id=' + parameterOrderId);
      } else if (data && data.transResult && data.transResult.OLD_BASE_RESULT && data.transResult.OLD_BASE_RESULT.RESULT == 1) {
        // alert('下单的num'+parameterId)
        // alert('订单的ID'+parameterOrderId)
        Indicator.close();
        Toast('订单未支付');
      }
    },


    //纯积分提交支付
    async scoreSubmit() {
      let goods_id = this.goods_id; //商品ID
      let goods_num = this.goods_num; //商品数量
      let order_id = this.order_id; //订单ID
      let order_num = this.order_num; //订单号

      let order_price = this.detailsObject.price_info.price; //订单金额
      let fill_price = this.detailsObject.price_info.fill_price; //补款金额
      let coupon_price = (this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : ''; //优惠券金额
      let coupon_id = this.ticket ? this.ticket.id : ''; //优惠券ID

      let score_price = this.detailsObject.price_info.score_price; //积分抵扣金额
      let dis_score = this.detailsObject.price_info.dis_score; //抵用积分

      //如果是从商品详情进来
      if (goods_id && goods_num) {
        //用户下单
        var res = await submitOrder({ goods_id, goods_num, order_price, fill_price, coupon_price, coupon_id, score_price, dis_score });
        if (!res.res) {
          Indicator.close();
          Toast(res.message.mes);
          return;
        };
      } else if (order_id && order_num) { //继续支付进来
        //用户切换优惠更新订单信息
        if (this.isMoneyChange == 2) {
          var res = await renewOrder({ "order_id": order_id, order_price, fill_price, coupon_price, coupon_id, score_price, dis_score });
          if (!res.res) {
            Indicator.close();
            Toast(res.message.mes);
            return;
          };
        }
      }
      var parameterId = order_num ? order_num : res.data.order_num;
      var parameterOrderId = order_id ? order_id : res.data.order_id;



      //纯积分支付
      var payRes = await score_SubmitOrder(parameterId, this.businessPay_type);
      Indicator.close();
      if (!payRes.res) {
        Toast(payRes.message.mes);
        return;
      };
      Toast('订单支付成功');
      this.$router.replace('/result?psyStatus=1&order_id=' + parameterOrderId);
    },
    //积分+现金提交支付
    async score_rmbSubmit() {
      let redirect_weixin = this.redirect_weixin; //微信回调回来
      let goods_id = this.goods_id; //商品ID
      let goods_num = this.goods_num; //商品数量
      let order_id = this.order_id; //订单ID
      let order_num = this.order_num; //订单号

      let order_price = this.detailsObject.price_info.price; //订单金额
      let fill_price = this.detailsObject.price_info.fill_price; //补款金额
      let coupon_price = (this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : ''; //优惠券金额
      let coupon_id = this.ticket ? this.ticket.id : ''; //优惠券ID

      let score_price = this.detailsObject.price_info.score_price; //积分抵扣金额
      let dis_score = this.detailsObject.price_info.dis_score; //抵用积分

      //如果是从商品详情进来
      if (goods_id && goods_num) {
        //用户下单
        var res = await submitOrder({ goods_id, goods_num, order_price, fill_price, coupon_price, coupon_id, score_price, dis_score });
        if (!res.res) {
          Indicator.close();
          Toast(res.message.mes);
          return;
        };
      } else if (order_id && order_num) {
        //用户切换优惠更新订单信息
        if (this.isMoneyChange == 2) {
          var res = await renewOrder({ "order_id": order_id, order_price, fill_price, coupon_price, coupon_id, score_price, dis_score });
          if (!res.res) {
            Indicator.close();
            Toast(res.message.mes);
            return;
          };
        }
      }

      var parameterId = order_num ? order_num : res.data.order_num;
      var parameterOrderId = order_id ? order_id : res.data.order_id;

      //查看订单是否无需补款 走积分支付
      if (parseFloat(this.detailsObject.price_info.fill_price) > 0) {
        //微信支付
        var payRes = await setWeixinOrder(parameterId, fill_price * 100);
        Indicator.close();
        if (!payRes.res) {
          Toast(payRes.message.mes);
          return;
        };

        setStore('_payment', new Date().getTime());
        setStore('_order_id', parameterOrderId);
        setStore('_order_num', parameterId);
        //h5支付开打开微信前，将订单号存入本地缓存
        location.href = payRes.data.wechat_wap_url
        // location.href = payRes.data.wechat_wap_url + "&redirect_url=" + encodeURIComponent(location.origin + "/confirm?order_id=" + parameterOrderId + "&order_num=" + parameterId+"&redirect_weixin=1");
        // var oopenWeixinUrl = payRes.data.wechat_wap_url + "&redirect_url=" + encodeURIComponent(location.origin + "/confirm?order_id=" + parameterOrderId + "&order_num=" + parameterId + "&redirect_weixin=1");

        // window.location.replace(oopenWeixinUrl);
      } else {
        //纯积分支付
        var payRes = await score_SubmitOrder(parameterId, this.businessPay_type);
        Indicator.close();
        if (!payRes.res) {
          Toast(payRes.message.mes);
          return;
        };
        Toast('订单支付成功');
        this.$router.replace('/result?psyStatus=1&order_id=' + parameterOrderId);
      }
    },





    //纯现金提交支付
    async rmbSubmit() {
      let redirect_weixin = this.redirect_weixin; //微信回调回来
      let goods_id = this.goods_id; //商品ID
      let goods_num = this.goods_num; //商品数量
      let order_id = this.order_id; //订单ID
      let order_num = this.order_num; //订单号

      let order_price = this.detailsObject.price_info.price; //订单金额
      let fill_price = this.detailsObject.price_info.fill_price; //补款金额
      let coupon_price = (this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : ''; //优惠券金额
      let coupon_id = this.ticket ? this.ticket.id : ''; //优惠券ID

      let score_price = this.values ? this.detailsObject.price_info.score_price : 0; //积分抵扣金额

      var score_dis_per = this.values ? this.detailsObject.score_info.score_dis_per : 0; //比例
      let dis_score = this.accMul(score_price, score_dis_per); //抵用积分

      //如果是从商品详情进来
      if (goods_id && goods_num) {
        //用户下单
        var res = await submitOrder({ goods_id, goods_num, order_price, fill_price, coupon_price, coupon_id, score_price, dis_score });
        if (!res.res) {
          Indicator.close();
          Toast(res.message.mes);
          return;
        };
      } else if (order_id && order_num) {
        //用户切换优惠更新订单信息
        if (this.isMoneyChange == 2) {
          var res = await renewOrder({ "order_id": order_id, order_price, fill_price, coupon_price, coupon_id, score_price, dis_score });
          if (!res.res) {
            Indicator.close();
            Toast(res.message.mes);
            return;
          };
        }
      }
      var parameterId = order_num ? order_num : res.data.order_num;
      var parameterOrderId = order_id ? order_id : res.data.order_id;


      //查看订单是否无需补款 走积分支付
      if (parseFloat(this.detailsObject.price_info.fill_price) > 0) {
        //微信支付
        var payRes = await setWeixinOrder(parameterId, fill_price * 100);
        Indicator.close();
        if (!payRes.res) {
          Toast(payRes.message.mes);
          return;
        };
        setStore('_payment', new Date().getTime());
        setStore('_order_id', parameterOrderId);
        setStore('_order_num', parameterId);
        //h5支付开打开微信前，将订单号存入本地缓存
        location.href = payRes.data.wechat_wap_url
        // location.href = payRes.data.wechat_wap_url + "&redirect_url=" + encodeURIComponent(location.origin + "/confirm?order_id=" + parameterOrderId + "&order_num=" + parameterId+"&redirect_weixin=1");
        // var oopenWeixinUrl = payRes.data.wechat_wap_url + "&redirect_url=" + encodeURIComponent(location.origin + "/confirm?order_id=" + parameterOrderId + "&order_num=" + parameterId + "&redirect_weixin=1");

        // window.location.replace(oopenWeixinUrl);

      } else {
        //纯积分支付
        var payRes = await score_SubmitOrder(parameterId, this.businessPay_type);
        Indicator.close();
        if (!payRes.res) {
          Toast(payRes.message.mes);
          return;
        };
        Toast('订单支付成功');
        this.$router.replace('/result?psyStatus=1&order_id=' + parameterOrderId);
      }
    },




    /*===================方法=======================*/
    //触发open优惠券
    toggleDialogue() {
      this.$refs.ticket_picker.toggleDialogue();
    },
    //选择优惠券后回调 变动
    ticketCallback() {
      this.isMoneyChange = 2;
      //如果开启积分抵扣
      if (this.values) {
        this.detailsObject.price_info.fill_price = this.numConvert(
          this.detailsObject.price_info.price, //商品总价
          this.detailsObject.price_info.score_price ? this.detailsObject.price_info.score_price : 0, //积分抵扣金额
          ((this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : 0), //优惠券金额
        );
      } else {
        this.detailsObject.price_info.fill_price = this.numConvert(
          this.detailsObject.price_info.price,
          ((this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : 0)
        );
      };
    },

    //积分抵扣发生变化
    dikouChang() {
      this.isMoneyChange = 2;
      //如果开启积分抵扣
      if (this.values) {
        this.detailsObject.price_info.fill_price = this.numConvert(
          this.detailsObject.price_info.price, //商品总价
          this.detailsObject.price_info.score_price ? this.detailsObject.price_info.score_price : 0, //积分抵扣金额
          ((this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : 0), //优惠券金额
        );
      } else {
        this.detailsObject.price_info.fill_price = this.numConvert(
          this.detailsObject.price_info.price,
          ((this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : 0)
        );
      }

    },
    //重新计算抵扣积分金额
    calculationDed(newVal) {
      //console.log(newVal)
      if (this.purchaseType == 3) {
        var total_score = this.detailsObject.score_info.total_score; //用户可用积分
        var score_dis_per = this.detailsObject.score_info.score_dis_per; //比例
        var score_dis_pera = this.detailsObject.price_info.score_price; //积分抵扣金额
        var score_dis_perb = this.detailsObject.score_info.score_price; //积分抵扣金额

        var maxheightorderprice = this.numConvert(
          this.detailsObject.price_info.price,
          ((this.ticket && this.ticket.dis_price) ? this.ticket.dis_price : 0)
        ); //当前订单还需支付的钱

        var maxheightprice = this.baoxiao(total_score / score_dis_per); //当前用户最高抵扣金额

        //如果 当前订单还需支付的钱大于最大可抵扣的积分 等于最大可抵扣的钱
        if (maxheightorderprice > maxheightprice) {
          maxheightorderprice = maxheightprice;
        }

        // this.detailsObject.price_info.score_price=0.07;
        this.detailsObject.price_info.score_price = maxheightorderprice;
        this.detailsObject.score_info.score_price = maxheightorderprice;
        // console.log(this.accMul(maxheightorderprice,score_dis_per))
        // this.detailsObject.score_info.dis_score=this.accMul(maxheightorderprice,score_dis_per);
        this.ticketCallback()
      } else if (this.purchaseType == 2 || this.purchaseType == 4) {
        this.ticketCallback();
      }
    },

    //选择支付方式 open
    selectpayList() {
      //得到支付方式列表
      var paySelectList = this.detailsObject.pay_type_info instanceof Array && this.detailsObject.pay_type_info;
      if (paySelectList.length <= 1) {
        return;
      }
      this.$refs.ticket_pickerss.toggleDialogue();
    },

    //数转换
    numConvert(num, digit) {
      var args = arguments, //获取所有的参数
        lens = args.length; //获取参数的长度
      var num = this.accMul(args[0], 100);
      for (var key in args) { //遍历所有的参数
        if (key > 0) {
          num -= this.accMul(args[key], 100);
        }
      }
      return num / 100;
    },
    //乘法
    accMul(arg1, arg2) {
      var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
      try { m += s1.split(".")[1].length } catch (e) {}
      try { m += s2.split(".")[1].length } catch (e) {}
      return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    },

    //保留两位小数
    baoxiao(tmp) {
      tmp = tmp + '';
      return tmp.substr(0, tmp.indexOf(".") + 3);
    },

    // 优惠券默认智能选中
    couponSelect(param) {
      var selectItem = null;
      for (var i = 0; i < param.length; i++) {
        if (param[i].is_chosen) {
          selectItem = param[i];
          break;
        }
      }
      return selectItem;
    },

  },



  //监听
  watch: {
    values(a, b) {
      this.calculationDed(a)
      // this.dikouChang();
    },
    //每次切换优惠券
    ticket(a, b) {
      //重新计算抵扣积分金额
      this.calculationDed(a)
    },
    '$route' (to, from) {
      // this.initData();
      location.reload();
    },
    // 'watchDialog': {
    //   handler: function(newVal,oldVal){
    //     //此处newVal跟oldVal的值是符合预期的新值和旧值
    //     console.log(newVal)
    //     console.log(oldVal)
    //   },
    //   deep: true
    //  }

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
    &.list_item_default {
      display: block;
      .default {
        text-align: center;
        line-height: 1rem;
        color: #666666;
        font-size: .3rem;
        .highlight {
          display: inline-block;
          border: solid .025rem #E0E0E0;
          height: .56rem;
          line-height: .56rem;
          border-radius: .1rem;
          padding: 0 0.2rem;
          margin: 0 .1rem;
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
