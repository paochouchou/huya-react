import * as actionTypes from './constants'

const defaultState ={
    isOpen: false,
}

export default (state = defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_OPEN:
            return{
                ...state,
                isOpen: action.data
            }
        default:
            return state
    }
    return state
}