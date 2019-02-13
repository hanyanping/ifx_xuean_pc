<template>
    <div class="studybase">
        <practicetab></practicetab>
    </div>
</template>

<script>
    import practicetab from '@/components/practicetab'
    export default {
        name: "studybase",
        components: {
            practicetab,
        },
        data() {
            return{
                url: '',
                routerData:[{
                    name:'首页',
                    router:'/homepage',
                    isRouter: false,
                },{
                    name:'教育·培训',
                    router:'/schoolsafe',
                    isRouter: false,
                },{
                    name:'研学·实践',
                    router:'/researchStudy',
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
                }]
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
                    $(".wxIcon").css({"display":"none"});
                    $(".helpIcon").find("span")[0].className = 'iconText';
                }
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
                liData[2].className = 'fl selectActive'
            },
        }
    }
</script>

<style scoped>

</style>