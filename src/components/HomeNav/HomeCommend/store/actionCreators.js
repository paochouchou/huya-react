import { getRecommendRequest } from "@/api/request"
import * as actionTypes from './constants'

export const changeRecommendList = (data) =>({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data
})

export const getRecommendList =() =>{
    return (dispatch) =>{
        getRecommendRequest().then(data=>{
            dispatch(changeRecommendList(data.data))
            dispatch(changeArrive(true))
        })
    }
}
export const changeSubscrible = (id)=>({
    type: actionTypes.ADD_SUBSCRIBE,
    data: id
})

export const getSubscribleAction = (id) =>{
    return (dispatch) =>{
        // getRecommendRequest().then(id =>{
            dispatch(changeSubscrible(id))
            // console.log(id);
        // })
    }
}
export const deleteItem = (id)=>({
    type: actionTypes.DELETE_ITEM,
    data: id
})
export const deleteItemAction = (id) =>{
    return (dispatch) =>{
        dispatch(deleteItem(id))
    }
}

export const changeArrive = (data) =>({
    type: actionTypes.IS_ARRIVE,
    data
})

export const deletSubscribeItem = (id)=>({
    type: actionTypes.DELETE_SUBSCRIBE_ITEM,
    data: id
})
export const deleteSubscribeItemAction = (id) =>{
    return (dispatch) =>{
        dispatch(deletSubscribeItem(id))
    }
}