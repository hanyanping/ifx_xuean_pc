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
                        position: relative;
                        text-align: left;
                        margin-bottom: 10px;
                        .warmBox{
                            position: absolute;
                            margin-left: 300px;
                            top: 10px;
                            .warmText{

                            }
                        }
                        .inputText{
                            width:80%;
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
                        .registerButton:hover{
                            background: rgba(69,184,200,0.8);
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
                        <input class="inputText" v-model="name" type="text" placeholder="请设置登录名">
                        <div class="warmBox"><span class="warmText">555555</span></div>
                    </div>
                    <div class="inputBox">
                        <input class="inputText" v-model="password" type="password" @blur="changePassword" placeholder="请设置登录密码">
                        <div class="warmBox"><span class="warmText">555555</span><span class="warmText">555555</span><span class="warmText">555555</span></div>
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
                        <i class="iconfont  icon-xuanze cursor" @click='selectPass = !selectPass' v-if="!selectPass" ></i>
                        <i class="iconfont icon-checked cursor" @click='selectPass = !selectPass' v-if="selectPass"></i>
                        <span class="cursor selectText">我已阅读并同意《学安通网站服务协议》协议条款</span>
                    </div>
                    <div class="inputBox">
                        <span class="registerButton cursor" @click="submit()">
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
                name: '',
                password: ''
            }
        },
        watch:{
          'password':function(){

          }
        },
        methods: {
            changePassword(){
                var reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
                var num = false,Capital = false,Lowercase = false,specail = false ;
                if(reg.test(this.password)){
                    var reg1 = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]+$/;
                    var reg2 = /^[a-z]+$/;
                    var reg3 = /^[A-Z]+$/;
                    var reg4 = /^[0-9]+$/;
                    var passWord = [];
                     passWord = this.password.split('');
                    for(var i=0;i<passWord.length;i++){
                        if(reg1.test(passWord[i])){
                            specail = true;
                        }
                        if(reg2.test(passWord[i])){
                            Lowercase = true;
                        }
                        if(reg3.test(passWord[i])){
                            Capital = true;
                        }
                        if(reg4.test(passWord[i])){
                            num = true;
                        }
                    }
                    if((num&&!Capital&&!Lowercase&&!specail) || (!num&&Capital&&!Lowercase&&!specail) || (!num&&!Capital&&Lowercase&&!specail)|| (!num&&!Capital&&!Lowercase&&specail)){
                        alert(1)
                    }
                    if((!num&&!Capital&&Lowercase&&specail) || (!num&&Capital&&!Lowercase&&specail) || (!num&&Capital&&Lowercase&&!specail)|| (num&&!Capital&&!Lowercase&&specail)|| (num&&!Capital&&Lowercase&&!specail)|| (num&&Capital&&!Lowercase&&!specail)){
                        alert(2)
                    }
                    if((!num&&Capital&&Lowercase&&specail) || (num&&!Capital&&Lowercase&&specail) || (num&&Capital&&!Lowercase&&specail)|| (num&&Capital&&Lowercase&&!specail)|| (num&&Capital&&Lowercase&&specail)){
                        alert(3)
                    }
                }
            },
            goRegister(){
                this.$router.push({'path':'/register'})
            },
            goHome(){
                this.$router.push({'path':'/'})
            },
            submit(){
                // var reg= /^([0-9]+[a-zA-Z]+[_|\-]?$)|^[a-zA-Z_\-]+$|^[a-zA-Z_\-]+$/ ;
                // var reg= /^([0-9]+[a-zA-Z])|^([0-9a-zA-Z_|\-]+$)|^([a-zA-Z_|\-]+$)|^([a-zA-Z]+$)/ ;
                // var reg=/^((?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$)/;//数字和字母的组合
                var reg=/^((?![0-9_|\-]+$)(?![a-zA-Z]+$)[0-9A-Za-z_|\-]{4,20}$)/;//数字字母—组合
                // var reg=/^((?![_|\-]+$)(?![a-zA-Z]+$)[a-zA-Z_|\-]{4,20}$)/;//—和字母的组合
                // var reg=/^[a-zA-Z]{4,20}$/;//字母的组合
                // var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$|^(?![0-9_|\-]+$)(?![a-zA-Z]+$)[0-9A-Za-z_|\-]{4,20}$|^((?![_|\-]+$)(?![a-zA-Z]+$)[a-zA-Z_|\-]{4,20}$)|^[a-zA-Z]{4,20}$/
                console.log(this.name)
                console.log(reg.test(this.name))
                if(!reg.test(this.name)){
                    alert(4444)
                }
            }
        }
    }
</script>

