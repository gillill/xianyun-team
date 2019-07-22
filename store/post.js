export const state = () => {
    return {
        cityData:{
            data:[]
        }
    }
}

export const mutations = {
    setData(state, data) { },
    setCicy(state, data) {
        state.cityData = data
    }
}