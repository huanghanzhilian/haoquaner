<template>
  <div class="exchange_container">
    <div class="sort_container">
      <div class="sort_item" :class="{choose_type:sortBy == 'sort'}">
        <div class="sort_item_container" @click="chooseType('sort')">
          <span class="">{{sortStatus}}</span><i class="iconfont icon-Path-copy-copy sort_icon"></i>
        </div>
        <transition name="showlist">
          <div class="sort_detail_type" v-show="sortBy == 'sort'">
            <ul class="sort_list_container" @click="sortList($event)">
              <li data="1" class="sort_list_li" :class="{sort_select: sortByType == 1}">全部</li>
              <li data="2" class="sort_list_li" :class="{sort_select: sortByType == 2}">未使用</li>
              <li data="3" class="sort_list_li" :class="{sort_select: sortByType == 3}">已查看</li>
              <li data="4" class="sort_list_li" :class="{sort_select: sortByType == 4}">折现中</li>
              <li data="5" class="sort_list_li" :class="{sort_select: sortByType == 5}">折现失败</li>
              <li data="6" class="sort_list_li" :class="{sort_select: sortByType == 6}">折现成功</li>
              <li data="7" class="sort_list_li" :class="{sort_select: sortByType == 7}">退款成功</li>
            </ul>
          </div>
        </transition>
      </div>
      <transition name="showcover">
        <div class="back_cover" v-show="sortBy"></div>
      </transition>
    </div>
    <ul class="exchange_list_wrap" v-load-more="loaderMore" v-if="pageStatus">
      <router-link tag="li" :to="{path: '/orderDetail', query:{id:item.id}}" class="dopser_item" v-for="item in orderListArr">
        <div class="dopser_item_l">
          <img :src="item.roadcastImg">
        </div>
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <p class="item_title ellipsis">{{item.describe}}</p>
            <p class="item_time">兑换时间 {{item.time}}</p>
          </div>
          <div class="dopser_item_r_r">
            <span class="status">{{item.status?'成功':'失败'}}</span>
            <i class="iconfont icon-go"></i>
          </div>
        </div>
      </router-link>
    </ul>
    <div class="loading" v-else>
      <img src="../../images/loading.gif">
    </div>
    <p v-if="orderLoading" class="empty_data">加载中...</p>
    <p v-if="touchend" class="empty_data">没有更多了</p>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getExchangeList } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'

export default {
  //数据
  data() {
    return {
      page: 1, //页数
      querySize: 8, //请求条数
      orderListArr: [], // 店铺列表数据
      touchend: false, //没有更多数据
      nothing: false, //无数据
      orderLoading: false, //显示加载动画
      preventRepeatReuqest: false, //到达底部加载数据，防止重复加载

      pageStatus: false,

      sortBy:'', // 筛选的条件
      sortByType: 1, // 根据何种方式排序

    }
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
  //需要使用的模块
  components: {

  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [loadMore, getImgPath],

  //计算值 这里可以实时监听某个数据的变化
  computed: {
    sortStatus:function(){
      var sortByType = this.sortByType;
      if(sortByType=='1'){
        return "全部";
      }else if(sortByType=='2'){
        return "未使用";
      }else if(sortByType=='3'){
        return "已查看";
      }else if(sortByType=='4'){
        return "折现中";
      }else if(sortByType=='5'){
        return "折现失败";
      }else if(sortByType=='6'){
        return "折现成功";
      }else if(sortByType=='7'){
        return "退款成功";
      }
    }
  },

  //方法
  methods: {
    async initData() {
      //获取数据
      let res = await getExchangeList(this.page, this.querySize);
      this.pageStatus = true;
      this.orderListArr = [...res.data.row];
      //如果当前页等于总页数 到底了
      if (res.data.pageAmount == res.data.pageNow) {
        this.touchend = true;
      }
      //数据为空
      if (res.data.row.length == 0) {
        this.nothing = true;
      } else {
        this.nothing = false;
      }
    },


    //到达底部加载更多数据
    async loaderMore() {
      if (this.touchend) {
        return
      }
      //防止重复请求
      if (this.preventRepeatReuqest) {
        return
      }
      this.orderLoading = true;
      this.preventRepeatReuqest = true;

      //数据的定位加20位
      this.page += 1;
      let res = await getExchangeList(this.page, this.querySize);
      this.hideLoading();
      this.orderListArr = [...this.orderListArr, ...res.data.row];
      //当获取数据小于20，说明没有更多数据，不需要再次请求数据
      if (res.data.pageAmount == res.data.pageNow) {
        this.touchend = true;
        return
      }
      this.preventRepeatReuqest = false;
    },
    //开发环境与编译环境loading隐藏方式不同
    hideLoading() {
      this.orderLoading = false;
    },

    chooseType(type){
      if (this.sortBy !== type) {
        this.sortBy = type;
      }else{
        //再次点击相同选项时收回列表
        this.sortBy = '';
      }
    },
    //点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染
    sortList(event){
        let node;
        // 如果点击的是 span 中的文字，则需要获取到 span 的父标签 p
        /*if (event.target.nodeName.toUpperCase() !== 'LI') {
          node = event.target.parentNode;
        } else {
          node = event.target;
        }

        this.sortByType = node.getAttribute('data');
        this.sortBy = '';*/
        if(event.target.nodeName=='LI'){
          node=event.target;
          this.sortByType = node.getAttribute('data');
          this.sortBy = '';
        }
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.exchange_container {
  background-color: #fff !important;
  padding-top: .88rem;
}

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

.exchange_list_wrap {
  .dopser_item {
    display: flex;
    font-size: .28rem;
    padding: .18rem;
    border-bottom: 0.025rem solid #f0f0f0;
    .dopser_item_l {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: .9rem;
      text-align: center;
      margin-right: .16rem;
      img {
        width: .9rem;
        height: .9rem;
        display: block;
      }
    }
    .dopser_item_r {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .3rem .2rem .3rem 0;
      .item_title {
        width: 4.6rem;
        font-size: .32rem;
        margin-bottom: .1rem;
      }
      .item_time {
        color: #929292;
      }
      .status {
        color: #838586;
      }
      i {
        color: #929292;
        /*display: block;
        line-height: .28rem;*/
      }
    }
  }
}






/*没有更多*/

.empty_data {
  @include sc(0.24rem, #666);
  text-align: center;
  line-height: 1rem;
}



/*没有更多end*/


/*筛选 s */

.sort_container {
  background-color: #fff;
  /*border-bottom: .025rem solid #f1f1f1;*/
  position: fixed;
  top: 0rem;
  right: 0;
  width: 100%;
  z-index: 13;
  box-sizing: border-box;
  text-align: center;
  color: #555555;

  .sort_item{
    height: .88rem;
    .sort_item_container{
      background-color: #fff;
      height: .88rem;
      line-height: .88rem;
      position: relative;
      border-bottom: 0.025rem solid #f0f0f0;
      z-index: 100;
      span{
        margin-right: .1rem;
      }
    }
  }


  .sort_detail_type{
    background-color: #fff;
  }
  .sort_list_li{
    line-height: .88rem;
    list-style: none;
    border-bottom: 0.025rem solid #f0f0f0;
    color: #888888;
    &.sort_select{
      color: #555555;
    }
  }
  .sort_list_container{
    width: 100%;
    padding-left: .3rem;
    padding-right: .3rem;
    padding-bottom: 1.6rem;
  }
}

.sort_icon{
  display: inline-block;
  transition: all .3s;
}
.choose_type{
  .sort_icon{
      transform: rotate(180deg);
  }
}


.showlist-enter-active, .showlist-leave-active {
  transition: all .3s;
  transform: translateY(0);
}
.showlist-enter, .showlist-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}
.sort_detail_type{
  width: 100%;
  position: absolute;
  display:flex;
  top: .86rem;
  left: 0;
  z-index: 10;
  border-top: 0.025rem solid $bc;
  background-color: #fff;
}

.showcover-enter-active, .showcover-leave-active {
    transition: opacity .3s
  }
  .showcover-enter, .showcover-leave-active {
    opacity: 0
  }
  .back_cover{
    position: fixed;
    @include wh(100%, 100%);
    z-index: 9;
    background-color: rgba(0,0,0,0.3);
  }


/*筛选 e */

</style>
