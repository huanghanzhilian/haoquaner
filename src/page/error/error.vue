<template>
  <div class="errorWrap">
    <section class="error_wrapper">
      <img src="../../images/errors/404.png">
      <h3>页面不存在，我是无辜的</h3>
      <router-link tag="button" to="/" >返回积分商城</router-link>
    </section>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getGoodsList } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'
import { imgBaseUrl } from 'src/config/env'


export default {
  //数据
  data() {
    return {

    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
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
      this.SET_LOADING(false);
    },



  },

  //监听
  watch: {
    '$route' (to, from) {

    },
  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.errorWrap{
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: #fff;

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
