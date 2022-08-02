import * as actionTypes from './constants'

const defaultState = {
    classifyHotList: [],
    // isManage: false,
    commonList: [],
    Arrive: false
}

export default (state = defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_CLASSITF_HOT_LIST:
            let getCommon = action.data.filter((item)=>item.checked==true)
            return{
                ...state,
                classifyHotList: action.data,
                commonList: getCommon
            }
        case actionTypes.ADD_COMMON:
            let addID = action.data
            let addChange = state.classifyHotList.map(item => {
                if(item.id == addID){
                    item.checked = true
                    state.commonList.push(item)
                }
                return item
            })
            return{
                ...state,
                classifyHotList: addChange,
                commonList: state.commonList
            }
            break
        case actionTypes.DELETE_COMMON:
            let deleteCommonID = action.data
            let newCommon =state.commonList.filter((item)=>item.id!==deleteCommonID)
            let change=state.classifyHotList.map(item=>{
                if(item.id==deleteCommonID){
                    item.checked=false
                }
                return item
            })
            return {
                ...state,
                classifyHotList: change,
                commonList: newCommon
            }
            break
        case actionTypes.ARRIVE:
            return{
                ...state,
                Arrive: action.data
            }
        default:
            return state
    }
    return state
}