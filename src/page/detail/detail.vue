<template>
  <div class="activityDetail_container">
    <!-- <router-link :to="{ path: 'confirm', query:{ goods_id: 92,goods_num: 1 }}" tag="div" class="btm">测试</router-link> -->
    <div class="activityDetail_wrap" v-if="detailsObject">
      <div class="activity_top">
        <div class="activity_top_wrap">
          <div class="img_wrap_item">
            <mt-swipe :auto="4000" v-if="bannerArrayList.length>1">
              <mt-swipe-item v-for="(item,index) in bannerArrayList" :key="index">
                <img :src="imgBaseUrl+item" @error="imgErrorBanner($event)">
              </mt-swipe-item>
            </mt-swipe>
            <img v-if="bannerArrayList.length==1" :src="imgBaseUrl+bannerArrayList[0]" @error="imgErrorBanner($event)">
          </div>
          <div class="content">
            <div class="order_name_box">
              <div class="name ellipsis">{{detailsObject.goods_title}}</div>
              <div class="order_number" v-if="detailsObject.integral_price&&!detailsObject.renminbi_price">
                <span class="number1"><span class="fangda">{{detailsObject.integral_price}}</span>{{userInfo.integral_unit}}</span>
              </div>
              <div class="order_number" v-if="!detailsObject.integral_price&&detailsObject.renminbi_price">
                <span class="number1"><span class="fangda">{{detailsObject.renminbi_price}}</span>元</span>
              </div>
              <div class="order_number" v-if="detailsObject.integral_price&&detailsObject.renminbi_price">
                <span class="number1"><span class="fangda">{{detailsObject.integral_price}}</span>{{userInfo.integral_unit}}</span> +
                <span class="number1"><span class="fangda">{{detailsObject.renminbi_price}}</span>元</span>
              </div>
            </div>
            <div class="linese">
              <div class="linese_left">
                <!-- <i class="iconfont icon-riqi"></i> -->
                购买数量
              </div>
              <div class="linese_right">
                <my-input-number v-model="currCount"></my-input-number>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="activity_content">
        <div class="title">详情</div>
        <div class="richtext">
          <edi-tor v-if="detailsObject.desc" :box="unescapeHTML(detailsObject.desc)"></edi-tor>
          <p v-else>None</p>
        </div>
      </div>
      <div class="phone_wrap" v-if="userInfo.telephone">
        <a :href="'tel:'+userInfo.telephone" class="call">
          <i data-v-36004bd8="" class="iconfont icon-dianhua call_icon"></i>
          <span class="call_text">联系客服</span>
        </a>
      </div>
      <div class="confirm_wrap">
        <span class="confirm_btn active" @click="goExchange">立即购买</span>
      </div>
    </div>
    <div class="page_wrap" v-show="isOpenVerify">
      <section class="rec-login">
        <form name="loginForm" action="javascript:;" id="login-form" novalidate>
          <div class="form-item-wrap">
            <div class="form-item">
              <!-- <label for="phone">手机号:</label> -->
              <div class="item-body">
                <div class="">
                  <input type="tel" name="captcha" required class="phonecode" @input="phoneCheck" v-model.trim="formData.phone" placeholder="收货手机号" />
                </div>
              </div>
            </div>
            <div class="form-item">
              <!-- <label for="captcha">验证码:</label> -->
              <div class="item-body">
                <div class="code-input">
                  <input type="tel" name="captcha" class="captcha" v-model.trim="formData.code" @input="codeMaxlength" placeholder="短信验证码" />
                  <a class="verify-code" v-if="show" @click="getCaptcha">获取验证码</a>
                  <a class="verify-code disabled" v-if="!show">{{count}} S</a>
                </div>
              </div>
            </div>
          </div>
            
          <p class="tip-info" id="tip-info"></p>
          <section class="submit-item">
            <button class="btn-submit active" type="submit" @click="gonghangSubmit">确认</button>
          </section>
        </form>
      </section>
    </div>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { Swipe, SwipeItem, MessageBox, Toast } from 'mint-ui';
import { getActivityDetail, getLayoutControl, sendIdentifyCode, checkIdentifyCode } from 'src/service/getData'
import { imgBaseUrl } from 'src/config/env'

import myInputNumber from 'src/components/common/my-input-number'
import ediTor from 'src/components/common/editor'
import errorControl from 'src/components/common/errorControl'

const TIME_COUNT = 60;
export default {
  //数据
  data() {
    return {
      //异常处理数据
      errorObj: {
        status: false,
        text: '出现异常',
        type: 1,
      },

      imgBaseUrl,

      currCount: 1, //购买数量
      detailsObject: {}, //商品详情信息
      bannerArrayList: [],

      isOpenVerify: false, //是否开启验证



      formData: {
        phone: '',
        code: '',
      },
      show: true,
      count: '',
      timer: null,
    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    this.id = this.$route.query.id;
    //this.productId = this.$route.query.productId;
  },

  //挂载前状态
  beforeMount() {

  },
  //挂载结束状态
  mounted() {
    //this.$bus.$emit('execute-setcolor')
    this.initData();
  },


  //需要使用的模块
  components: {
    myInputNumber,
    errorControl,
    ediTor
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
    //计算总积分
    integralTool() {
      return this.detailsObject.integral_price * parseFloat(this.currCount)
    }
  },

  //方法
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ]),
    async initData() {
      //获取数据
      await getActivityDetail(this.id).then(res => {
        if (res.res) {
          this.detailsObject = res.data;
          document.title = this.detailsObject.goods_title;
          this.bannerArrayList.push(res.data.details_master_img);
          if (res.data.details_one_img) this.bannerArrayList.push(res.data.details_one_img);
          if (res.data.details_two_img) this.bannerArrayList.push(res.data.details_two_img);
          if (res.data.details_three_img) this.bannerArrayList.push(res.data.details_three_img);
          if (res.data.details_four_img) this.bannerArrayList.push(res.data.details_four_img);
          if (res.data.details_five_img) this.bannerArrayList.push(res.data.details_five_img);
        } else {
          document.title = '该商品不存在';
          this.errorObj.status = true;
          this.errorObj.text = res.message.mes;
        }
      });
      this.SET_LOADING(false);
    },

    //验证码最大
    phoneCheck(){
      this.formData.phone=this.formData.phone.replace(/\D/g,'');
    },

    //验证码最大
    codeMaxlength(){
      this.formData.code=this.formData.code.replace(/\D/g,'');
      if (this.formData.code.length > 6) {
          this.formData.code=this.formData.code.slice(0, 6);
      }
    },
    //获取验证码
    async getCaptcha() {
      var phoneValidate = this.phoneValidate(this.formData.phone);
      if (!phoneValidate.status) {
        Toast(phoneValidate.msg);
        return false;
      }
      var res = await sendIdentifyCode(this.formData.phone);
      if (!res.res) {
        Toast(res.message.mes);
        return;
      }
      //alert('验证码：'+res.data.data)
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000)
      }
    },

    // 工行提交表单
    async gonghangSubmit() {
      // 表单验证结果
      var validateResult = this.formValidate(this.formData);
      // 验证成功
      if (validateResult.status) {
        var res = await checkIdentifyCode(this.formData.phone,this.formData.code);
        if (!res.res) {
          Toast(res.message.mes);
          //this.$router.push({ path: '/confirm', query: { goods_id: this.id, goods_num: this.currCount } });
          return;
        }
        this.$router.push({ path: '/confirm', query: { goods_id: this.id, goods_num: this.currCount } });
      }
      // 验证失败
      else {
        // 错误提示
        Toast(validateResult.msg)
      }

    },



    //确认
    async goExchange() {
      if (this.isGonghang) {
        this.isOpenVerify = true;
        return;
      }
      if (this.integralTool > parseFloat(this.userInfo.integralNum ? this.userInfo.integralNum : 0)) {
        MessageBox.alert('积分不足，兑换失败', '提示', {
          confirmButtonText: '知道了'
        })
        return;
      }
      this.$router.push({ path: '/confirm', query: { goods_id: this.id, goods_num: this.currCount } });
    },

    // 提交时候表单字段的验证
    formValidate: function(formData) {
      var result = {
        status: false,
        msg: ''
      };
      if (!this.validate(formData.phone, 'require')) {
        result.msg = '手机不能为空';
        return result;
      }
      if (!this.validate(formData.phone, 'phone')) {
        result.msg = '请输入正确手机号';
        return result;
      }
      if (!this.validate(formData.code, 'require')) {
        result.msg = '验证码不能为空';
        return result;
      }
      // 通过验证，返回正确提示
      result.status = true;
      result.msg = '验证通过';
      return result;
    },
    //获取验证码手机验证
    phoneValidate: function(formData) {
      var result = {
        status: false,
        msg: ''
      };
      if (!this.validate(formData, 'require')) {
        result.msg = '手机不能为空';
        return result;
      }
      if (!this.validate(formData, 'phone')) {
        result.msg = '请输入正确手机号';
        return result;
      }

      result.status = true;
      result.msg = '验证通过';
      return result;
    },
    // 字段的验证，支持非空、手机、邮箱的判断
    validate(value, type) {
      // var value = value.trim();
      // 非空验证
      if ('require' === type) {
        return !!value;
      }
      // 手机号验证
      if ('phone' === type) {
        return /^1\d{10}$/.test(value);
      }
      // 邮箱格式验证
      if ('email' === type) {
        return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
      }
    },

    /**
     * @function unescapeHTML 还原html脚本 < > & " '
     * @param a  字符串
     */
    unescapeHTML(a) {
      a = "" + a;
      return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    },


  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.activityDetail_container {
  padding-bottom: 1.6rem;
  background-color: #f3f3f3;
}

.activityDetail_wrap {}

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





/* 头部图 控制区 s */

.activity_top {
  .activity_top_wrap {
    background-color: #fff;
    margin-bottom: .18rem;
    .img_wrap_item {
      width: 100%;
      height: 7.5rem;
      position: relative;
      &:after{
        content: "";
        width: 100%;
        height: 0.37rem;
        /*background-image:linear-gradient(to top, rgba(0,0,0,.1),transparent,transparent);*/
        background-image:linear-gradient(to top, rgba(0,0,0,.1),rgba(0,0,0,.01),transparent);
        /*background-color: rgba(0,0,0,1);*/
        position: absolute;
        bottom: 0;
        left: 0;
      }
      img {
        width: 100%;
        height: 7.5rem;
        display: block;
      }
    }

    .content {
      .order_name_box {
        padding: .2rem .28rem;
        border-bottom: solid .012rem #dedede;
        color: #333333;
        .name {
          font-size: .3rem;
          line-height: .5rem;
        }
        .order_number {
          color: #666666;
          font-size: .28rem;
          line-height: .42rem;
          .number1 {
            color: #666666;
            .fangda {
              color: #F85A6A;
              font-size: .30rem;
              margin-right: .08rem;
            }
          }
          .number2 {
            color: #999999;
            text-decoration: line-through;
          }
        }
      }

      .linese {
        @include fj;
        align-items: center;
        padding: .2rem .28rem;
        .linese_left {
          color: #666666;
        }
        .linese_right {}
      }
    }
  }
}





/* 头部图 控制区 e */


/* 富文本 s */

.activity_content {
  background-color: #fff;
  color: #10202f;
  .title {
    font-size: .3rem;
    padding: .28rem;
    border-bottom: solid .012rem #dedede;
    color: #666666;
  }
  .richtext {
    padding: 0 .28rem;
  }
  .describe {
    margin-bottom: .18rem;
  }
  .text_list {
    line-height: .44rem;
    list-style-type: decimal;
    padding-left: .31rem;
    &.text_listOne {
      color: #6e767c;
    }
    a {
      color: #5871e1;
      text-decoration: underline;
    }
  }
}





/* 富文本 e */


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


/* 联系客服 s */

.phone_wrap {
  background-color: #fff;
  padding: .2rem;
  .call {
    width: 1.75rem;
    height: .56rem;
    line-height: .56rem;
    display: block;
    margin: 0 auto;
    border: solid #D7D7D7 0.012rem;
    text-align: center;
    border-radius: .28rem;
    vertical-align: middle;
    .call_icon {
      color: #888888;
      font-size: .27rem;
      vertical-align: middle;
    }
    .call_text {
      color: #999999;
      font-size: .24rem;
    }
  }
}





/* 联系客服 e */


/* 验证码 s */

.page_wrap {
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.rec-login {
  padding: 0 .3rem;
  .form-item-wrap{
    padding: 0 .1rem;
  }
}



.rec-login .form-item {
  display: flex;
  border-bottom: solid .012rem #e7e7e7;
  padding: .2rem 0;
  margin-top:.18rem;
}

.rec-login .form-item label {
  width: 1.28rem;
}

.rec-login .form-item .item-body {
  flex: 1;
}

.rec-login .form-item .item-body input {
  width: 100%;
  line-height: .52rem;
  height: .52rem;
}

.rec-login .form-item .item-body .code-input {
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.rec-login .form-item .item-body .code-input input {
  width: 3.3rem;
}

.rec-login .btn-submit {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  margin-top: .86rem;
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  color: #080c00;
  background: #fff;
  font-size: .30rem;
  border: solid .012rem #e7e7e7;
}

.rec-login .btn-submit.active {
  background-color: #FAA71B;
  color: #fff;
  border: solid .012rem #FAA71B;
}

.rec-login .return {
  border-radius: 4px;
  margin-top: .34rem;
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  color: #080c00;
  background: #fff;
  font-size: .30rem;
  border: solid .012rem #e7e7e7;
  display: block;
}

.rec-login .verify-code {
  width: 2rem;
  height: .58rem;
  line-height: .58rem;
  border:solid .012rem #FAA71B;
  color: #FAA71B;
  font-size: .26rem;
  text-align: center;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px
}

.rec-login .verify-code.disabled {
  /*color: #fff;
  background-color: #ccc;*/
}




/* 验证码 e */

</style>
