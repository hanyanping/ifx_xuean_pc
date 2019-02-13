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
            width:126px;
            .menuTitle:hover{
                color: #45b8c8;
            }
            .menuTitle{
                color: #000;
                font-size: 16px;
                img{
                    display: inline-block;
                    vertical-align: middle;
                    margin-left: 10px;
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
                <li class="menu cursor fl" v-for="(item,index) in tabData">
                    <div :class="item.showMenu?'menuTitle activeMenu':'menuTitle'"  @click="showMenuCLick('listMenu'+index)">{{item.name}}<img src="../assets/images/greyNozan.png"></div>
                    <div :id="'listMenu'+index" class="ulBox" style="display:none;">
                        <ul class="menuUl">
                            <li class="menuItem cursor" v-for="(ite,inde) in item.childData">
                                <router-link :class="ite.showMenuList?'activeMenu':''"  @click.native="jumpRouter('listMenu'+index)"  :to="ite.router">{{ite.lable}}</router-link>
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
        name: "practicetab",
        data(){
            return{
                tabData:[
                    {
                        name:'研学旅行',
                        router: '/researchStudy',
                        showMenu: false,
                        childData:[{value:'0',lable:'组织方',router:'/researchStudy',showMenuList: false},
                        {value:'1',lable:'研学基地',router:'/studybase',showMenuList: false}]
                    },
                    {
                        name:'社会实践',
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
            showMenuCLick(idName){
                console.log(idName);
                $('#'+idName).slideToggle(100);
                // $('#'+idName).css({"dislay":'block'});
            }
        }
    }
</script>

