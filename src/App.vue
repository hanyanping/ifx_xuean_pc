<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    font-family: "微软雅黑",PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border: none;
    color: #000;
}
 .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
    color: #45b8c8;
}
.el-menu--horizontal>.el-submenu:focus .el-submenu__title{
    color: #000;
}
.el-tabs__nav-wrap::after{
    height: 1px !important;
    background: rgba(255,255,255,0);
}
.el-tabs__item{
    height: 54px;
    line-height: 54px;
    color: #000;
    font-size: 16px;
    padding: 0 27px;
}
.el-tabs__item.is-active{
    color: #45b8c8;
}
.el-tabs__header{
}
.el-tabs__item:hover{
    color: #45b8c8;
}
.el-tabs__active-bar{
    background: rgba(255,255,255,0);
}
.swiper-pagination-bullet{
    height: 4px;
    width: 26px;
    background-color: #45b8c7;
    border-radius: 2px;
}
.swiper-pagination-bullet-active{
    background-color: #fff;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width:100%;
}
.el-input__icon{
    display: none;
}
.el-tabs__nav-prev{
    display: none;
}
.el-tabs__nav-next{
    display: none;
}
.el-input__inner{
    padding: 0;
    border-radius: 0;
    border: none;
    width: calc(100% - 10px);
}
.el-select-dropdown__item.selected{
    color: #45b8c8;
}
.el-input--prefix .el-input__inner{
    padding-left: 10px;
    color: #000;
}
.el-message-box__message p{
    color: #3d3d3d;
    font-size: 14px;
}
    .el-button{
        background-color: #45b8c8;
        border-radius: 20px;
        color: #fff;
        height: 40px;
        width: 121px;
    }
    .el-button:hover{
        background-color: #45b8c8;
        border-radius: 20px;
        color: #fff;
    }
    .el-button--primary{
        border-radius: 20px;
        border: solid 1px #45b8c8;
        color: #45b8c8!important;
        background: #fff!important;
    }
</style>
