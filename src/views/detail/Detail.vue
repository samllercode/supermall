<template>
    <div>
        <DetailNavBar/>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail} from 'network/detail'
export default {
    name:'Detail',
    components:{
        DetailNavBar,
    },
    data(){
        return{
            iid:null
        }
    },
    created(){
        //1、保存传入的iid
        this.iid = this.$route.params.iid;
        //2、根据iid请求详情数据
        getDetail(this.iid).then(res =>{
            console.log(res);
        })
    }
}
</script>