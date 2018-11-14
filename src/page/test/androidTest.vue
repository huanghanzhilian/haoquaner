<template>
  <div class="exchange_container">
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { setStore, getStore } from 'src/config/mUtils'
import { getUserOrderInfo } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'
import { imgBaseUrl } from 'src/config/env'
import { Toast, Switch, MessageBox, Indicator } from 'mint-ui';


export default {
  //数据
  data() {
    return {
      payingNumber:0, //订单状态轮询次数
      timeId:null,//订单状态定时器
    }
  },
  //创建完毕状态
  created() {
    this.searchValue = this.$route.query.q;
    //this.productId = this.$route.query.productId;
  },

  mounted() {
    this.initData();
  },

  //需要使用的模块
  components: {

  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [loadMore, getImgPath],

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
    initData() {
      this.SET_LOADING(false);

      MessageBox.alert('确认支付是否完成?', '提示', {
        confirmButtonText: '已完成支付'
      }).then(() => {
        Indicator.open({
          text: '请等候...',
          spinnerType: 'fading-circle'
        });
        this.timeId = setInterval(() => {
          this.isPayComplete(12);
        }, 1000)

        // setTimeout(() => {
        //   this.isPayComplete(12);
        // }, 500)
      }, () => {

      });
    },


    //判断是否h5支付完成
    async isPayComplete(openinfowea) {
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


  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

</style>
