<style rel="stylesheet/scss" lang="scss"  scoped>
    .download{
        width: 100%;
        height: 100%;
        border-top: 1px solid #e5e5e5;
        .tabContent{
            width:100%;
            .back{
                width: 100%;
                height: 257px;
                background: url("../assets/images/aboutourBack.jpg") no-repeat center center;
                background-size: cover;
                .backText{
                    width: 1200px;
                    height: 257px;
                    /*background: #f00;*/
                }
            }
            .contaner{
                color: #000;
                margin-bottom: 150px;
               .downloadList{
                   margin-top: 18px;
                   .title{
                       padding: 18px 0;
                       font-size: 20px;
                   }
                   .downloadBox{
                       padding: 20px 0;
                       font-size: 14px;
                       border-bottom: 1px solid #e5e5e5;
                       .listLeft{
                           .downloadIcon{
                               width: 14px;
                               height: 14px;
                               display: inline-block;
                               vertical-align: middle;
                               margin-right: 20px;
                           }
                           .font14{
                               display: inline-block;
                               vertical-align: middle;
                           }
                           .leftSpan:hover{
                               color: #45b8c8;
                           }
                       }
                       .listRight{
                           width: 100px;
                           height: 30px;
                           background-color: #45b8c7;
                           border-radius: 15px;
                           color: #fff;
                           line-height: 30px;
                           text-align: center;
                       }
                       .listRight:hover{
                           background: rgba(69,184,199,0.8);
                       }

                    }
               }
            }

        }
    }
</style>
<template>
    <div class="download">
        <div class="tabContent">
            <div>
                <div class="back">
                    <div class="contaner backText">
                    </div>
                </div>
                <div  class="contaner">
                    <div class="downloadList" v-for="item in downLoadData">
                        <div class="title font20">{{item.name}}</div>
                        <div class="downloadBox flexBetween cursor" v-for="ite in item.downloads" @click="dowmLoadWord(ite.url)">
                            <div class="listLeft">
                                <img class="downloadIcon" src="../assets/images/yellowZan.png">
                                <span class="font14 leftSpan">{{ite.name}}</span>
                            </div>
                            <div class="listRight font12 button cursor">下载</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '../common/service'
    export default {
        name: "aboutour",
        data(){
            return{
                selectId: 1,
                url: '',
                downLoadData: [],
                routerData:[{
                    name:'首页',
                    router:'/homepage',
                    isRouter: true,
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
            this.changeRouter()
        },
        created(){
            this.getList()
        },
        methods:{
            dowmLoadWord(url){
                window.open(url);
            },
            getList(){
                Service.download().getDownloadList({
                }).then(response => {
                    if(response.errorCode == 0){
                        this.downLoadData = response.data;
                    }else{

                    }
                }, err => {
                });
            },
            changeRouter(){
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                    $(".wxIcon").css({"display":"none"});
                    $(".helpIcon").find("span")[0].className = 'iconText';
                    $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
                }
            },
        }
    }
</script>

