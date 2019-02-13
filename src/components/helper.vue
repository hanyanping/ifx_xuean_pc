<style rel="stylesheet/scss" lang="scss"  scoped>
.helper{
    position: fixed;
    z-index: 100;
    .helpcontaner{
        position: relative;
        .helperIcon{
            height: 46px;
            width:46px;
        }
        .helperText{
            text-align: center;
            color: #45b8c7;
            font-size: 14px;
            font-weight: 600;
        }
        .warmText{
            position: absolute;
            top: 4px;
            right: 50px;
            width: 280px;
            height: 38px;
            opacity: 0;
            img{
                height: 100%;
                width:100%;
            }
        }
    }
    .helpcontaner:hover{
        .warmText{
            opacity: 1;
        }
    }
}
.dialog::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
}
.dialog{
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1000;
    background: rgba(0,0,0,0.5);
    .messge{
        display: inline-block;
        width: 420px;
        padding-bottom: 15px;
        vertical-align: middle;
        background-color: #fff;
        border-radius: 4px;
        font-size: 18px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        text-align: left;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        .messageHeader{
            background: #faa41a;
            text-align: center;
            position: relative;
            padding: 15px 15px 10px;
            color: #fff;
            .messagetitle{
            }
        }
        .messageContent{
            position: relative;
            padding: 30px;
            color: #606266;
            font-size: 14px;
        }
        .messagebtns{
            text-align: center;
            padding: 0 0 30px;
            .button{
                border-radius: 20px;
                display: inline-block;
                white-space: nowrap;
                cursor: pointer;
                text-align: center;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                outline: 0;
                margin: 0;
                height: 40px;
                width: 121px;
                line-height: 40px;
                font-size: 12px;
            }
            button:nth-child(2) {

            }
            .buttonSmall{
                background-color: #45b8c8;
                color: #fff;
            }
            .buttonprimary{
                border: solid 1px #45b8c8;
                color: #45b8c8;
                background: #fff;
                margin-left: 36px;
            }
        }
    }
}
</style>
<template>
    <div>
        <div class="helper cursor" @click="openDiolog()">
            <div class="helpcontaner">
                <img class="helperIcon" src="../assets/images/serverTwo.png">
                <p class="helperText">小助手</p>
                <p class="helperText">安安</p>
                <div class="warmText">
                    <img src="../assets/images/yanxuelogo.png">
                </div>
            </div>
        </div>
        <div class="dialog" @click="closeDiolog()">
            <div class="messge" @click="stoppro()">
                <div class="messageHeader">
                    <div class="messagetitle"><span>弹框提示</span></div>
                </div>
                <div class="messageContent">
                    <div class="messagemessage">
                        <p>智能小助手安安正在准备中，很快就要诞生与您见面了，有问题请先留言，专业人士会尽快回复你！您也可以取帮助中心看看，哪里没准能解答您的疑问哦！</p>
                    </div>
                </div>
                <div class="messagebtns">
                    <div class="button buttonSmall" @click="goHelper()">
                            <span>
                             去帮助中心
                            </span>
                     </div>
                    <div class="button buttonprimary" @click="goMessage()">
                        <!----><!---->
                        <span> 我想留言</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "helper",
        data(){
            return{
                url: '',
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
            var right = (document.body.clientWidth-1200)/2;
            var bottom = (document.body.clientHeight)/4;
            $(".helper").css({"right": right,'bottom': 120});
            this.url = window.location.href;
            this.changeRouter();
        },
        methods:{
            goHelper(){
                this.$router.push({'path':'/helpecenter'})
                $(".dialog").css({"display":"none"})
            },
            goMessage(){
                this.$router.push({'path':'/customermessage'})
            },
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
                if(this.url.indexOf('/helpecenter')>0){
                    $(".wxIcon").css({"display":"none"});
                    $(".helpIcon").find("span")[0].className = 'iconText iconColor iconColor';
                    $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti iconColor';
                }
            },
            closeDiolog() {
                $(".dialog").css({"display":"none"})
            },
            openDiolog(){
                $(".dialog").css({"display":"block"})
            },
            stoppro(e){
                e = e || window.event;
                if(e.stopPropagation) { //W3C阻止冒泡方法
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true; //IE阻止冒泡方法
                }
             }
        }
    }
</script>

