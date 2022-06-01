<template>
    <header class="company_header">
        <div class="container">
            <div class="company_logo"></div>
            <div class="menu_list_box">
                <div class="menu_item" :class="{ 'active': actives === item.url }" v-for="(item, index) in menuList" :key="index">
                    <div class="menu_name">{{ item.name }}</div>
                </div>
            </div>
            <div class="top_btn">
                进入网厅
            </div>
        </div>
    </header>
</template>
    
<script>
    export default {
        data(){
            return{
                menuList: []
            }
        },
        computed: {
            actives(){
                const path = this.$route.path;
                return path;
            }
        },
        watch: {
            actives(newV){
                console.log(newV);
            }
        },
        created(){
            this.menuList = [
                {
                    name: "首页",
                    url: "/home"
                },
                {
                    name: "产品介绍",
                    url: "/contact"
                },
                {
                    name: "解决方案",
                    url: "/aaa"
                },
                {
                    name: "企业动态",
                    url: "/bb"
                },
                {
                    name: "关于瑞术",
                    url: "/ccc"
                }
            ];
        },
        methods: {
            
        },
    }
</script>
    
<style>
</style>