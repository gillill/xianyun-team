export const state = () => {
  return {
    cityData: {
      data: []
    },
    postDatas: { like: "" },
    commentLists:[]
  };
};

export const mutations = {
  setData(state, data) {},
  setCicy(state, data) {
    state.cityData = data;
  },
  setPostData(state, data) {
    state.postDatas = data;
  },
  setPostDataLike(state, data) {
    state.postDatas.like = data;
  },
  setCommentList(state, data){
   state.commentLists=data
    }
};
