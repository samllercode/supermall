<template>
    <div class="bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else ><slot name="item-icon-active"></slot></div>
        <!-- 子组件中的槽接收了父组件的：<div>首页</div>，所以把插槽放在<div></div>里，在div中添加个class属性就会其效果
        <slot  :class="{active:isActive}" name="item-text"></slot>会被替换 -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <!-- <img src="../../assets/img/tabbar/first.svg" alt="">
        <div>首页</div> -->
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
}
</script>

<style>
  .bar-item{
    flex: 1;
    /*对其均等分 */
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .bar-item img{
    width: 24px;
    height: 24px;
  }

  .active{
    color: red;
  }
</style>