<style rel="stylesheet/scss" lang="scss"  scoped>
.legalaid{
    height: 100%;
    margin-bottom: 100px;
    width:100%;
    border-top:1px solid #e5e5e5;
    .legalaidList{
        height: 366px;
        width: 366px;
        margin-right: 44px;
        margin-top: 40px;
        border: 1px solid #e5e5e5;
        .legalaidImg{
            width: 100%;
            height: 200px;
        }
        .legalaidTitle{
            color: #000;
            padding: 12px 16px 6px;
        }
        .legalaidTime{
            color: #000;
            padding: 0 16px;
        }
        .legalaidSumray{
            color: #929292;
            padding: 16px;
        }
    }
    .legalaidList:nth-child(3n+3){
        margin-right: 0;
    }
}
</style>
<template>
    <div class="legalaid">
        <div class=" contaner clear">
            <div class="legalaidList fl cursor" v-if='isshowMore' v-for="item in legalaidData" @click="goDetail(item.id)">
                <img class="legalaidImg" :src="item.pictureUrl">
                <p class="legalaidTitle font16">{{item.title}}</p>
                <p class="legalaidTime font12">{{timetrans(item.startTime)}}</p>
                <p class="legalaidSumray font14" >{{aaa}}</p>
            </div>
            <div v-if="showLoading" style='text-align: center;' v-infinite-scroll="loadMore"
                 infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <img src="../assets/images/loading.gif" style="height: 20px;width: 100px;margin-top:20px;">
            </div>
        </div>
    </div>

</template>

<script>
    import Service from '../common/service'
    export default {
        name: "legalaid",
        data(){
            return{
                aaa:'为了贯彻国家体育总局、教育部《关于开展校园足球活动的通知》、落实《教育部等6部门关于加快发展青少年校园足球的实施意见》的文件精神，加强各地青少年足球队伍的交流与发展，相互学习为了贯彻国家体育总局、教育部《关于开展校园足球活动的通知》、落实《教育部等6部门关于加快发展青少年校园足球的实施意见》的文件精神，加强各地青少年足球队伍的交流与发展，相互学习',
                isshowMore: false,
                showLoading: true,
                busy: false,
                url: '',
                page: 1,
                size: 9,
                legalaidData: [],
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
                }],
            }
        },
        mounted(){
            this.url = window.location.href;
            this.changeRouter();

            this.getList(false);
        },
        methods:{
            goDetail(id){
                this.$router.push({'path':'/legaldetail/'+id})
            },
            timetrans(timestamp) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(timestamp);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '';
                // + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            loadMore: function () {
                console.log(5555)
                this.busy = true;
                // 多次加载数据
                setTimeout(() => {
                    this.page++;
                    this.getList(true);
                }, 500);
            },
            getList(flag){
                Service.helper().getShowLawHelpList({
                    page: this.page,
                    size: this.size,
                }).then(response => {
                    if(response.errorCode == 0){
                        if (flag) {
                            // 多次加载数据
                            if (response.data.length == 0) {
                                this.busy = true;
                                this.showLoading = false;
                            } else {
                                this.legalaidData = this.legalaidData.concat(response.data);
                                this.busy = false;
                            }
                        } else {
                            // 第一次加载数据
                            if (response.data.length == 0) {
                                this.busy = true;
                                this.showLoading = false;
                            }else{
                                this.legalaidData = response.data;
                                if(this.aaa.length> 90){
                                    this.aaa = this.aaa.substring(0,90)+'...'
                                }

                                console.log(this.legalaidData)
                                this.isshowMore = true;
                                // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
                                this.busy = false;
                            }
                        }
                    }else{
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
                        liData[i].className = 'fl selectActive'
                    }
                }
                $(".helpIcon").find("span")[0].className = 'iconText';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti';
            },
        }
    }
</script>

