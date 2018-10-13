<template>
  <div class="ticket-list-picker" v-if="value">
    <!-- 优惠券选择遮罩 -->
    <transition name="fade">
      <div class="screen_cover" v-show="showDialogue" @click="closeDialogue"></div>
    </transition>
    <!-- 优惠券选择遮罩 -->
    <!-- 优惠券选择 -->
    <transition name="toggle-cart">
      <section class="cart_food_list " v-show="showDialogue">
        <div class="opslo_wrap" ref="input">
          <div class="opslo_wrap_title">
            <div class="title_left">{{title}}</div>
            <div class="title_right" @click="toggleDialogue">
              <i class="iconfont icon-guanbi icon_styles"></i>
            </div>
          </div>
          <ul class="opslo_list_wrap">
            <li class="opslo_list" v-for="(item,index) in options" @click="increase(index)">
              <div class="item_left">{{item.pay_name}}
                <!-- <span class="text_dep">{{item.time}}</span> -->
              </div>
              <div class="item_right">
                <i v-if="item.id==value.id" class="iconfont icon-duigou- icon_styles"></i>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </transition>
    <!-- 优惠券选择 -->
  </div>
</template>
<script>

export default {
  //数据
  data() {
    return {
      //优惠券选择
      showDialogue:false
    }
  },
  created(){
    console.log(this.value)
    if(!this.value){
      this.$refs.input.value=this.options[0];
      this.$emit('input', this.$refs.input.value);
      console.log(this.value)
    }
  },
  //挂载结束状态
  mounted() {
    
  },
  //需要使用的模块
  components: {
    
  },
  //父组件的参数书
  props: ['options','value','title'],
  //需要引用的外部js方法
  mixins: [],
  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },
  //方法
  methods: {
    toggleDialogue() {
      this.showDialogue = !this.showDialogue;
    },
    increase(index){
      this.$refs.input.value=this.options[index];
      this.$emit('input', this.$refs.input.value);
      this.showDialogue=false;
    },
    closeDialogue(){
      this.showDialogue = false;
    },
  },
  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

/*蒙版 s */
.screen_cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .2);
  z-index: 1111;
}
/*蒙版 s */

/*优惠券选择 s */
.cart_food_list {
  position: fixed;
  width: 100%;
  z-index: 1112;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-radius: .2rem .2rem 0 0;
  .opslo_wrap{
    padding:0 .28rem;
    .opslo_wrap_title{
      height: .94rem;
      @include fj;
      align-items: center;
      .title_left{
        color: #333333;
        font-size: .3rem;
      }
      .title_right{
        color: #999999;
      }
    }
    .opslo_list{
      height: .86rem;
      @include fj;
      align-items: center;
      border-bottom: solid .025rem #E0E0E0;
      &:last-child {
        border-bottom: none;
      }
      .item_left{
        display: flex;
        align-items: center;
        font-size: .28rem;
        color: #333333;
        .text_dep{
          margin-left: .2rem;
          font-size: .24rem;
          color: #666666;
        }
      }
      .item_right{
        font-size: .3rem;
        .icon_styles{
          width: .4rem;
          height: .4rem;
          text-align: center;
          line-height: .4rem;
          border-radius: .2rem;
          display: inline-block;
          background-color: #14c19e;
          color: #fff;
        }
      }
    }
  }
}
/*优惠券选择 e */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.toggle-cart-enter-active,
.toggle-cart-leave-active {
  transition: all .3s ease-out;
}

.toggle-cart-enter,
.toggle-cart-leave-active {
  transform: translateY(100%);
}
</style>