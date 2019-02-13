<style rel="stylesheet/scss" lang="scss"  scoped>
.teachertrain{
    height: 100px;
    width:100%;
}
</style>
<template>
    <div class="teachertrain">
        <traintab></traintab>
    </div>
</template>

<script>
    import traintab from '@/components/traintab'

    export default {
        name: "teachertrain",
        components: {
            traintab,
        },
        data(){
            return{
                selectId: 1,
                url: '',
                tabData:[{'name':'校园安全',router:'/schoolsafe'},{'name':'师资培训',router:'/teachertrain'}],
                routerData:[{
                    name:'首页',
                    router:'/homepage',
                    isRouter: true,
                },{
                    name:'教育·培训',
                    router:'/train',
                    isRouter: false,
                },{
                    name:'研学·实践',
                    router:'/practice',
                    isRouter: false,
                },{
                    name:'体育·运动',
                    router:'/sport',
                    isRouter: false,
                },{
                    name:'法律援助',
                    router:'/legalaid',
                    isRouter: false,
                },{
                    name:'安全学堂',
                    router:'/safetyschool',
                    isRouter: false,
                }],
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
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                }
                if(this.url.indexOf('teachertrain')>0){
                    $(".wxIcon").css({"display":"none"});
                    $(".helpIcon").find("span")[0].className = 'iconText';
                    $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
                    liData[1].className = 'fl selectActive';
                }
            },
        }
    }
</script>

