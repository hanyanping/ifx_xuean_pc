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
                    border-bottom: 1px solid #f6f6f6;
                    padding-bottom: 30px;
                    img{
                        width: 472px;
                        height: 64px;
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
                            .text{
                                color: #000000;
                                margin-right:10px;
                            }
                            .warmText{
                                color: #929292;
                            }
                            .inputCode{
                                width:166px;
                                height: 40px!important;
                                line-height: 40px;
                                background: #f8f8f8;
                                color: #000;
                                font-size: 14px;
                                border-radius:4px;
                                margin-right:10px;
                                text-indent: 10px;
                            }
                            .code{
                                border-radius: 18px;
                                width: 146px;
                                height: 34px;
                                line-height: 36px;
                                display: inline-block;
                                text-align: center;
                                color: #45b8c8;
                                border: solid 1px #45b8c7;
                            }
                        }
                    }
                }
                .warmBox{
                    .title{
                        color: #000;
                        padding: 25px 10px 15px;
                        font-weight: 600;
                    }
                    .warmText{
                        color: #929292;
                        padding-top: 8px;
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
                <div class="logo fl" @click="goHome()">
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
                    <div class="rightIcon"  @click="logout()" v-if="hasUserinfo">
                        <i class='iconGreen iconfont icon-tuichu'></i>
                        <span class="iconText iconColor iconColor">退出</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contaner resetpasswordcontent">
            <div class="passwordcontent">
                <div class="title font16">验证身份</div>
                <div class="wordBox">
                    <img :src="imgUrl" alt="">
                    <div class="inputBox">
                        <div class="inputText">
                            <span class="text font14">手机验证码验证</span>
                            <span class="warmText font12">为确认是你本人操作，请完成以下验证:</span>
                        </div>
                        <div class="inputText">
                            <span class="text font14">手机号码： {{showPhone}}</span>
                        </div>
                        <div class="inputText">
                            <input type="text" class='inputCode' v-model="verifiCode" placeholder="短信验证码">
                            <span class="code cursor font12" v-if='!isCode' @click="getCode($event)" >{{showCode}}</span>
                            <span class="code cursor font12" v-if='isCode' >{{showCode}}</span>
                        </div>
                        <div class="textButton">
                            <span class="sureButton cursor"  @click="goFillin()">确定</span>
                        </div>
                    </div>
                </div>
                <div class="warmBox">
                    <div class="title font16">没收到短信验证码？</div>
                    <div class="warmText font12">1、网络通讯异常可能会造成短信丢失，请重新获取或稍后再试。</div>
                    <div class="warmText font12">2、请核实手机是否已欠费停机，或者屏蔽了系统短信。</div>
                    <div class="warmText font12">3、您也可以尝试将SIM卡移动到另一部手机，然后重试。</div>
                </div>
            </div>
        </div>
        <bacfoot></bacfoot>
    </div>
</template>
<script>
    import bacfoot from '@/components/bacfoot'
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "resetpassword",
        components: {
            bacfoot,
        },
        data(){
            return{
                imgUrl: '',
                hasUserinfo: false,
                showCode: '获取短信校验码',
                time: 60,
                isCode: false,
                phone: '',
                verifiCode: '',
                isResetPhone: false,
                isResetPassword: false,
                isFindPassword: false,
                id: '',
                showPhone: '',
                username: '',
                showname: ''
            }
        },
        created(){
            this.id = this.$route.params.id;
            if(this.id == 1){//重置密码
                this.isResetPassword = true;
                this.isResetPhone = false;
                this.isFindPassword = false;
                this.imgUrl = require('../assets/images/reset11.png')
            }
            if(this.id == 2){//重置手机号
                this.isResetPassword = false;
                this.isResetPhone = true;
                this.isFindPassword = false;
                this.imgUrl = require('../assets/images/reset21.png')
            }
            if(this.id == 3){//找回密码
                this.isResetPassword = false;
                this.isResetPhone = false;
                this.isFindPassword = true;
                this.imgUrl = require('../assets/images/reset31.png')
            }
            this.getInfo()
        },
        beforeDestroy(){
            this.delCookie('cookieTime');
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
                this.delCookie('cookieTime');
                this.$router.push({path:"/"})
            },
            goRegister(){
                this.delCookie('cookieTime');
                this.$router.push({'path':'/register'})
            },
            goLogin(){
                this.delCookie('cookieTime');
                this.$router.push({'path':'/login'})
            },
            getInfo(){
                Service.login().getInfo({
                }).then(response => {
                    if(response.errorCode == 0){//已经登陆
                        this.hasUserinfo = true;
                       this.phone = response.data.phone;
                        var hidePhone = this.phone.substr(3, 4);
                        this.showPhone = this.phone.replace(hidePhone, "****");
                        this.showname = response.data.username;
                        this.username = response.data.username;
                    }else{
                        if(response.errorCode == 5001){
                            if(this.id == 3){
                                this.username = this.$route.query.name;
                                this.check()
                            }else{
                                this.delCookie('cookieTime');
                                this.$router.push({'path':'/login'});
                            }
                            this.hasUserinfo = false;
                        }else{
                            this.$message.error(response.message);
                        }
                    }
                }, err => {
                });
            },
            check(){
                if(this.id == 3){
                    Service.login().nologinToken({
                    }).then(response => {
                        if(response.errorCode == 0){
                            Util.localStorageUtil.set('token',response.data)
                        }else{
                            this.$message.error(response.message);
                        }
                    }, err => {
                    });
                }
                Service.login().check({
                    username: this.username
                }).then(response => {
                    if(response.errorCode == 0){
                        this.showPhone = response.data.phone;
                    }else{
                        this.$message.error(response.message);
                    }
                }, err => {
                });
            },
            goFillin(){
                if(this.verifiCode == ''|| this.verifiCode.length<4){
                    this.$message.error("请输入正确的验证码")
                }else{
                    if(this.id == 2){
                        Service.login().verifioldPhonecode({
                            code: this.verifiCode,
                        }).then(response => {
                            if(response.errorCode == 0){
                                this.delCookie('cookieTime');
                                this.$router.push({path:'/fillinpassword/'+this.id})
                            }else{
                                this.$message.error(response.message)
                            }
                        }, err => {
                        });
                    }else if(this.id == 1 || this.id == 3){
                        Service.login().verifioldPhone({
                            code: this.verifiCode,
                            username: this.username
                        }).then(response => {
                            if(response.errorCode == 0){
                                this.delCookie('cookieTime');
                                this.$router.push({path:'/fillinpassword/'+this.id,query:{name:this.$route.query.name}})
                            }else{
                                this.$message.error(response.message)
                            }
                        }, err => {
                        });
                    }

                }
            },
            setCookie(name, value, day) {
                //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
                var expires = day * 1000;
                var date = new Date(+new Date() + expires);
                document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
            },
            delCookie(key) {
                var date = new Date();
                date.setTime(date.getTime() - 1);
                var delValue = this.getCookie(key);
                if (!!delValue) {
                    document.cookie = key+'='+delValue+';expires='+date.toGMTString();
                }
            },
            getCookie(name) {
                var arr;
                var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) {
                    return unescape(arr[2]);
                }
                else {
                    return null;
                }
            },
            getCode(el){
                let _that = this;
                if (this.time >= 0 && this.isCode) {
                    this.time = '60';
                    return false
                } else {
                    this.time = '60';
                    console.log(this.time,this.isCode)
                    //调用接口
                    if(this.id == 2){
                        Service.login().oldPhoneCode({
                        }).then(response => {
                            if(response.errorCode == 0){
                                clearInterval(t);       //停止计时器
                                el.target.innerHTML = _that.time + '秒后重试';
                                this.isCode = true;
                                var t = setInterval(function () {
                                    if (_that.time > 0) {
                                        _that.time--;
                                        _that.setCookie('cookieTime',_that.time);
                                        el.target.innerHTML = _that.time + '秒后重试'
                                    }
                                    if (_that.time === 0) {
                                        _that.time = 60;
                                        _that.isCode = false;
                                        clearInterval(t);       //停止计时器
                                        el.target.innerHTML = '重获验证码'
                                    }
                                }, 1000)
                            }else{
                                _that.time = 60;
                                _that.isCode = false;
                                this.$message.error(response.message)
                            }
                        }, err => {
                        });
                    }else if(this.id == 1 || this.id == 3){
                        Service.login().getnameCode({
                            username: this.username
                        }).then(response => {
                            if(response.errorCode == 0){
                                clearInterval(t);       //停止计时器
                                el.target.innerHTML = _that.time + '秒后重试';
                                this.isCode = true;
                                var t = setInterval(function () {
                                    if (_that.time > 0) {
                                        _that.time--;
                                        el.target.innerHTML = _that.time + '秒后重试'
                                    }
                                    if (_that.time === 0) {
                                        _that.time = 60;
                                        _that.isCode = false;
                                        clearInterval(t);       //停止计时器
                                        el.target.innerHTML = '重获验证码'
                                    }
                                }, 1000)
                            }else{
                                this.$message.error(response.message)
                            }

                        }, err => {
                        });
                    }
                }
            },
        }
    }
</script>

