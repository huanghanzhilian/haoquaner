<template>
  <div class="orderDetail_container">
    <div class="order_topbox">
      <i class="iconfont icon-jinhangzhong icon_item"></i>
      <i class="iconfont icon-chenggong icon_item"></i>
      <i class="iconfont icon-shibai icon_item"></i>
    </div>
    <div class="orderDetail_content">
      
      <div class="orderDetail_describe">
        <div class="inner_line">
          <span class="title">金额：</span>
          <div class="content">47.00元</div>
        </div>
        <div class="inner_line">
          <span class="title">时间：</span>
          <div class="content">2018-05-04 12:12:12</div>
        </div>
        <div class="inner_line">
          <span class="title">银行卡：</span>
          <div class="content">9999999999999999</div>
        </div>
        <div class="inner_line">
          <span class="title">状态：</span>
          <div class="content">失败<br/>(预计1小时内到账)</div>
        </div>
      </div>
    </div>
    <div class="layout_buttom">
      <div class="btn" @click="goExchange">重新提现</div>
    </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" :alertType="alertType" @closecont="closecont" @closeTip="closeTip" :alertTitle="alertTitle" :alertText="alertText"></alert-tip>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getOrderDetail,getLayoutControl } from 'src/service/getData'
import alertTip from '../../components/common/alertTip'


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
    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    this.id = this.$route.query.id;
    //this.openid = this.$route.query.openid;
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
    alertTip
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
      let res = await getOrderDetail(this.id);
      this.detailsObject = res.data
    },
    //确认
    async closeTip(){
        await getLayoutControl(this.id)
          .then(res=>{
            if(res.code==0){
              this.showAlert = false;
              alert('执行重新提现')
            }
          })
    },
    closecont(){
        this.showAlert = false;
    },
    goExchange(){
      this.alertText = '是否重新提现？';
      this.alertType='2';
      this.showAlert = true;
    }
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';


.order_topbox {
  background-color: #fff;
  /*@include fj;*/
  padding: .6rem;
  margin-bottom: .15rem;
  text-align: center;
  .icon_item{
    font-size: 1.2rem;
  }
}

.orderDetail_content {
  background-color: #fff;
  padding: .2rem;


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

</style>
