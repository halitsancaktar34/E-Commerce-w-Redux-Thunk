import { ActionTypes } from "../actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        // Yüklenme durumu
        case ActionTypes.SET_LOADING:
            return { ...state, isLoading: true };

        //  Verilerin geldiği senaryo
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload, isLoading: false, isError: false };

        // Hata durumu
        case ActionTypes.SET_ERROR:
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }
};

export default productReducer;