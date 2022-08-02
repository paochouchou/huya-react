import React, { useEffect } from 'react'
import  { HeaderWrapper,NavBar,NavItem,Content }  from './style'
import Input from '@/components/common/Input'
import HeaderRight from './HeaderRight/index.jsx'
import { NavLink,Outlet,useNavigate,useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

function Home(props) {
  const { classifyhot } = props
  // 默认导航
  let defaultHomenavs=[
      { id:100,desc:'有料',path:'/material'},
      { id:101,desc:'推荐',path:'/commend'},
      { id:102,desc:'热门',path:'/hot'},
      { id:103,desc:'王者荣耀',path:'/wangzhe'},
      { id:104,desc:'LOL',path:'/lol'},
      { id:105,desc:'户外',path:'/outdoors'},
      { id:106,desc:'星秀',path:'/starshow'},
      { id:107,desc:'一起看',path:'/movie'},
      { id:108,desc:'和平精英',path:'/chiji'},
      { id:109,desc:'交友',path:'/dating'},
  ]
  // 用户自定义导航，initialNavs为默认
  let initialNavs = [
      { id:100,desc:'有料',path:'/material'},
      { id:101,desc:'推荐',path:'/commend'},
      { id:102,desc:'热门',path:'/hot'},
  ]
  let homenavs = initialNavs.concat(classifyhot)
  if(classifyhot.length==0){
    homenavs = defaultHomenavs
  }
  const {pathname='/home/commend'}=useLocation()
  // console.log(pathname)
  let navigate = useNavigate()
  useEffect(()=>{
    navigate('/home/commend')
  },[])

  return (
    <div>
      <HeaderWrapper>
        <div style={{display:"flex",flex:"1"}}>
          <Input />
        </div>
        <div style={{display:"flex",width:"20%"}}>
          <HeaderRight />
        </div>
      </HeaderWrapper>
      <NavBar>
        <div className='navBar'>
          {
            homenavs.map((item,index)=>{
              return(
                <NavItem key={item.id}>
                  <NavLink 
                    to={`/home${item.path}`}
                    index={index}
                  >
                    <span>{item.desc}</span>
                  </NavLink>
                </NavItem>
                
              )
            })
          }
        </div>
        <div className="moreClassify">
          <i className='iconfont icon-fenlei'
            onClick={()=>navigate("/playclassify")}
          ></i>
        </div>
      </NavBar>
      <Content>
        <Outlet />
      </Content>
      
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    classifyhot: state.classifyhot.commonList
  }
}

export default connect(mapStateToProps)(React.memo(Home))
