<style rel="stylesheet/scss" lang="scss"  scoped>
    .homepage{
        width: 100%;
        height: calc(100% - 70px);
        .swiper-container{
            width: 100%;
            height: 100%;
        }
        .swiper-wrapper{
            width: 100%;
            height: 100%;
            background-size: cover;
        }
        .contentBox{
            width:100%;
            margin: 70px auto;
            text-align: center;
            .title{
                color: #000000;
                padding: 0px 0 70px;
                font-size: 30px;
                font-weight: 600;
            }
            .moreClass{
                width: 120px;
                height: 40px;
                background-color: #45b8c7;
                border-radius: 20px;
                line-height: 40px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                margin: 50px auto 0;
                a{
                    color: #fff;
                    display: inline-block;
                    width: 120px;
                    height: 40px;
                }
            }
            .serverContent{
                padding-bottom: 70px;
                .serverBox{
                    margin-right: 120px;
                    -webkit-transition: 0.3s ease-out;
                    transition: 0.3s ease-out;
                    cursor: pointer;
                    img{
                        height: 100px;
                        width: 100px;
                    }
                    .serverText{
                        font-size: 20px;
                        color: #000;
                        margin-top: 5px;
                    }
                }
                .serverBox:nth-last-child(1){
                    margin-right: 0px
                }
                .serverBox:hover{
                    transform: scale(1.3);
                    .serverText{
                        /*margin-top: 0px;*/
                        /*transition: margin-top .3s;*/
                    }
                }
            }
            .plateContent{
                .plateBox{
                    border: 1px solid #e5e5e5;
                    border-radius: 6px;
                    margin-right: 40px;
                    position: relative;
                    cursor: pointer;
                    img{
                        width: 267px;
                        height: 220px;
                        border-radius: 6px 6px 0 0;
                    }
                    .plateTextOne{
                        font-size: 20px;
                        color: #000;
                        margin-top: 40px;
                        margin-bottom: 18px;
                    }
                    .plateTextTwo{
                        font-size: 14px;
                        color: #929292;
                        margin-bottom: 40px;
                    }
                    .mask{
                        display: inline-block;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #fe786a;
                        opacity: 0;
                        filter: alpha(opacity=0);
                        -webkit-transition: all .7s;
                        transition: all .7s;
                        color: #fff;
                        border-radius: 6px;
                        box-shadow: 0px 2px 27px 0px
                        rgba(83, 154, 241, 0.27);
                        .maskTitle{
                            font-size: 20px;
                            padding-top: 45px;
                        }
                        .maskContent{
                            line-height: 22px;
                            font-size: 14px;
                            padding: 28px;
                            text-align: left;
                        }
                    }
                    .mask:hover{
                        opacity: 0.95;
                    }
                }
                .plateBox:nth-last-child(1){
                    margin-right: 0;
                }
            }
            .legalContent{
                .legalAid{
                    text-align: left;
                    margin-right: 42px;
                    .textbox{
                        width: 369px;
                        height: 436px;
                        border: 1px solid #e5e5e5;

                        .textBac{
                            width: 370px;
                            height: 252px;
                            background-size: cover;
                        }
                        .newsTime{
                            font-size: 12px;
                            color: #000;
                            padding: 6px 22px 0;
                        }
                        .titletext{
                            padding: 22px 22px 0;
                            font-size: 20px;
                            color: #000;
                        }
                        .lead{
                            font-size: 14px;
                            padding: 20px 22px;
                            color: #929292;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 4;
                            overflow: hidden;
                        }
                    }
                }
                .legalAid:nth-last-child(1){
                    margin-right: 0;
                }
                .legalAid:hover{
                    box-shadow: 0px 2px 29px 0px rgba(57, 57, 57, 0.18);
                    -webkit-transition: all .3s linear;
                    transition: all .3s linear;
                }
            }
        }
        .legalBox{
            margin-bottom: 50px;
        }
        .saveClass{
            background: #f4f4f4;
            width:100%;
            height: 514px;
            .classTitle{
                color: #000000;
                padding: 70px 0;
                font-size: 30px;
                text-align: center;
            }
            .classContent{
                .classContentbox{
                    width: 232px;
                    margin-right: 8px;
                    transition:0.1s ease-out;
                    .classBox{
                        width: 232px;
                        height: 127px;
                        background-size: 100% 100%;
                        /*position: relative;*/
                        .mod_cover__mask{
                            display: inline-block;
                            position: relative;
                            left: 0;
                            top: 0;
                            width: 232px;
                            height: 127px;
                            background-color: #000;
                            opacity: 0;
                            filter: alpha(opacity=0);
                            -webkit-transition: opacity .5s;
                            transition: opacity .5s;
                        }
                        .mod_cover__icon_play {
                            display: inline-block;
                            position: relative;
                            top: -90px;
                            margin: -35px;
                            width: 53px;
                            height: 53px;
                            filter: alpha(opacity=0);
                            opacity: 0;
                            -webkit-transform: scale(.7) translateZ(0);
                            -webkit-transition-property: opacity,-webkit-transform;
                            -webkit-transition-duration: .5s;
                            transform: scale(.7) translateZ(0);
                            transition-property: opacity,transform;
                            transition-duration: .5s;
                            zoom: 1;
                            background-size: 100% 100%;
                            background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/cover_play@2x.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006&v=10e4305a2558d496548955434eaa30d9');
                        }
                        .mod_cover__mask:hover{
                            opacity: 0.2;
                            -webkit-transition: opacity .2s;
                            transition: opacity .2s;
                        }
                    }
                    .classBox:hover{
                        .mod_cover__icon_play{
                            opacity: 1;
                            filter: none;
                            -webkit-transition: opacity .2s;
                            transition: opacity .2s;
                            /*transform: scale(1);*/
                        }
                    }
                    .textBox{
                        min-height: 26px;
                        padding: 10px 18px;
                        .classText{
                            text-align: left;
                            font-size: 16px;
                            color: #000;
                        }
                    }
                }
                .classContentbox:last-child{
                    margin-right: 0;
                }
                .classContentbox:hover{
                    transform: scale(1.3);
                    background: #fff;
                    .classText{
                        background: #fff;
                    }
                }

                .classContentboxone{
                    margin-right: 8px;
                    .classBox{
                        width: 234px;
                        height: 127px;
                        overflow: hidden;
                        position: relative;
                        img{
                            width: 100%;
                            height: 100%;
                            transform: scale(1) translateZ(0);
                            transition: transform .75s;
                            object-fit: cover;
                        }
                        .mod_cover__mask{
                            display: inline-block;
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            background-color: #000;
                            opacity: 0;
                            filter: alpha(opacity=0);
                            -webkit-transition: opacity .5s;
                            transition: opacity .5s;
                        }
                        .mod_cover__icon_play {
                            display: inline-block;
                            position: relative;
                            left: 50%;
                            top: 50%;
                            margin: -35px;
                            width: 70px;
                            height: 70px;
                            filter: alpha(opacity=0);
                            opacity: 0;
                            -webkit-transform: scale(.7) translateZ(0);
                            -webkit-transition-property: opacity,-webkit-transform;
                            -webkit-transition-duration: .5s;
                            transform: scale(.7) translateZ(0);
                            transition-property: opacity,transform;
                            transition-duration: .5s;
                            zoom: 1;
                            background-size: 100% 100%;
                            background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/cover_play@2x.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006&v=10e4305a2558d496548955434eaa30d9');
                        }
                        .mod_cover__mask:hover{
                            opacity: 0.2;
                            -webkit-transition: opacity .5s;
                            transition: opacity .5s;
                        }

                    }
                    .classBox:hover{
                        img{
                            transform: scale(1.07) translateZ(0);
                            transition: transform .75s cubic-bezier(0,1,.75,1);
                        }
                        .mod_cover__icon_play{
                            opacity: 1;
                            filter: none;
                            -webkit-transition: opacity .5s;
                            transition: opacity .5s;
                            transform: scale(1.07);
                        }
                    }

                    .classText{
                        font-size: 16px;
                        color: #000;
                        margin-top: 10px;
                    }
                }

                .classContentboxone:last-child{
                    margin-right: 0;
                }
            }
            .moreClass{
                width: 120px;
                height: 40px;
                background-color: #45b8c7;
                border-radius: 20px;
                line-height: 40px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                margin: 50px auto 0;
                a{
                    color: #fff;
                    display: inline-block;
                    width: 120px;
                    height: 40px;
                }
            }
        }
    }
</style>
<template>
    <div class="homepage">
        <div class="homeBanner">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"  :style="{backgroundImage: 'url(' + slide.pictureurl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
        </div>
        <div class="contentBox">
            <div class="contaner">
                <div class="title">提供服务</div>
                <div class="serverContent flexContent">
                    <div class="serverBox" v-for="item in provide">
                        <img :src='item.pictureurl'>
                        <p class="serverText">{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="contentBox">
            <div class="contaner">
                <div class="title">平台特色</div>
                <div class="plateContent flexContent">
                    <div class="plateBox" v-for="item in platformFeatures">
                        <img :src='item.pictureurl'>
                        <p class="plateTextOne">{{item.title}}</p>
                        <p class="plateTextTwo">{{item.subtitle}}</p>
                        <div class="mask">
                            <div class="maskTitle">{{item.title}}</div>
                            <div class="maskContent">{{item.content}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="saveClass contentBox">
            <div class="contaner">
                <div class="classTitle">安全课堂</div>
                <div class="classContent clear">
                    <div v-for="(item,index) in safeSchool" class="classContentbox cursor fl">
                        <div class="classBox"  :style="{backgroundImage: 'url(' + item.pictureurl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
                            <i class="mod_cover__mask"></i>
                            <i class="mod_cover__icon_play js_play"></i>
                        </div>
                        <div class="textBox">
                            <p class="classText">{{item.content}}</p>
                        </div>
                    </div>
                </div>
                <div class="moreClass cursor"><router-link to="/safetyschool">查看更多</router-link></div>
            </div>
        </div>
        <div class="contentBox legalBox">
            <div class="contaner">
                <div class="title">法律援助</div>
                <div class="legalContent flexContent">
                    <div  class="legalAid" v-for="(item,index) in lawHelp" @click="goDetail(item.id)">
                        <div  class="textbox cursor">
                            <div  class='textBac'
                                 :style="{backgroundImage: 'url(' + item.pictureurl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center top'}"></div>
                            <h3 class="titletext">{{item.title}}</h3>
                            <div class="newsTime">{{timetrans(item.starttime)}}</div>
                            <p class="lead">{{item.content}}</p>
                        </div>
                    </div>
                </div>
                <div class="moreClass cursor" ><router-link to="/legalaid">查看更多</router-link></div>
            </div>
        </div>
        <helper></helper>

    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import helper from '@/components/helper'
    import Service from '../common/service'
    export default {
        name: "homepage",
        components: {
            swiper,
            swiperSlide,
            helper
        },
        data() {
            return {
                url: '',
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
                legalData: [{imageUrl: "https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/img/e07d98da452acac1e2c19e8f2bf604e4.png",
                    linked: false,
                    summary: "为了贯彻国家体育总局、教育部《关于开展校园足球活动的通知》、于加快发展青少年校园足球的实落实《教育部等6部门关于加快发展青少年校园足球的实施意见》的文件精神，加强各地青少年足球队伍的交流与发展，相互学习…",
                    time: 1535587200000,
                    title: "法律案例全国青少年足球邀请赛",
                    updateBy: null,
                    updateDate: 1543915906000},{imageUrl: "https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/img/e07d98da452acac1e2c19e8f2bf604e4.png",
                    linked: false,
                    summary: "近日，分享家与中国大地财产保险股份有限公司签署战略合作，为大地保险开展互联网保险业务提供技术支持",
                    time: 1535587200000,
                    title: "分享家与中国大地保险开展战略合作",
                    updateBy: null,
                    updateDate: 1543915906000},{imageUrl: "https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/img/e07d98da452acac1e2c19e8f2bf604e4.png",
                    linked: false,
                    summary: "近日，分享家与中国大地财产保险股份有限公司签署战略合作，为大地保险开展互联网保险业务提供技术支持",
                    time: 1535587200000,
                    title: "分享家与中国大地保险开展战略合作",
                    updateBy: null,
                    updateDate: 1543915906000}],
                swiperSlides: [],
                lawHelp:[],
                platformFeatures: [],
                provide: [],
                safeSchool:[],
                classData:[{'img':require('../assets/images/1548754418.jpg'),'title':'一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件'},{'img':require('../assets/images/1548754418.jpg'),'title':'一件一件一件一件一件'},{'img':require('../assets/images/1548754418.jpg'),'title':'一件一件一件一件一件'},{'img':require('../assets/images/1548754418.jpg'),'title':'一件一件一件一件一件'},{'img':require('../assets/images/1548754418.jpg'),'title':'一件一件一件一件一件'}],
                swiperOption: {
                    effect : 'fade',//切换效果
                    watchSlidesProgress : true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: true//自动播放
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            $(".homeBanner").css({"height":document.body.clientHeight-70});
            this.getHome();
          for(let item of this.classData){
                if(item.title.length>27){
                    item.title = item.title.substring(0,27)+'...'
                }
          }
            for(let item of this.legalData){
                if(item.summary.length>88){
                    item.summary = item.summary.substring(0,88)+'...'
                }
            }
            this.url = window.location.href;
            this.changeRouter()
        },
        methods:{
            goDetail(id){
                this.$router.push({'path':'/legaldetail/'+id})
            },
            getHome(){
                Service.home().getShowHomeAll({
                    bannerSize: 4,
                    provideSize: 4,
                    platSize: 4,
                    schoolSize: 5,
                    LawSize: 3
                }).then(response => {
                    if(response.errorCode == 0){
                        this.swiperSlides = response.data.siteBanner;
                        this.safeSchool = response.data.safeSchool;
                        this.provide = response.data.provide;
                        this.platformFeatures = response.data.platformFeatures;
                        this.lawHelp = response.data.lawHelp
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            changeRouter(){
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                    if(this.url.indexOf(this.routerData[i].router)>0){
                        if(i == 0){
                            $(".wxIcon").css({"display":"inline-block"});
                        }else{
                            $(".wxIcon").css({"display":"none"});
                        }
                        $(".helpIcon").find("span")[0].className = 'iconText';
                        $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
                        liData[i].className = 'fl selectActive'
                    }
                }
            },
            timetrans(timestamp) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(timestamp);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
                var newTime = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 ';
                // + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
        }

    }
</script>

