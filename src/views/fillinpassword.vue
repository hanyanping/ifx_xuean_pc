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
                .phoneBox{
                    padding-bottom: 30px;
                    border-bottom: 1px solid #f6f6f6;
                    img{
                        width: 472px;
                        height: 64px;
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
                            position: relative;
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
                                margin-left: 340px;
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
                                height: 22px;
                                font-size: 14px;
                                margin-top: -3px;
                                .warmText{
                                    position: relative;
                                    padding: 2px 10px;
                                    display: inline-block;
                                }
                                .warmTextheight{
                                    padding: 6px 10px;
                                }
                                .redText{
                                    color: #fd786a;
                                }
                                .originText{
                                    color: #faa41a;
                                }
                                .blueText{
                                    color: #45b9c8;
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
                                    top: 5px;
                                }
                            }
                        }
                    }
                }
                .remindBox{
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
                    <div class="rightIcon"  @click="logout()" v-if="hasUserinfo">
                        <i class='iconGreen iconfont icon-tuichu iconColor'></i>
                        <span class="iconText iconColor iconColor">退出</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contaner resetpasswordcontent">
            <div class="passwordcontent">
                <div class="title font16" v-if="(isResetPassword) || (isFindPassword)">修改登录密码</div>
                <div class="title font16" v-if="isResetPhone">修改手机号码</div>
                <div class="wordBox" v-if="(isResetPassword) || (isFindPassword)">
                    <img :src="imgUrl" alt="">
                    <div class="inputBox">
                        <div class="inputText">
                            <input type="text" class="text font14" v-model="password" @blur="changePassword('blur')" @keyup="changePassword('keyup')" placeholder="新的登录密码">
                            <div class="warmBox passStyle"><span :class="isLower?'warmText redText':'warmText'">弱</span><span :class="isMiddle?'warmText originText':'warmText'">中</span><span :class="isHeight?'warmTextheight blueText':'warmTextheight'" >高</span></div>
                        </div>
                        <div class="inputText">
                            <input class="text font14" v-model="repassword" @change="watchPassword()" type="password" placeholder="请再次输入您的密码">
                            <div class="warmBox" v-if="validatepassword"><span class="warmText" >密码不一致</span></div>
                        </div>
                        <div class="textButton">
                            <span class="sureButton cursor" @click="goFinish()">确定</span>
                        </div>
                    </div>
                </div>
                <div class="phoneBox" v-if="isResetPhone">
                    <img :src="imgUrl" alt="">
                    <div class="inputBox">
                        <p class="inputtitle font12">我们不会泄露您的手机信息</p>
                        <input type="text" class='inputText font14' v-model='phone'  @change="watchPhone()" placeholder="新的手机号码"/>
                        <div class="codeBox">
                            <input type="text" class="verification font14" v-model="verificode" placeholder="短信验证码"/>
                            <span class="cursor sendCode curson" v-if='!isCode' @click="getCode($event)" >{{showCode}}</span>
                            <span class="cursor sendCode curson" v-if='isCode' >{{showCode}}</span>
                        </div>
                        <div class="textButton">
                            <span class="sureButton cursor" @click="goresetPhone()">确定</span>
                        </div>
                    </div>
                </div>
                <div class="remindBox" v-if="isResetPhone">
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
    import patternRules from '../common/patternRules'
    export default {
        name: "fillinpassword",
        components: {
            bacfoot,
        },
        data(){
            return{
                imgUrl: '',
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
            }
        },
        created(){
            this.id = this.$route.params.id;
            if(this.id == 1){//重置密码
                this.isResetPassword = true;
                this.isResetPhone = false;
                this.isFindPassword = false;
                this.imgUrl = require('../assets/images/reset12.png');
            }
            if(this.id == 2){//重置手机号
                this.isResetPassword = false;
                this.isResetPhone = true;
                this.isFindPassword = false;
                this.imgUrl = require('../assets/images/reset22.png');
                console.log(this.imgUrl)
            }
            if(this.id == 3){//找回密码
                this.isResetPassword = false;
                this.isResetPhone = false;
                this.isFindPassword = true;
                this.imgUrl = require('../assets/images/reset32.png');
            }
            this.getInfo();
        },
        mounted(){
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
            delCookie(key) {
                var date = new Date();
                date.setTime(date.getTime() - 1);
                var delValue = this.getCookie(key);
                if (!!delValue) {
                    document.cookie = key+'='+delValue+';expires='+date.toGMTString();
                }
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
            check(){
                if(this.id == 3){
                    Service.login().nologinToken({
                    }).then(response => {
                        if(response.errorCode == 0){
                            Util.localStorageUtil.set('token',response.data.token)
                        }else{
                            this.$message.error(response.message);
                        }
                    }, err => {
                    });
                }
            },
            watchPhone(){
                if (!((patternRules.mobile).test(this.phone))) {
                    this.$message.error("请输入正确的手机号")
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
                    let _that = this;
                    _that.time = '60';
                    if (this.time >= 0 && this.isCode) {
                        this.time = '60';
                        return false
                    } else {
                        //调用接口
                        Service.login().getnewCode({
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
                                this.$message.error(response.message)
                            }
                        }, err => {
                        });

                    }
                }
            },
            goresetPhone(){
                if (!((patternRules.mobile).test(this.phone))) {
                    this.$message.error("请输入正确的手机号");
                    return;
                }
                if(this.verificode == ''|| this.verificode.length<4){
                    this.$message.error("请输入正确的验证码");
                    return;
                }
                Service.login().resetnewPhone({
                    code: this.verificode,
                    phone: this.phone
                }).then(response => {
                    if(response.errorCode == 0){
                        this.delCookie('cookieTime');
                        this.$router.push({path:'/finishset/'+this.id,query:{"name":this.$route.query.name}})
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            goFinish(){
                var reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;
                if(!reg.test(this.password)){
                    this.$message.error("请输入带有数字、大小写字母、或其它特殊符号至少两种组合的密码")
                    return
                }
                if(this.isLower){
                    this.$message.error("请输入带有数字、大小写字母、或其它特殊符号至少两种组合的密码")
                    return
                }
                if(this.password.length<8 || this.password.length>20){
                    this.$message.error('为保障你的账户安全，密码位数请至少设置8位数！')
                    return
                }
                if(!this.repassword || (this.repassword != this.password)){
                    this.validatepassword = true;
                    this.$message.error('请再次输入密码')
                    return
                }
                Service.login().changePassword({
                    username: this.username,
                    password: this.password
                }).then(response => {
                    if(response.errorCode == 0){
                        this.$router.push({path:'/finishset/'+this.id,query:{"name":this.$route.query.name}})
                    }else{
                        this.$message.error(response.message)
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
            changePassword(type){
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
                    if(type=='blur'){
                        this.$message.error("请输入带有数字、大小写字母、或其它特殊符号至少两种组合的密码")
                    }
                    this.isMiddle = false;
                    this.isLower = false;
                    this.isHeight = false;
                }
            },
            }
    }
</script>

