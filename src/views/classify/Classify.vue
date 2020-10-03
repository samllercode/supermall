<template>
    <div class="wrapper">
        <ul>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
            <li>分类</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Classify',
    mounted(){
        //probe：侦测，默认值0、1不侦测、2、在手指滚动过程侦测 3、实时侦测，包括手指离开后惯性滚动
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType:3,//值为3，实时监听滚动的位置
            pullUpLoad:true//监听上拉加载更多
        })

        this.scroll.on('scroll',(position) =>{//监听某个（滚动）事件
            // console.log(position);
        })
        this.scroll.on('pullingUp',() =>{
            console.log('上拉加载更多');//此时只监听一次
            //发送网络请求，请求更多数据
            //等请求完成，并且将新的数据展示出来后
            //this.scroll.finishPullUp()
        })
    }
}
</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: 300px;
        background-color: aqua;
        overflow: hidden;
        /* overflow-y: scroll; */
    }
</style>