<style rel="stylesheet/scss" lang="scss"  scoped>
.helpecenter{
    width: 100%;
    height: 100%;
    border-top: 1px solid #e5e5e5;
    position: relative;
    margin-bottom: 60px;
    .borderLine{
        position: absolute;
        height: 10px;
        width:100%;
        background: #ececec;
        top: 54px;
    }
    .toubaoBox{
        padding: 40px 0;
        border-bottom: 1px solid #e5e5e5;
        .toubaoQuestion{
            height: 30px;
            padding-bottom: 20px;
            color: #000;
            .titleLeft{
                font-size: 20px;
                display: inline-block;
                vertical-align: middle;
                .imgIcon{
                    height: 20px;
                    width: 20px;
                    margin-right: 16px;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .titleRight{
                font-size: 14px;
                display: flex;
                .zanBox{
                    height: 30px;
                    width: 86px;
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #e5e5e5;
                    border-radius: 15px;
                    display: inline-block;
                    vertical-align: middle;
                    img{
                        height: 12px;
                        width: 12px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .zanText{
                        color: #000;
                        font-size: 12px;
                    }
                }
                .zanBoxColor{
                    border: 1px solid #f77942;
                    .zanTextColor{
                        color: #f77942;
                    }
                }
                .zanBox:nth-last-child(1){
                    margin-left: 10px;
                }
            }
        }
        .answer{
            padding-bottom:20px;
            color: #000;
            font-size: 14px;
            display: flex;
            line-height: 24px;
            .imgIcon{
                height: 20px;
                width: 20px;
                margin-right: 16px;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .warmText{
            font-size: 12px;
            color: #929292;
        }
    }
}
</style>
<template>
    <div class="helpecenter">
        <div class="borderLine"></div>
        <div class="contaner">
            <el-tabs :tab-position="tabPosition" style="min-height: 200px;" @tab-click="handleClick">
                <el-tab-pane label="投保相关">
                    <div v-if='isshowMore' class="toubaoBox" v-for="item in toubaoData">
                        <div class="toubaoQuestion flexBetween">
                            <div class="titleLeft"><img class="imgIcon" src="../assets/images/question.png"><span style="display: inline-block;
    vertical-align: middle;">{{item.question}}</span></div>
                            <div class="titleRight">
                                <div @click="changeAction(item,0)" :class="item.likes ==0?'zanBox zanBoxColor cursor':'zanBox cursor'">
                                    <img :src="item.likes == 0?require('../assets/images/yellowZan.png'):require('../assets/images/greyZan.png')">
                                    <span :class="item.likes == 0?'zanText zanTextColor':'zanText'">有用</span>
                                </div>
                                <div @click="changeAction(item,1)" :class="item.likes==1?'zanBox zanBoxColor cursor':'zanBox cursor'">
                                    <img :src="item.likes == 1?require('../assets/images/yellowNoZan.png'):require('../assets/images/greyNozan.png')">
                                    <span :class="item.likes == 1?'zanText zanTextColor':'zanText'">无用</span>
                                </div>
                            </div>
                        </div>
                        <div class="answer">
                            <img class="imgIcon" src="../assets/images/answer.png">
                            <div >
                                {{item.answer}}
                            </div>
                        </div>
                        <div class="warmText">注：对于有健康告知的健康险等产品，填写投保信息前需要填写健康告知。</div>
                    </div>
                    <div v-if="showLoading" style='text-align: center;' v-infinite-scroll="loadMore"
                         infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                        <img src="../assets/images/loading.gif" style="height: 20px;width: 100px;margin-top:20px;">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="法律咨询"><div v-if='isshowMore' class="toubaoBox" v-for="item in toubaoData">
                    <div class="toubaoQuestion flexBetween">
                        <div class="titleLeft"><img class="imgIcon" src="../assets/images/question.png"><span style="display: inline-block;
    vertical-align: middle;">{{item.question}}</span></div>
                        <div class="titleRight">
                            <div @click="changeAction(item,0)" :class="item.likes ==0?'zanBox zanBoxColor cursor':'zanBox cursor'">
                                <img :src="item.likes == 0?require('../assets/images/yellowZan.png'):require('../assets/images/greyZan.png')">
                                <span :class="item.likes == 0?'zanText zanTextColor':'zanText'">有用</span>
                            </div>
                            <div @click="changeAction(item,1)" :class="item.likes==1?'zanBox zanBoxColor cursor':'zanBox cursor'">
                                <img :src="item.likes == 1?require('../assets/images/yellowNoZan.png'):require('../assets/images/greyNozan.png')">
                                <span :class="item.likes == 1?'zanText zanTextColor':'zanText'">无用</span>
                            </div>
                        </div>
                    </div>
                    <div class="answer">
                        <img class="imgIcon" src="../assets/images/answer.png">
                        <div >
                            {{item.answer}}
                        </div>
                    </div>
                    <div class="warmText">注：对于有健康告知的健康险等产品，填写投保信息前需要填写健康告知。</div>
                </div>
                    <div v-if="showLoading" style='text-align: center;' v-infinite-scroll="loadMore"
                         infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                        <img src="../assets/images/loading.gif" style="height: 20px;width: 100px;margin-top:20px;">
                    </div></el-tab-pane>
                <el-tab-pane label="理赔相关"><div v-if='isshowMore' class="toubaoBox" v-for="item in toubaoData">
                    <div class="toubaoQuestion flexBetween">
                        <div class="titleLeft"><img class="imgIcon" src="../assets/images/question.png"><span style="display: inline-block;
    vertical-align: middle;">{{item.question}}</span></div>
                        <div class="titleRight">
                            <div @click="changeAction(item,0)" :class="item.likes ==0?'zanBox zanBoxColor cursor':'zanBox cursor'">
                                <img :src="item.likes == 0?require('../assets/images/yellowZan.png'):require('../assets/images/greyZan.png')">
                                <span :class="item.likes == 0?'zanText zanTextColor':'zanText'">有用</span>
                            </div>
                            <div @click="changeAction(item,1)" :class="item.likes==1?'zanBox zanBoxColor cursor':'zanBox cursor'">
                                <img :src="item.likes == 1?require('../assets/images/yellowNoZan.png'):require('../assets/images/greyNozan.png')">
                                <span :class="item.likes == 1?'zanText zanTextColor':'zanText'">无用</span>
                            </div>
                        </div>
                    </div>
                    <div class="answer">
                        <img class="imgIcon" src="../assets/images/answer.png">
                        <div >
                            {{item.answer}}
                        </div>
                    </div>
                    <div class="warmText">注：对于有健康告知的健康险等产品，填写投保信息前需要填写健康告知。</div>
                </div>
                    <div v-if="showLoading" style='text-align: center;' v-infinite-scroll="loadMore"
                         infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                        <img src="../assets/images/loading.gif" style="height: 20px;width: 100px;margin-top:20px;">
                    </div></el-tab-pane>
            </el-tabs>
        </div>
        <helper></helper>
    </div>
</template>
<script>
    import helper from '@/components/helper'
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "helpecenter",
        components: {
            helper
        },
        data() {
            return {
                activeindex: 1,
                isshowMore: false,
                showLoading: true,
                pages: 1,
                pageSizes: 4,
                busy: false,
                tabPosition: 'top',
                toubaoData: [],
                isZanid:[],
                zanData:[{'img':require('../assets/images/greyZan.png'),'imgUrl':require('../assets/images/yellowZan.png'),isZan:false,'name':'有用'},{'img':require('../assets/images/greyNozan.png'),'imgUrl':require('../assets/images/yellowNoZan.png'),isZan:false,'name':'无用'}]
            };
        },
        created(){
            this.getToubaoList(false);
        },
        methods:{
            handleClick(tab, event){
                console.log(tab.index);
                this.toubaoData = [];
                this.activeindex = parseInt(tab.index)+ 1;
                this.pages = 1;
                this.isshowMore = false;
                this.showLoading = true;
                this.busy = false;
                this.getToubaoList(false);
            },
            getToubaoList(flag){
                    Service.helper().showSiteHelpCenter({
                        type: this.activeindex,
                        page: this.pages,
                        size: this.pageSizes
                    }).then(response => {
                        if (response.data.length != 0) {
                        }
                        if (flag) {
                            // 多次加载数据
                            if (response.data.length == 0) {
                                this.busy = true;
                                this.showLoading = false;
                            } else {
                                if(Util.localStorageUtil.get('isZanid')){
                                    this.isZanid = Util.localStorageUtil.get('isZanid');
                                }
                                for(let j = 0;j < response.data.length;j++){
                                    response.data[j].likes = null;
                                    for(let i = 0;i < this.isZanid.length;i++){
                                        if(response.data[j].id === this.isZanid[i].id){
                                            response.data[j].likes = this.isZanid[i].likes;
                                            break;
                                        }
                                    }
                                }
                                this.toubaoData = this.toubaoData.concat(response.data);
                                this.busy = false;
                            }
                        } else {
                            // 第一次加载数据
                            if (response.data.length == 0) {
                                this.busy = true;
                                this.showLoading = false;
                            }else{
                                if(Util.localStorageUtil.get('isZanid')){
                                    this.isZanid = Util.localStorageUtil.get('isZanid');
                                }
                                for(let j = 0;j < response.data.length;j++){
                                    response.data[j].likes = null
                                     for(let i = 0;i < this.isZanid.length;i++){
                                        console.log(this.isZanid[i].id,response.data[j].id)
                                        if(response.data[j].id === this.isZanid[i].id){
                                            response.data[j].likes = this.isZanid[i].likes;
                                            break;
                                        }
                                    }
                                }
                                this.toubaoData = response.data;
                                console.log(this.toubaoData)
                                this.isshowMore = true;
                                // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
                                this.busy = false;
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
                        this.getToubaoList(true);

                }, 500);
            },
            changeAction(item,index){
                if(item.likes === null){
                    Service.helper().isDianzan({
                        helpCenterId: item.id,
                        likes: index
                    }).then(response => {
                        if(response.errorCode == 0){
                            if(Util.localStorageUtil.get('isZanid')){
                                this.isZanid = Util.localStorageUtil.get('isZanid');
                            }
                            var obj = {
                                id:item.id,
                                likes: index
                            };
                            this.isZanid.push(obj)
                            for(let j = 0;j < this.toubaoData.length;j++){
                                for(let i = 0;i < this.isZanid.length;i++){
                                    this.toubaoData[j].likes = null
                                    console.log(this.isZanid[i].id,this.toubaoData[j].id)
                                    if(this.toubaoData[j].id === this.isZanid[i].id){
                                        this.toubaoData[j].likes = this.isZanid[i].likes;
                                        break;
                                    }
                                }
                            }
                            Util.localStorageUtil.set('isZanid',this.isZanid);
                        }else{

                        }
                    }, err => {
                    });
                }else{
                }
            }
        }
    }
</script>

