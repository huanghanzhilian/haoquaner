import App from '../App'

const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite'); //首页
const exchangeList = r => require.ensure([], () => r(require('../page/exchangeList/exchangeList')), 'exchangeList'); //历史记录页面



const putForward = r => require.ensure([], () => r(require('../page/putForward/putForward')), 'putForward'); //提现页面
const putStatus = r => require.ensure([], () => r(require('../page/putStatus/putStatus')), 'putStatus'); //提现状态页面

/*====================所有商品=======================*/
const list = r => require.ensure([], () => r(require('../page/list/list')), 'list'); //所有商品

/*====================商品详情页=======================*/
const detail = r => require.ensure([], () => r(require('../page/detail/detail')), 'detail'); //商品详情页
const confirm = r => require.ensure([], () => r(require('../page/detail/confirm')), 'confirm'); //确认订单页
const result = r => require.ensure([], () => r(require('../page/detail/result')), 'result'); //购买结果页



/*====================优惠券=======================*/
const coupon = r => require.ensure([], () => r(require('../page/ticketList/coupon')), 'coupon'); //可用优惠券
const invalidCoupon = r => require.ensure([], () => r(require('../page/ticketList/invalidCoupon')), 'invalidCoupon'); //无效优惠券

/*====================错误404页面=======================*/
const error = r => require.ensure([], () => r(require('../page/error/error')), 'error'); //错误页面

/*============活动类=========================*/
const signIn = r => require.ensure([], () => r(require('../page/activityclass/signIn/signIn')), 'signIn'); //签到

/*============我的订单=========================*/
const accountOrder = r => require.ensure([], () => r(require('../page/accountOrder/accountOrder')), 'accountOrder'); //我的订单
const orderDetail = r => require.ensure([], () => r(require('../page/orderDetail/orderDetail')), 'orderDetail'); //订单详情页面

/*===================我的积分==================*/
const integralQuery = r => require.ensure([], () => r(require('../page/integralQuery/integralQuery')), 'integralQuery'); //我的积分

const androidTest = r => require.ensure([], () => r(require('../page/test/androidTest')), 'androidTest'); //android测试

/**
 * 所有商品 goodsList
 * 我的积分 integralQuery
 * 我的订单 accountOrder
 * 我的优惠券 ticketList
 * 签到 qdlottery
 */



export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [
    //二级路由。对应App.vue
    //地址为空时跳转msite页面
    // {
    //     path: '/',
    //     redirect: '/'
    // },
    //首页
    {
      path: '/',
      name: 'msite',
      component: msite,
      meta: {
        // keepAlive: true,
        title: '拉卡拉-积分购'
      },
    },
    //兑换列表页
    {
      path: '/exchangeList',
      name: 'exchangeList',
      component: exchangeList,
      meta: {
        title: '兑换记录'
      },
    },
    
    //订单详情页面
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail,
      meta: {
        title: '订单详情'
      },
    },
    
    //putForward
    {
      path: '/putForward',
      name: 'putForward',
      component: putForward,
      meta: {
        title: '折现'
      },
    },
    {
      path: '/putStatus',
      name: 'putStatus',
      component: putStatus,
      meta: {
        title: '折现状态'
      },
    },

    /*=====================商品列表页=========================*/
    {
      path: '/goodsList',
      name: 'list',
      component: list,
      meta: {
        title: '所有商品'
      },
    },
    /*=====================商品详情页=========================*/
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: {
        title: '商品详情页'
      },
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm,
      meta: {
        title: '订单确认页'
      },
    },
    {
      path: '/result',
      name: 'result',
      component: result,
      meta: {
        title: '购买结果页'
      },
    },
    

    /*====================优惠券=======================*/
    {
      path: '/ticketList',
      name: 'coupon',
      component: coupon,
      meta: {
        title: '可用优惠券'
      },
    },
    {
      path: '/ticketInvalid',
      name: 'invalidCoupon',
      component: invalidCoupon,
      meta: {
        title: '无效优惠券'
      },
    },

    /*============我的订单=========================*/
    {
      path: '/accountOrder',
      name: 'accountOrder',
      component: accountOrder,
      meta: {
        title: '我的订单'
      },
    },

    /*============我的积分=========================*/
    {
      path: '/integralQuery',
      name: 'integralQuery',
      component: integralQuery,
      meta: {
        title: '我的积分'
      },
    },


    /*============android测试=========================*/
    {
      path: '/androidTest',
      name: 'androidTest',
      component: androidTest,
      meta: {
        title: 'android测试'
      },
    },

    /*============活动类=========================*/
    {
      path: '/qdlottery',
      name: 'signIn',
      component: signIn,
      meta: {
        title: '签到'
      },
    },
    /*====================错误404页面=======================*/
    {
      path: '/error',
      name: 'error',
      component: error,
      meta: {
        title: '出错啦'
      },
    },
    /*====================异常路由处理=======================*/
    {
      path: '/',
      redirect: '/'
    },
    // 404页面
    {
      path: '*',
      component: error,
      redirect: '/error'
    }


  ]
}]