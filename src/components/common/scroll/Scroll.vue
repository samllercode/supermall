<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        data() {
            return {
                scroll:{
                    type:Object,
                    default() {
                        return {}
                    }
                }
            }
        },
        //接收父组件来的值
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            //1、创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType:this.probeType,//由父组件传入的值决定是否实时监听
                pullUpLoad:this.pullUpLoad,
                click:true
            })
            //2、监听滚动位置
            this.scroll.on('scroll', (postion) => {
                //console.log(postion);
                this.$emit('scroll', postion)
            })
            //3、监听上拉位置
            this.scroll.on('pullingUp',() =>{
            // console.log('上拉加载更多');
            this.$emit('pullingUp')
            })

        },
        methods:{
            scrollTo(x, y, time=300) {
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>
