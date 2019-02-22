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
                        <input class="inputText" v-model="name" @change="watchName()" type="text" placeholder="请设置登录名">
                        <div class="warmBox" v-if="validateName"><span class="warmText" >请输入正确的登录名</span></div>
                    </div>
                    <div class="inputBox">
                        <input class="inputText" v-model="password" type="password" @keyup="changePassword" placeholder="请设置登录密码">
                        <div class="warmBox passStyle"><span :class="isLower?'warmText redText':'warmText'">弱</span><span :class="isMiddle?'warmText originText':'warmText'">中</span><span :class="isHeight?'warmTextheight blueText':'warmTextheight'" >高</span></div>
                    </div>
                    <div class="inputBox">
                        <input class="inputText" v-model="repassword" @change="watchPassword()" type="password" placeholder="请再次输入您的密码">
                        <div class="warmBox" v-if="validatepassword"><span class="warmText" >密码不一致</span></div>
                    </div>
                    <div class="inputBox">
                        <input class="inputText" v-model='phone' type="text" @change="watchPhone()" placeholder="请输入手机号码">
                        <div class="warmBox" v-if="validatephone"><span class="warmText" >请输入正确的手机号</span></div>
                    </div>
                    <div class="inputBox">
                        <input class="verification" v-model="verticalcode" type="text" placeholder="请输入验证码">
                        <span class="cursor sendCode curson" v-if='!isCode' @click="getCode($event)" >{{showCode}}</span>
                        <span class="cursor sendCode curson" v-if='isCode' >{{showCode}}</span>
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
    import Service from '../common/service'
    import patternRules from '../common/patternRules'
    export default {
        name: "register",
        data(){
            return{
                validateName: false,
                validatephone: false,
                validatepassword: false,
                isMiddle: false,
                isLower: false,
                isHeight: false,
                selectPass: true,
                name: '',
                password: '',
                repassword: '',
                verticalcode: '',
                phone: '',
                showCode: '发送验证码',
                time: 60,
                isCode: false,
            }
        },
        watch:{
          'password':function(){

          }
        },
        beforeDestroy(){
            this.delCookie('cookieTime');
        },
        methods:{
            delCookie(key) {
                var date = new Date();
                date.setTime(date.getTime() - 1);
                var delValue = this.getCookie(key);
                if (!!delValue) {
                    document.cookie = key+'='+delValue+';expires='+date.toGMTString();
                }
            },
            watchPassword(){
                if(this.repassword != this.password){
                    this.validatepassword = true;
                }else{
                    this.validatepassword = false;
                }
            },
            watchPhone(){
                if (!((patternRules.mobile).test(this.phone))) {
                    this.validatephone = true;
                }else{
                    this.validatephone = false;
                }
            },
            watchName(){
                var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$|^(?![0-9_|\-]+$)(?![a-zA-Z]+$)[0-9A-Za-z_|\-]{4,20}$|^((?![_|\-]+$)(?![a-zA-Z]+$)[a-zA-Z_|\-]{4,20}$)|^[a-zA-Z]{4,20}$/
                if(this.name.length>3 && this.name.length<21){
                    if(!reg.test(this.name)){
                        this.validateName = true;
                    }else{
                        this.validateName = false;
                    }
                }else{
                    this.validateName = true;
                }
            },
            setCookie(name, value, day) {
                //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
                var expires = day * 1000;
                var date = new Date(+new Date() + expires);
                document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
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
                if (!((patternRules.mobile).test(this.phone))) {
                    this.$message.error('请输入正确手机号！');
                    return false
                } else {
                    this.time = '60'
                    let _that = this;
                    if (this.time >= 0 && this.isCode) {
                        this.time = '60';
                        return false
                    } else {
                        //调用接口
                        Service.login().getCode({
                            phone: this.phone
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
                                _that.time = 60;
                                _that.isCode = false;
                            }

                        }, err => {
                        });
                    }
                }
            },
            changePassword(){
                var reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
                var num = false,Capital = false,Lowercase = false,specail = false ;
                if(reg.test(this.password)){
                    if(this.password.length>7){
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
                            this.isLower = true;
                            this.isMiddle = false;
                            this.isHeight = false;
                        }
                        if((!num&&!Capital&&Lowercase&&specail) || (!num&&Capital&&!Lowercase&&specail) || (!num&&Capital&&Lowercase&&!specail)|| (num&&!Capital&&!Lowercase&&specail)|| (num&&!Capital&&Lowercase&&!specail)|| (num&&Capital&&!Lowercase&&!specail)){
                            this.isMiddle = true;
                            this.isLower = false;
                            this.isHeight = false;
                        }
                        if((!num&&Capital&&Lowercase&&specail) || (num&&!Capital&&Lowercase&&specail) || (num&&Capital&&!Lowercase&&specail)|| (num&&Capital&&Lowercase&&!specail)|| (num&&Capital&&Lowercase&&specail)){
                            this.isHeight = true;
                            this.isLower = false;
                            this.isMiddle = false;
                        }
                    }else{
                        this.isMiddle = false;
                        this.isLower = true;
                        this.isHeight = false;
                    }
                }else{
                    this.isMiddle = false;
                    this.isLower = false;
                    this.isHeight = false;
                }
            },
            goRegister(){
                this.delCookie('cookieTime');
                this.$router.push({'path':'/register'})
            },
            goHome(){
                this.delCookie('cookieTime');
                this.$router.push({'path':'/'})
            },
            submit(){
                if(!this.name){
                    this.validateName = true;
                    this.$message.error('请设置登录名')
                    return
                }
                var reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
                if(!reg.test(this.password)){
                    this.$message.error('请输入正确格式的密码')
                    return
                }
                if(this.isLower){
                    this.$message.error('请输入正确格式的密码')
                    return
                }
                if(this.password.length<8 || this.password.length>20){
                    this.$message.error('为保障你的账户安全，密码位数请至少设置6位数！')
                    return
                }
                if(!this.repassword || (this.repassword != this.password)){
                    this.validatepassword = true;
                    this.$message.error('请再次输入密码')
                    return
                }
                if(!this.phone || this.validatephone){
                    this.validatephone = true;
                    this.$message.error('请输入手机号')
                    return
                }
                if(!this.verticalcode){
                    this.$message.error('请输入验证码')
                    return
                }
                if(!this.selectPass){
                    this.$message.error('请勾选协议条款')
                    return
                }
                if(!this.validateName&&!this.validatephone && !this.validatepassword && this.verticalcode){
                    Service.login().register({
                        username: this.name,
                        phone: this.phone,
                        code: this.verticalcode,
                        password: this.password
                    }).then(response => {
                        if(response.errorCode==0){
                            this.delCookie('cookieTime');
                        }
                    }, err => {
                    });
                }
            }
        }
    }
</script>

