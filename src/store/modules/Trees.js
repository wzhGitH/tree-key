
const state = {
    selectItem: {}

}
export default {
    state,
    mutations: {
        updateItem(state, item){
            console.log(item)
            state.selectItem = item;
        }
    }
}