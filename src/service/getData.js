import http from './public'

//获取userinfo
export const getUserInfo = (aa) => {
  return http.fetchPost('/api/Bususer/getBusUserInfo',{aa})
};


//根据刷新token重置token接口
export const refreshToken = () => {
  return http.fetchPost('/api/Basic/tokenResetting')
};


/*==================首页布局====================*/
//首页布局&&数据列表模块接口
export const getLayoutControl= (is_draft) => {
  return http.fetchPost('/api/surface.Surface/getSurfaceInfo',{is_draft})
};


/*==================签到====================*/
//获取活动详情
export const getSigninActivity = (activity_type) => {
  return http.fetchPost('/api/activity.Signinactivity/getSigninActivity',{
    activity_type
  })
};
//获取用户指定月份的签到详情
export const getUserSigninDetail = (select_time,activity_id) => {
  return http.fetchPost('/api/activity.Signinactivity/getUserSigninDetail',{
    select_time,
    activity_id
  })
};

//当日签到
export const userSigninActivity = (activity_id) => {
  return http.fetchPost('/api/activity.Signinactivity/userSigninActivity',{
    activity_id
  })
};


/*==================优惠券====================*/
//查询会员券表
export const getMemberCouponList = (page,page_num,status) => {
  return http.fetchPost('/api/coupon.Coupon/getUserCouponList',{
    page,
    page_num,
    status
  })
};

/*=============商品列表=====================*/
//商品列表
//商品列表以及搜索接口
export const getProductList = (page, title,goods_type) => {
  return http.fetchPost('/api/goods.Sellgoods/sellGoodsList', { page, title,goods_type })
};

/*===============商品详情=================*/
//商品详情
//积分详情接口
export const getActivityDetail = (id) => {
  return http.fetchPost('/api/goods.Sellgoods/sellGoodsInfo', { id })
};

/*============用户预下单=============*/
export const preSubmitOrder = (goods_id, goods_num) => {
  return http.fetchPost('/api/order.Order/preSubmitOrder', { goods_id, goods_num})
};

/*============用户订单继续支付=============*/
export const continuePayOrder = (order_id) => {
  return http.fetchPost('/api/order.Order/continuePayOrder', { order_id})
};

/*============用户下单=============*/
export const submitOrder = (parameter) => {
  return http.fetchPost('/api/order.Order/submitOrder', parameter)
};


/*============用户切换优惠更新订单信息=============*/
export const renewOrder = (parameter) => {
  return http.fetchPost('/api/order.Order/renewOrder', parameter)
};

/*============微信下单=============*/
export const setWeixinOrder = (order_num,total_fee) => {
  return http.fetchPost('/api/pay.wechat/setWeixinOrder', {order_num,total_fee})
};

/*============订单支付(无补款)=============*/
export const score_SubmitOrder = (order_num,pay_type) => {
  return http.fetchPost('/api/pay.pay/payOrder', {order_num,pay_type})
};




/*============获取用户订单列表=============*/
export const getUserOrderList = (page,page_num) => {
  return http.fetchPost('/api/order.Order/getUserOrderList', { page,page_num})
};

/*============获取用户订单详情=============*/
export const getUserOrderInfo = (order_id) => {
  return http.fetchPost('/api/order.Order/getUserOrderInfo', { order_id})
};

/*============获取兑换记录列表（根据订单号获取）=============*/
export const getConvertRecordList = (order_id) => {
  return http.fetchPost('/api/convert.Convert/getConvertRecordList', { order_id,"convert_type":1})
};




/*============取消订单=============*/
export const userCancelOrder = (order_id) => {
  return http.fetchPost('/api/order.Order/userCancelOrder', { order_id})
};


/*============发送验证码接口=============*/
export const sendIdentifyCode = (phone) => {
  return http.fetchPost('/api/identifyingcode.Identifyingcode/sendIdentifyCode', { phone})
};

/*============验证验证码接口=============*/
export const checkIdentifyCode = (phone,code) => {
  return http.fetchPost('/api/identifyingcode.Identifyingcode/checkIdentifyCode', { phone,code})
};









//首页轮播图
export const roadcastList = () => {
  return http.fetchGet('/api/roadcast')
};

//首页三栏布局数据
export const threeColumn = () => {
  return http.fetchGet('/api/threecolumn')
};

//首页展示列表
export const indexOrderList = () => {
  return http.fetchGet('/api/order/list')
};

//积分记录
export const getExchangeList = (pageNum, pageSize) => {
  return http.fetchGet('/api/exchange/list', { pageNum, pageSize })
};








//订单详情接口
export const getOrderDetail = (id) => {
  return http.fetchGet('/api/order/detail', { id })
};

//提现详情展示中间页
export const getPutDetail = (id) => {
  return http.fetchGet('/api/put/detail', { id })
};

//获取短信验证码
export const getUserVerifycode = (account) => {
  return http.fetchGet('/api/user/verifycode', { account })
};




//播放历史记录
export const historicalList = (pageNum, pageSize) => {
  return http.fetchGet('/api/history/list', { pageNum, pageSize })
};




//获取主题样式
export const getThemecss = () => {
  return http.fetchGet('http://localhost:8091/app.js')
};


//测试
// export const isExistsss = () => {
//   return http.fetchGet('/api/channel/info',{
//     userId:17
//   })
// }


/*// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost('/users/updateheadimage', params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet('/goods/productHome', params)
}*/
