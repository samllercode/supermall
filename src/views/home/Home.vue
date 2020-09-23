<template>
    <div id="home">
        <NavBar class="home-nav">
            <template #center>
                <div>购物街</div>
            </template>
        </NavBar>
        <HomeSwiper :banners="banners"></HomeSwiper>
        <homeRecommend-view :recommends="recommends"></homeRecommend-view>
        <FeatureView></FeatureView>
        <TabControl :titles="['流行','新歌','精选']" class="tab-control"></TabControl>
    </div>
</template>


<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultiData} from 'network/home'
export default {
    name:'Home',
    components:{
        HomeSwiper,
        HomeRecommendView,
        FeatureView,
        NavBar,
        TabControl
    },
    data(){
        return{
            banners:[],
            recommends:[],
            
        }
    },
    created(){
        //1、请求多个数据
        getHomeMultiData().then(res =>{
            console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        })
    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
    }
    .home-nav{
        background-color:var(--color-tint);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .tab-control{
        position: sticky;
        /* 适合移动端,pc端有些浏览器不支持 */
        top:44px;
    }
</style>