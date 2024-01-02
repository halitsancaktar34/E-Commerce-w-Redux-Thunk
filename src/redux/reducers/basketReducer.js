import { ActionTypes } from "../actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    basket: [],
};

const basketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BASKET_LOADING:
            return { ...state, isLoading: true }

        case ActionTypes.SET_BASKET_ERROR:
            return { ...state, isLoading: false, isError: true, }

        case ActionTypes.SET_BASKET:
            return { ...state, basket: payload, isLoading: false, isError: false }

        case ActionTypes.ADD_TO_BASKET:
            return { ...state, basket: state.basket.concat(payload) };

        case ActionTypes.UPDATE_ITEM:
            const newBasket = state.basket.map((item) => {
                if (item.id === payload) {
                    return{...item, adet: item.adet + 1}
                } else {
                    return item
                }
            })
            return { ...state, basket: newBasket };

        case ActionTypes.REMOVE_ITEM:
            const filtred = state.basket.filter((i) => i.id !== payload)
            return{...state, basket: filtred}

        default:
            return state;
    }
};

export default basketReducer;