import axios from 'axios';
import { ActionTypes } from './../actionTypes';

axios.defaults.baseURL = "http://localhost:4000";

// Senkron Aksiyonlar
export const setBasketLoading = () => ({
     type: ActionTypes.SET_BASKET_LOADING,
})

export const setBasket = (payload) => ({
    type: ActionTypes.SET_BASKET,
    payload,
})

export const setBasketError = () => ({
    type: ActionTypes.SET_BASKET_ERROR,
})

// Asenkron aksiyonlar

export const getBasketData = () => (dispatch) => {
    axios.get('/basket')
    .then((res) => dispatch(setBasket(res.data)))
    .catch((err) => dispatch(setBasketError()));
};

export const addToBasket = (product) => (dispatch) => {

    const newProduct = {...product, adet:1}

    axios.post('/basket', newProduct)
    .then((res) => dispatch({ type: ActionTypes.ADD_TO_BASKET,
        payload: newProduct}))
    .catch((err) => dispatch(setBasketError()));
};

export const updateItem = (product) => (dispatch) => {
    axios
    .patch(`/basket/${product.id}`, {adet: product.adet + 1})
    .then(() => dispatch({type: ActionTypes.UPDATE_ITEM, payload: product.id}))
};

export const reduceItem = (product) => (dispatch) => {
    axios
    .patch(`/basket/${product.id}`, {adet: product.adet - 1})
    .then(() => dispatch({type: ActionTypes.REDUCE_ITEM, payload: product.id}))
};

export const removeItem = (delete_id) => (dispatch) => {
    axios
    .delete(`/basket/${delete_id}`)
    .then(() => dispatch({type: ActionTypes.REMOVE_ITEM, payload: delete_id}))
};