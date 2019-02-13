<style rel="stylesheet/scss" lang="scss"  scoped>
    .registersuccess{
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
                    .successIcon{
                        height: 100px;
                        width:100px;
                        margin-top: 100px;
                        margin-bottom:30px;
                    }
                    .successText{
                        color: #000;
                        font-size: 20px;
                    }
                    .goHome{
                        width: 172px;
                        height: 40px;
                        background-color: #45b8c8;
                        border-radius: 20px;
                        text-align: center;
                        line-height: 40px;
                        color: #fff;
                        font-size: 16px;
                        margin: 118px auto;
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
                    text-align: center;color: #fff;
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
    <div class="registersuccess">
        <div class="contaner clear">
            <div class="logo fl">
                <img class="cursor" @click="goHome()" src="../assets/images/yanxuelogo.png">
            </div>
        </div>
        <div class="bac">
            <div class="contaner">
                <div class="registerBox">
                        <img class="successIcon" src="../assets/images/registerSuccess.jpg">
                        <p class="successText">恭喜您，已成功开通企业账户！</p>
                        <div class="goHome cursor" @click="goHome()">去首页</div>
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
        name: "registersuccess",
        methods:{
            goHome(){
                this.$router.push({"path":'/'})
            }
        }
    }
</script>

