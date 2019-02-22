<style rel="stylesheet/scss" lang="scss"  scoped>
.bacnavtab{
    background: #ECECEC;
    min-height:100vh;
    .bacnavtabTop{
        background: #fff;
        .contaner{
            .logo{
                height: 68px;
                display: inline-block;
                line-height: 68px;
                vertical-align: middle;
                img{
                    display: inline-block;
                    vertical-align: middle;
                    height: 32px;
                    width: 102px;
                }
                .guanliText{
                    display: inline-block;
                    vertical-align: middle;
                    color: #000;
                    position: relative;
                    margin-left: 26px;
                }
                .guanliText:before{
                    position: absolute;
                    content: '';
                    display: inline-block;
                    height: 30px;
                    width: 1px;
                    background: #b5b5b5;
                    left: -13px;
                    top: 19px;
                }
            }
            .logoright{
                height: 68px;
                line-height: 68px;
                .rightIcon{
                    display: inline-block;
                    vertical-align: middle;
                    margin-left: 28px;
                    margin-top: -5px;
                    cursor: pointer;
                    .iconGreen{
                        font-size: 20px;
                        color: #45b8c7;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                    .iconText{
                        font-size: 12px;
                        display: inline-block;
                        vertical-align: middle;
                        color: #929292;
                    }
                    .iconColor{
                        color: #45b8c7;
                    }
                }
            }
        }
    }
    .content{
        .contaner{
            .tab{
                width: 182px;
                background: #fff;
                min-height: calc(100vh - 68px);
                .tabBox{
                    height:58px;
                    line-height: 58px;
                    color:#929292;
                    width: 182px;
                    .iconfont{
                        margin-left: 30px;
                        margin-right: 20px;
                        color: #929292;
                        font-size: 18px;
                    }
                    a{
                        display: inline-block;
                        height:58px;
                        line-height: 58px;
                        color:#929292;
                        width: 182px;
                    }
                }
                .tabBox:hover{
                    .iconfont{
                        color:#45b8c8;
                    }
                    a{
                        color:#45b8c8;
                    }
                }
                .firstTab{
                    color: #fff;
                    background: #45b8c8;
                    text-align: center;
                }
                .selectActive{
                    .iconfont{
                        color:#45b8c8;
                    }
                    a{
                        color:#45b8c8;
                    }

                }
            }
        }
    }
}
</style>
<template>
    <div class="bacnavtab">
        <div class="bacnavtabTop">
            <div class="contaner clear">
                <div class="logo fl">
                    <img class="cursor" @click="goHome()" src="../assets/images/yanxuelogo.png">
                    <span class="guanliText font20">管理台</span>
                </div>
                <div class="logoright fr" v-if="hasData">
                    <div class="rightIcon">
                        <i v-if="hasUserinfo" class='iconGreen iconfont icon-weidenglu' @click="goInfo()"></i>
                        <span v-if="hasUserinfo" class="iconText iconColor" @click="goInfo()">{{username}}</span>
                        <span v-if="!hasUserinfo" class='iconGreen iconfont icon-weidenglu'></span>
                        <span v-if="!hasUserinfo" @click="goLogin()" class="iconText iconColor">登陆 | </span>
                        <span v-if="!hasUserinfo" @click="goRegister()" class="iconText iconColor">注册</span>
                    </div>
                    <div class="rightIcon"  v-if="hasUserinfo"  @click="logout()">
                        <i class='iconGreen iconfont icon-tuichu'></i>
                        <span class="iconText iconColor">退出</span>
                    </div>
                </div>
             </div>
        </div>
        <div class="content">
            <div class="contaner flex">
                <div class="tab">
                    <div class="tabBox firstTab font12">网站导航</div>
                    <ul id='tabMain'>
                        <li class="tabBox font12"  v-for="(item,index) in bacrouter" :class={selectActive:item.isRouter}>
                            <router-link :to="item.router" @click.native="changeRouter(item,index)">
                                <i :class="item.iconclass"></i><span >{{item.name}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import Service from '../common/service'
    export default {
        name: "bacnavtab",
        data() {
            return {
                hasData: false,
                hasUserinfo: '',
                username: '',
                bacrouter:[
                    {
                        name:'主页',
                        router:'/bachome',
                        isRouter: true,
                        iconclass: 'iconfont icon-zhuye'
                    },
                    {
                        name:'订单管理',
                        router:'/ordermanage',
                        isRouter: false,
                        iconclass: 'iconfont icon-dingdan1'
                    },
                    {
                        name:'保单管理',
                        router:'/policymanage',
                        isRouter: false,
                        iconclass: 'iconfont icon-dingdan'
                    },
                    {
                        name:'客户管理',
                        router:'/customermanage',
                        isRouter: false,
                        iconclass: 'iconfont icon-kehu'
                    },
                    {
                        name:'设置',
                        router:'/setup',
                        isRouter: false,
                        iconclass: 'iconfont icon-shezhi'
                    }
                ]
            };
        },
        created(){
            this.getInfo()
        },
        methods:{
            logout(){
                Service.login().logout({
                }).then(response => {

                    if(response.errorCode == 0){
                        this.$router.push({'path':'/login'})
                    }else{
                        this.$message.error(response.message);
                    }
                }, err => {
                });
            },
            goInfo(){
                this.$router.push({path: '/bachomepage'})
            },
            getInfo (){
                Service.login().getInfo({
                }).then(response => {
                    this.hasData = true;
                    if(response.errorCode == 0){
                        this.username = response.data.username;
                        this.hasUserinfo = true;
                    }else{
                        if(response.errorCode == 5001){
                            this.$router.push({"path":'/login'})
                        }
                        this.hasUserinfo = false;
                    }
                }, err => {
                });
            },
            goHome(){
                this.$router.push({path:"/"})
            },
            changeRouter(item,index){
                var liData = $("#tabMain")[0].children;
                for(var i=0;i<this.bacrouter.length;i++){
                    liData[i].className = 'tabBox font12';
                    this.bacrouter.isRouter = false;
                    if(index == i){
                        liData[i].className = 'tabBox font12 selectActive'
                    }
                }
                item.isRouter = true;
            },
        }
    }
</script>

