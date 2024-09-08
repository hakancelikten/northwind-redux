//categoriye ait aksiyonlarımı yazacağız
import * as actionTypes from "./actionTypes"

// kategoriye tıkladığımızda çalışacak event bu olacak. 
// Biz bu işlemi yaptığımız zaman reducer'da changeCategory'i gördüğü anda state'i payload'ta belirtilen değer olarak set etmiş olacağız.

export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}

export function getCategoriesSuccess(categories) {
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories }
}

export function getCategories() {
    return function (dispatch) {
        let url = "http://localhost:3000/categories"
        return fetch(url)
            .then(res => {
                var ret = res.json()
                return ret;
            })
            .then(res => dispatch(getCategoriesSuccess(res)));
    }
}