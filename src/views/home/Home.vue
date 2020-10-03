<template>
    <div id="home">
        <NavBar class="home-nav">
            <template #center>
                <div>购物街</div>
            </template>
        </NavBar>
        <TabControl class="tab-control" :titles="['流行','新款','精选']"
         @tabClick="tabClick" ref="tabcontrol1" v-show="isTabFiexd"></TabControl>
        <Scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true"
         @scroll="contentScroll" @pullingUp="LoadMore">
            <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
            <homeRecommend-view :recommends="recommends"></homeRecommend-view>
            <FeatureView></FeatureView>
            <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol2"></TabControl>
            <GoodsList :goods="showGoods"></GoodsList>
        </Scroll>
        <BackTop @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>


<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultiData, getHomeGoods} from 'network/home'
export default {
    name:'Home',
    components:{
        HomeSwiper,
        HomeRecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0, list:[]},
                'new':{page:0, list:[]},
                'sell':{page:0, list:[]}
            },
            currentType:'pop',
            isShowBackTop:false,
            tabOffestTop:0,
            isTabFiexd:false,
            // saveY:0
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        //1、请求多个数据
        this.getHomeMultiData()
        //2、请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    // activated(){
    //     console.log('0000');
    //     // this.$refs.scroll.scroll(0,this.saveY,0)
    // },
    // deactivated(){
    //     console.log('111');
    //     // this.saveY = this.$refs.scroll.scroll.y
    // },
    methods:{
        // 事件监听的方法
        tabClick(index){
            // console.log(index);
            switch(index){
                case 0:
                    this.currentType='pop'
                    break
                case 1:
                    this.currentType='new'
                    break
                case 2:
                    this.currentType='sell'
                    break
            }
            this.$refs.tabcontrol1.currentIndex = index;
            this.$refs.tabcontrol2.currentIndex = index;
        },
        backClick(){//返回到顶部
            this.$refs.scroll.scrollTo(0,0)//通过组件的ref：scroll拿到BackTop中的scrollTo()方法
        },
        contentScroll(position){
            // console.log(position);
            this.isShowBackTop = (-position.y) > 900
            
            //决定tabcontrol是否吸顶(position:fixed)
            this.isTabFiexd = (-position.y) > this.tabOffestTop
        },
        LoadMore(){
            // console.log('加载');
            this.getHomeGoods(this.currentType)
        },
        swiperImageLoad(){
            this.tabOffestTop = this.$refs.tabcontrol2.$el.offsetTop;//轮播图的高度534
        },
        // 网络请求的方法
        getHomeMultiData(){
            getHomeMultiData().then(res =>{
                // console.log(res);
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        },
        getHomeGoods(type){
            const page = this.goods[type].page + 1;
            getHomeGoods(type,page).then(res =>{
                // console.log(res);
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page+1;

                this.$refs.scroll.finishPullUp()
        })
        },
    },
}
</script>

<style scoped>
    #home{
        /* padding-top: 44px; */
        height: 100vh;
        position: relative;
    }
    .home-nav{
        background-color:var(--color-tint);
        color: #fff;
        /* 浏览器原生滚动时使用 */
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
    }
    .content{
        overflow: hidden;
        position:absolute;
        top:44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .tab-control{
        position: relative;
        z-index: 9;
    }

    /* .content{
        height: calc(100% - 44px);
        overflow: hidden;
    } */
</style>