<template>
  <div class="errorWrap"  @DOMMouseScroll="slaoak($event)" @mousewheel="slaoak($event)" @touchmove="slaoak($event)">
    <section class="error_wrapper">
      <img src="../../images/errors/error.png">
      <h3>{{errorObj.text||'参数解析失败'}}</h3>

      <router-link tag="button" to="/" >返回积分商城</router-link>
    </section>
  </div>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
import { threeColumn } from 'src/service/getData'
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
  props: ['errorObj'],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },

  //方法
  methods: {
    async initData() {

    },
    //去除滚动事件
    slaoak(event){
      event.preventDefault()
    },
  },

  //监听
  watch: {

  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
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

}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
.errorWrap{
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 2000;

  .error_wrapper{
    margin-top: 1.24rem;
    width: 100%;
    /*@include center();*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img{
    width: 100%;
    margin-bottom: .45rem;
  }
  h3{
    margin-bottom: .9rem;
    font-size: .28rem;
    color: #999999;
  }
  button{
    display: inline-block;
    width: 2.72rem;
    height: .72rem;
    line-height: .72rem;
    font-size: .28rem;
    color: #fff;
    border-radius: .16rem;
    border: solid .025rem #00b0ec;
    background-color: #00b0ec;
  }
}
</style>
