<style rel="stylesheet/scss" lang="scss"  scoped>
    .studybase{
        background: #ececec;
        height: 100%;
    }
    .studybaseContent{
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
                    .xianzhangone{
                        .flex:nth-last-child(1){
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
    }
</style>
<template>
    <div class="studybase">
        <practicetab></practicetab>
        <div class="studybaseContent">
            <div class="back">
                <div class="contaner backText">
                </div>
            </div>
            <div  class="contaner">
                <div v-if='isshowMore' class="listBox flex cursor" v-for="(item,index) in listData">
                    <div class="listLeft">
                        <span class="leftTag">{{item.tag}}</span>
                        <img class="leftImg" :src="item.imageUrl">
                    </div>
                    <div class="listRight">
                        <div class="rightTop flexBetween">
                            <div>
                                <div class="rightTitle">{{item.name}}</div>
                                <p class="rightText"><span class="rightSpan">适用人群：10-28周岁</span><span>价格：2元/人/天起</span></p>
                            </div>
                            <div class="toubao cursor" v-if="item.type ==3" @click="showAppiont = true">预约定制</div>
                            <div class="toubao cursor" v-if="item.type ==1" @click="goToubao(item.id)">立即投保</div>
                        </div>
                        <div class="xianzhong flex" v-if="ite.productPlanDutyList.length == 1" v-for="(ite,inde) in item.productDutyList">
                            <div class="xianzhongName" >{{ite.name}}</div>
                            <div class="xianzhongMoney" v-for="it in ite.productPlanDutyList">{{it.amountName}}</div>
                        </div>
                        <div class="xianzhong  xianzhangone" v-if="item.productPlanListlength>1">
                            <div>
                                <div style="display: flex;">
                                    <div class="xianzhongName" ></div>
                                    <div class="xianzhongMoney moneyTitle">
                                        <p :class="'xianzhongMoney'+itindex" v-for="(it1,itindex) in item.productPlanList">
                                            <span >{{it1.name}}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex" v-for="(ite,inde) in item.productDutyList">
                                <div class="xianzhongName" >{{ite.name}}</div>
                                <div class="xianzhongMoney">
                                    <p :class="'xianzhongMoney'+itindex" v-for="(it,itindex) in ite.productPlanDutyList">
                                        {{it.amountName}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="showLoading" style='text-align: center;' v-infinite-scroll="loadMore"
                     infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                    <img src="../assets/images/loading.gif" style="height: 20px;width: 100px;margin-top:20px;">
                </div>
            </div>
        </div>
        <makeappoint @sendiptVal='changeshowAppiont' :showAppiont="showAppiont"></makeappoint>
    </div>
</template>

<script>
    import practicetab from '@/components/practicetab'
    import makeappoint from '@/components/makeappoint'
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "studybase",
        components: {
            practicetab,
            makeappoint
        },
        data() {
            return{
                listData: [],
                showAppiont: false,
                isshowMore: false,
                showLoading: true,
                busy: false,
                pages: 1,
                pageSizes: 4,
                id: '',
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
            this.id = this.$route.query.id;
            this.url = window.location.href;
            this.changeRouter()
            this.getList(false)
        },
        methods:{
            getInfo(id){
                Service.login().getInfo({
                }).then(response => {
                    if(response.errorCode == 0){//已登录
                        this.$router.push({"path":'/productdetail/'+id})
                    }else{
                        if(response.errorCode == 5001){
                            var url = encodeURI('/productdetail/'+id)
                            this.$router.push({"path":'/login',query:{callback:url}})
                        }
                    }
                }, err => {
                });
            },
            loadMore: function () {
                this.busy = true;
                // 多次加载数据
                setTimeout(() => {
                    this.pages++;
                    this.getList(true);
                }, 500);
            },
            getList(flag){
                Service.product().getProductInfoListByCategory({
                    categoryId: this.id,
                    page: this.pages,
                    size: this.pageSizes
                }).then(response => {
                    if (flag) {
                        // 多次加载数据
                        if (response.data.length == 0) {
                            this.busy = true;
                            this.showLoading = false;
                        } else {
                            this.listData = this.listData.concat(response.data);
                            for(let item of this.listData){
                                item.productPlanListlength = item.productPlanList.length;
                            }
                            this.busy = false;
                        }
                    } else {
                        // 第一次加载数据
                        if (response.data.length == 0) {
                            this.busy = true;
                            this.showLoading = false;
                        }else{
                            this.listData = response.data;
                            console.log(this.listData)
                           for(let item of this.listData){
                               item.productPlanListlength = item.productPlanList.length;
                           }
                            this.isshowMore = true;
                            // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
                            this.busy = false;
                        }
                    }
                }, err => {
                });
            },
            goToubao(id){
                this.getInfo(id)
            },
            changeshowAppiont(val){
                this.showAppiont = val
            },
            changeRouter(){
                var liData = $("#main")[0].children;
                for(var i=0;i<this.routerData.length;i++){
                    liData[i].className = 'fl';
                    $(".wxIcon").css({"display":"none"});
                    $(".helpIcon").find("span")[0].className = 'iconText';
                }
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
                liData[2].className = 'fl selectActive'
            },
        }
    }
</script>

