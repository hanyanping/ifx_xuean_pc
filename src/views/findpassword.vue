<style rel="stylesheet/scss" lang="scss"  scoped>
    .findpassword{
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
                .phoneBox{
                    padding-bottom: 30px;
                    border-bottom: 1px solid #f6f6f6;
                    img{
                        width: 472px;
                        height: 72px;
                        margin: 70px auto;
                        display: block;
                    }
                    .inputBox{
                        width: 330px;
                        margin: 0 auto;
                        .inputtitle{
                            color: #929292;
                        }
                        .codeBox{
                            width: 330px;
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
                                line-height: 36px;
                                text-align: center;
                                width: 146px;
                                height: 34px;
                                border-radius: 20px;
                                border: solid 1px #45b8c7;
                                color: #45b8c8;
                                font-size: 14px;
                            }
                        }
                        .inputText{
                            background: #f8f8f8;
                            color: #000;
                            height: 40px!important;
                            border-radius: 4px;
                            line-height: 40px;
                            text-indent: 10px;
                            width:330px;
                            margin: 15px 0 10px;
                        }
                        .textButton{
                            margin: 24px auto;
                            width: 330px;
                            text-align: center;
                            .sureButton{
                                display: inline-block;
                                text-align: center;
                                width: 120px;
                                height: 40px;
                                background-color: #45b8c8;
                                border-radius: 20px;
                                line-height: 40px;
                            }
                        }
                    }
                }
                .wordBox{
                    margin-top: 120px;
                    padding-bottom: 30px;
                    img{
                        width: 472px;
                        height: 72px;
                        margin: 70px auto;
                        display: block;
                    }
                    .inputBox{
                        width: 330px;
                        margin: 0 auto;
                        .textButton{
                            margin: 24px auto;
                            width: 330px;
                            text-align: center;
                            .sureButton{
                                display: inline-block;
                                text-align: center;
                                width: 120px;
                                height: 40px;
                                background-color: #45b8c8;
                                border-radius: 20px;
                                line-height: 40px;
                            }
                        }
                        .inputText{
                            margin-bottom: 15px;
                            position: relative;
                            .inputTitle{
                                font-size: 14px;
                                color: #000;
                                padding-bottom: 20px;
                            }
                            .text{
                                color: #000000;
                                margin-right:10px;
                                background: #f8f8f8;
                                height: 38px!important;
                                width: 330px;
                                line-height: 40px;
                                text-indent: 10px;
                                border-radius: 4px;
                            }
                            .warmBox{
                                position: absolute;
                                margin-left: 280px;
                                top: 10px;
                                min-width:110px;
                                font-size: 12px;
                                .warmText{

                                }
                            }
                            .passStyle{
                                border: 1px solid #e5e5e5;
                                border-radius: 20px;
                                width:104px;
                                height: 30px;
                                font-size: 14px;
                                .warmText{
                                    position: relative;
                                    padding: 6px 10px;
                                    display: inline-block;

                                }
                                .warmTextheight{
                                    padding: 6px 10px;
                                }
                                .redText{
                                    color: #f00;
                                }
                                .originText{
                                    color: #ff0;
                                }
                                .blueText{
                                    color: blue;
                                }
                                .warmText:after{
                                    position: absolute;
                                    margin-left: 7px;
                                    display: inline-block;
                                    content: '';
                                    height: 14px;
                                    width: 2px;
                                    background: #e5e5e5;
                                    border-radius: 1px;
                                    top: 8px;
                                }
                            }
                        }
                    }
                }
            }

        }
    }
</style>
<template>
    <div class="findpassword">
        <div class="bacnavtabTop">
            <div class="contaner clear">
                <div class="logo fl">
                    <img class="cursor" @click="goHome()" src="../assets/images/yanxuelogo.png">
                    <span class="guanliText font20">管理台</span>
                </div>
                <div class="logoright fr">
                    <div class="rightIcon">
                        <i v-if="hasUserinfo" class='iconGreen iconColor iconfont icon-weidenglu' @click="goInfo()"></i>
                        <span v-if="hasUserinfo" class="iconText iconColor" @click="goInfo()">{{showName}}</span>
                        <span v-if="!hasUserinfo" class='iconfont icon-weidenglu iconGreen'></span>
                        <span v-if="!hasUserinfo" @click="goLogin()" class="iconText ">登陆 | </span>
                        <span v-if="!hasUserinfo" @click="goRegister()" class="iconText ">注册</span>
                    </div>
                    <div class="rightIcon"  @click="logout()" v-if="hasUserinfo">
                        <i class='iconGreen iconfont icon-tuichu'></i>
                        <span class="iconText iconColor">退出</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contaner resetpasswordcontent">
            <div class="passwordcontent">
                <div class="title font16">找回密码</div>
                <div class="wordBox">
                    <div class="inputBox">
                        <div class="inputText">
                            <div class="inputTitle">请输入你需要找回登录密码的账户名</div>
                            <input type="text" class="text font14" v-model="username" placeholder="请输入登录账户名">
                        </div>
                        <div class="textButton">
                            <span class="sureButton cursor" @click="goFinish()">确定</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <bacfoot></bacfoot>
    </div>
</template>

<script>
    import bacfoot from '@/components/bacfoot'
    import Service from '../common/service'
    import patternRules from '../common/patternRules'
    export default {
        name: "findpassword",
        components: {
            bacfoot,
        },
        data(){
            return{
                verificode: '',
                phone: '',
                hasUserinfo: false,
                isMiddle: false,
                isLower: false,
                isHeight: false,
                password: '',
                repassword: '',
                validatepassword: false,
                isResetPhone: false,
                isResetPassword: false,
                isFindPassword: false,
                id: '',
                showCode: '获取短信校验码',
                time: 60,
                isCode: false,
                username: '',
                showName: ''
            }
        },
        created(){
            this.id = this.$route.params.id;
            if(this.id == 1){//重置密码
                this.isResetPassword = true;
                this.isResetPhone = false;
                this.isFindPassword = false;
            }
            if(this.id == 2){//重置手机号
                this.isResetPassword = false;
                this.isResetPhone = true;
                this.isFindPassword = false;
            }
            if(this.id == 3){//找回密码
                this.isResetPassword = false;
                this.isResetPhone = false;
                this.isFindPassword = true;
            }
            this.getInfo()
        },
        mounted(){
        },
        methods:{
            logout(){
                Service.login().logout({
                }).then(response => {
                    if(response.errorCode == 0){
                        this.$router.push({'path':'/login'})
                    }else{
                        this.$message.error(response.message);
                    }
                }, err => {
                });
            },
            goInfo(){
                this.$router.push({path: '/bachomepage'})
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
            getInfo(){
                Service.login().getInfo({
                }).then(response => {
                    if(response.errorCode == 0){
                        this.hasUserinfo = true;
                        this.showName = response.data.username;
                    }else{
                        if(response.errorCode == 5001){
                            this.username = this.$route.query.name;
                        }
                    }
                }, err => {
                });
            },
            goFinish(){
                var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$|^(?![0-9_|\-]+$)(?![a-zA-Z]+$)[0-9A-Za-z_|\-]{4,20}$|^((?![_|\-]+$)(?![a-zA-Z]+$)[a-zA-Z_|\-]{4,20}$)|^[a-zA-Z]{4,20}$/
                if(this.username.length>3 && this.username.length<21){
                    if(!reg.test(this.username)){
                        this.$message.error('请输入正确格式的用户名');
                        return;
                    }
                }else{
                    this.$message.error('请输入正确格式的用户名');
                    return;
                }
                Service.login().check({
                    username: this.username
                }).then(response => {
                    if(response.errorCode == 0){
                        this.$router.push({"path":'/resetpassword/'+this.id,query:{"name":this.username}})
                    }else{
                        this.$message.error(response.message);
                    }
                }, err => {
                });
            },
            watchPassword(){
                if(this.repassword != this.password){
                    this.validatepassword = true;
                }else{
                    this.validatepassword = false;
                }
            },
        }
    }
</script>

