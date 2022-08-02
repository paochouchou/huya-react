import * as actionTypes from './constants'

const defaultState = {
    recommendList: [],
    subscribe: [],
    isArrive: false,
}

export default (state = defaultState,action)=>{
    // console.log(action.data,"+++++++");
    switch(action.type){
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return{
                ...state,
                recommendList: action.data
            }
        case actionTypes.ADD_SUBSCRIBE:
            let changeID = action.data
            let subscribe = state.subscribe
            let changeItem = state.recommendList[state.recommendList.findIndex(item => item.id == changeID)].id
            let change = state.recommendList.map(item => {
                if(item.id == changeItem){
                    item.subscribe = true
                    if(subscribe.indexOf(item)==-1){
                        subscribe.push(item)
                    }
                }
                return item
            })
            return {
                ...state,
                recommendList: change,
                subscribe: subscribe
            }
            break
        case actionTypes.DELETE_ITEM:
            let deleteID = action.data
            let newList =state.recommendList.filter((item)=>item.id!==deleteID)
            return {
                ...state,
                recommendList: newList
            }
            break
        case actionTypes.IS_ARRIVE:
            return{
                ...state,
                isArrive: action.data
            }
        case actionTypes.DELETE_SUBSCRIBE_ITEM:
            let deleteSubId = action.data
            let newSubList = state.subscribe.filter((item)=>item.id!==deleteSubId)
            let changeRecommendList = state.recommendList.map(item => {
                if(item.id == deleteSubId){
                    item.subscribe = false
                }
                return item
            })
            return{
                ...state,
                recommendList: changeRecommendList,
                subscribe: newSubList
            }
            break
        default:
            return state
    }

    return state
}