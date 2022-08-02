import React from 'react'
import { Switch } from 'antd-mobile'
import { MineWrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'




function Mine(props) {
  const { isOpen } = props
  const { getIsOpenActionDispatch } = props
  const changeTheme =(val)=>{
    getIsOpenActionDispatch(val)
    if(val==true){
      document.documentElement.style.setProperty('--background-color','black')
      document.documentElement.style.setProperty('--font-color','white')
    }
    else{
      document.documentElement.style.setProperty('--background-color','white')
      document.documentElement.style.setProperty('--font-color','black')
    }
  }

  return (
    <MineWrapper>
      <div style={{paddingTop:"200px"}}>
        <span >
          夜间模式<Switch
            // defaultChecked={false}
            style={{
              '--checked-color': '#ffa200',
              '--height': '30px',
              '--width': '60px',
            }}
            onChange={(val)=>changeTheme(val)}
            checked={isOpen}
          />
        </span>
        
      </div>
    </MineWrapper>
    
  )
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.open.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch()
    getIsOpenActionDispatch(val){
      dispatch(actionCreators.getIsOpenAction(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine)
