# 准备工作


# 工作顺序
1. 换肤机制设计
2. 首页布局通过数据渲染组件设计 以及首页组件开发
3. 商品列表页
4. 商品详情以及购买流程
5. 我的订单
6. 优惠券
7. 签到


# 疑问
工行app疑问

# 开发排期
```
一，通用组件
	1. 404页面  																		|20180912                 	完成
	2. 错误页面  																	|20180912                 	完成
	3. 雪碧图  																		|20180912                 	完成
	4. 状态页  																		|20180912
	5. 换肤机制设计  																	|20180912					已开发 需调整ui
二，首页组件开发,通过数据渲染组件设计
	1. banner组件  																	|20180913					完成 等待接口
	2. icon组件  																	|20180913
	3. 橱窗位组件  																	|20180913
	4. 推荐商品组件  																	|20180913
	5. 首页控制数据渲染展示  															|20180913
三，我的优惠券
	1. 可用优惠券  																	|20180914					完成 等待接口
	2. 不可用优惠券  																	|20180914
四，全部商品页
	1. 页面下拉加载功能  																|20180915					已开发 等待接口
	2. 商品筛选组件（通过数据调整）													|20180915					已开发 等待接口
	3. 商品类型，渠道,对应不同逻辑处理  												|20180915
五，签到
	1. 日历组件支持切换月份，签到日高亮  												|20180917					已开发 待接入接口
	2. 奖励机制活动特效功能  															|20180917					完成
六，商品详情以及购买流程
	1. 商品详情页，根据不同商品类型和商户渠道，展示对应ui和逻辑处理  						|20180918-20180920   		已开发 等待接口
		（1）纯积分购买流程
		（2）纯现金购买流程
		（3）纯现金购买流程
		（4）纯现金购买流程
		（5）支付页功能（多平台支付）
		（6）购买结果
七，我的订单  																		|20180921-20180925			已开发 需调整ui 等待接口
	1. 订单详情-待支付
	2. 订单详情-已取消
	3. 订单详情-成功
	4. 订单详情-待发货
	5. 订单详情-待收货
	6. 订单详情-已完成
	7. 订单详情-退款中
	8. 兼容钜派订单功能
八，内部联调  																		|20180926-20180928
九，bug修复																			|20180926-20180928

```

20181009需要完成工作

1，联调订单模块
2，订单详情模块
3，数据错误icon更换
4，工行支付 配合android调通




# 前言




# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   ├── alertTip.vue                    // 弹出框组件
│   │   ├── footer
│   │   │   └── footGuide.vue                   // 底部公共组件
│   │   └── header
│   │       └── head.vue                        // 头部公共组件
│   ├── config                                  // 基本配置
│   │   ├── env.js                              // 环境切换配置
│   │   ├── fetch.js                            // 获取数据
│   │   ├── mUtils.js                           // 常用的js方法
│   │   └── rem.js                              // px转换rem
│   ├── images                                  // 公共图片
│   ├── page
│   │   ├── msite
│   │   │   └── msite.vue                       // 首页
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   │   └── tempdata                            // 开发阶段的临时数据
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   └── style
│       ├── common.scss                         // 公共样式文件
│       ├── mixin.scss                          // 样式配置文件
│       └── swiper.min.css
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.

56 directories, 203 files
```

# 隧道代理
./ngrok -config ngrok.cfg -subdomain saas_watch 8072


# 预览
http://saas_watch.tunnel.qydev.com


系统win10 :
1.下载apache服务器
2.cmd进入apache安装目录的bin文件夹
3.开始玩测试：ab -n1000 -c10 http://saas_watch.tunnel.qydev.com

./ab -n1000 -c10 http://saas_watch.tunnel.qydev.com

./ab -n1000 -c10 http://localhost:8072/

-n1000是说总的请求数是1000个它默认值是1，

-c10 这是说并发数是10默认值也是1

http://localhost:2017/
是输入要测试的地址，注意地址后面需要加斜线

-t是用来测试进行总时间，
-p是post的数据文件
-w是以html表格的格式输出结果




SlimAdam
samured.com


samuredwonder
Dmc741456

Token值：ed214e7d7cddda0b6f449da56e342f82



页面模板
```
<template>
  <div class="confirm_container">
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
    this.id = this.$route.query.id;
    //this.productId = this.$route.query.productId;
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

  },

  //方法
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ]),
    async initData() {
      //获取数据
      let res = await getActivityDetail(this.id);
      if (res.res) {
        this.detailsObject = res.data;
        this.SET_LOADING(false);
      } else {
        this.errorObj.status = true;
        this.errorObj.text = res.message.mes;
        this.SET_LOADING(false);
      }
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

</style>

```