import React,{ useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { RecommendContent } from './style'
import Scroll from '@/components/common/Scroll'
import { Popup } from 'antd-mobile'
// import LazyLoad from 'react-lazyload'
// import lazypic from './lazypic.jpg'
// import defaultpic from './OIP-C.jpg'
import {  Modal } from './style'

function HomeCommend(props) {
  const { recommendList,isArrive } = props
  const { getRecommendListDispatch,addSubscribeDispatch,deleteItemDispatch } = props
  // console.log(recommendList)
  useEffect(() => {
    // 数据首次到达后不再更新数据
    if(!isArrive){
      getRecommendListDispatch()
    }
  }, [])
  

  const [loadingone, setLoadingone] = useState(false)
  const [loadingthree, setLoadingthree] = useState(false)
  
  const showModal = (setVisible1) =>{
    setLoadingone(true)
    setVisible1(false)
    // setLoadingthree(true)
    setState()
  }
  const showDeleteModal =(setVisible1)=>{
    setLoadingthree(true)
    setState()
    setVisible1(false)
  }
  // 提示模态框
  const modalone = () => {
      return (
          loadingone && (
              <Modal>
                  <span>订阅成功!</span>
              </Modal>
          )
      )
  }
  
  const modalthree = () => {
    return (
        loadingthree && (
            <Modal>
                <span>反馈成功!</span>
            </Modal>
        )
    )
}
  // 定时让模态框消失
  const setState = () => {
      setTimeout(() => {
          setLoadingone(false)
          setLoadingthree(false)
      }, 1500)
  }

  return (
    <RecommendContent>
      {modalone()}
      {modalthree()}
      <Scroll>
        <div className="container">
          {
            recommendList.map(item=>{
              return(
                <div className='room-item' key={item.id}>
                  <div className='item-pic'>
                    <span className='pic-classify'>{item.classify}</span>
                    <span className='pic-name'>{item.name}</span>
                    <span className='pic-popularity'>
                      <i className='iconfont icon-redupaixu' />{item.popularity}万
                    </span>
                    <div className="pic">
                    {/* <LazyLoad placeholder={<img src={lazypic}/>}> */}
                        <img src={item.coverImg} alt=""  />
                    {/* </LazyLoad>  */}
                    </div>
                  </div>
                  <div className="item-desc">
                    <span>{item.title}</span>
                  <PupupItem item={item} 
                    addSubscribeDispatch={addSubscribeDispatch}
                    showModal={showModal}
                    showDeleteModal={showDeleteModal}
                    deleteItemDispatch={deleteItemDispatch}
                    // visible1={visible1}
                  ></PupupItem>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Scroll>
    </RecommendContent>
  )
}
// 弹出层事件不能放在map循环里面，否则会循环触发弹出层事件，导致背景样式异常
// 要单独拎出来
const PupupItem =({item,addSubscribeDispatch,deleteItemDispatch,showModal,showDeleteModal})=>{
  const [visible1, setVisible1] = useState(false)
  // const { addSubscribeDispatch } = props
  
  const addSubscribe =(id) =>{
    // console.log(id)
    showModal(setVisible1)
    addSubscribeDispatch(id)
  }
  const deleteItem = (id) =>{
    deleteItemDispatch(id)
    showDeleteModal(setVisible1)
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
        bodyStyle={{ height: '250px' }}
      >
        <div style={{height:"50px",width:"100%", fontSize:"1rem",textAlign:'center',lineHeight:"50px"}}>主播:{item.name}</div>
        <div style={{height:"50px",width:"100%", fontSize:"1rem",textAlign:'center',lineHeight:"50px"}}>分类:{item.classify}</div>
        <div style={{height:"50px",width:"100%", fontSize:"1rem",textAlign:'center',lineHeight:"50px",color:"red"}}
              onClick={()=>deleteItem(item.id)}
        >不感兴趣</div>
        <div style={{height:"50px",width:"100%", fontSize:"1rem",textAlign:'center',lineHeight:"50px"}}>
          {item.subscribe==false?<button onClick={()=>addSubscribe(item.id)}
            disabled={item.subscribe}
            style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:'#ffa200'}}
          >订阅
          </button>:
          <button
            disabled={item.subscribe}
            style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:'#ffa200'}}
          >已订阅
          </button>}
        </div>
      </Popup>
    </>
  )
}
const mapStateToProps = (state) =>{
  return{
    recommendList: state.recommend.recommendList,
    isArrive: state.recommend.isArrive
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getRecommendListDispatch(){
      dispatch(actionCreators.getRecommendList())
      // dispatch(actionCreators.getSubscribleAction(id))
    },
    addSubscribeDispatch(id){
      dispatch(actionCreators.getSubscribleAction(id))
    },
    deleteItemDispatch(id){
      dispatch(actionCreators.deleteItemAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(HomeCommend))
