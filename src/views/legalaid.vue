<template>
    
</template>

<script>
    export default {
        name: "legalaid",
        data(){
            return{
                url: '',
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
        mounted(){
            this.url = window.location.href;
            this.changeRouter()
        },
        methods:{
            changeRouter(){
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                    if(this.url.indexOf(this.routerData[i].router)>0){
                        if(i == 0){
                            $(".wxIcon").css({"display":"inline-block"});
                        }else{
                            $(".wxIcon").css({"display":"none"});
                        }
                        $(".helpIcon").find("span")[0].className = 'iconText';
                        $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
                        liData[i].className = 'fl selectActive'
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>