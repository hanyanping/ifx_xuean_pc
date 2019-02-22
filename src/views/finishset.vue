<style rel="stylesheet/scss" lang="scss"  scoped>
    .resetpassword{
        background: #ECECEC;
        min-height:100vh;
        .bacnavtabTop{
            background: #fff;
            height: 68px;
            .contaner{
                .logo{
                    height: 68px;
                    display: inline-block;
                    line-height: 68px;
                    vertical-align: middle;
                    img{
                        display: inline-block;
                        vertical-align: middle;
                        height: 32px;
                        width: 102px;
                    }
                    .guanliText{
                        display: inline-block;
                        vertical-align: middle;
                        color: #000;
                        position: relative;
                        margin-left: 26px;
                    }
                    .guanliText:before{
                        position: absolute;
                        content: '';
                        display: inline-block;
                        height: 30px;
                        width: 1px;
                        background: #b5b5b5;
                        left: -13px;
                        top: 19px;
                    }
                }
                .logoright{
                    height: 68px;
                    line-height: 68px;
                    .rightIcon{
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 28px;
                        margin-top: -5px;
                        cursor: pointer;
                        .iconGreen{
                            font-size: 20px;
                            color: #929292;
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 5px;
                        }
                        .iconText{
                            font-size: 12px;
                            display: inline-block;
                            vertical-align: middle;
                            color: #929292;
                        }
                        .iconColor{
                            color: #45b8c7;
                        }
                    }
                    .rightIcon:hover{
                        .iconText{
                            color: #45b8c7;
                        }
                        .iconGreen{
                            color: #45b8c7;
                        }
                    }
                }
            }
        }
        .resetpasswordcontent{
            width: 1198px;
            height: 684px;
            background-color: #ffffff;
            margin: 20px auto;
            .passwordcontent{
                padding: 20px 130px;
                .title{
                    font-weight:600;
                    color: #000;
                }
                .wordBox{
                    padding-bottom: 30px;
                    text-align: center;
                    color: #000;
                    img{
                        width: 472px;
                        height: 64px;
                        margin: 70px auto;
                        display: block;
                    }
                    .inputText{
                        margin-bottom: 15px;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="resetpassword">
        <div class="bacnavtabTop">
            <div class="contaner clear">
                <div class="logo fl">
                    <img class="cursor" @click="goHome()" src="../assets/images/yanxuelogo.png">
                    <span class="guanliText font20">管理台</span>
                </div>
                <div class="logoright fr">
                    <div class="rightIcon">
                        <i v-if="hasUserinfo" class='iconGreen iconColor iconfont icon-weidenglu' @click="goInfo()"></i>
                        <span v-if="hasUserinfo" class="iconText iconColor" @click="goInfo()">{{showname}}</span>
                        <span v-if="!hasUserinfo" class='iconGreen iconfont icon-weidenglu'></span>
                        <span v-if="!hasUserinfo" @click="goLogin()" class="iconText">登陆 | </span>
                        <span v-if="!hasUserinfo" @click="goRegister()" class="iconText">注册</span>
                    </div>
                    <div class="rightIcon"  @click="goHelpeCenter()" v-if="hasUserinfo">
                        <i class='iconGreen iconfont iconColor icon-tuichu'></i>
                        <span class="iconText iconColor">退出</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contaner resetpasswordcontent">
            <div class="passwordcontent">
                <div class="title font16">修改登录密码</div>
                <div class="wordBox">
                    <img :src="imgUrl" alt="">
                    <p class="inputText font20" v-if="!isResetPhone">
                        登录密码修改成功！
                    </p>
                    <p class="text font14" v-if="!isResetPhone">
                        请使用新密码，重新登录
                    </p>
                    <p class="inputText font20" v-if="isResetPhone">
                        手机修改成功！
                    </p>
                    <p class="text font14" v-if="isResetPhone">
                        请使用新的手机号码，重新登录
                    </p>
                </div>
            </div>
        </div>
        <bacfoot></bacfoot>
    </div>
</template>

<script>
    import bacfoot from '@/components/bacfoot'
    import Service from '../common/service'
    export default {
        name: "finishset",
        components: {
            bacfoot,
        },
        data(){
            return{
                imgUrl: '',
                hasUserinfo: false,
                isResetPhone: false,
                isResetPassword: false,
                isFindPassword: false,
                id: '',
                showname: '',
                username: ''
            }
        },
        created(){
            this.id = this.$route.params.id;
            if(this.id == 1){//重置密码
                this.isResetPassword = true;
                this.isResetPhone = false;
                this.isFindPassword = false;
                this.imgUrl = require('../assets/images/reset13.png')
            }
            if(this.id == 2){//重置手机号
                this.isResetPassword = false;
                this.isResetPhone = true;
                this.isFindPassword = false;
                this.imgUrl = require('../assets/images/reset23.png')
            }
            if(this.id == 3){//找回密码
                this.isResetPassword = false;
                this.isResetPhone = false;
                this.isFindPassword = true;
                this.imgUrl = require('../assets/images/reset33.png')
            }
            var that = this;
            if(!this.isResetPhone){
                setTimeout(function(){
                    that.$router.push({"path":'/login'})
                },3000)
            }
            this.getInfo();
        },
        methods:{
            goInfo(){
                this.$router.push({path: '/bachomepage'})
            },
            getInfo(){
                Service.login().getInfo({
                }).then(response => {
                    if(response.errorCode == 0){
                        this.hasUserinfo = true;
                        this.username = response.data.username;
                        this.showname = response.data.username;
                    }else{
                        if(response.errorCode == 5001){
                            if(this.id == 3){
                                this.username = this.$route.query.name;
                                this.check()
                            }else{
                                this.delCookie('cookieTime');
                                this.$router.push({'path':'/login'})
                            }
                            this.hasUserinfo = false;
                        }
                    }
                }, err => {
                });
            },
            goHome(){
                this.$router.push({path:"/"})
            },
            goRegister(){
                this.$router.push({'path':'/register'})
            },
            goLogin(){
                this.$router.push({'path':'/login'})
            },
        }
    }
</script>

