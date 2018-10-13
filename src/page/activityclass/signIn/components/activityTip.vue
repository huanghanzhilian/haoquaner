<template>
  <div class="alet_container">
    <section class="tip_text_container">
      <div class="tip_title">签到成功</div>
      <div class="tip_icon">
        <div class="img_wrap">
          <img src="../../../../images/signIn/integral.png">
        </div>
        <span>+{{parseFloat(alertText.today_signin_num)+parseFloat(alertText.signin_rule_num)}}</span>
      </div>
      <div class="tip_text_wrap">
        <p class="tip_text">今日签到奖励<span>{{parseFloat(alertText.today_signin_num)}}积分</span></p>
        <p class="tip_text" v-if="alertText.signin_rule_num">今日连续签到奖励<span>{{parseFloat(alertText.signin_rule_num)}}积分</span></p>
        <p class="tip_text">本轮已连续签到{{alertText.user_signin_num}}天</p>
      </div>
      <div class="confrim" @click="closeTip">知道了</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      positionY: 0,
      timer: null,
    }
  },
  mounted() {

  },
  props: ['alertText'],
  methods: {
    closeTip() {
      this.$emit('closeTip')
    }
  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';
@keyframes tipMove {
  0% {
      -webkit-transform: scale(.5);
      transform: scale(.5);
      opacity: 0;
  }

  to {
      -webkit-transform: scale(1);
      transform: scale(1);
       opacity: 1;
  }
}
@-webkit-keyframes tipMove {
  0% {
      -webkit-transform: scale(.5);
      transform: scale(.5);
       opacity: 0;
  }

  to {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
  }
}

.alet_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.2);
}

.tip_text_container {
  /*@include center();*/
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2.69rem;
  margin-left: -2.69rem;
  width: 5.38rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.08rem;
  background-color: #fff;
  padding-bottom: .3rem;
  /*transform: scale(.5);*/
  animation: tipMove .4s;
  .tip_title {
    height: .9rem;
    line-height: .9rem;
    color: #333333;
    font-size: .29rem;
  }
  .tip_icon {
    text-align: center;
    padding: .2rem 0;
    .img_wrap {
      width: 1.35rem;
      height: 1.35rem;
      margin-bottom: .1rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    span {
      font-size: .36rem;
      color: #FFB436;
    }
  }
  .tip_text_wrap{
    padding:.26rem 0;
    .tip_text {
      @include sc(.26rem, #666666);
      line-height: .4rem;
      text-align: center;
      span{
        color:#FFB436;
      }
    }
  }

  .confrim {
    color: #fff;
    font-size: .26rem;
    background-color: #FFB436;
    width: 1.92rem;
    text-align: center;
    line-height: .7rem;
    height: .7rem;
    border-radius: .35rem;
  }
}

</style>
