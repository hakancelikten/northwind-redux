import * as actionTypes from "./actionTypes"

export function getProductsSuccess(categories) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: categories }
}

export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (categoryId)
            url += "?categoryId=" + categoryId;
        return fetch(url)
            .then(res => res.json())
            .then(res => dispatch(getProductsSuccess(res)));
    }
}