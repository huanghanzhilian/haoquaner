<template>
  <div class="exchange_container">
    <p>
      <input type="text" id="text1" value="请输入测试数据" width="400px" height="200px" />
    </p>
    <p>
      <button @click="testClick">调用安卓的方法</button>
    </p>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getGoodsList } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'
import { imgBaseUrl } from 'src/config/env'


export default {
  //数据
  data() {
    return {

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

      //注册回调函数，第一次连接时调用 初始化函数
      this.connectWebViewJavascriptBridge(function(bridge) {
        //初始化
        bridge.init(function(message, responseCallback) {
          var data = {
            'Javascript Responds': 'Wee!'
          };
          //响应回调
          responseCallback(data);
        });

        //Android调用js方法：functionInJs方法名称需要保持一致 ，并返回给Android通知

        bridge.registerHandler("functionInJs", function(data, responseCallback) {
          alert(data);
          var data = document.getElementById("text1").value;
          var responseData = "我是Android调用js方法返回的数据---" + data;
          responseCallback(responseData);
        });
      })
    },

    //JS注册事件监听
    connectWebViewJavascriptBridge(callback) {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function() {
            callback(WebViewJavascriptBridge)
          },
          false
        );
      }
    },

    //点击
    testClick() {
      //参数一：调用java中的方法   submitFromWeb是方法名，必须和Android中注册时候的方法名称保持一致
      //参数二：返回给Android端的数据，可以为字符串，json等信息
      //参数三：js接收到Android传递过来的数据之后的相应处理逻辑
      window.WebViewJavascriptBridge.callHandler(
        'submitFromWeb',
        {
          "transType": "MULTI_PURCHASE",
          "ctrlData": { "APP_NAME": "好券", "AIDL_VER": "V1.0.2" },
          "transData":{"AMOUNT":1,"TRANS_LIST":["INTEGRAL_PURCHASE"]}
        },
        // { "transType": "LOGON", "ctrlData": { "APP_NAME": "好券", "AIDL_VER": "V1.0.2" } },
        function(responseData) {
          alert(responseData)
        }

      );
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
