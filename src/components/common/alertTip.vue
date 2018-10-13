 <template>
    <div class="alet_container" @DOMMouseScroll="slaoak($event)" @mousewheel="slaoak($event)" @touchmove="slaoak($event)">
	    <section class="tip_text_container">
            <div class="tip_title" v-html="alertTitle||'温馨提示'"></div>
            <p class="tip_text" v-html="alertText"></p>
            <div class="confrim_box">
                <div v-if="alertType=='2'" class="confrim cancel" @click.stop="cancel">取消</div>
                <div class="confrim" @click.stop="closeTip">{{btntxt||"确认"}}</div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){
      
        },
        props: ['alertText','btntxt','alertTitle','alertType'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            },
            //去除滚动事件
            slaoak(event){
              event.preventDefault()
            },
            closecont(){
                this.$emit('closecont')
            },
            cancel(){
                this.$emit('closecont')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
    .alet_container{
    	position: fixed;
    	top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2000000;
        background-color: rgba(0,0,0,.5);
    }
    .tip_text_container{
        @include center;
        width: 6rem;
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*flex-direction: column;*/
        background-color: #fff;
        /*border-radius: .1rem;*/
        overflow: hidden;
        .tip_text{
            @include sc(.3rem, #666666);
            line-height: .45rem;
            text-align: center;
            padding:.4rem;
        }
        .tip_title{
            color: #333333;
            font-size: .3rem;
            line-height: .94rem;
            height: .94rem;
            text-align: center;
            border-bottom: solid .025rem #dddddd;
            span{
                font-size: .3rem;
            }
        }
        .confrim_box{
            display: flex;
            width: 100%;
            border-top: solid .025rem #dddddd;
        }
        .confrim{
            flex: 1;
            text-align: center;
            height: .94rem;
            line-height: .94rem;
            &.cancel{
                border-right: solid #ccc .025rem;
            }
        }
    }
    
</style>
