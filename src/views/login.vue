<style rel="stylesheet/scss" lang="scss"  scoped>
.login{
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
        background: url("../assets/images/loginBac.png")  no-repeat center center;
        background-size: cover;
        width:100%;
        height: 722px;
        .contaner{
            position: relative;
            .bacText{
                background: url("../assets/images/loginText.png")  no-repeat center center;
                background-size: cover;
                width:100%;
                height: 722px;
                position: absolute;
            }
            .loginBox{
                width: 272px;
                height: 300px;
                background-color: #ffffff;
                border-radius: 8px;
                margin-top: 170px;
                padding: 30px 30px 30px;
                position: absolute;
                right: 0;
                .loginTop{
                    margin-bottom: 30px;
                    text-align: center;
                    .xueanlogo{
                        width: 103px;
                        height: 32px;
                    }
                }
                .inputBox{
                    width:100%;
                    height: 40px;
                    margin-bottom: 10px;
                    position: relative;
                    .aaaaa {
                        position: absolute;
                        left: 10px;
                        top: 10px;
                        position: absolute;
                        background: #f8f8f8;
                        color: #000;
                        font-size: 20px;
                    }
                    .passBox{
                        position: absolute;
                        overflow: hidden;
                        height: 78px;
                        overflow-y: scroll;
                        width: 100%;
                        background: #fff;
                        border-radius: 6px;
                        border: 1px solid #e5e5e5;
                        z-index: 100;
                        color: #000;
                        font-size: 14px;
                        .passBoxList{
                            padding: 10px;
                        }
                        .passBoxList:hover{
                            background: #e5e5e5;
                        }
                        .passBoxListone{
                            padding: 10px;
                        }
                        /*display: none;*/
                    }
                    input{
                        height: 40px!important;
                        line-height: 40px;
                        width:100%;
                        color: #000;
                        font-size: 14px;
                        background: #f8f8f8;
                        border-radius: 4px;
                        text-indent: 10px;
                    }
                    .passLeft{
                        color: #000;
                        font-size: 12px;
                        .iconfont{
                            font-size: 14px;
                            margin-right: 6px;
                        }
                        .icon-xuanze{
                            color: #e5e5e5;
                        }
                        .icon-checked{
                            color: #45b8c8;
                        }
                    }
                    .passRight{
                        color: #000;
                        font-size: 12px;
                    }
                    .login{
                        display: inline-block;
                        width:100%;
                        height: 40px;
                        background-color: #45b8c8;
                        border-radius: 20px;
                        line-height: 40px;
                        text-align: center;
                        color: #fff;
                        font-size: 16px;
                    }
                    .login:hover{
                        background: rgba(69,184,200,0.8)
                    }
                }
                .goRester{
                    color: #45b8c8;
                    font-size: 12px;
                    margin-top: 28px;
                    text-align: center;
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
    <div class="login">
        <div class="contaner clear">
            <div class="logo fl">
                <img class="cursor" @click="goHome()" src="../assets/images/yanxuelogo.png">
            </div>
        </div>
        <div class="bac">
            <div class="contaner">
                <div class="bacText"></div>
                <div class="loginBox">
                    <div class="loginTop">
                        <img class="xueanlogo"  src="../assets/images/yanxuelogo.png">
                    </div>
                    <div class="inputBox">
                        <input type="text" v-model="userName" placeholder="请输入用户名">
                    </div>
                    <div class="inputBox">
                        <input type="password" v-model="userPassword" @focus="showPassword()" @keyup="keyPassword()" @blur="closePassword()" placeholder="请输入密码">
                    </div>
                    <div class="inputBox flexBetween">
                        <div class="passLeft">
                            <i class="iconfont  icon-xuanze cursor" @click='selectPass = !selectPass' v-if="!selectPass" ></i>
                            <i class="iconfont icon-checked cursor" @click='selectPass = !selectPass' v-if="selectPass"></i>
                            <span>记住密码</span>
                        </div>
                        <div class="passRight cursor"  @click="goFindPassword()">找回密码</div>
                    </div>
                    <div class="inputBox">
                        <span class="login cursor" @click='goLogin()'>登录</span>
                    </div>
                    <div class="goRester cursor" @click="goRegister()">还没有账号？立即申请</div>
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
import Service from '../common/service'
import Util from '../common/util'
    export default {
        name: "login",
        data(){
            return{
                passLen: 0,
                userName: '',
                userPassword: '',
                selectPass: false,
                showPass: false,
                sha256: ''
            }
        },
        created(){
            this.sha256 = require("js-sha256").sha256;//这里用的是require方法
            if(Util.localStorageUtil.get('userInfo')){
                console.log(Util.localStorageUtil.get('userInfo'))
                this.userName = Util.localStorageUtil.get('userInfo').name;
                this.userPassword = Util.localStorageUtil.get('userInfo').password;
            }
        },
        watch:{
            "selectPass":function(){
                if(this.selectPass){
                    if((this.userName) && (this.userPassword)){
                        var userInfo = {'name': this.userName,'password': this.userPassword}
                        Util.localStorageUtil.set('userInfo',userInfo)
                    }
                }
            }
        },
        methods: {
            goFindPassword(){
                if(this.userName == ''){
                    this.$message.error("请输入用户名")
                }else{
                    var name = encodeURI(this.userName);
                    this.$router.push({'path':'/findpassword/3',query:{name:name}})
                }
            },
            goLogin(){
                var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$|^(?![0-9_|\-]+$)(?![a-zA-Z]+$)[0-9A-Za-z_|\-]{4,20}$|^((?![_|\-]+$)(?![a-zA-Z]+$)[a-zA-Z_|\-]{4,20}$)|^[a-zA-Z]{4,20}$/
                if(this.userName.length<4 ||  this.userName.length>20){
                    this.$message.error('请输入正确的登录名')
                    return;
                }
                if(!reg.test(this.userName)){
                    this.$message.error('请输入正确的登录名')
                    return;
                }
                var reg1 = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
                if(!reg1.test(this.userPassword)){
                    this.$message.error('请输入正确的密码');
                    return
                }
                if(this.userPassword.length<8 || this.userPassword.length>20){
                    this.$message.error('请输入正确的密码');
                    return
                }
                 if(this.selectPass){
                    if((this.userName) && (this.userPassword)){
                        var userInfo = {'name': this.userName,'password': this.userPassword}
                        Util.localStorageUtil.set('userInfo',userInfo)
                    }
                }else{
                     Util.localStorageUtil.clear('userInfo',userInfo)
                 }
                var userPassword = this.sha256(this.userPassword);
                Service.login().login({
                    username: this.userName,
                    password: userPassword
                }).then(response => {
                    if(response.errorCode == 0){
                        Util.localStorageUtil.set('token',response.data.token)
                        if(this.$route.query.callback){
                            this.$router.push({'path':decodeURI(this.$route.query.callback)})
                        }else{
                            this.$router.push({'path':'/'})
                        }
                    }else{
                        this.$message.error(response.message);
                    }
                }, err => {
                });

            },
            showPassword(){
                this.showPass = true;
            },
            keyPassword(event){
                console.log(this.userPassword);
                if(this.userPassword == ''){
                    this.showPass = true;
                }else{
                    this.showPass = false;
                }
            },
            getList(item){
                // let sha256 = require("js-sha256").sha256//这里用的是require方法
                // this.password = sha256(this.passWord)//要加密的密码
                // console.log(this.password)//这就是你加密之后的密码
            
                console.log(item);
            },
            closePassword(){
                this.showPass = false;
            },
            goRegister(){
                this.$router.push({'path':'/register',query:{callback:this.$route.query.callback}})
            },
            goHome(){
                this.$router.push({'path':'/'})
            }
        }
    }
</script>

