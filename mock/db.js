// db.js
var Mock = require('mockjs');

module.exports = {
  getComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result|40": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  }),
  //php模拟数据
  play: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": []
  }),


  //首页布局模块接口
  api_layout_control: Mock.mock({
    "res":true,
    "message": "success",
    "data":[{
      "itemType":"banner",
      "results|6": [{
        "banner_title":"@csentence(3, 5)",
        "banner_type":"@integer(1, 2)",
        "goods_id":"@id",
        "roadcastUrl": "http://baidu.com",
        "roadcastImg": "@IMG(750x328,@color())"
      }]
    },{
      "itemType":"icons",
      "results":[{
        "itemText":"所有商品",
        "itemCode":"1",
        "router":"goodsList"
      },{
        "itemText":"我的积分",
        "itemCode":"2",
        "router":"integralQuery"
      },{
        "itemText":"我的订单",
        "itemCode":"3",
        "router":"accountOrder"
      },{
        "itemText":"签到",
        "itemCode":"5",
        "router":"qdlottery"
      },{
        "itemText":"我的优惠券",
        "itemCode":"4",
        "router":"ticketList"
      }]
    },{
      "itemType":"threeTwo",
      "results": {
        "title": "@csentence(3, 5)",
        "data": [{
          "name": "@csentence(3, 5)",
          "describe": "@cparagraph(1, 3)",
          "id": "@id",
          "roadcastImg": "http://test.huanghanlian.com/%E9%A6%96%E9%A1%B5%E5%88%87%E5%9B%BE_07.png"
        },{
          "name": "@csentence(3, 5)",
          "describe": "@cparagraph(1, 3)",
          "id": "@id",
          "roadcastImg": "http://test.huanghanlian.com/%E9%A6%96%E9%A1%B5%E5%88%87%E5%9B%BE_09.png"
        }]
      }
    },{
      "itemType":"threeThree",
      "results": {
        "title": "@csentence(3, 5)",
        "data|3": [{
          "name": "@csentence(3, 5)",
          "describe": "@cparagraph(1, 3)",
          "id": "@id",
          "roadcastImg": "@IMG(300x160,@color())"
        }]
      }
    },{
      "itemType":"indexlist",
      "results":{
        "listTitle":"@csentence(3, 5)",
        "listData|20": [{
          "laber":"@csentence(1, 2)",
          "describe": "@cparagraph(1, 3)",
          "id": "@id",
          "roadcastImg": "@IMG(300x160,@color())",
          "goldcoin": "@natural(0, 100)"
        }]
      }
    },{
      "itemType":"three",
      "results": {
        "left": [{
          "name": "@csentence(3, 5)",
          "describe": "@cparagraph(1, 3)",
          "id": "@id",
          "roadcastImg": "@IMG(300x160,@color())"
        }],
        "right|2": [{
          "name": "@csentence(3, 5)",
          "describe": "@cparagraph(1, 3)",
          "id": "@id",
          "roadcastImg": "@IMG(300x160,@color())"
        }]
      }
    }]
  }),

  //可用优惠券
  api_getMemberCouponList: Mock.mock({
    "res": true,
    "data": {
      "count_num": 1,
      "list": [{
        "id": 133,
        "wx_card_code": "0028341676151979",
        "coupon_template_id": 100,
        "end_time": "2018-12-01 00:00:00",
        "status": 2,
        "title": "满100减20",
        "wx_logo_url": "https://mmbiz.qlogo.cn/mmbiz_jpg/6rqCdykt50hBAFbdMz9wxKSrwwOTKWsSlS17xASasvl06GtVjpcaclqziclb0IA4KjLmpVwcshwsV4QRwB0Hkkg/0?wx_fmt=jpeg"
      },{
        "id": 133,
        "wx_card_code": "0028341676151979",
        "coupon_template_id": 100,
        "end_time": "2018-12-01 00:00:00",
        "status": 2,
        "title": "满100减20",
        "wx_logo_url": "https://mmbiz.qlogo.cn/mmbiz_jpg/6rqCdykt50hBAFbdMz9wxKSrwwOTKWsSlS17xASasvl06GtVjpcaclqziclb0IA4KjLmpVwcshwsV4QRwB0Hkkg/0?wx_fmt=jpeg"
      },{
        "id": 133,
        "wx_card_code": "0028341676151979",
        "coupon_template_id": 100,
        "end_time": "2018-12-01 00:00:00",
        "status": 2,
        "title": "满100减20",
        "wx_logo_url": "https://mmbiz.qlogo.cn/mmbiz_jpg/6rqCdykt50hBAFbdMz9wxKSrwwOTKWsSlS17xASasvl06GtVjpcaclqziclb0IA4KjLmpVwcshwsV4QRwB0Hkkg/0?wx_fmt=jpeg"
      }]
    }
  }),

  //商品详情接口
  api_activity_detail: Mock.mock({
    "res": true,
    "message": "success",
    "data": {
      "originalIntegral": "@natural(0, 100)",
      "newIntegral": "@natural(0, 100)",
      "name": "@csentence(3, 5)",
      "newTime": "@date('yyyy-MM-dd')",
      "oldTime": "@date('yyyy-MM-dd')",
      "id": "@id",
      "roadcastImg": "@IMG(300x160,@color())",
      "status": true, //"@boolean",
      "describe": "@cparagraph(1, 3)",
      "goldcoin": "@natural(0, 100)",
    }
  }),

  //所以积分列表接口
  api_product_list: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": {
      "pageAmount": 114,
      "pageNow": 1,
      "pageSize": 8,
      "recordAmount": 911,
      "row|12": [{
        "laber":"@csentence(1, 2)",
        "describe": "@cparagraph(1, 3)",
        "id": "@id",
        "time": "@datetime()",
        "roadcastImg": "@IMG(300x160,@color())",
        "goldcoin": "@natural(0, 100)",
        "status": "@boolean"
      }]
    }
  }),

  //订单详情接口
  api_order_detail: Mock.mock({
    "res": true,
    "message": "success",
    "data": {
      "number": "@id",
      "originalIntegral": "@natural(0, 100)",
      "newIntegral": "@natural(0, 100)",
      "name": "@csentence(3, 5)",
      "newTime": "@date('yyyy-MM-dd')",
      "oldTime": "@date('yyyy-MM-dd')",
      "id": "@id",
      "roadcastImg": "@IMG(300x160,@color())",
      "status": "@boolean",
      "describe": "@cparagraph(1, 3)",
      "goldcoin": "@natural(0, 100)",
      "useBtnStatus": true,
      "putBtnStatus": true,
      "orderStatus": true,
    }
  }),




















  //轮播图
  api_roadcast: Mock.mock({
    "code": 0,
    "msg": "success",
    "data|6": [{
      "roadcastUrl": "http://baidu.com",
      "roadcastImg": "@IMG(750x328,@color())"
    }]
  }),


  //首页三栏布局数据
  api_threecolumn: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": {
      "left": [{
        "name": "@csentence(3, 5)",
        "describe": "@cparagraph(1, 3)",
        "id": "@id",
        "roadcastImg": "@IMG(300x160,@color())"
      }],
      "right|2": [{
        "name": "@csentence(3, 5)",
        "describe": "@cparagraph(1, 3)",
        "id": "@id",
        "roadcastImg": "@IMG(300x160,@color())"
      }]
    }
  }),

  //首页展示列表
  api_order_list: Mock.mock({
    "code": 0,
    "msg": "success",
    "data|20": [{
      "describe": "@cparagraph(1, 3)",
      "id": "@id",
      "roadcastImg": "@IMG(300x160,@color())",
      "goldcoin": "@natural(0, 100)"
    }]
  }),

  //积分记录
  api_exchange_list: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": {
      "pageAmount": 114,
      "pageNow": 1,
      "pageSize": 8,
      "recordAmount": 911,
      "row|12": [{
        "describe": "@cparagraph(1, 3)",
        "id": "@id",
        "time": "@datetime()",
        "roadcastImg": "@IMG(300x160,@color())",
        "goldcoin": "@natural(0, 100)",
        "status": "@boolean"
      }]
    }
  }),

  

  


  

  //提现详情展示中间页
  api_put_detail: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": {
      "number": "@id",
      "originalIntegral": "@natural(0, 100)",
      "newIntegral": "@natural(0, 100)",
      "name": "@csentence(3, 5)",
      "newTime": "@date('yyyy-MM-dd')",
      "oldTime": "@date('yyyy-MM-dd')",
      "id": "@id",
      "roadcastImg": "@IMG(300x160,@color())",
      "status": "@boolean",
      "describe": "@cparagraph(1, 3)",
      "goldcoin": "@natural(0, 100)",
      "useBtnStatus": true,
      "putBtnStatus": true,
      "orderStatus": true,
      "userPhone": "13698989999",
      "money": "47.00",
      "Service": "3.00",
    }
  }),

  //获取短信验证码
  api_user_verifycode: Mock.mock({
    "code": 0,
    "msg": "成功",
  }),














  //根据刷新token重置token接口
  api_Basic_tokenResetting: Mock.mock({
    "res": true,
    "message": " 成功",
    "data": {
      "access_token": "20db173a598b143e37b4e573f4da73e4",
      "refresh_token": "a41750c2d033ce8fcf4346926557b8e2"
    }
  }),

 

};
