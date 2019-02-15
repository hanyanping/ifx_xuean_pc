<style rel="stylesheet/scss" lang="scss"  scoped>
    .videoList{
        height: 100%;
        margin-bottom: 100px;
        width:100%;
        /*border-top:1px solid #e5e5e5;*/
        .bacColor{
            background: #363636;
            height: 600px;
            width:100%;
        }
        .contaner{
            text-align: center;
        }
    }
</style>
<template>
    <div class="videoList">
        <div class="bacColor">
            <div class="contaner" >

                <div id="player"></div>
            </div>
        </div>

    </div>
</template>

<script>
    import Service from '../common/service'
    export default {
        name: "videoDetail",
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
            console.log(this.$route.query.id)
            this.getVideoDetail(this.$route.query.id);
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
            getVideoDetail(id){
                // id = '2a7f2d070c8bcde785c62943d8e0141b_2';
                Service.video().getVideoDetail({
                    vid: id,
                }).then(response => {
                    if(response.errorCode == 0){
                        console.log(response.data)
                        console.log(response.data.ts)
                        console.log(response.data.hash)
                        var player = polyvObject('#player').videoPlayer({
                            'height': '600',
                            'width': '1200',
                            'vid': id,
                            'ts': response.data.ts,
                            'sign': response.data.hash
                        });
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
                liData[5].className = 'fl selectActive';
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';

            },
        }
    }
</script>

