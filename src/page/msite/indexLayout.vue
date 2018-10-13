<script>
import { mapMutations, mapState } from 'vuex'
import bannerControl from 'src/components/common/indexLayout/bannerControl'
import threeControl from 'src/components/common/indexLayout/threeControl'
import indexlistControl from 'src/components/common/indexLayout/indexlistControl'
import navtopControl from 'src/components/common/indexLayout/navtopControl'

import { getLayoutControl,getThemecss } from 'src/service/getData'



export default {
  //数据
  data() {
    return {
      
    }
  },
  render() {
    var layerItems = ['indexlist','sowing','navtop','threeControl','sowing'];
    var items = [];
    for (var i = 0; i < layerItems.length; i++) {
      if(layerItems[i]=='sowing'){
        items.push(<banner-control></banner-control>);
      }else if(layerItems[i]=='navtop'){
        items.push(<navtop-control></navtop-control>);
      }else if(layerItems[i]=='threeControl'){
        items.push(<threeControl></threeControl>);
      }else if(layerItems[i]=='indexlist'){
        items.push(<indexlist-control></indexlist-control>);
      }
    }
      return (
          <div class="msite_wrap" >
              {items}
          </div>
      );
  },

  //创建完毕状态
  created() {
    //this.openid = this.$route.query.openid;
    //this.productId = this.$route.query.productId;
  },

  //挂载结束状态
  mounted() {
    //this.initData();
  },

  //需要使用的模块
  components: {
    bannerControl,
    threeControl,
    indexlistControl,
    navtopControl
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
      this.$bus.$emit('execute-setcolor')
      //获取布局数据
      // await getLayoutControl().then(res => {
        
      // });
      this.SET_LOADING(false);
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.msite_container {
  flex: 1;
}









</style>
