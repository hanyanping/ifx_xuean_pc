<template>
    <div class="footer">
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