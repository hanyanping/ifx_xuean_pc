<style rel="stylesheet/scss" lang="scss"  scoped>
.homepageTop{
    width: 976px;
    height: 172px;
    background: #fff;
    margin: 20px;
    .userinfo{
       padding: 12px 20px;
        .iconfont{
            color: #45b8c7;
            font-size: 32px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
        }
        .iconText{
            display: inline-block;
            vertical-align: middle;
            color: #000;
        }
    }
    .orderCount{
        margin-left: 54px;
        .countBox{
            width: 126px;
            height: 96px;
            background-color: #f8f8f8;
            border-radius: 4px;
            margin: 0 12px;
            position: relative;
            padding: 0 25px;
            .count{
                padding: 20px 0px 14px;
                font-size:30px;
                line-height: 30px;
                color: #fe776a;
            }
            .counttext{
                color: #929292;
            }
            .counticon{
                position: absolute;
                right: 0;
                bottom:0;
                height: 38px;
                width:38px;
            }
        }
    }
}
    .homepageBottom{
        /*height: 536px;*/
        width: 936px;
        background: #fff;
        margin: 0 20px 20px;
        padding: 20px 20px 200px;
        .infoTitle{
            padding-bottom:20px;
            border-bottom:1px solid #f6f6f6;
        }
        .infobox{
            height: 68px;
            line-height: 68px;
            border-bottom:1px solid #f6f6f6;
            .infoName{
                color: #000;
                margin-right: 30px;
            }
            .infoText{
                color: #929292;
            }
            .alreadySet{
                color: #45b8c8;

            }
            .reEditor{
                color: #929292;
            }
            .line{
                color: #ececec;
                margin: 0 10px;
            }
        }
    }
</style>
<template>
    <div class="bachomepage">
        <div class="homepageTop">
            <div class="userinfo">
                <i class='iconfont icon-weidenglu'></i>
                <span class="iconText font14 iconColor">登录账号 ：{{username}}</span>
            </div>
            <div class="orderCount flex">
                <div class="countBox">
                    <div class="count">4</div>
                    <div class="counttext font12">保单数</div>
                    <img class="counticon" src="../assets/images/bacone.png"/>
                </div>
                <div class="countBox">
                    <div class="count">4</div>
                    <div class="counttext font12">保单数</div>
                    <img class="counticon" src="../assets/images/bacTwo.png"/>
                </div>
                <div class="countBox">
                    <div class="count">4</div>
                    <div class="counttext font12">保单数</div>
                    <img class="counticon" src="../assets/images/bacthree.png"/>
                </div>
            </div>
        </div>
        <div class="homepageBottom">
            <div class="infoTitle">安全设置</div>
            <div class="infobox clear">
                <div class="fl">
                    <span class="font14 infoName">登录密码</span><span class="infoText font12">安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码</span>
                </div>
                <div class="fr">
                    <span class="alreadySet font12 cursor">已设置</span>
                    <span class="line">|</span>
                    <span class="reEditor font12 cursor" @click="resetPassword('1')">修改</span>
                </div>
            </div>
            <div class="infobox">
                <div class="fl"><span class="font14 infoName">手机绑定</span><span class="infoText font12">您已绑定了手机186****8888 [您的手机为安全手机，可以找回密码，但不能用于登录</span>
                </div>
                <div class="fr">
                    <span class="alreadySet font12 cursor">已设置</span>
                    <span class="line">|</span>
                    <span class="reEditor font12 cursor" @click="resetPassword('2')">修改</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bachomepage",
        data(){
            return{
                url: '',
                username: '',
            }
        },
        created(){
        },
        mounted(){
        },
        methods:{
            resetPassword(type){
                this.$router.push({path:'/resetpassword/'+type})
            }
        }
    }
</script>

