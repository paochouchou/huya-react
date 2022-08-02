import React,{useState} from 'react'
import { connect } from 'react-redux'
import { SubscribeWrapper,SubContent } from './style'
import { useNavigate } from  'react-router-dom'
import { Popup } from 'antd-mobile'
import { deleteSubscribeItemAction } from '@/components/HomeNav/HomeCommend/store/actionCreators'
import { Modal } from '@/components/HomeNav/HomeCommend/style'

function Subscribe(props) {
  let navigate = useNavigate()
  const { subscribe } = props
  const { deleteSubscribeItemDispatch } = props
  // console.log(subscribe)
  const [loadingone, setLoadingone] = useState(false)
  const showDeleteSubModal =(setVisible1)=>{
    setLoadingone(true)
    setVisible1(false)
    setState()
  }
  const modal = () => {
    return (
        loadingone && (
            <Modal>
                <span>取消成功!</span>
            </Modal>
        )
    )
}

// 定时让模态框消失
const setState = () => {
    setTimeout(() => {
        setLoadingone(false)
    }, 1500)
}
  return (
    <>
      {modal()}
      <SubscribeWrapper>
        <div className='sub-header-L'>我的订阅</div>
        <div className='sub-header-input'>
          <i className='iconfont icon-sousuo'></i>
          <input type="text" 
            onClick={()=>navigate("/search")}
          />
        </div>
      </SubscribeWrapper>
      <SubContent>
        <div className="container">
        {
          subscribe.map(item=>{
            return(
              <div className='room-item' key={item.id}>
                <div className='item-pic'>
                  <span className='pic-classify'>{item.classify}</span>
                  <span className='pic-name'>{item.name}</span>
                  <span className='pic-popularity'>
                    <i className='iconfont icon-redupaixu' />{item.popularity}万
                  </span>
                  <div className="pic">
                      <img src={item.coverImg} alt=""  />
                  </div>
                </div>
                <div className="item-desc">
                  <span>{item.title}</span>
                <PupupItem item={item} 
                  deleteSubscribeItemDispatch={deleteSubscribeItemDispatch}
                  showDeleteSubModal={showDeleteSubModal}
                ></PupupItem>
                </div>
              </div>
            )
          })
        }
        </div>
      </SubContent>
    </>
    
  )
}

const PupupItem =({item,showDeleteSubModal,deleteSubscribeItemDispatch})=>{
  const [visible1, setVisible1] = useState(false)
  const deleteSub = (id) =>{
    deleteSubscribeItemDispatch(id)
    showDeleteSubModal(setVisible1)
  }
  return(
    <>
      <i className='iconfont icon-gengduo' 
        onClick={() => {setVisible1(true)}} 
      />
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false)
        }}
        bodyStyle={{ height: '100px' }}
      >
        <div style={{height:"50px",width:"100%", fontSize:"1rem",textAlign:'center',lineHeight:"50px"}}>
          <button 
            onClick={()=>deleteSub(item.id)}
            style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:'#ffa200'}}
          >取消订阅
          </button>
        </div>
      </Popup>
    </>
  )
}

const mapStateToProps = (state) =>{
  return{
    subscribe:state.recommend.subscribe
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubscribeItemDispatch(id){
      dispatch(deleteSubscribeItemAction(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Subscribe))
