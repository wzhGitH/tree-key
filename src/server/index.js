const axios = require("axios");
const Service = {
    getHeader(){
        return { "Content-Type": "application/json" };
    },
    get(url, json){
        return new Promise((resolve, reject) =>{
            axios({
                method: "GET",
                url: url,
                data: json,
                headers: this.getHeader()
            }).then(function(res) {
                console.log(res)
                let resp = res.data;
                resolve(resp);
            }).catch(function(err) {
                reject(err.data)
            });
        })
    },
    post(url, json){
        return new Promise((resolve, reject) =>{
            axios({
                method: "POST",
                url: url,
                data: json,
                headers: this.getHeader()
            }).then(function(res) {
                let resp = res.data;
                resolve(resp);
            }).catch(function(err) {
                reject(err.data)
            });
        })
    },
    reformMenuList(obj, fnode) {
        let gen = [];
        for (let i = 0; i < obj.length; i++) {
            let branch = obj[i];
            if (branch.fa_code == fnode) {
                gen.push(branch);
                branch["children"] = this.buildTree(obj, branch);
            }
        }
        return gen;
    },
    buildTree(obj, parentNode) {
        let tree = new Array();
        for (let i = 0; i < obj.length; i++) {
            let children = obj[i];
            if (children.fa_code == parentNode.code) {
                tree.push(children);
                children["children"] = this.buildTree(obj, children);
            }
        }
        return tree;
    }

}
export default Service;