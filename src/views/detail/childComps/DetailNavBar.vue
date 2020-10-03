<template>
    <div>
        <NavBar>
            <template #left>
                <div class="back" @click="backClick">
                    <img src="~assets/img/common/back.svg" alt="">
                </div>
            </template>
            <template #center>
                <div class="title">
                    <div :key="index" v-for="(item,index) in titles"
                     class="title-item" :class="{active: index===currentIndex}"
                     @click="titleClick(index)">{{item}}</div>
                    </div>
            </template>
        </NavBar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index;
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
    }
    .title-item{
        flex: 1;
        font-size: 14px;
    }
    .active{
        color: (--color-high-text); 
    }
    .back img{
        margin-top: 12px;
        transform:scale(0.9,0.9);
    }
</style>