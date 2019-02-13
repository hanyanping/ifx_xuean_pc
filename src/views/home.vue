<style rel="stylesheet/scss" lang="scss"  scoped>
.home{
    overflow: hidden;

}
</style>
<template>
    <div class="home">
        <navbar></navbar>
        <foot></foot>
    </div>
</template>

<script>
    import navbar from '@/components/navbar'
    import foot from '@/components/foot'
    export default {
        name: "home",
        components: {
            navbar,
            foot
        },
        data(){
            return{
            }
        },
        created(){
        },
        watch:{

        },
        mounted(){

        }
    }
</script>

