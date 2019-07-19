export const state = () => {
    return {
        infoData: {
            seat_infos: {}
        },
        allPrice: 0
    }
}

export const mutations = {
    setInfoData(state, data) {
        state.infoData = data
    },
    setAllPrice(state, data) {
        state.allPrice = data
    }
}