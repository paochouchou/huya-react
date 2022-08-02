// 模块化  路由模块 基本就是数据模块
import { combineReducers } from "redux"
// store 中央
// 地方
import { reducer as recommendReducer } from '@/components/HomeNav/HomeCommend/store/index'
import { reducer as classifyHot } from '@/pages/PlayClassify/store/index'
import { reducer as open } from '@/pages/Mine/store/index'
// import { reducer as SearchReducer } from "@/pages/Search/store/index"
// import { reducer as rankReducer } from '@/pages/Rank/store/index'

export default combineReducers({
    recommend:recommendReducer,
    classifyhot:classifyHot,
    open:open,
    // search:SearchReducer,
    // rank:rankReducer
})