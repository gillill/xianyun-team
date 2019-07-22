export const state = () => ({
    postDatas: { like: ""}

})

export const mutations = {
    setPostData(state, data){
        state.postDatas=data
    },
    setPostDataLike(state,data){
        state.postDatas.like=data
    }
}