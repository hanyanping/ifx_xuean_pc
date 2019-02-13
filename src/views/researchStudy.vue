<style rel="stylesheet/scss" lang="scss"  scoped>
    .researchStudy{
        background: #ececec;
        height: 100%;
    }
    .researchStudyContent{

        .back{
            width: 100%;
            height: 257px;
            background: url("../assets/images/aboutourBack.jpg") no-repeat center center;
            background-size: cover;
            .backText{
                width: 1200px;
                height: 257px;
                /*background: #f00;*/
            }
        }
        .contaner{
            color: #000;
            margin-bottom: 150px;
            .listBox{
                margin-top: 20px;
                background: #fff;
                .listLeft{
                    width: 574px;
                    height: 306px;
                    position: relative;
                    .leftTag{
                        position: absolute;
                        left: 12px;
                        top: 12px;
                        display: inline-block;
                        width: 98px;
                        height: 30px;
                        background-color: #fe786a;
                        border-radius: 6px;
                        text-align: center;
                        line-height: 30px;
                        color: #fff;
                    }
                    .leftImg{
                        width: 574px;
                        height: 306px;
                    }
                }
                .listRight{
                    width: 50%;
                    margin: 24px 30px;
                    .rightTitle{
                        color: #000;
                        font-size: 20px;
                        font-weight: 600;
                    }
                    .rightTitle:hover{
                        color:#45b8c8;
                    }
                    .rightText{
                        padding: 10px 0 12px;
                        color: #929292;
                        font-size: 12px;
                        .rightSpan{
                            margin-right: 30px;
                        }
                    }
                    .toubao{
                        line-height: 40px;
                        width: 121px;
                        height: 40px;
                        background-color: #45b8c8;
                        border-radius: 20px;
                        text-align: center;
                        color: #fff;
                        font-size: 12px;
                        margin-top: 11px;
                    }
                    .xianzhong{
                        .xianzhongName{
                            padding: 14px 0;
                            font-size: 12px;
                            color: #000;
                            margin-right:90px;
                            width: 110px;
                        }
                        .xianzhongMoney{
                            text-align: left;
                            height: 44px;
                            line-height: 44px;
                            font-size: 12px;
                            color: #000;
                            .xianzhongMoney0{
                                display: inline-block;
                                height:100%;
                                width:110px;
                                border-right: solid 1px #fe776a;
                                border-left: solid 1px #fe776a;
                                margin-right: 6px;
                                text-align: center;
                            }

                            .xianzhongMoney1{
                                display: inline-block;
                                height:100%;
                                width:110px;
                                border-right: solid 1px #faa41b;
                                border-left: solid 1px #faa41b;
                                margin-right: 6px;
                                text-align: center;
                            }

                            .xianzhongMoney2{
                                display: inline-block;
                                height:100%;
                                width:110px;
                                border-right: solid 1px #057fad;
                                border-left: solid 1px #057fad;
                                text-align: center;
                            }
                        }

                        .moneyTitle{
                            .xianzhongMoney0{
                                background: #fe776a;
                                color:#fff;
                                border-radius: 6px 6px 0 0;
                            }
                            .xianzhongMoney1{
                                background: #faa41b;
                                color:#fff;
                                border-radius: 6px 6px 0 0;
                            }
                            .xianzhongMoney2{
                                background: #057fad;
                                color:#fff;
                                border-radius: 6px 6px 0 0;
                            }
                        }
                    }
                    .xianzhangone:nth-last-child(1){
                        .xianzhongMoney{
                            .xianzhongMoney0{
                                border-bottom: solid 1px #fe776a;
                                border-radius: 0 0 10px 10px;
                            }
                            .xianzhongMoney1{
                                border-bottom: solid 1px #faa41b;
                                border-radius: 0 0 10px 10px;
                            }
                            .xianzhongMoney2{
                                border-bottom: solid 1px #057fad;
                                border-radius: 0 0 6px 6px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="researchStudy">
        <practicetab></practicetab>
        <div class="researchStudyContent">
            <div class="back">
                <div class="contaner backText">
                </div>
            </div>
            <div  class="contaner">
                <div class="listBox flex cursor" v-for="(item,index) in listData">
                    <div class="listLeft">
                        <span class="leftTag">大地保险</span>
                        <img class="leftImg" :src="item.img">
                    </div>
                    <div class="listRight">
                        <div class="rightTop flexBetween">
                            <div>
                                <div class="rightTitle">出行保 — 保障团体意外险保障团体意外险保障</div>
                                <p class="rightText"><span class="rightSpan">适用人群：10-28周岁</span><span>价格：2元/人/天起</span></p>
                            </div>
                            <div class="toubao cursor" v-if="index==0" @click="showAppiont = true">预约定制</div>
                            <div class="toubao cursor" v-else>立即投保</div>
                        </div>
                        <div class="xianzhong flex" v-if="ite.money.length == 1" v-for="(ite,inde) in item.xianzhong">
                            <div class="xianzhongName" >{{ite.name}}</div>
                            <div class="xianzhongMoney" v-for="it in ite.money">{{it.total}}</div>
                        </div>
                        <div class="xianzhong  xianzhangone" v-if="ite.money.length > 1" v-for="(ite,inde) in item.xianzhong">
                            <div class="flex" v-if="inde == 0">
                                <div class="xianzhongName" ></div>
                                <div class="xianzhongMoney moneyTitle">
                                    <p :class="'xianzhongMoney'+itindex" v-for="(it,itindex) in ite.money">
                                        <span v-if="itindex == 0">方案A</span>
                                        <span v-if="itindex == 1">方案B</span>
                                        <span v-if="itindex == 2">方案C</span>
                                    </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="xianzhongName" >{{ite.name}}</div>
                                <div class="xianzhongMoney">
                                    <p :class="'xianzhongMoney'+itindex" v-for="(it,itindex) in ite.money">
                                        {{it.total}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <makeappoint @sendiptVal='changeshowAppiont' :showAppiont="showAppiont"></makeappoint>
    </div>
</template>

<script>
    import practicetab from '@/components/practicetab'
    import makeappoint from '@/components/makeappoint'
    export default {
        name: "researchStudy",
        components: {
            practicetab,
            makeappoint,
        },
        data() {
            return{
                showAppiont: false,
                listData: [
                    {tag: '大地保险',img:require('../assets/images/1549941871.jpg'),xianzhong:
                            [
                            {name:'意外伤害身故和残疾',money:[{total:'1020万元'},{total:'1万元'},{total:'120万元'}]},
                            {name:'意外伤害医疗',money:[{total:'1020万元'},{total:'100万元'},{total:'120万元'}]},
                            {name:'意外伤害身故和残疾',money:[{total:'120万元'},{total:'100万元'},{total:'1020万元'}]},
                            {name:'意外伤害身故和残疾',money:[{total:'10万元'},{total:'100万元'},{total:'100万元'}]}
                            ]
                    },
                    {tag: '大地保险',img:require('../assets/images/1549941871.jpg'),xianzhong:
                            [
                                {name:'意外伤害身故和残疾',money:[{total:'10-20万元'}]},
                                {name:'意外伤害医疗',money:[{total:'10-20万元'}]},
                                {name:'意外住院津贴',money:[{total:'10-20万元'}]},
                                {name:'高风险运动意外医疗',money:[{total:'10-20万元'}]}
                            ]
                    }
                    ],
                url: '',
                routerData:[{
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
                }]
            }
        },
        mounted(){
            this.url = window.location.href;
            this.changeRouter()
        },
        methods:{
            changeshowAppiont(val){
                this.showAppiont = val
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
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
            },
        }
    }
</script>

