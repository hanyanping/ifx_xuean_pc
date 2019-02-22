<style rel="stylesheet/scss" lang="scss"  scoped>
    .bachome{
        overflow: hidden;
    }
</style>
<template>
    <div class="bachome">
        <bacnavtab></bacnavtab>
        <bacfoot></bacfoot>
    </div>
</template>

<script>
    import bacnavtab from '@/components/bacnavtab'
    import bacfoot from '@/components/bacfoot'
    export default {
        name: "bachome",
        components: {
            bacnavtab,
            bacfoot,

        },
        data(){
            return{
                url: '',
                bacrouter:[
                    {
                        name:'主页',
                        router:'/bachome',
                        isRouter: true,
                        iconclass: 'iconfont icon-zhuye'
                    },
                    {
                        name:'订单管理',
                        router:'/ordermanage',
                        isRouter: false,
                        iconclass: 'iconfont icon-dingdan1'
                    },
                    {
                        name:'保单管理',
                        router:'/policymanage',
                        isRouter: false,
                        iconclass: 'iconfont icon-dingdan'
                    },
                    {
                        name:'客户管理',
                        router:'/customermanage',
                        isRouter: false,
                        iconclass: 'iconfont icon-kehu'
                    },
                    {
                        name:'设置',
                        router:'/setup',
                        isRouter: false,
                        iconclass: 'iconfont icon-shezhi'
                    }
                ]
            }
        },
        created(){

        },
        mounted(){
            this.url = window.location.href;
            this.changeRouter();
        },
        methods:{
            changeRouter(){
                var liData = $("#tabMain")[0].children;
                for(var i=0;i<this.bacrouter.length;i++){
                    liData[i].className = 'tabBox font12';
                    if(this.url.indexOf(this.bacrouter[i].router)>0){
                        liData[i].className = 'tabBox font12 selectActive'
                    }
                }
            },
        }
    }
</script>

