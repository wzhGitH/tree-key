<template>
    <div class="padding_left">
        <div class="trees_item" v-for="item in dataList" :key="item.code">
            <div class="trees_item_line" @click="checkNode(item)">
                <i class="trees_caret_right" :class="{'isShowIcon': item.children.length > 0}"></i>
                <div class="padding_left_min icon_k">k</div>
                <div class="padding_left_min"> {{ item.key }} </div>
            </div>
            <tree-node v-if="item.children.length > 0" :dataList="item.children"></tree-node>
        </div>
    </div>
</template>
    
<script>

    export default {
        name: "tree-node",
        data(){
            return{
                
            }
        },
        props: {
            dataList: {
                default: []
            }
        },
        created(){
        },
        methods: {
            // 点击某节点
            checkNode(item){
                this.$store.commit('updateItem', item)
            }
        },
    }
</script>
    
<style scoped>
    
    .trees_item_line{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 4px 6px;
    }
    .trees_item_line:hover{
        background: #e8f3ff;
    }
    .padding_left_min{
        padding-left: 10px;
    }
    .padding_left{
        padding-left: 20px;
    }
    .trees_caret_right{
        position: relative;
        visibility: hidden;
    }
    .trees_caret_right::after{
        display: block;
        content: "";
        width: 0;
        height: 0;
        border-width: 6px 0 6px 6px;
        border-style: solid;
        border-color: transparent transparent  transparent #ccc;
        transform: rotate(0deg);
        transition: all 0.3s;
    }
    .isShowIcon{
        visibility: unset;
    }
    .icon_k{
        color: #57a3f3;
    }
</style>