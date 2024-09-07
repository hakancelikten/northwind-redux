import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//reducer bizim için o anki state'i döndürmektedir. Yani kısacası bir tutucu merkezi bir noktada. İsteyen herkes o tutucuya abone olup istediği state'i döndürebiliyor.
export default function changeCategoryReducer(state = initialState.currentCategory, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
        default:
            return state;
    }
}