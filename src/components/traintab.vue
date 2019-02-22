<style rel="stylesheet/scss" lang="scss"  scoped>
    .traintab{
        width: 100%;
        height: 100%;
        border-top: 1px solid #e5e5e5;
        background: #fff;
        .ourTab{
            display: flex;
            .tabBox{
                height: 54px;
                line-height: 54px;
                font-size: 16px;
                padding: 0 27px;
                a{
                    display: inline-block;
                    height: 54px;
                    width:100%;
                }
            }
            .tabBox:nth-of-type(1){
                padding-left: 0;
            }
            .tabBox:hover{
                a{
                    color:#45b8c7;
                }
            }
            .tabBoxBlueColor {
                a{
                    color:#45b8c7;
                }

            }
            .tabBoxblakColor{
                a{
                    color: #000;
                }

            }
        }
    }

</style>
<template>
    <div class="traintab">
        <div class="contaner">
            <div class="ourTab">
                <div :class="selectId == index?'tabBoxBlueColor tabBox cursor':'tabBoxblakColor tabBox cursor'" v-for="(item,index) in tabData" >
                    <router-link @click.native="jumpRouter(item,index)"  :to="item.router">{{item.name}}</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "traintab",
        data() {
            return {
                selectId: '',
                url: '',
                tabData:[],
            }
        },
        created(){
            this.getTab()

        },

        methods: {
            getTab(){
                Service.product().getProductCategoryList({parentId:1
                }).then(response => {
                    if(response.errorCode == 0){
                        response.data[0].router = '/schoolsafe'
                        response.data[1].router = '/teachertrain';
                        this.tabData = response.data;
                        this.url = window.location.href;
                        for(var i=0;i<this.tabData.length;i++){
                            if(this.url.indexOf(this.tabData[i].router)>0){
                                this.selectId = i;
                            }
                        }
                    }else{
                        this.$message.error(response.message);
                    }
                }, err => {
                });
            },
            jumpRouter(item,index){
                this.selectId = index;
                this.$forceUpdate()
            },

        }
    }
</script>
