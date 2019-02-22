<style rel="stylesheet/scss" lang="scss" scoped>
    .safetyschool {
        width: 100%;
        border-top: 1px solid #e5e5e5;
        background: #ececec;
        padding-bottom:100px;
        .saveClass{
            background: url(../assets/images/bg_detail.jpg) 50% 0 repeat-x;
            width:100%;
            height: 313px;
            .classTitle{
                color: #000000;
                padding: 38px 0;
                text-align: center;
                font-weight: 600;
            }
            .classContent{
                .classContentboxone{
                    margin-right: 8px;
                    .classBox{
                        width: 285px;
                        height: 161px;
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
                            position: absolute;
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
                        font-size: 14px;
                        color: #000;
                        margin-top: 10px;
                    }
                }

                .classContentboxone:last-child{
                    margin-right: 0;
                }
            }
        }
    }
</style>
<template>
    <div class="safetyschool">
            <div class="saveClass">
                <div class="classTitle font16">研学旅行 </div>
                <div class="classContent contaner clear">
                    <div v-for="(item,index) in yanxueData.siteSafeSchool" class="classContentboxone cursor fl" @click="goVideoDetail(item.vid)">
                        <div class="classBox">
                            <img :src="item.pictureurl">
                            <i class="mod_cover__mask"></i>
                            <i class="mod_cover__icon_play js_play"></i>
                        </div>
                        <p class="classText">{{item.title}}</p>
                    </div>
                </div>
            </div>
        <div class="saveClass">
            <div class="classTitle">运动</div>
            <div class="classContent contaner clear">
                <div v-for="(item,index) in sportData.siteSafeSchool" class="classContentboxone cursor fl" @click="goVideoDetail(item.vid)">
                    <div class="classBox">
                        <img :src="item.pictureurl">
                        <i class="mod_cover__mask"></i>
                        <i class="mod_cover__icon_play js_play"></i>
                    </div>
                    <p class="classText">{{item.title}}</p>
                </div>
            </div>
        </div>
        <div class="saveClass" >
            <div class="classTitle">其他</div>
            <div class="classContent contaner clear">
                <div v-for="(item,index) in otherData.siteSafeSchool" class="classContentboxone cursor fl" @click="goVideoDetail(item.vid)">
                    <div class="classBox">
                        <img :src="item.pictureurl">
                        <i class="mod_cover__mask"></i>
                        <i class="mod_cover__icon_play js_play"></i>
                    </div>
                    <p class="classText">{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "safetyschool",
        data() {
            return {
                url: '',
                page: 1,
                size: 10,
                otherData:[],
                sportData: [],
                yanxueData:[],
                routerData: [{
                    name: '首页',
                    router: '/homepage',
                    isRouter: false,
                }, {
                    name: '教育·培训',
                    router: '/schoolsafe',
                    isRouter: false,
                }, {
                    name: '研学·实践',
                    router: '/researchStudy',
                    isRouter: false,
                }, {
                    name: '体育·运动',
                    router: '/sport',
                    isRouter: false,
                }, {
                    name: '法律援助',
                    router: '/legalaid',
                    isRouter: false,
                }, {
                    name: '安全学堂',
                    router: '/safetyschool',
                    isRouter: false,
                }]
            }
        },
        mounted() {
            this.url = window.location.href;
            this.changeRouter();
            this.getVideoList()
        },
        methods: {
            goVideoDetail(id){
                this.$router.push({'path':'/videoDetail','query':{id:id}})
            },
            getVideoList(){
                Service.video().getSchoolTypeList({
                    page: this.page,
                    size: this.size,
                }).then(response => {
                    if(response.errorCode == 0){
                        console.log(response.data)
                        if(response.data){
                            this.yanxueData = response.data[0];
                            this.sportData = response.data[1];
                            this.otherData = response.data[2];
                        }else{
                        }
                    }else{
                    }
                }, err => {
                });
            },
            changeRouter() {
                var liData = $("#main")[0].children;
                for (var i = 0; i < this.routerData.length; i++) {
                    liData[i].className = 'fl';
                    if (this.url.indexOf(this.routerData[i].router) > 0) {
                        if (i == 0) {
                            $(".wxIcon").css({"display": "inline-block"});
                        } else {
                            $(".wxIcon").css({"display": "none"});
                        }
                        liData[i].className = 'fl selectActive'
                    }
                }
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
            },
        }
    }
</script>

