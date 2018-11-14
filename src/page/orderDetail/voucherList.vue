<template>
  <div class="voucher_container">
    <ul class="exchange_list_wrap">
      <li class="dopser_item" v-for="(item,index) in orderListArr" @click="goWatchCardItem(index)">
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <p class="item_title ellipsis">{{item.goods_name||'NONE'}}</p>
            <p class="item_time">{{item.end_time}}前使用</p>
          </div>
          <div class="dopser_item_r_r">
            ￥{{item.card_price}}
            <!-- <span class="excha_go1"></span> -->
          </div>
        </div>
      </li>
    </ul>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { Toast, Switch,MessageBox,Indicator} from 'mint-ui';

import { getConvertRecordList } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'
import errorControl from 'src/components/common/errorControl'
import { imgBaseUrl } from 'src/config/env'

export default {
  //数据
  data() {
    return {
      orderListArr: [],
      imgBaseUrl,

      //请求异常
      errorObj:{
        status:false,
        text:'出现异常',
        type:1,
      },
    }
  },

  //创建完毕状态
  created() {
    this.order_id = this.$route.query.order_id;
    //this.productId = this.$route.query.productId;
  },
  //挂载结束状态
  mounted() {
    this.initData();
  },
  //需要使用的模块
  components: {
    errorControl
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



    async initData() {
      //获取数据
      let res = await getConvertRecordList(this.order_id);
      this.SET_LOADING(false);
      if (!res.res) {
        this.errorObj.status = true;
        this.errorObj.text = res.message.mes;
        return;
      }
      this.orderListArr = [...res.data];
    },

    goWatchCardItem(index){
      MessageBox.confirm('确认查看该券吗？','温馨提示',{
        confirmButtonText: '确认',
        // showCancelButton:true,
      }).then(() => {
        this.confirmWatchCardItem(index);
      },() => {

      });
    },
    //确认查看
    confirmWatchCardItem(index){
      var res=this.orderListArr[index];
      if (res.card_type == 2 || res.card_type == 3) {
        location.href=res.card_url;
      } else if (res.card_type == 1 || res.card_type == 4 || res.card_type == 5) {
        var kh=res.card_number;
        var km=res.card_pwd;
        var dom='';
        var dom='';
        if(kh){
          dom='<p style="text-align: left;">卡号：' + kh + '</p>';
        }
        if(km){
          dom+='<p style="text-align: left;">卡密：' + km + '</p>';
        }
        setTimeout(()=>{
          MessageBox.alert(dom,'使用该券',{
            confirmButtonText: '知道了'
          }).then(() => {
          },() => {

          });
        },500)
      }else if(res.card_type == 0){
        setTimeout(()=>{
          MessageBox.alert('已充入到您登录手机的苏宁易购账户','充值成功',{
            confirmButtonText: '知道了'
          }).then(() => {
          },() => {

          });
        },500)
      }else{
        Toast('出现错误');
      }
    },

    //查看卡密或者跳连接
    async showkami() {
      await getvoucherDesc(this.id)
        .then(res => {
          if (res.res) {
            this.showAlert = false;
            this.initData();
            //this.$refs.toast.show(res.message);
            if (res.data.card_type == 2 || res.data.card_type == 3) {
              location.href = res.data.card_url;
            } else if (res.data.card_type == 0 || res.data.card_type == 1 || res.data.card_type == 4 || res.data.card_type == 5) {
              var kh = res.data.card_number;
              var km = res.data.card_pwd;
              var dom = '';
              if (kh) {
                dom = '<p style="text-align: left;">卡号：' + kh + '</p>';
              }
              if (km) {
                dom += '<p style="text-align: left;">卡密：' + km + '</p>';
              }

              this.boxalert = 6;
              this.alertTitle = '查看卡号卡密';
              this.alertText = dom;
              this.alertType = '1';
              this.btntxt = '知道了';
              this.isshowkhkm = true;
              this.showAlert = true;
              //location.href = res.data.card_url;
            }
          } else {
            this.showAlert = false;
            this.$refs.toast.show(res.message);
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


/*商品列表 s */

.exchange_list_wrap {
  padding-left: .2rem;
  padding-right: .2rem;
  padding-bottom: .3rem;
  padding-top: .35rem;
  .dopser_item {
    display: flex;
    font-size: .28rem;
    padding: .35rem .52rem;
    border-bottom: 0.06rem solid #ed6753;
    background-color: #fff;
    background-image: url(../../images/wenluse.png);
    background-repeat: no-repeat;
    background-size: 100%;
    margin-bottom: .3rem;
    border-radius: .05rem;
    &:last-child {
      /*border-bottom: none;*/
    }
    .dopser_item_l {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-right: .16rem;
      width: 2.6rem;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
        @include center();
      }
    }
    .dopser_item_r {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .dopser_item_r_l {
        flex: 1;
      }
      .dopser_item_r_r {
        /*width: 1rem;*/
      }
      .excha_go {
        display: inline-block;
        height: .52rem;
        line-height: .52rem;
        text-align: center;
        color: #333;
        &.on {
          display: inline-block; //padding: .02rem .08rem;
          border: solid .025rem $fontD;
          background-color: #fff;
          border-radius: 4px;
          color: $fontD;
        }
      }
      .item_title {
        width: 4.6rem;
        font-size: .32rem;
        line-height: .6rem;
        font-size: .32rem;
        color: #333;
      }
      .item_time {
        color: #999;
        font-size: .26rem;
        line-height: .45rem;
      }

      i {
        color: #929292;
        /*display: block;
        line-height: .28rem;*/
      }
    }
  }
}



/*商品列表 e */

</style>
