<template>
    <div id="hy-swiper">
        <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @tochend="touchEnd">
            <slot></slot>
        </div>
        <slot name="indicator"></slot>
        <div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index=currentIndex-1}" :key="index"></div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"Swiper",
    props:{
        interval:{//滚动的时间
            type:Number,
            default:3000
        },
        animDuration:{//延迟滚动的时间
            type:Number,
            default:300
        },
        moveRatio:{//滑动图片划到四分之一即可跳到下一张
            type:Number,
            default:0.25
        },
        showIndicator:{//默认显示指示器
            type:Boolean,
            default:true
        }
    },
    data:function(){
        return{
            slideCount:0,//元素个数
            totalWidth:0,//swiper的宽度
            swiperStyle:{},//swiper的样式
            currentIndex: 1, // 当前的index
            scrolling: false, // 是否正在滚动
        }
    },
    mounted:function(){
        //1、 操作dom,再前后添加slide
        setTimeout(() =>{
            this.handleDom();

            // 2、开启定时器
            this.startTimer();
        },200)
    },
    methods:{
        // 定时操作
        startTimer:function(){
            this.playTimer = window.setInterval(() =>{
                this.currentIndex++;
                this.scrollContent(-this.currentIndex * this.totalWidth);
            },this.interval)
        },
        stopTimer:function(){
            window.clearInterval(this.playTimer);
        },
        // 滚动到正确位置
        scrollContent:function(currentPositon){
            this.scrolling = true //设置正常滚动
            // 开始滚动动画
            this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
            this.setTransform(currentPositon);
            // 判断滚动的位置
            this.checkPosition();
            // 滚动完成
            this.scrolling = false;
        },

        // 检验正确位置
        checkPosition(){
            window.setTimeout(() =>{
                // 1检验正确位置
                this.swiperStyle.transition = '0ms';
                if(this.currentIndex >= this.slideCount +1){
                    this.currentIndex =1;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                }else if(this.currentIndex <= 0){
                    this.currentIndex = this.slideCount;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                }
                //2结束移动后的回调
                this.$emit('transistionEnd', this.currentIndex -1);
            },this.animDuration)
        },

        //设置滚动的位置
        setTransform: function (position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },
    }
}
</script>

<style scoped>
    #hy-swiper{
        overflow:hidden;
        position: relative;
    }
    .swiper{
        display: flex;
    }
    .indicator{/*指示器 */
        display: flex;
        justify-content: center;
        position: absolute;
        width:100%;
        bottom: 8px;
    }
    /* 图片中的指示点的样式 */
    .indi-item{
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px; /*垂直居中 */
        font-size: center;
        font-size: 12px;
        margin: 0 5px;
    }
    .indi-item.activce{/*当显示到哪个图片时，给该指示点添加active样式*/
        background-color: rgba(212, 62, 46, 1.0);
    }

</style>