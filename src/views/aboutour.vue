<style rel="stylesheet/scss" lang="scss"  scoped>
.aboutour{
    width: 100%;
    height: 100%;
    border-top: 1px solid #e5e5e5;
    .ourTab{
        display: flex;
        .tabBox{
            height: 54px;
            line-height: 54px;
            color: #000;
            font-size: 16px;
            padding: 0 27px;
        }
        .tabBox:nth-of-type(1){
            padding-left: 0;
        }
        .tabBox:hover{
            color:#45b8c7;
        }
        .tabBoxColor{
            color:#45b8c7;
        }
    }
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
            .aboutTitle{
                padding: 36px 0;
                font-size: 16px;
                font-weight: 600;
            }
            .aboutContent{
                .aboutText{
                    text-indent: 20px;
                    font-size: 14px;
                    line-height: 24px;
                }
            }
        }

    }
}
</style>
<template>
    <div class="aboutour">
        <div class="contaner">
            <div class="ourTab">
                <div :class="selectId==index+1?'tabBoxColor tabBox cursor':'tabBox cursor'" v-for="(item,index) in tabData" @click="changeSelect(index+1)">{{item.name}}</div>
            </div>
        </div>
        <div class="tabContent">
            <div v-if="selectId == 1">
                <div class="back" :style="{backgroundImage: 'url(' + contentData.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
                    <div class="contaner backText">
                    </div>
                </div>
                <div  class="contaner">
                    <div class="aboutTitle">{{contentData.name}}</div>
                    <div class="aboutContent">
                        <p class="aboutText" v-html="contentData.content"></p>
                    </div>
                </div>
            </div>
            <div v-if="selectId == 2">
                <div class="back" :style="{backgroundImage: 'url(' + contentData.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
                    <div class="contaner backText">
                    </div>
                </div>
                <div  class="contaner">
                    <div class="aboutTitle">{{contentData.name}}</div>
                    <div class="aboutContent">
                        <p class="aboutText" v-html="contentData.content"></p>
                    </div>
                </div>
            </div>
            <div v-if="selectId == 3">
                <div class="back" :style="{backgroundImage: 'url(' + contentData.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
                    <div class="contaner backText">
                    </div>
                </div>
                <div  class="contaner">
                    <div class="aboutTitle">{{contentData.name}}</div>
                    <div class="aboutContent">
                        <p class="aboutText" v-html="contentData.content"></p>
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
                tabData:[{'name':'关于我们'},{'name':'平台资质'},{'name':'联系我们'}],
                contentData: {},
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
            this.changeRouter();
        },
        created(){
            this.changeSelect(this.$route.params.id)
        },
        methods:{
            changeSelect(index){
                this.$router.push({"path":'/aboutour/'+index})
                this.selectId = index;
                this.getUserInfo()
            },
            getUserInfo(){
                Service.user().getBaseInfo({
                },this.selectId).then(response => {
                    if(response.errorCode == 0){
                        console.log(response.data)
                        this.contentData = response.data;
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

