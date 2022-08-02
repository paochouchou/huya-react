import React from 'react'
import { RecommendHotWrapper } from './style'
import { connect } from 'react-redux'
import { getAddCommonAction } from '@/pages/PlayClassify/store/actionCreators'

function Classifyhot(props) {
  const { classifyHotList,isManage } =props
  const { addCommonDispatch } = props
  
  let displayStyle = isManage?{display:""}:{display:"none"}
  const addCommon =(id)=>{
    addCommonDispatch(id)
  }
  return (
    <RecommendHotWrapper>
      <div className='list-box'>
        <ul>
          {
            classifyHotList.map(item=>{
              return (
                <li key={item.id} className='hot-li'>
                  <a href="javascript:;" className='hot-a'>
                    <div className='hot-item'>
                      <span style={displayStyle}
                        onClick={()=>addCommon(item.id)}
                      >{item.checked==false?<>+</>:<></>}</span>
                      <img src={item.img} alt="" />
                    </div>
                    <span className='hot-desc'>{item.desc}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </RecommendHotWrapper>
  )
}

const mapStateToProps = (state) =>{
  return{
    classifyHotList: state.classifyhot.classifyHotList,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addCommonDispatch(id){
      dispatch(getAddCommonAction(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Classifyhot))
