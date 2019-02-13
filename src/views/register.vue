<style rel="stylesheet/scss" lang="scss"  scoped>
    .register{
        .logo{
            height: 68px;
            line-height: 68px;
            img{
                display: inline-block;
                vertical-align: middle;
                height: 32px;
                width: 102px;
            }
        }
        .bac{
            height: 722px;
            width:100%;
            background: #ececec;
            position: relative;
            .contaner{
                text-align: center;
                .registerBox{
                    margin: 70px 250px;
                    position: absolute;
                    width: 332px;
                    height: 420px;
                    background-color: #ffffff;
                    padding: 62px 184px 82px;
                    .registerTitle{
                        color: #000;
                        font-size: 20px;
                        margin-bottom: 60px;
                    }
                    .inputBox{
                        text-align: left;
                        margin-bottom: 10px;
                        .inputText{
                            width:100%;
                            height: 40px!important;
                            line-height: 40px;
                            color: #000;
                            font-size: 14px;
                            background: #f8f8f8;
                            border-radius: 4px;
                            text-indent: 10px;
                        }
                        .verification{
                            width: 166px;
                            height: 40px!important;
                            line-height: 40px;
                            color: #000;
                            font-size: 14px;
                            background: #f8f8f8;
                            border-radius: 4px;
                            text-indent: 10px;
                            margin-right: 10px;
                        }
                        .sendCode{
                            display: inline-block;
                            line-height: 40px;
                            text-align: center;
                            width: 148px;
                            height: 40px;
                            border-radius: 20px;
                            border: solid 1px #45b8c7;
                            color: #45b8c8;
                            font-size: 14px;
                        }
                        .selectIcon{
                            height: 14px;
                            width:14px;
                            margin-right: 6px;
                        }
                        .selectText{
                            font-size: 12px;
                            color: #000;
                        }
                        .registerButton{
                            display: inline-block;
                            width:328px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            font-size: 16px;
                            color: #fff;
                            background-color: #45b8c8;
                            border-radius: 20px;
                            margin-top: 26px;
                        }
                    }
                }
            }
        }
        .footer{
            width:100%;
            .footBottom{
                height: 242px;
                width:100%;
                background: #333;
                .contaner{
                    text-align: center;
                    color: #fff;
                }
                .bottomTop{
                    padding: 80px 0 24px;
                    font-size: 12px;
                    color: #dadada;
                }
                .bottomBottom{
                    color: #777;
                    font-size: 12px;
                    line-height: 18px
                }
            }
        }
    }

</style>
<template>
    <div class="register">
        <div class="contaner clear">
            <div class="logo fl">
                <img class="cursor" @click="goHome()" src="../assets/images/yanxuelogo.png">
            </div>
        </div>
        <div class="bac">
            <div class="contaner">
                <div class="registerBox">
                    <div class="registerTitle">欢迎注册学安通</div>
                    <div class="inputBox">
                        <input class="inputText" type="text" placeholder="请设置登录名">
                    </div>
                    <div class="inputBox">
                        <input class="inputText" type="password" placeholder="设置8-12位数字+英文的登录密码">
                    </div>
                    <div class="inputBox">
                        <input class="inputText" type="password" placeholder="请再次输入您的密码">
                    </div>
                    <div class="inputBox">
                        <input class="inputText" type="text" placeholder="请输入手机号码">
                    </div>
                    <div class="inputBox">
                        <input class="verification" type="text" placeholder="请输入手机号码">
                        <span class="cursor sendCode">发送验证码</span>
                    </div>
                    <div class="inputBox">
                        <img class="selectIcon cursor" @click='selectPass = !selectPass' v-if="selectPass" src="../assets/images/greyZan.png">
                        <img class="selectIcon cursor" @click='selectPass = !selectPass' v-if="!selectPass" src="../assets/images/yellowZan.png">
                        <span class="cursor selectText">我已阅读并同意《学安通网站服务协议》协议条款</span>
                    </div>
                    <div class="inputBox">
                        <span class="registerButton cursor">
                            立即注册
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footBottom">
                <div class="bottomTop contaner">本网站的全部保险产品均由具体保险公司承保并授权发布，本公司仅作为第三方平台，不承担任何保险合同项下的义务。</div>
                <div class="bottomBottom contaner">
                    <p class="bottomText">Copyright © 2019 xueantong.com 北京学安互联科技有限公司</p>
                    <p class="bottomText">
                        京ICP备xxxxxxx号
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "register",
        data(){
            return{
                selectPass: false,
            }
        },
        methods: {
            goRegister(){
                this.$router.push({'path':'/register'})
            },
            goHome(){
                this.$router.push({'path':'/'})
            }
        }
    }
</script>

