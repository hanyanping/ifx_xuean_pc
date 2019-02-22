<style rel="stylesheet/scss" lang="scss"  scoped>
.practicetab{
    width: 100%;
    height: 100%;
    border-top: 1px solid #e5e5e5;
    background: #fff;
    .tabBox{
        height: 54px;
        line-height: 54px;
        .menu{
            position: relative;
            width: 126px;
            margin-right: 5px;
            .menuTitle:hover{
                color: #45b8c8;
            }
            .menuTitle{
                color: #000;
                font-size: 16px;
                .icon-zhankai_m{
                    font-size: 16px;
                    color: #45b8c8;
                    display: inline-block;
                    vertical-align: middle;
                    margin-left: 5px
                }
                .icon-shouqi_m{
                    color: #000;
                    font-size: 16px;
                    margin-left: 5px;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .ulBox{
                border-top: 1px solid #ececec;
                position: absolute;
                background: #fff;
                width: 126px;
                min-height: 60px;
                font-size: 16px;
                padding: 15px 0;
                text-align: center;
                margin-top: -2px;
                .menuItem{
                    height: 60px;
                    line-height: 60px;
                    a{
                        display: inline-block;
                        width:100%;
                        height: 60px;
                        line-height: 60px;
                        color: #000;
                    }
                }
                .menuItem:hover{
                    a{
                        color: #45b8c8;
                    }
                }
            }
        }
        .activeMenu{
            color: #45b8c8!important;
        }
    }
}
</style>
<template>
    <div class="practicetab">
        <div class="contaner">
            <ul class="tabBox clear">
                <li class="menu cursor fl" v-for="(item,index) in tabData" @mouseenter="inStyle(item,'listMenu'+index,index)" @mouseleave="outStyle()">
                    <div :class="item.showMenu?'menuTitle activeMenu':'menuTitle'" @mouseenter="item.showMenu = true" @mouseleave="item.showMenu = false" >{{item.name}}
                        <i :class="item.showMenu?'iconfont icon-zhankai_m':'iconfont icon-shouqi_m'"></i>
                    </div>
                    <div :id="'listMenu'+index" class="ulBox" style="display: none;" @mouseenter="inStyle(item,'listMenu'+index,index)">
                        <ul class="menuUl">
                            <li class="menuItem cursor" v-for="(ite,inde) in item.productcategoryList">
                                <router-link :class="ite.showMenuList?'activeMenu':''"  @click.native="jumpRouter('listMenu'+index,index)"  :to="{path:ite.router,query: {id: ite.id}}">{{ite.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "practicetab",
        data(){
            return{
                tabData:[
                ]
            }
        },
        created(){
            this.url = window.location.href;
            if(Util.localStorageUtil.get('practab')){
                this.tabData = Util.localStorageUtil.get('practab')
                this.changeColor()
            }else{
                this.getTab()
            }
            console.log(this.tabData)
        },
        methods: {
            getTab(){
                Service.product().getProductCategoryList({parentId:2
                }).then(response => {
                    if(response.errorCode == 0){
                        response.data[0].router = '/researchStudy';
                        response.data[1].router = '/practiceBase';
                        for(var i=0;i<response.data.length;i++){
                            response.data[i].showMenu = false;
                        }
                        response.data[0].productcategoryList[0].router = '/researchStudy';
                        response.data[0].productcategoryList[1].router = '/studybase';
                        response.data[1].productcategoryList[0].router = '/practiceBase';
                        response.data[0].productcategoryList[1].router = '/studybase';
                        response.data[0].productcategoryList[0].showMenuList = false;
                        response.data[0].productcategoryList[1].showMenuList = false;
                        response.data[1].productcategoryList[0].showMenuList = false;
                        this.tabData = response.data;
                        Util.localStorageUtil.set('practab',response.data)
                        this.changeColor()
                    }else{
                        this.$message.error(response.message);
                    }
                }, err => {
                });
            },
            changeColor(){
                for(let i=0;i< this.tabData.length;i++){
                    this.tabData[i].showMenu = false;
                    for(let ite of this.tabData[i].productcategoryList){
                        ite.showMenuList = false;
                        if(this.url.indexOf(ite.router)>0){
                            this.tabData[i].showMenu = true;
                            ite.showMenuList = true;
                        }
                    }
                }
            },
            jumpRouter(idName){
                $('#'+idName).slideUp(100);
            },
            showMenuCLick(idName,index){
                $('#'+idName).slideToggle(100);
                for(let i = 0;i< this.tabData.length;i++){
                    if(index != i){
                        $('#listMenu'+i).slideUp(100);
                    }
                }
            },
            outStyle(e){
                e = e || window.event;
                if(e.stopPropagation) { //W3C阻止冒泡方法
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true; //IE阻止冒泡方法
                }
                for(let i=0;i< this.tabData.length;i++){
                    this.tabData[i].showMenu = false;
                    for(let ite of this.tabData[i].productcategoryList){
                        ite.showMenuList = false;
                        if(this.url.indexOf(ite.router)>0){
                            this.tabData[i].showMenu = true;
                            ite.showMenuList = true;
                        }
                    }
                }
                for(let i = 0;i< this.tabData.length;i++){
                        $('#listMenu'+i).slideUp(100);
                }
            },
            inStyle(item,idName,index){
                item.showMenu = true;
                $('#'+idName).slideDown(100);
                for(let i = 0;i< this.tabData.length;i++){
                    if(index != i){
                        $('#listMenu'+i).slideUp(100);
                    }
                }
            }
        }
    }
</script>

