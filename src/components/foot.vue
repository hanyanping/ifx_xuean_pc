<template>
    <div class="footer">
        <div class="footTop">
            <div class="contaner flexBetween">
                <div class="flex footTopLeft">
                    <img class='phoneIcon' src="../assets/images/kefu.png">
                    <div class="TopLeftText">
                        <p class="leftPhone">4000-618-0000</p>
                        <p class="leftAdress">北京市海淀区学安路</p>
                    </div>
                </div>
                <div class="footTopRight flex">
                    <div class="topLeft">
                        <p class="rightText">了解学安通</p>
                        <ul class="flexBetween rightUl">
                            <li class="cursor"><router-link to="/aboutour/1">关于我们</router-link></li>
                            <li class="cursor"><router-link to="/aboutour/2">平台资质</router-link></li>
                            <li class="cursor"><router-link to="/aboutour/3">联系我们</router-link></li>
                        </ul>
                    </div>
                    <div class="topRight">
                        <p class="rightText">校企应用</p>
                        <ul class="flexBetween rightUl">
                            <li class="cursor"><router-link to="/download">下载专区</router-link></li>
                            <li class="cursor">进入管理台</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footBottom">
            <div class="bottomTop contaner">本网站的全部保险产品均由具体保险公司承保并授权发布，本公司仅作为第三方平台，不承担任何保险合同项下的义务。</div>
            <div class="bottomBottom contaner">
                <p class="bottomText">Copyright © 2019 xueantong.com 北京学安互联科技有限公司</p>
                <p class="bottomText">
                    京ICP备xxxxxxx号
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
    .footer{
        width:100%;
    .footTop{
        width: 100%;
        height: 255px;
        background: #464646;
    .footTopLeft{
        margin: 87px 0;
    .phoneIcon{
        height:80px;
        width:80px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 24px;
    }
    .TopLeftText{
        display: inline-block;
        vertical-align: middle;
        color: #fff;
    .leftPhone{
        font-size: 40px;
    }
    .leftAdress{
        font-size: 12px;
    }
    }
    }
    .footTopRight{
        margin: 87px 0;
        color: #fff;
    .topLeft{
        width:242px;
        margin-right: 50px;
    }
    .topRight{
        width:148px;
    }
    .rightText{
        font-size: 20px;
        text-align: center;
        padding-bottom: 15px;
        border-bottom: 1px solid #707070;
    }
    .rightUl{
        padding-top: 15px;
        font-size:12px;
        a{
            color: #fff;
        }
    }
    }
    }
    .footBottom{
        height: 242px;
        width:100%;
        background: #333;
    .contaner{
        text-align: center;color: #fff;
    }
    .bottomTop{
        padding: 80px 0 24px;
        font-size: 12px;
        color: #dadada;
    }
    .bottomBottom{
        color: #777;
        font-size: 12px;
        line-height: 18px
    }
    }
    }
</style>