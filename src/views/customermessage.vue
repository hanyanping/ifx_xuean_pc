<style rel="stylesheet/scss" lang="scss"  scoped>
    .customermessage{
        width: 100%;
        height: 100%;
        border-top: 1px solid #e5e5e5;
        .tabContent{
            width:100%;
            .back{
                height: 722px;
                width:100%;
                background: #ececec;
                position: relative;
                .contaner{
                    /*text-align: center;*/
                    height: 100%;
                    .messageBox{
                        margin: 40px 100px;
                        position: absolute;
                        width: 840px;
                        height: 466px;
                        background-color: #ffffff;
                        padding: 48px 80px;
                        .registerTitle{
                            color: #000;
                            font-size: 20px;
                            margin-bottom: 48px;
                            text-align: left;
                        }
                        .inputBox{
                            text-align: left;
                            margin-bottom: 20px;
                            position: relative;
                            .warmText{
                                position: absolute;
                                top: 32px;
                                left: 100px;
                                color:#fe776a;
                            }
                            .warmTextone{
                                top: 116px;
                            }
                            .lableBox{
                                width: 100px;
                                height: 30px;
                                line-height: 30px;
                                .lableIcon{
                                    color: #fe776a;
                                    margin-right: 6px;
                                    margin-top: 5px;
                                    font-size: 12px;
                                }
                                .lableText{
                                    color: #929292;
                                }
                            }
                            .inputText{
                                width: 734px;
                                height: 30px;
                                line-height: 30px;
                                color: #000;
                                font-size: 14px;
                                border: 1px solid #e5e5e5;
                                text-indent: 10px;
                            }
                            .textareaBox{
                                height: 112px;
                                width: 734px;
                            }
                        }
                        .registerButton{
                            width: 120px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            font-size: 16px;
                            color: #fff;
                            background-color: #45b8c8;
                            border-radius: 20px;
                            margin: 65px auto;
                        }
                        .registerButton:hover{
                            background: rgba(69,184,200,0.8)
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="customermessage">
        <div class="tabContent">
            <div>
                <div class="back">
                    <div class="contaner">
                        <div class="messageBox">
                            <div class="registerTitle">请提交您需要咨询的问题，我们将尽快给您回复：</div>
                            <div class="inputBox clear">
                                <div class="fl lableBox"><span class="lableIcon">*</span><span class="lableText font14">问题类型</span></div>
                                <el-select v-model="questionType" placeholder="请选择问题类型" class="inputText font14 fl">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                                <p class="warmText font12" v-if="!booleanData.hasType">请选择问题类型</p>
                            </div>
                            <div class="inputBox clear">
                                <div class="fl lableBox"><span class="lableIcon">*</span><span class="lableText font14">问题描述</span></div>
                                <textarea class="inputText fl font14 textareaBox" v-model="description"  placeholder="请输入问题描述"></textarea>
                                <p class="warmText warmTextone font12" v-if="!booleanData.hasDescrible">请输入问题描述</p>
                            </div>
                            <div class="inputBox clear">
                                <div class="fl lableBox"><span class="lableIcon">*</span><span class="lableText font14">联系人姓名</span></div>
                                <input class="inputText font14 fl" v-model='contactName' type="text" placeholder="请输入姓名">
                                <p class="warmText font12" v-if="!booleanData.hasName">请输入姓名</p>
                            </div>
                            <div class="inputBox clear">
                                <div class="fl lableBox"><span class="lableIcon">*</span><span class="lableText font14">联系人手机号</span></div>
                                <input class="inputText font14 fl" v-model="phone" type="text" placeholder="请输入正确的手机号">
                                <p class="warmText font12" v-if="!booleanData.hasPhone">请输入正确的手机号</p>
                            </div>
                        <div class="registerButton cursor" @click="goSubmit()">
                            确认提交
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "customermessage",
        data(){
            return{
                userId: '',
                description: '',
                contactName: '',
                phone: '',
                booleanData:{
                    hasType: true,
                    hasDescrible: true,
                    hasName: true,
                    hasPhone: true
                },
                questionType: '',
                options:[],
                selectId: 1,
                url: '',
                downLoadData: [],
                routerData:[{
                    name:'首页',
                    router:'/homepage',
                    isRouter: true,
                },{
                    name:'教育·培训',
                    router:'/schoolsafe',
                    isRouter: false,
                },{
                    name:'研学·实践',
                    router:'/researchStudy',
                    isRouter: false,
                },{
                    name:'体育·运动',
                    router:'/sport',
                    isRouter: false,
                },{
                    name:'法律援助',
                    router:'/legalaid',
                    isRouter: false,
                },{
                    name:'安全学堂',
                    router:'/safetyschool',
                    isRouter: false,
                }],
            }
        },
        mounted(){
            this.url = window.location.href;
            this.changeRouter()
        },
        created(){
            this.getQuestionType()
        },
        watch:{
            "description":function(){
                if(this.description.length > 10){
                    this.description = this.description.substring(0,10)
                }
                if(this.description){
                    this.booleanData.hasDescrible = true;
                }
            },
            "phone":function(){
                this.phone = this.phone.replace(/\s+/g, "");
                if(this.phone.length > 11){
                    this.phone = this.phone.substring(0,11)
                }
                if(this.phone){
                    this.booleanData.hasPhone = true;
                }
            },
            "contactName":function(){
                if(this.contactName.length > 10){
                    this.contactName = this.contactName.substring(0,10)
                }
                if(this.contactName){
                    this.booleanData.hasName = true;
                }
            },
            "questionType":function(){
                if(this.questionType){
                    this.booleanData.hasType = true;
                }
            }
        },
        methods:{
            getQuestionType(){
                Service.helper().getusermessageType({
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data){
                            this.options = response.data;
                        }
                    }else{
                    }
                }, err => {
                });
            },
            goSubmit(){
                if(this.questionType == ''){
                    this.booleanData.hasType = false;
                    return;
                }
                if(this.description == ''){
                    this.booleanData.hasDescrible = false;
                    return;
                }else{
                    this.description = this.description.replace(/(^\s*)|(\s*$)/g, "");
                }
                if(this.contactName == ''){
                    this.booleanData.hasName = false;
                    return;
                }
                if(this.phone == ''){
                    this.booleanData.hasPhone = false;
                    return;
                }else{
                    var reg = /^1\d{10}$/;
                    if(!reg.test(this.phone)){
                        this.booleanData.hasPhone = false;
                    }
                }
                Service.helper().getuserSendMessage({
                    userId: this.userId,
                    problemTypes: this.questionType,
                    description: this.description,
                    contactName: this.contactName,
                    phone: this.phone
                }).then(response => {
                    if(response.errorCode == 0){
                        this.$message({
                            message: '提交成功，我们将尽快给您回复。',
                            type: 'success'
                        });
                        setTimeout(function(){
                            window.location.href = Util.localStorageUtil.get('url')
                        },3000)
                    }else{
                    }
                }, err => {
                });
            },

            changeRouter(){
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                    $(".wxIcon").css({"display":"none"});
                    $(".helpIcon").find("span")[0].className = 'iconText';
                    $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
                }
            },
        }
    }
</script>

