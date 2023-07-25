import { getClassifyHotRequest } from "@/api/request"
import * as actionTypes from './constants'

export const changeClassifyHotList = (data) =>({
    type: actionTypes.CHANGE_CLASSITF_HOT_LIST,
    data
})

export const getClassifyHotList =() =>{
    return (dispatch) =>{
        getClassifyHotRequest().then(data=>{
            dispatch(changeClassifyHotList(data.data.data))
            dispatch(changeArrive(true))
        })
    }
}

export const changeAddCommon = (id)=>({
    type: actionTypes.ADD_COMMON,
    data: id
})

export const getAddCommonAction = (id) =>{
    return (dispatch) =>{
            dispatch(changeAddCommon(id))
    }
}
export const deleteCommon = (id)=>({
    type: actionTypes.DELETE_COMMON,
    data: id
})
export const deleteCommonAction = (id) =>{
    return (dispatch) =>{
        dispatch(deleteCommon(id))
    }
}
export const changeArrive = (data) =>({
    type: actionTypes.ARRIVE,
    data
})

