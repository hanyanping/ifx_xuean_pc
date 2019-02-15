<style rel="stylesheet/scss" lang="scss"  scoped>
.applicaninfo{
    .upload-demo{
        .el-button{
            color: #929292;
            font-size: 14px;
            border: none;
            background: #fff;
        }
    }
}
</style>
<template>
    <div class="applicaninfo">
        <img :src="imageUrl">
        <el-upload
                class="upload-demo imgBox"
                name="upfile"
                :action="upFileAction"
                :on-change="handleChange"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-error="errphoto"
                :show-file-list="false"
                accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.GIF,.BMP">
            <div  class="uploadtext">
                <img class='uploadIcon' src="https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/shangchuan.png"/>上传文件
            </div>
        </el-upload>
    </div>
</template>

<script>
    import Service from '../common/service'
    import Global from '../common/global'
    export default {
        name: "applicaninfo",
        data(){
            return{
                upFileAction:'',
                imageUrl: ''
            }
        },
        created(){
            this.upFileAction = Global.requestUrl+"/sys/ueditor/index?action=uploadimage"
            // this.getphotoList()
            },
        methods:{
            errphoto(err, file, fileList){
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = res.url;
                console.log(this.imageUrl)
            },
            handleChange(file, fileList) {
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
                console.log(file.type)
                const isExcel = file.type === 'application/vnd.ms-excel';
                if (!isExcel) {
                    this.$message.error('上传图片必须是excel文件!');
                }
                if (!isLt2M) {
                    this.$message.error('上传文件大小不能超过2M!');
                }
                return (isExcel) && isLt2M;
            },
        }
    }
</script>
