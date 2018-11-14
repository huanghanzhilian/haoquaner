<template>
  <div class="signIn_containerwe">
    <div class="signIn_wrap">
      <calen-dar ref="calendar" :highlightList="highlightList" @closeTip="switchCalendar"></calen-dar>
      <div class="buttom_layer">
        <div class="signin_btn" :class="{'actuve':signInRule.today_is_sign}" @click="signIn">{{signInRule.today_is_sign?"今日已签到":"签到"}}</div>
        <div class="tpltext">签到共获得{{signInRule.all_number||'0'}}积分</div>
        <div class="describe">
          <div class="describeitem describe_l">累积签到：<span class="highlight">{{signInRule.all_nums||'0'}}</span>天</div>
          <div class="describeitem describe_r">本轮已连续签到：<span class="highlight">{{signInRule.user_signin_num||'0'}}</span>天</div>
        </div>
      </div>
      <div class="rule_layer">
        <div class="rule_wrap">
          <div class="rule_title">规则说明</div>
          <ol class="rule_list">
            <!-- <li class="rule_item">取自创建签到活动时所设的规则说明</li> -->
            <li class="rule_item">每日签到得{{parseFloat(signInRule.main_integral)}}积分</li>
            <li class="rule_item" v-for="(item,index) in signInRule.days">连续签到{{item}}日得{{parseFloat(signInRule.integrals[index])}}积分</li>
          </ol>
        </div>
      </div>
    </div>
    <activity-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></activity-tip>
    <error-control v-if="errorObj.status" :errorObj="errorObj"></error-control>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { Indicator,Toast } from 'mint-ui';

import {getSigninActivity,getUserSigninDetail,userSigninActivity} from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'
import { imgBaseUrl } from 'src/config/env'
import calenDar from './calendar'
import activityTip from './components/activityTip'
import errorControl from 'src/components/common/errorControl'


export default {
  //数据
  data() {
    return {
      //获取签到详情信息文案以及规范
      signInRule:{},
      
      day: {}, //日历状态  年月


      highlightList: [],

      showAlert: false, //显示提示组件
      alertText: {}, //提示的内容

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
    this.searchValue = this.$route.query.q;
    //this.productId = this.$route.query.productId;
  },

  mounted() {
    this.initData();
  },

  //需要使用的模块
  components: {
    calenDar,
    activityTip,
    errorControl
  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [loadMore, getImgPath],

  //计算值 这里可以实时监听某个数据的变化
  computed: {
    //活动规则
    rule_desc(){
      var rule_desc=this.signInRule.rule_desc;
      if(rule_desc){
        return rule_desc.split(' ')
      }else{
        return [];
      }
    }
  },

  //方法
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ]),
    //页面初始化请求数据
    async initData(){
      this.day=this.getDateObj();
      //获取活动详情
      await getSigninActivity().then(res => {
        if(res.res){
          var isActiveTime=this.isActiveTime(res.data.begin_time,res.data.end_time);
          if(isActiveTime){
            this.signInRule=res.data;
          }else{
            this.errorObj.status=true;
            this.errorObj.text='活动时间不符合';
          }
        }else{
          this.errorObj.status=true;
          this.errorObj.text=res.message.mes;
        }
      });
      var month=this.day['month']>9?this.day['month']:'0'+this.day['month'];
      let res=await getUserSigninDetail((this.day['year']+'-'+month),this.signInRule.id);
      if(res.res){
        if(res.data&&res.data.user_signin_day){
          var user_signin_day=res.data.user_signin_day.split(',');
          user_signin_day.splice((user_signin_day.length-1),1);
          var list=[];
          for (var i = 0; i < user_signin_day.length; i++) {
            list.push(this.initCode(this.day['year'],this.day['month'],user_signin_day[i]))
          }
          this.highlightList=list;
          setTimeout(()=>{
            this.$refs.calendar.initData();
          },200)
        }else{
          this.highlightList=[];
          setTimeout(()=>{
            this.$refs.calendar.initData();
          },200)
        }
      }else{
        this.errorObj.status=true;
        this.errorObj.text=res.message.mes;
      }
      //console.log(this.getDateObj())
      this.SET_LOADING(false);
    },
    //请求某月签到数据
    async getMoumonthArray(){
      Indicator.open();
      var month=this.day['month']>9?this.day['month']:'0'+this.day['month'];
      let res=await getUserSigninDetail((this.day['year']+'-'+month),this.signInRule.id);
      if(res.res&&res.data){
        var user_signin_day=res.data.user_signin_day.split(',');
        user_signin_day.splice((user_signin_day.length-1),1);
        var list=[];
        for (var i = 0; i < user_signin_day.length; i++) {
          list.push(this.initCode(this.day['year'],this.day['month'],user_signin_day[i]))
        }
        this.highlightList=list;
        Indicator.close();
      }else{
        this.highlightList=[];
        Indicator.close();
      }
    },
    //执行切换月
    async switchCalendar(obj){
      if(obj=='left'){
        console.log('上个月')
        this.day['month']--;
        this.day = this.getDateObj(this.day['year'], this.day['month'], 1);
        await this.getMoumonthArray();
        //this.highlightList=['20180'+--this.datatext+'15']
        setTimeout(()=>{
          this.$refs.calendar.prevMonth();
        },200)
      }else if(obj=='right'){
        console.log('下个月')
        this.day['month']++;
        this.day = this.getDateObj(this.day['year'], this.day['month'], 1);
        await this.getMoumonthArray();
        setTimeout(()=>{
          this.$refs.calendar.nextMonth();
        },200)
      }
    },
    //初始化code
    initCode(year,month,day){
      // console.log(day)
      // return year +''+ (month > 9 ? month : '0' + month)+''+(day>9?day:'0'+day);
      return year +''+ (month > 9 ? month : '0' + month)+''+day;
    },
    //获取日期数据
    getDateObj: function(year, month, day) {
      var date = arguments.length && year ? new Date(year, month - 1, day) : new Date();
      var obj = {
        'year': date.getFullYear(),
        'month': date.getMonth()+1,
        'day': date.getDate(),
        'week': date.getDay()
      };
      obj['code'] = '' + obj['year'] + (obj['month'] > 9 ? obj['month'] : '0' + obj['month']) + (obj['day'] > 9 ? obj['day'] : '0' + obj['day']);
      return obj;
    },
    //判断活动时间
    isActiveTime(beginTime,endTime){
      var dayTime=new Date().getTime();
      if((beginTime*1000)<dayTime&&(endTime*1000)>dayTime){
        return true;
      }else{
        return false;
      }
    },

    closeTip(){
      this.showAlert = false;
    },
    //点击签到
    async signIn(){
      if(this.signInRule.today_is_sign){
        return;
      }
      Indicator.open();
      let res=await userSigninActivity(this.signInRule.id);
      Indicator.close();
      if(res.res&&res.data){
        this.alertText=res.data;
        this.showAlert = true;
        this.initData();
      }else{
        Toast(res.message.mes);
      }
    }
  },

  //监听
  watch: {
    
  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
.signIn_containerwe{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
}

.signIn_wrap{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}

.buttom_layer{
  padding:.66rem .3rem .46rem;
  color:#666666;
  .signin_btn{
    width: 1.92rem;
    height: .7rem;
    line-height: .7rem;
    text-align: center;
    background-color: #FAA71B;
    border-radius: .35rem;
    margin:0 auto;
    color:#fff;
    &.actuve{
      background-color: #DDDDDD;
    }
  }
  .tpltext{
    text-align: center;
    line-height: .64rem;
    margin-bottom:.3rem;
  }
  .describe{
    line-height: .52rem;
    @include fj;
    align-items: center;
    .describeitem{
      .highlight{
        color:#FAA71B;
      }
    }
    .describe_l{

    }
    .describe_r{

    }
  }
}

.rule_layer{
  padding:.3rem .44rem;
  .rule_wrap{
    border-radius: .08rem;
    border: solid .025rem #dedede;
    padding: .3rem;
    position: relative;
  }
  .rule_title{
    @include cl();
    background-color: #fff;
    color:#333333;
    line-height: .46rem;
    padding: 0 .35rem;
    top: -.23rem;
  }
  .rule_list{
    padding-left: .2rem;
    .rule_item{
      font-size: .26rem;
      line-height: .42rem;
      color:#ccc;
    }
  }
}
</style>
