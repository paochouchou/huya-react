import React, { useEffect, useState,useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Container} from './style'
import { useNavigate } from 'react-router-dom'
import { ClassifyHeaderWrapper } from './style'
import { Tabs, Swiper } from 'antd-mobile'
import ClassifyHot from '@/components/ClassifyHot'
import { connect } from 'react-redux'
import { getClassifyHotList,deleteCommonAction } from './store/actionCreators'

const tabItems = [
  { key: 'hot', title: '热门' },
  { key: 'onlinegames', title: '网络竞技' },
  { key: 'singlegames', title: '单机热游' },
  { key: 'amusement', title: '娱乐天地' },
  { key: 'mobilegames', title: '手游休闲' },
]

function PlayClassify(props) {
  const navigate = useNavigate()

  const [show,setShow] = useState(false)
  useEffect(()=>{
    setShow(true)
  },[])

  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const back = () =>{
    setShow(false)
  }
  const { commonList,Arrive } = props
  const { getClassifyHotListDispatch,deleteCommonDispatch } = props
  useEffect(() =>{
    // 数据首次到达后不再重新更新
    if(!Arrive){
      getClassifyHotListDispatch()
    }
  },[])
  const [isManage,setIsManage] = useState(false)
  let displayStyle = isManage?{display:""}:{display:"none"}  
  const deleteCommon = (id) =>{
    deleteCommonDispatch(id)
  }
  const renderCommon = () =>{
    return(
      <ul>
        {
          commonList.map(item =>{
            return(
              <li key={item.id}>
                <div className='common-item'>
                  <span>{item.desc}</span>
                  <i style={displayStyle}
                    onClick={()=>deleteCommon(item.id)}
                  >-</i>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  const renderClassifyHot = () =>{
    return(
      <>
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={key => {
              const index = tabItems.findIndex(item => item.key === key)
              setActiveIndex(index)
              swiperRef.current?.swipeTo(index)
          }}
        >
          {tabItems.map(item => (
              <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
        <Swiper
          // direction='horizontal'
          loop={false}
          allowTouchMove={true}
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={index => {
              setActiveIndex(index)
          }}
          >
            <Swiper.Item>
                <ClassifyHot  isManage={isManage}/>
            </Swiper.Item>
            <Swiper.Item>
                网络竞技
            </Swiper.Item>
            <Swiper.Item>
                单机热游
            </Swiper.Item>
            <Swiper.Item>
                娱乐天地
            </Swiper.Item>
            <Swiper.Item>
                手游休闲
            </Swiper.Item>
        </Swiper>
      </>
    )
  }
  return (
    <CSSTransition
        in={show}
        timeout={3000}
        appear={true}
        classNames='fly'
        unmountOnExit
        onExit={()=>{
            navigate(-1)
        }}
    >
        <Container>
          <ClassifyHeaderWrapper>
            <i 
              className='iconfont icon-zuo'
              onClick={()=>back()}
            ></i>
            <div className='header-center'>全部分类</div>
            <span onClick={()=>setIsManage(!isManage)}>
              {isManage==false?<>管理</>:<div style={{color:"#ffa200"}}>完成</div>}
            </span>
          </ClassifyHeaderWrapper>
          <div className='common-wrapper'>
            <div style={{display:"flex"}}>
              <span style={{float:"left",fontSize:"0.8rem",marginLeft:"0.5rem"}}>常用</span>
              <span style={{float:'left',color:"grey",marginLeft:"0.5rem",lineHeight:"1rem"}}>点击管理，添加常用</span>
            </div>
            {renderCommon()}
          </div>
          <div className='tabs-classify'>
            {renderClassifyHot()}
          </div>
        </Container>
        
    </CSSTransition>
    
  )
}

const mapStateToProps = (state) =>{
  return{
    classifyHotList: state.classifyhot.classifyHotList,
    commonList: state.classifyhot.commonList,
    Arrive: state.classifyhot.Arrive
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getClassifyHotListDispatch(){
      dispatch(getClassifyHotList())
    },
    deleteCommonDispatch(id){
      dispatch(deleteCommonAction(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlayClassify))