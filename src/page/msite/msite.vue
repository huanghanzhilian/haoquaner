<script>
import { mapMutations, mapState } from 'vuex'
import bannerControl from 'src/components/common/indexLayout/bannerControl'
import threeControl from 'src/components/common/indexLayout/threeControl'
import threeThreeControl from 'src/components/common/indexLayout/threeThreeControl'
import indexlistControl from 'src/components/common/indexLayout/indexlistControl'
import navtopControl from 'src/components/common/indexLayout/navtopControl'
import iconsControl from 'src/components/common/indexLayout/iconsControl'

import { getLayoutControl,getThemecss } from 'src/service/getData'

import errorControl from 'src/components/common/errorControl'



export default {
  render() {
    var layerItems = this.layerItems;
    var items = [];
    for (var i = 0; i < layerItems.length; i++) {
      if(layerItems[i].element_sign=='banner'){
        items.push(<banner-control key={i+1} roadcastArray={layerItems[i].data}></banner-control>);
      }else if(layerItems[i].itemType=='navtop'){
        items.push(<navtop-control></navtop-control>);
      }else if(layerItems[i].element_sign=='two'){
        items.push(<three-control threeObject={layerItems[i]}></three-control>);
      }else if(layerItems[i].element_sign=='three'){
        items.push(<three-three-control threeObject={layerItems[i]}></three-three-control>);
      }else if(layerItems[i].element_sign=='goods'){
        items.push(<indexlist-control commoArray={layerItems[i]}></indexlist-control>);
      }else if(layerItems[i].element_sign=='icon'){
        items.push(<icons-control items={layerItems[i].data}></icons-control>);
      }
    }
      return (
          <div class="msite_wrap">
            {
              this.is_draft
              ?<div class="prohibit"></div>
              :""
            }
            {items}
            {
              this.errorObj.status
              ?<error-control errorObj={this.errorObj}></error-control>
              :""
            }
          </div>
      );
  },
  //数据
  data() {
    return {
      layerItems:[],//布局数据
      //处理错误机制数据
      errorObj:{
        status:false,
        text:'出现异常',
        type:1,
      }
    }
  },

  //创建完毕状态
  created() {
    document.title = this.userInfo.mall_name;
    this.is_draft = this.$route.query.is_draft;
    //this.productId = this.$route.query.productId;
  },

  //挂载结束状态
  mounted() {
    this.initData();
  },

  //需要使用的模块
  components: {
    bannerControl,
    threeControl,
    threeThreeControl,
    indexlistControl,
    navtopControl,
    iconsControl,
    errorControl
  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {
    ...mapState([
      'userInfo','isGonghang'
    ]),
  },

  //方法
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ]),
    async initData() {
      this.$bus.$emit('execute-setcolor')
      //获取布局数据
      await getLayoutControl(this.is_draft).then(res => {
        if(res.res){
          this.layerItems=res.data;
        }else{
          this.errorObj.status=true;
          this.errorObj.text=res.message.mes;
        }
      });
      this.SET_LOADING(false);
    },
  },

  //更新完成状态
  updated() {
    this.$bus.$emit('execute-setcolor')
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
.msite_wrap{
  position: relative;
}
.prohibit{
  position: absolute;
  top: 0;
  bottom: 0;
  left:0;
  right: 0;
  background-color: rgba(0,0,0,0);
  z-index: 99999;
}
</style>
