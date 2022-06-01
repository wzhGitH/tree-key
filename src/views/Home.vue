<template>
    <div>
        <top-menu></top-menu>
        <div>
            <img :src="imgSrc" alt="">
        </div>
        <div class="column_padding">
            <div class="company_hint">公司动态</div>
        </div>
        <div class="test_btn">按钮测试</div>
    </div>
</template>
    
<script>
    import TopMenu from '@/components/public/TopMenu.vue'
    import imgSrc from '@/assets/images/banner-01.png'
    export default {
        data(){
            return{
                imgSrc: imgSrc
            }
        },
        components: {TopMenu},
        created(){
            
        },
        methods: {
            
        },
    }
</script>
    
<style>
</style>