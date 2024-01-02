import axios from "axios"
import { ActionTypes } from "../actionTypes"

export const setLoading = () => {
    return {
        type: ActionTypes.SET_LOADING,
    }
}

export const setProducts = (payload) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload,
    }
}

export const setError = () => {
    return {
        type: ActionTypes.SET_ERROR,
    }
}

// Asenkron işlemler

export const getProductData = () => (dispatch) => {
    axios
        .get("http://localhost:4000/products")
        .then((res) => dispatch(setProducts(res.data)))
        .catch((err) => dispatch(setError()))
};