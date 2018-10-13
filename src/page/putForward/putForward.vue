<template>
  <div class="orderDetail_container">
    <div class="orderDetail_content">
      <div class="dopser_item">
        <div class="dopser_item_l">
          <img :src="detailsObject.roadcastImg">
        </div>
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <p class="item_title">{{detailsObject.describe}}</p>
            <p class="item_time">仅剩{{detailsObject.goldcoin}}天（有效期至：{{detailsObject.oldTime}}）</p>
          </div>
          <div class="dopser_item_r_r">
          </div>
        </div>
      </div>
      <div class="orderDetail_describe">
        <div class="inner_line">
          <span class="title">折现金额：</span>
          <div class="content">{{detailsObject.money}}元</div>
        </div>
        <div class="inner_line">
          <span class="title" style="letter-spacing: 0.1rem;">手续费：</span>
          <div class="content">{{detailsObject.Service}}元</div>
        </div>
      </div>
    </div>
    <div class="layout_main">
      <div class="form-item">
        <label for="phone">姓&emsp;&emsp;名:</label>
        <div class="item-body">
          <div class="code-input">
            <input type="text" v-model="formData.phoneCode" placeholder="请填写持卡人姓名">
          </div>
        </div>
      </div>
      <div class="form-item" @click="openBank">
        <label for="phone">银&emsp;&emsp;行:</label>
        <div class="item-body">
          <div class="code-input">
            <input type="text" v-model="formData.bankType" readonly="readonly" placeholder="选择银行卡">
            <i class="iconfont icon-go icon_item"></i>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label for="phone">卡&emsp;&emsp;号:</label>
        <div class="item-body">
          <div class="code-input">
            <input type="tel" v-model="formData.bankCode" placeholder="请填写银行卡号">
          </div>
        </div>
      </div>
    </div>
    <div class="layout_buttom">
      <div class="btn" @click="goExchange">确认</div>
    </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" :alertType="alertType" @closecont="closecont" @closeTip="closeTip" :alertTitle="alertTitle" :alertText="alertText"></alert-tip>
    <!-- 银行卡选择 s -->
    <div class="alet_containers" v-if="isShowBank">
      <div class="modal_wrap">
        <div class="modal_top">
          <div class="modal_title">开户行</div>
          <i class="iconfont icon-guanbi icon_item" @click="closeBank"></i>
        </div>
        <div class="modal-body">
          <ul class="bank-list">
            <li @click="choicebank(item.text)" v-for="item in banklist" class="checked"><img :src="item.url" alt="">{{item.text}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="alet_containers" v-if="isShowVerifycode">
      <div class="modal_wrap">
        <div class="modal_top">
          <div class="modal_title">请输入{{detailsObject.userPhone}}所收到的验证码</div>
          <i class="iconfont icon-guanbi icon_item" @click="closeVerifycode"></i>
        </div>
        <div class="modal-body">
          <div class="wallet-input clear">
            <input id="wallet-pwd" @keyup="inputkeyup" v-model="verifycode" name="wallet-pwd" type="tel" maxlength="6" pattern="d*" autocomplete="off" />
            <ul>
              <li v-for="item in showdom"><i class="iconfont icon_item" :class="{'icon-zuizong': item.value}"></i></li>
              <!-- icon-zuizong -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 银行卡选择 e -->

    <div class="buttom_tishi">
      <div class="title">温馨提示</div>
      <div class="content">
        <p>1.折现目前支持列表中的银行。</p>
        <p>2.发起折现后，一般4个小时内到账。</p>
        <p>3.客服咨询电话：95016789. 时间：工作日9:00~21:00.
</p>
      </div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getPutDetail, getLayoutControl, getUserVerifycode } from 'src/service/getData'
import alertTip from '../../components/common/alertTip'
import Toast from 'src/components/common/Toast'

export default {
  //数据
  data() {
    return {
      showAlert: false, //显示提示组件
      alertText: null, //提示的内容
      alertTitle: null, //提示title
      alertType: 1, //弹窗类型

      // 银行列表
      banklist: [{
        url: require('src/images/icons/gongshang.png'),
        text: '工商银行'
      }, {
        url: require('src/images/icons/jianshe.png'),
        text: '建设银行'
      }, {
        url: require('src/images/icons/nongye.png'),
        text: '农业银行'
      }, {
        url: require('src/images/icons/zhongguo.png'),
        text: '中国银行'
      }],

      //提交数据
      formData: {
        phoneCode: '',
        bankType: '',
        bankCode: ''
      },

      //是否显示选择银行卡选项
      isShowBank: false,

      //初始化获取订单数据
      detailsObject: {},

      //验证码
      verifycode: '',
      showdom: [{ value: false }, { value: false }, { value: false }, { value: false }, { value: false }, { value: false }],
      isShowVerifycode:false,
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
    alertTip,
    Toast
  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },

  //方法
  methods: {
    async initData() {
      //获取数据
      let res = await getPutDetail(this.id);
      this.detailsObject = res.data
      console.log(res)
    },
    //确认
    async closeTip() {
      await getUserVerifycode(this.detailsObject.userPhone)
        .then(res => {
          if (res.code == 0) {
            this.showAlert = false;
            this.isShowVerifycode=true;
            //alert('卡密页面')
          }
        })
    },
    closecont() {
      this.showAlert = false;
    },
    goExchange() {
      // 表单验证结果
      var validateResult = this.formValidate(this.formData)
      if (!validateResult.status) {
        this.$refs.toast.show(validateResult.msg);
        return
      }
      this.alertTitle = '折现信息核对'
      this.alertText = '<div style="width: 100%;text-align: left;"><p>金额：' + this.detailsObject.Service + '元</p><p>持卡人：' + this.formData.phoneCode + '</p><p>卡号：' + this.formData.bankCode + '</p></div>';
      this.alertType = '2';
      this.showAlert = true;
    },
    //选择银行卡
    choicebank(text) {
      this.formData.bankType = text;
      this.isShowBank = false;
    },
    //打开选择银行卡
    openBank() {
      this.isShowBank = true;
    },
    //关闭选择银行卡
    closeBank() {
      this.isShowBank = false;
    },

    //关闭验证码输入
    closeVerifycode(){
      for (let i = 0; i < this.showdom.length; i++) {
        this.showdom[i].value=false;
      }
      this.verifycode='';
      this.isShowVerifycode = false;
    },

    //输入短信验证
    async inputkeyup() {
      var value = this.verifycode;
      console.log(value)
      for (let i = 0; i < this.showdom.length; i++) {
        this.showdom[i].value=false;
      }
      for (let i = 0; i < value.length; i++) {
        this.showdom[i].value=true;
      }
      if(value.length==6){
        await getUserVerifycode(this.verifycode)
        .then(res => {
          if (res.code == 0) {
            this.$refs.toast.show('失败');
            //this.isShowVerifycode=false;
            //alert('卡密页面')
          }else{
            this.$refs.toast.show('失败');
          }
        })
      }
    },



    // 提交时候表单字段的验证
    formValidate(formData) {
      var result = {
        status: false,
        msg: ''
      };
      if (!this.validate(formData.phoneCode, 'require')) {
        result.msg = '姓名不能为空';
        return result;
      }
      if (!this.validate(formData.bankType, 'require')) {
        result.msg = '请选择银行卡类型';
        return result;
      }
      if (!this.validate(formData.bankCode, 'require')) {
        result.msg = '请填写卡号';
        return result;
      }
      if (!this.validate(formData.bankCode, 'bank')) {
        result.msg = '请填写正确卡号';
        return result;
      }


      // 通过验证，返回正确提示
      result.status = true;
      result.msg = '验证通过';
      return result;
    },
    // 字段的验证，支持非空、手机、邮箱的判断
    validate(value, type) {
      var value = value.replace(/\s/g, "");
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
      //银行卡校验
      if ('bank' === type) {
        return /^\d{16,19}$/.test(value);
      }
      // accText.match(/^\d{16,19}$/)
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';


.orderDetail_content {
  background-color: #fff;
  padding: .2rem;
  margin-bottom: .15rem;
  .dopser_item {
    display: flex;
    font-size: .28rem;
    padding: .18rem;
    border-bottom: 0.025rem solid #f0f0f0;


    .dopser_item_l {
      /*position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;*/
      margin-right: .16rem;
      img {
        width: 2.6rem;
        height: 1.26rem;
        display: block;
      }
    }



    .dopser_item_r {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /*padding: 0rem 0 .3rem 0;*/
      .dopser_item_r_r {
        width: 1rem;
      }
      .excha_go {
        display: inline-block;
        padding: .02rem .08rem;
        border: none;
        border-radius: 4px;
        background-color: #d5d5d5;
        color: #fff;
        &.on {
          display: inline-block;
          padding: .02rem .08rem;
          border: solid 0.02rem #446ee2;
          background-color: #fff;
          border-radius: 4px;
          color: #446ee2;
        }
      }
      .item_title {
        font-size: .32rem;
        margin-bottom: .1rem;
      }
      .item_time {
        color: #b2a7a2;
      }
    }
  }

  .orderDetail_describe {
    padding-top: .1rem;
    color: #697074;
    .inner_line {
      display: flex;
      padding: .08rem 0;
      .content {
        flex: 1;
      }
      .title {
        min-width: 1.42rem;
        text-align: right;
      }
    }
  }
}

.layout_main {
  padding: .2rem;
  background-color: #fff;
  .form-item {
    display: flex;
    /*align-items: center;*/
    border-bottom: solid .025rem #e7e7e7;
    padding: .3rem 0;
    &:last-child {
      border-bottom: none;
    }
    label {
      width: 1.38rem;
    }
    .item-body {
      flex: 1;
      .code-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        input {
          width: 5rem;
        }
      }
    }
  }
}

.layout_buttom {
  background-color: #efefef;
  padding-top: .6rem;
  .btn {
    border: solid 0.025rem #999;
    margin: auto;
    width: 4rem;
    margin-bottom: .3rem;
    text-align: center;
    padding: .1rem;
    border-radius: .1rem;
    background-color: #fff;
  }
}




.alet_containers {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  /*display: none;*/
  .modal_wrap {
    @include center;
    width: 5.6rem;
    background-color: #fff;
    border-radius: .1rem;
    overflow: hidden;
    .modal_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .2rem;
    }
    .modal-body {
      .bank-list {
        li {
          display: flex;
          align-items: center;
          padding: .1rem .2rem;
          border-top: solid .025rem #ccc;
          img {
            width: .48rem;
            height: .48rem;
            margin-right: .1rem;
          }
        }
      }
      .wallet-input {
        position: relative;
        input {
          background-color: transparent;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: transparent;
          /*display: none;*/
        }
        ul {
          list-style: none;
          padding: .5rem;
          display: flex;
          li {
            border-top: solid .025rem #ccc;
            border-bottom: solid .025rem #ccc;
            border-left: solid .025rem #ccc;
            line-height: .66rem;
            height: .76rem;
            text-align: center;
            flex: 1;
            &:last-child {
              border-right: solid .025rem #ccc;
            }
            .icon_item {
              font-size: .5rem;
            }
          }
        }
      }
    }
  }
}


.buttom_tishi{
  padding: .4rem;
  .title{
    font-size: .34rem;
    font-weight: 600;
    margin-bottom: .2rem;
    text-align: center;
  }
  .content{
    p{

    }
  }
}

</style>
