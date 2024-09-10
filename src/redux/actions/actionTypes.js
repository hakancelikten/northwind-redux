// actiontypes bizim aksiyon tiplerimizi barındırıyordu ve magic string'ten kurtulmak için değişken isimlerini bir const atıyoruz.
export const CHANGE_CATEGORY = "CHANGE_CATEGORY"
//asenkron işlemlerde veri kayıplarını drowback(açıklar) çözmek için redux thunk denilen bir yapıdan yardım alıyoruz
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS"
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS"