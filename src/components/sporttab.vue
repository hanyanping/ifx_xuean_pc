<style rel="stylesheet/scss" lang="scss"  scoped>
    .sporttab{
        width: 100%;
        height: 100%;
        border-top: 1px solid #e5e5e5;
        background: #fff;
        .tabBox{
            height: 54px;
            line-height: 54px;
            .menu{
                position: relative;
                width: 100px;
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
    <div class="sporttab">
        <div class="contaner">
            <ul class="tabBox clear">
                <li class="menu cursor fl" v-for="(item,index) in tabData" @mouseenter="inStyle(item,'listMenu'+index,index)" @mouseleave="outStyle()">
                    <div :class="item.showMenu?'menuTitle activeMenu':'menuTitle'" @mouseenter="item.showMenu = true" @mouseleave="item.showMenu = false" >{{item.name}}
                        <i :class="item.showMenu?'iconfont icon-zhankai_m':'iconfont icon-shouqi_m'"></i>
                    </div>
                    <div :id="'listMenu'+index" class="ulBox" style="display: none;" @mouseenter="inStyle(item,'listMenu'+index,index)">
                        <ul class="menuUl">
                            <li class="menuItem cursor" v-for="(ite,inde) in item.childData">
                                <router-link :class="ite.showMenuList?'activeMenu':''"  @click.native="jumpRouter('listMenu'+index,index)"  :to="ite.router">{{ite.lable}}</router-link>
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
    export default {
        name: "sporttab",
        data(){
            return{
                tabData:[
                    {
                        name:'足球',
                        router: '/sport',
                        showMenu: false,
                        childData:[{value:'0',lable:'比赛险',router:'/sport',showMenuList: false},
                            {value:'1',lable:'训练险',router:'/studybase',showMenuList: false}]
                    },
                    {
                        name:'滑雪',
                        router: '/socialpractice',
                        showMenu: false,
                        childData:[{value:'0',lable:'社会实践',router:'/socialpractice',showMenuList: false}]
                    },
                    {
                        name:'蹦极',
                            router: '/socialpractice',
                        showMenu: false,
                        childData:[{value:'0',lable:'社会实践',router:'/socialpractice',showMenuList: false}]
                    }
                ]
            }
        },
        created(){
            this.url = window.location.href;
            console.log(this.url)
            this.changeColor()
        },
        methods: {
            changeColor(){
                for(let i=0;i< this.tabData.length;i++){
                    this.tabData[i].showMenu = false;
                    for(let ite of this.tabData[i].childData){
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
                    for(let ite of this.tabData[i].childData){
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

