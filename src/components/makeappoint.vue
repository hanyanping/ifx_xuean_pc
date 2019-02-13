<style rel="stylesheet/scss" lang="scss"  scoped>
    .makeappoint{
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
            width: 482px;
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
                padding: 34px 47px;
                color: #000;
                font-size: 14px;
                .messagemessage{
                    margin-bottom:20px;
                }
                .inputBox{
                    width: 100%;
                    margin-bottom:10px;
                    .inputText{
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        text-indent: 10px;
                        color: #000;
                        font-size: 14px;
                        border: 1px solid #e5e5e5;
                    }
                    .verification{
                        width: 238px;
                        height: 30px;
                        line-height: 30px;
                        color: #000;
                        font-size: 14px;
                        border: 1px solid #e5e5e5;
                        text-indent: 10px;
                        margin-right: 22px;
                    }
                    .sendCode{
                        display: inline-block;
                        line-height: 30px;
                        text-align: center;
                        width: 120px;
                        height: 30px;
                        border-radius: 20px;
                        border: solid 1px #45b8c7;
                        color: #45b8c8;
                        font-size: 14px;
                    }
                }
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
        <div class="dialog" v-if="showAppiont" @click="toParent()">
            <div class="messge" @click="stoppro()">
                <div class="messageHeader">
                    <div class="messagetitle"><span>预约定制</span></div>
                </div>
                <div class="messageContent">
                    <div class="messagemessage">
                        <p>感谢您关注并支持学安通！</p>
                        <p>请您认真填写一下信息，以便我们更好的为您服务。</p>
                    </div>
                    <div class="inputBox">
                        <input class='inputText' type="text" placeholder="请输入单位名称">
                    </div>
                    <div class="inputBox">
                        <input class='inputText' type="text" placeholder="请输入您的姓名">
                    </div>
                    <div class="inputBox">
                        <input class='inputText' type="text" placeholder="请输入您的手机号">
                    </div>
                    <div class="inputBox">
                        <input class="verification" type="text" placeholder="请输入手机号码">
                        <span class="cursor sendCode">发送验证码</span>
                    </div>
                </div>
                <div class="messagebtns">
                    <div class="button buttonSmall" @click="toParent()">
                            <span>
                             提交
                            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "makeappoint",
        props:['showAppiont'],
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
            var right = (document.body.clientWidth-1200)/2;
            var bottom = (document.body.clientHeight)/4;
            $(".makeappoint").css({"right": right,'bottom': 120});
        },
        methods:{
            stoppro(e){
                e = e || window.event;
                if(e.stopPropagation) { //W3C阻止冒泡方法
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true; //IE阻止冒泡方法
                }
            },
            toParent(){
                this.$emit("sendiptVal", false)
            }
        }
    }
</script>

