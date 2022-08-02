import * as actionTypes from './constants'

export const changeIsOpen = (data)=>({
    type: actionTypes.CHANGE_OPEN,
    data
})

export const getIsOpenAction = (val) =>{
    return (dispatch)=>{
        dispatch(changeIsOpen(val))
    }
}