<style rel="stylesheet/scss" lang="scss"  scoped>
.legaldetail{
    height: 100%;
    margin-bottom: 100px;
    width:100%;
    border-top:1px solid #e5e5e5;
    .contaner{
        margin: 64px auto;
        .nodata{
            text-align: center;
            color: #000;
        }
    }
}
</style>
<template>
    <div class="legaldetail">
        <div class="contaner" >
            <div v-if="isshowData" v-html="content"></div>
            <div v-else class="nodata font18">
                暂无数据
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '../common/service'
    export default {
        name: "legaldetail",
        data(){
            return{
                isshowData: true,
                url: '',
                content: '',
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
                }],
            }
        },
        mounted(){
            this.url = window.location.href;
            this.changeRouter();
            this.getDetail(this.$route.params.id);
        },
        methods:{
            timetrans(timestamp) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(timestamp);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '';
                // + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            getDetail(id){
                Service.helper().getShowLawHelpDetail({
                    lawHelpId: id,
                }).then(response => {
                    if(response.errorCode == 0){
                        console.log(response.data)
                        if(response.data){
                            this.content = response.data.content;
                            if(!this.content){
                                this.isshowData = false;
                            }
                        }else{
                            this.isshowData = false;
                        }
                    }else{
                    }
                }, err => {
                });
            },
            changeRouter(){
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                    $(".wxIcon").css({"display":"inline-block"});
                }
                liData[4].className = 'fl selectActive'
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
            },
        }
    }
</script>

