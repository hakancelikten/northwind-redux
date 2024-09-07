//categoriye ait aksiyonlarımı yazacağız
import * as actionTypes from "./actionTypes"

// kategoriye tıkladığımızda çalışacak event bu olacak. 
// Biz bu işlemi yaptığımız zaman reducer'da changeCategory'i gördüğü anda state'i payload'ta belirtilen değer olarak set etmiş olacağız.

export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}