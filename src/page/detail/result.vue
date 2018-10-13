<template>
  <div class="result_container">
    <div class="result_container_main">
      <div class="result_wrap">
        <div class="line_status">
          <i class="iconfont icon-smile icon_styles"></i>
          <span>购买成功</span>
        </div>
        <div class="line_item">{{title||'NONE'}}（商品名称）</div>
        <div class="line_item" v-if="fill_price=='0'&&score_price!='0'"><span class="highlight">{{score_price}}</span>{{userInfo.integral_unit}}</div>
        <div class="line_item" v-if="fill_price!='0'&&score_price=='0'"><span class="highlight">{{fill_price}}</span>元</div>
        <div class="line_item" v-if="fill_price!='0'&&score_price!='0'"><span class="highlight">{{score_price}}</span>{{userInfo.integral_unit}}，<span class="highlight">{{fill_price}}</span>元</div>
      </div>
      <div class="result_buttom_wrap">
        <router-link to="/accountOrder" tag="div" class="btm">查看订单</router-link>
        <router-link to="/" tag="div" class="btm">返回首页</router-link>
      </div>
    </div>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getActivityDetail, getLayoutControl } from 'src/service/getData'

import myInputNumber from 'src/components/common/my-input-number'
import errorControl from 'src/components/common/errorControl'

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
      detailsObject: {}, //商品详情信息

    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    this.psyStatus = this.$route.query.psyStatus;
    this.title = this.$route.query.title;
    this.fill_price = this.$route.query.fill_price;
    this.score_price = this.$route.query.score_price;
  },

  //挂载前状态
  beforeMount() {

  },
  //挂载结束状态
  mounted() {
    this.initData();
  },


  //需要使用的模块
  components: {
    myInputNumber,
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
      this.SET_LOADING(false);
    },

    //确认
    async goExchange() {
      await getLayoutControl(this.id)
        .then(res => {
          if (res.res) {
            this.initData()
          }
        })
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
.result_wrap{
  background-color: #fff;
  padding: .9rem 0 .5rem 0;
  text-align: center;
  .line_status{
    margin-bottom: .58rem;
    .icon_styles{
      font-size: 1rem;
      color: #14c19e;
      vertical-align: middle;
    }
    span{
      font-size: .36rem;
      color: #666666;
      vertical-align: middle;
    }
  }
  .line_item{
    line-height: .5rem;
    font-size: .29rem;
    color: #666666;
    .highlight{
      color: #F85A6A;
    }
  }
}
.result_buttom_wrap{
  padding: .7rem 1.4rem;
  @include fj;
  align-items: center;
  .btm{
    background-color: #fff;
    color: #666666;
    font-size:.26rem;
    line-height: .68rem;
    padding: 0 .4rem;
    border: solid .025rem #E0E0E0;
    border-radius: .34rem;
  }
}
</style>