<style rel="stylesheet/scss" lang="scss"  scoped>
    .productdetail{
        height: 100%;
        margin-bottom: 100px;
        width:100%;
        /*border-top:1px solid #e5e5e5;*/
        .bacColor{
            height: 100%;
            background-size: cover;
            width:100%;
            position: relative;
            .contaner{
                padding-top:30px;
            }
            .toubaoInfo{
                width: 466px;
                height: 328px;
                background-color: #ffffff;
                border-radius: 8px;
                margin-left:674px;
                padding: 28px 30px 40px;
                color: #000;
                .proName{
                    font-size: 30px;
                    line-height:30px;
                }
                .infoBox{
                    margin-top: 26px;
                    .infoDetail{
                        padding-bottom: 20px;
                        .lable{
                            color: #929292;
                        }
                    }
                }
                .timeSelet{
                    height: 38px;
                    line-height: 38px;
                    .block{
                        height: 36px;
                        line-height: 38px;
                        border: 1px solid #e5e5e5;
                        border-radius: 4px;
                        width:150px;
                        .el-input__inner{
                            width: 100% !important;
                        }
                    }
                    .line{
                       display: inline-block;
                        height: 2px;
                        width: 6px;
                        background: #d2d2d2;
                        margin: 18px 10px;
                    }
                    .endTime{
                        color: #000;
                    }
                    .warmText{
                        line-height: 16px;
                        color: #fe786a;
                        margin-left: 22px;
                    }
                }
            }
        }
        .bottomtab{
            width: 100%;
            padding: 0 14px;
            background: #45b8c7;
            height: 70px;
            line-height: 70px;
            color: #fff;
            .liTab{
                margin: 0 26px;
                position: relative;
            }
            .active:before{
                content: '';
                width: 24px;
                height: 6px;
                background-color: #ffffff;
                border-radius: 3px;
                display: inline-block;
                position: absolute;
                bottom:13px;
                left: 20px;
            }
        }
        .fixed{
            position: fixed;
            width:100%;
            top: 0;
        }
        .marginTop{
            margin-top: 145px;
        }

    }
</style>
<template>
    <div class="productdetail">
        <div class="bacColor" :style="{backgroundImage: 'url(' + imgurl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
            <div class="contaner">
                <div class="toubaoInfo">
                    <div class="proName">学生研学团体旅游保险</div>
                    <div class="infoBox font14">
                        <div class="infoDetail">
                            <span class="lable">投保需求：</span><span class="labletext">年龄10-60周岁，每次可投3-500人</span>
                        </div>
                        <div class="infoDetail">
                            <span class="lable">职业类别：</span><span class="labletext">年龄10-60周岁，每次可投3-500人</span>
                        </div>
                        <div class="infoDetail flex timeSelet">
                            <span class="lable">保险期间：</span>
                            <div class="block">
                                <el-date-picker
                                        @change="startdateChange"
                                        v-model="startTime"
                                        type="date"
                                        :picker-options="pickerOptions1"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </div>
                            <span class="line"></span>
                            <span class="endTime">{{endTime}}</span>
                            <p class="warmText font12">保单将于支付成功后
                                <br>下一个整点生效</p>
                        </div>
                        <div class="infoDetail">
                            <span class="lable">投保方案：</span><span class="labletext">年龄10-60周岁，每次可投3-500人</span>
                        </div>
                        <div class="infoDetail">
                            <span class="lable">保障期间：</span><span class="labletext">年龄10-60周岁，每次可投3-500人</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="bottomtab" :class="isFixed?'fixed':''">
            <ul class="tabBox flex">
                <li class="liTab font16 cursor" @click="goScroll('detail-ts',1)" :class="navSelectIndex == 1 ? 'active' : ''">产品特色</li>
                <li class="liTab font16 cursor" @click="goScroll('detail-qa',2)" :class="navSelectIndex == 2 ? 'active' : ''">常见问题</li>
                <li class="liTab font16 cursor" @click="goScroll('detail-doc',3)" :class="navSelectIndex == 3 ? 'active' : ''">购买须知</li>
                <li class="liTab font16 cursor" @click="goScroll('detail-surrender',4)" :class="navSelectIndex == 4 ? 'active' : ''">理赔流程</li>
            </ul>
        </div>
        <div class="contaner" :class="isFixed?'marginTop':''">
            <div class="detail-ts">
                <div class="title">产品特色</div>
              <img src="../assets/images/1111.jpg">
            </div>
            <div class="detail-qa">
                <div class="title">常见问题</div>
                <img src="../assets/images/1549941871.jpg">
            </div>
            <div class="detail-doc">
                <div class="title">购买须知</div>
                <img src="../assets/images/beijing_1.png">
            </div>
            <div class="detail-surrender">
                <div class="title">理赔流程</div>
                <img src="../assets/images/1111.jpg">
            </div>
        </div>

    </div>
</template>

<script>
    import Service from '../common/service'
    export default {
        name: "productdetail",
        data(){
            return{
                pickerOptions1: {
                },
                startTime: '',
                endTime: '',
                navSelectIndex: 1,
                isFixed: false,
                imgurl: 'https://ifxj-xunan.oss-cn-shenzhen.aliyuncs.com/banner/banner1.png',
                isshowData: true,
                url: '',
                content: '',
                timer: '',
                detailNavBarHeight: 0,
                routerData:[
                    {
                    name:'首页',
                    router:'/homepage',
                    isRouter: false,
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
                time: '1:day'
            }
        },
        created(){
            var curDate = new Date();
            var nextDate = new Date(curDate.getTime() + 24*60*60*1000); //后一天
            this.pickerOptions1 =  {
                disabledDate(time) {
                return time.getTime() < Date.now();
              }
            }
            this.startTime = nextDate;
            let time = this.startTime.getTime();
            this.resetTime(time)
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll, true);
            this.url = window.location.href;
            this.changeRouter();
            $(".bacColor").css({"height":document.body.clientHeight-70});
            var detailNavBarHeight = $('.bacColor').height()+68;
            this.detailNavBarHeight = detailNavBarHeight;
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll, true);
        },
        methods:{
             getPreMonthDay(date,monthNum)
                {
                    var dateArr = date.split('-');
                    var year = dateArr[0]; //获取当前日期的年份
                    var month = dateArr[1]; //获取当前日期的月份
                    var day = dateArr[2]; //获取当前日期的日
                    var days = new Date(year, month, 0);
                    days = days.getDate(); //获取当前日期中月的天数
                    var year2 = year;
                    var month2 = parseInt(month) + monthNum;
                    if (month2 > 12) {
                        var n = parseInt(month2/12);
                        console.log(n)
                        year2 = parseInt(year2) + n;
                        month2 = month2-12*n;
                    }
                    var day2 = day;
                    var days2 = new Date(year2, month2, 0);
                    days2 = days2.getDate();
                    if (day2 > days2) {
                        day2 = days2;
                    }
                    if (month2 < 10) {
                        month2 = '0' + month2;
                    }
                    var t2 = year2 + '-' + month2 + '-' + day2;
                    return t2;
                },
            resetTime(startTime){
                startTime  = new Date(startTime)
                if(this.time.indexOf('day')>0){//天
                    // var date = new Date('2019-2-28 00:00:00');
                    startTime.setDate(startTime.getDate()+3);//获取3天后的日期
                    console.log(startTime)
                    this.endTime = this.timetrans(startTime);
                    console.log(this.endTime)

                }
                if(this.time.indexOf('month')>0){//月
                    console.log(this.getPreMonthDay('2018-12-29',28))
                }
                if(this.time.indexOf('year')>0){//年
                    var date = new Date('2018-1-29 00:00:00');
                    console.log(this.startTime.getDate())
                    // console.log(date.getFullYear()+3)
                    // date.setDate(date.getFullYear()+3);//获取3年后的日期
                    // console.log(date)
                }
            },
            startdateChange(val) {
                this.resetTime(val)
            },
            handleScroll() {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    var scrollTop = Math.ceil(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop); //document.documentElement获取数据
                    var tsOffsetTop = document.querySelector('.detail-ts').offsetTop-80; //产品特色高度
                    var qaOffsetTop = document.querySelector('.detail-qa').offsetTop-80; //常见问题高度
                    var docOffsetTop = document.querySelector('.detail-doc').offsetTop-80; //投保须知高度
                    var surrenderOffsetTop = document.querySelector('.detail-surrender').offsetTop-80; //理赔流程高度
                    if(scrollTop >= this.detailNavBarHeight){
                        this.isFixed = true;
                    }else{
                        this.isFixed = false;
                    }
                    if(scrollTop<qaOffsetTop){
                        this.navSelectIndex = 1;
                    }
                    if(scrollTop<docOffsetTop && scrollTop>qaOffsetTop){
                        this.navSelectIndex = 2;
                    }
                    if(scrollTop>docOffsetTop && scrollTop<surrenderOffsetTop){
                        this.navSelectIndex = 3;
                    }
                    if( scrollTop>surrenderOffsetTop){
                        this.navSelectIndex = 4;
                    }
                }, 13);
            },
            goScroll(data,index) {
                window.removeEventListener('scroll', this.handleScroll, true);
                if(!this.isFixed){
                    var height = $('.' + data).offset().top;
                }else{
                    var height = $('.' + data).offset().top-70;
                }
                this.navSelectIndex = index;
                $('html,body').animate({scrollTop: height}, 500);
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    window.addEventListener('scroll', this.handleScroll, true);
                },500)
            },
            timetrans(d) {
                var getSeconds = '', getMinutes = '', getHours = '',getDate = '',getMonth = '';
                getMonth = (d.getMonth()+1) < 10 ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
                getDate = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
                var newTime = d.getFullYear() + '-' + getMonth + '-' + getDate;
                return newTime
            },
            changeRouter(){
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                }
                $(".wxIcon").css({"display":"inline-block"});
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
            },
        }
    }
</script>

