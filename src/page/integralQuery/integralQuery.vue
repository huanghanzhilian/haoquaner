<template>
  <div class="integralQuery_container">
    <div class="integralQuery_wrap">
      <div class="layer_top">
        <div class="imgback_wrap">
          <img src="../../images/myinvalid/invalidBack.png" alt="">
        </div>
        <div class="integral_content">
          <div class="integral_top">{{userInfo.integral_unit}}</div>
          <div class="integral_num">{{userInfo.integralNum||'0'}}</div>
        </div>
      </div>
      <div class="layer_content">
        <div class="row_item">请在个人中心里查询积分明细</div>
      </div>
    </div>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState} from 'vuex'
import { Swipe, SwipeItem,MessageBox} from 'mint-ui';
import { getActivityDetail,getLayoutControl } from 'src/service/getData'
import { imgBaseUrl } from 'src/config/env'
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
      imgBaseUrl,
    }
  },
  //创建完毕状态
  created() {
    //this.id = this.$route.query.id;
    //this.productId = this.$route.query.productId;
  },
  //挂载结束状态
  mounted() {
    //this.$bus.$emit('execute-setcolor')
    this.initData();
  },
  //需要使用的模块
  components: {
    errorControl,
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
      //获取数据
      // await getActivityDetail(this.id).then(res => {
      //   if(res.res){
      //     this.detailsObject=res.data;
      //     document.title = this.detailsObject.goods_title;
      //     this.bannerArrayList.push(res.data.details_master_img);
      //     if(res.data.details_one_img)this.bannerArrayList.push(res.data.details_one_img);
      //     if(res.data.details_two_img)this.bannerArrayList.push(res.data.details_two_img);
      //     if(res.data.details_three_img)this.bannerArrayList.push(res.data.details_three_img);
      //     if(res.data.details_four_img)this.bannerArrayList.push(res.data.details_four_img);
      //     if(res.data.details_five_img)this.bannerArrayList.push(res.data.details_five_img);
      //   }else{
      //     document.title = '该商品不存在';
      //     this.errorObj.status=true;
      //     this.errorObj.text=res.message.mes;
      //   }
      // });
      this.SET_LOADING(false);
    },
  },
  //监听
  watch: {

  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
.integralQuery_container{
  height: 100%;
  background-color: #fff;
}
.integralQuery_wrap{
  .layer_top{
    position: relative;
    .imgback_wrap{
      img{
        width: 100%;
      }
    }
    .integral_content{
      @include center();
      text-align: center;
      color: #fff;
      .integral_top{
        font-size: .3rem;
      }
      .integral_num{
        margin-top: .2rem;
        font-size: .78rem;
      }
    }
  }
  .layer_content{
    .row_item{
      line-height: .8rem;
      font-size: .28rem;
      padding: 0 .2rem;
      color: #999999;
    }
  }
}
</style>
