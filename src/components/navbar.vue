<style rel="stylesheet/scss" lang="scss"  scoped>
.navbar{
    height: 68px;
    line-height: 68px;
    #main{
        .selectActive{
            background: #45b8c7;
            a{
                color: #fff;
            }
        }
        .selectActive:hover{
            a{
                color: #fff;
            }
        }
            li{
                height: 68px;
                font-size: 18px;
                a{
                    display: inline-block;
                    height: 68px;
                    padding: 0 26px;
                    color: #000000;
                    font-weight: 500;
                }
            }
            li:hover a{
                color: #45b9c8;
                font-size: 18px;
            }
    }
    .logo{
        display: inline-block;
        vertical-align: middle;
        margin-right: 36px;
        img{
            display: inline-block;
            vertical-align: middle;
            height: 32px;
            width: 102px;
        }
    }
    .topRight{
        height: 68px;
        .rightIcon{
            display: inline-block;
            vertical-align: middle;
            margin-left: 28px;
            margin-top: -3px;
            cursor: pointer;
            .iconGreen{
                font-size: 20px;
                color: #929292;
                vertical-align: middle;
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
        .rightIcon:hover{
            .iconText{
                color: #45b8c7;
            }
            .iconGreen{
                color: #45b8c7;
            }
        }
    }
}
</style>
<template>
    <div>
        <div class="contaner">
            <div class="navbar clear">
                    <div class="logo fl" @click="goHome()">
                        <img src="../assets/images/yanxuelogo.png">
                    </div>
                    <ul id="main" class="fl">
                        <li v-for="(item,index) in routerData" :class={selectActive:item.isRouter} class="fl">
                            <router-link @click.native="changeRouter(item,index)"  :to="item.router">{{item.name}}</router-link>
                        </li>
                    </ul>
                <div class="topRight fr" >
                    <div class="rightIcon wxIcon">
                        <i class='iconGreen iconfont icon-weixin'></i>
                        <span class="iconText">微信公众号</span>
                    </div>
                    <div class="rightIcon helpIcon"  @click="goHelpeCenter()">
                        <i class='iconGreen iconfont icon-wenti'></i>
                        <span class="iconText">帮助中心</span>
                    </div>
                    <div class="rightIcon" v-if="hasData">
                        <span v-if="hasUserinfo" class='iconGreen iconColor iconfont icon-weidenglu' @click="goInfo()"></span>
                        <span v-if="hasUserinfo" class="iconText iconColor" @click="goInfo()">{{username}}</span>
                        <span v-if="!hasUserinfo" class='iconGreen iconfont icon-weidenglu'></span>
                        <span v-if="!hasUserinfo" @click="goLogin()" class="iconText">登陆 | </span>
                        <span v-if="!hasUserinfo" @click="goRegister()" class="iconText">注册</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 路由匹配到的组件将显示在这里 -->
        <router-view></router-view>
    </div>

</template>

<script>
    import Service from '../common/service'
    export default {
        name: "navbar",
        data() {
            return{
                hasData: false,
                hasUserinfo: '',
                url: '',
                username: '',
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
        created(){
            this.getInfo()
        },
        methods: {
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
                        this.hasUserinfo = false;
                    }
                }, err => {
                });
            },
            goHome(){
                this.$router.push({path:"/"})
            },
            goRegister(){
                this.$router.push({'path':'/register'})
            },
            goLogin(){
                this.$router.push({'path':'/login'})
            },
            goHelpeCenter(){
                for(let ite of this.routerData){
                    ite.isRouter = false;
                }
                $(".helpIcon").find("span")[0].className = 'iconText iconColor';
                $(".helpIcon").find("i")[0].className = 'iconGreen iconfont icon-wenti iconColor';
                $(".wxIcon").css({"display":"none"});
                this.$router.push({'path':'/helpecenter'})
            },
            changeRouter(item,index){
                this.ishowHelp = false;
                if(index == 0){
                    $(".wxIcon").css({"display":"inline-block"});
                }else{
                    $(".wxIcon").css({"display":"none"});
                }
                for(let ite of this.routerData){
                    ite.isRouter = false;
                }
                item.isRouter = true;
                // this.forceUpdate()
            }
        }
    }
</script>jj

