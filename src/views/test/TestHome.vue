<template>
    <div>
        <vue-tree :dataList="treeList"></vue-tree>
        <div>
            选择的值是
            {{ checkItem.key }}
        </div>
        <div v-for="(item, index) in dataList" :key="index">
            <div class="padding">{{ item.label_name }}:</div>
            <div class="padding">{{ item.value }}</div>
        </div>
    </div>
</template>

<script>
    import testJson from "@/assets/json/test.json"
    import vueTree from "@/components/trees/VueTree.vue"
    export default {
        data(){
            return{
                testJson: testJson,
                trees: [],
                treeList: [],
                dataList: []
            }
        },
        computed: {
            checkItem(){
                let selectItem = this.$store.state.trees.selectItem
                return selectItem
            }
        },
        components: {vueTree},
        mounted(){
            this.test(this.testJson)
            let trees = {value: "", key: "", code: this.trees.length, fa_code: "", fa_key: "", children: []};
            this.initJson(this.testJson, trees)
            console.log(this.trees)
            let treeList = this.Service.reformMenuList(this.trees, 0);
            this.treeList = treeList;
            console.log(treeList)
        },
        methods: {
            test(testJson){
                let dataList = [];
                let item = {
                    children: [],
                    code: 13,
                    fa_code: 12,
                    fa_key: "result.data.blob.content.",
                    label_name: "正文名称",
                    key: "text",
                    value: "aaaaaa"
                }
                let item2 = {
                    children: [],
                    code: 6,
                    fa_code: 2,
                    fa_key: "result.data.",
                    label_name: "数据备注名称",
                    key: "com",
                    value: ""
                }
                dataList.push(item);
                dataList.push(item2);
                dataList.forEach((elt)=> {
                    let keyStr= elt.fa_key + elt.key;
                    let split = keyStr.split(".");
                    let value = testJson;
                    for(let i in split){
                        let key = split[i];
                        value = value[key];
                    }
                    elt.value = value;
                })
                console.log(dataList);
                this.dataList = dataList;
            },
            // 初始化
            // initJson(value, trees){
            //     if (Array.isArray(value)) {
            //         // 当value为数组时的逻辑
            //         // const item = value[0];
            //         value.forEach((elt)=> {
            //             this.walk(elt, trees)
            //         })
            //     } else {
            //         this.walk(value, trees)
            //     }
            // },
            initJson(obj, trees){
                const keys = Object.keys(obj);
                for (let i = 0; i < keys.length; i++) {
                    let key = keys[i];
                    let value = obj[key];
                    let code = this.trees.length + 1;
                    let fa_key = trees.key ? trees.fa_key + trees.key + "." : "";
                    let item = { value: value, key: key, fa_code: trees.code, code: code, fa_key: fa_key};
                    this.trees.push(item);
                    if(typeof value === "object"){
                        this.initJson(value, item)
                    }
                }
            }
        }
    }
</script>

<style>
    .padding{
        padding: 6px 20px;
    }
</style>