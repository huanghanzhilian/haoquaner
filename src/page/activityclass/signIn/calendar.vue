<template>
  <div>
    <div class="calendar calendar1" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
      <table>
        <caption>
          <!-- <a class="widget-prevMonth" @click="prevMonth" href="javascript:;">&lt;</a>
          <span class="widget-title">{{day['year']}}年{{day['month']}}月</span>
          <a class="widget-nextMonth" href="javascript:;" @click="nextMonth">&gt;</a> -->
          <!-- <a class="widget-back" href="javascript:;">今天</a> -->
          <a class="widget-prevMonth" @click="$emit('closeTip','left')" href="javascript:;">
            <i class="iconfont icon-fanhui icon_styles"></i>
          </a>
          <span class="widget-title">{{day['year']}}-{{day['month']>9?day['month']:'0'+day['month']}}</span>
          <a class="widget-nextMonth" href="javascript:;" @click="$emit('closeTip','right')">
            <i class="iconfont icon-gengduo icon_styles"></i>
          </a>
        </caption>
        <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in renderArr">
            <td class="" :class="{'active':items.active,'widget-today':items.sign.length,'widget-disabled':items.status}" @click="onSelect(index,indexs)" v-for="(items,indexs) in item"> <span>{{items.day}}</span> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      today: null, //当天
      data: [], //日期数据
      day: {}, //日历状态  年月
      range: [],
      options: {
        isRange: false, //是否选择范围
        limitRange: [], //有效选择区域的范围
        highlightRange: ['20180808', '20180809'], //指定日期范围高亮
      },

      //触摸起始位置
      _start:{},
      //触摸结束位置
      _end:{},
    }
  },
  mounted() {
    this.initData();
  },
  props: ['alertText', 'btntxt', 'alertTitle', 'alertType', 'highlightList'],
  computed: {
    renderArr() {
      var data = this.data;
      var arr = [];
      var index = -1;
      for (var i = 0; i < data.length; i++) {
        if (i % 7 == 6 && i < data.length) {
          index++;
          arr[index] = data.slice(index * 7, i + 1);
        }
      }
      return arr;
    }
  },
  methods: {
    //初始化数据
    initData() {
      this.today = this.getDateObj(); //获取当天数据 详细
      this.day = {
        'year': this.today['year'],
        'month': this.today['month']
      };
      this.getData();
    },
    /**
     * 事件
     */
    //点击某个日期
    onSelect(index,indexs){
      var item=this.renderArr[index][indexs]
      console.log(item.year+'年'+item.month+'月'+item.day+'日')
    },

    //触摸开始
    touchStart(event){
      //console.log('开始');
      this._start = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY
      };
      //console.log(this._start.pageX)
    },
    //触摸滑动
    touchMove(event){
      //console.log(event)
    },
    //触摸结束
    touchEnd(event){
      //console.log('开始');
      this._end = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY
      };
      //console.log(this._end.pageX)
      if(this._end.pageX!==this._start.pageX){
        //this._end.pageX>this._start.pageX?this.prevMonth():this.nextMonth();
        var status=this._end.pageX>this._start.pageX?'left':'right'
        this.$emit('closeTip',status)
      }
    },

    prevMonth(){
      console.log(this.highlightList)
      this.day['month']--;
      this.getData(this.day);
    },
    nextMonth(){
      this.day['month']++;
      this.getData(this.day);
    },
    //获取日期数据
    getDateObj: function(year, month, day) {
      var date = arguments.length && year ? new Date(year, month - 1, day) : new Date();
      var obj = {
        'year': date.getFullYear(),
        'month': date.getMonth() + 1,
        'day': date.getDate(),
        'week': date.getDay()
      };
      obj['code'] = '' + obj['year'] + (obj['month'] > 9 ? obj['month'] : '0' + obj['month']) + (obj['day'] > 9 ? obj['day'] : '0' + obj['day']);
      return obj;
    },
    //获取当月天数
    getMonthDays: function(obj) {
      var day = new Date(obj.year, obj.month, 0);
      return day.getDate();
    },
    getData: function(obj) {
      if(obj){
        console.log(obj['year'],obj['month'])
      }
      
      var self = this;
      if (typeof obj == 'undefined') {
        obj = self.today;
      }
      self.day = self.getDateObj(obj['year'], obj['month'], 1); //得到当月第一天的数据
      //console.log(self.day)
      var days = self.getMonthDays(self.day); //得到当月的天数
      var data = []; //日历信息数据

      var obj = {};
      //上月日期
      for (var i = self.day['week']; i > 0; i--) {
        obj = self.getDateObj(self.day['year'], self.day['month'], self.day['day'] - i);
        var info = self.getDateInfo(obj);
        if (!self.options.limitRange.length) {
          info['status'] = 'disabled';
        }
        data.push(info);
      }
      //当月日期
      for (var i = 0; i < days; i++) {
        obj = {
          'year': self.day['year'],
          'month': self.day['month'],
          'day': self.day['day'] + i,
          'week': (self.day['week'] + i) % 7
        };
        obj['code'] = '' + obj['year'] + (obj['month'] > 9 ? obj['month'] : '0' + obj['month']) + (obj['day'] > 9 ? obj['day'] : '0' + obj['day']);
        var info = self.getDateInfo(obj);
        data.push(info);
      }
      //下月日期
      var last = obj;
      for (var i = 1; last['week'] + i < 7; i++) {
        obj = self.getDateObj(last['year'], last['month'], last['day'] + i);
        var info = self.getDateInfo(obj);
        if (!self.options.limitRange.length) {
          info['status'] = 'disabled';
        }
        data.push(info);
      }
      this.data = data;
      //console.log(data)
    },

    //获取某天日期信息
    getDateInfo: function(obj) {
      var self = this;
      //限制范围
      if (self.options.limitRange.length) {
        obj['status'] = 'disabled';
        for (var i = 0; i < self.options.limitRange.length; i++) {
          var start = self.options.limitRange[i][0]; //得到起始日期
          var end = self.options.limitRange[i][1]; //得到结束日期
          if (start == 'today') { //起始日期等于今天
            start = self.today['code'];
          }
          if (end == 'today') {
            end = self.today['code'];
          }
          if (start > end) {
            start = [end, end = start][0];
          }
          if (obj['code'] >= start && obj['code'] <= end) {
            obj['status'] = '';
            break;
          }
        }
      }
      obj['sign'] = [];
      if (self.options.highlightRange.length) {
        for (var i = 0; i < self.options.highlightRange.length; i++) {
          var start = self.options.highlightRange[i][0];
          var end = self.options.highlightRange[i][1];
          if (start == 'today') {
            start = self.today['code'];
          }
          if (end == 'today') {
            end = self.today['code'];
          }
          if (start > end) {
            start = [end, end = start][0];
          }
          if (obj['code'] >= start && obj['code'] <= end) {
            obj['sign'].push('highlight');
            break;
          }
        }
      }
      //如果有高亮数据
      if (self.highlightList.length) {
        for (var i = 0; i < self.highlightList.length; i++) {
          if (obj['code'] == self.highlightList[i]) {
            obj['active'] = 'active';
            break;
          }
        }
      }


      if (obj['code'] == self.today['code']) {
        obj['sign'].push('today');
      }


      return obj;
    },



  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
caption{
  line-height: .76rem;
  color:#555555;
  border-bottom: solid .025rem #dedede;
  a{
    color:#cccccc;
  }
}
.calendar{
  font-size: .32rem;
}
.widget-title{
  padding:0 .45rem;
}
.calendar thead{
  /*line-height: .7rem;*/
  th{
    padding:.15rem 0;
  }
}
.calendar td, .calendar th {
    height: .7rem;
    line-height: .7rem;
    text-align: center;
}
.calendar th {
  color:#555555;
  font-size: .32rem;
  font-weight: normal;
}
.calendar .widget-disabled span {
    color: #555555;
}

.calendar td span {
    display: block;
    width: .68rem;
    height: .68rem;
    margin: 0 auto;
    color: #555555;
}
.calendar .widget-disabled span {
    color: #fff;
}

.active span {
  background-image: url(../../../images/signIn/active.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
/*当天*/
.calendar td.widget-today span{
  color:#FAA71B;
}

</style>
