<template>
  <div class="icons_control">
    <ul class="icon_wrap">
      <router-link :to="{path: '/'+item.url_content}" tag="li" class="item_iocn" v-for="(item,key,index) in items">
        <span class="icon_der"
        :class="{
                  'goodsList':item.url_content=='goodsList',
                  'integralQuery':item.url_content=='integralQuery',
                  'accountOrder':item.url_content=='accountOrder',
                  'ticketList':item.url_content=='ticketList',
                  'qdlottery':item.url_content=='qdlottery'
                }"
        ></span>
        <p class="item_text">{{item.name}}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'

export default {
  //数据
  data() {
    return {
    }
  },

  //需要使用的模块
  components: {

  },

  //父组件的参数书
  props: ['items'],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },

  //方法
  methods: {
    async initData() {
      //获取数据
      /*await indexOrderList().then(res => {
        this.commoArray = res.data;
        console.log(this.commoArray)
      })*/
    },
  },

  //监听
  watch: {

  },
  //挂载结束状态
  mounted() {
    //this.initData();
  },
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
.icons_control{
  margin-bottom: .22rem;
}
.icon_wrap{
  display: flex;
  list-style: none;
  /*border-bottom: solid .025rem #e7e7e7;*/
  background-color: #fff;
  .item_iocn{
    flex: 1;
    padding: .2rem 0;
    text-align: center;
    .item_text{
      font-size: .24rem;
      color: #333333;
      line-height: .4rem;
    }
    .icon_der{
      display: inline-block;
      width: .88rem;
      height: .88rem;
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
      &.goodsList{
        background-image: url(../../../images/indeximage/iconslayer/goodsList.png);
      }
      &.integralQuery{
        background-image: url(../../../images/indeximage/iconslayer/integralQuery.png);
      }
      &.accountOrder{
        background-image: url(../../../images/indeximage/iconslayer/accountOrder.png);
      }
      &.ticketList{
        background-image: url(../../../images/indeximage/iconslayer/ticketList.png);
      }
      &.qdlottery{
        background-image: url(../../../images/indeximage/iconslayer/qdlottery.png);
      }
    }
  }
}

</style>
