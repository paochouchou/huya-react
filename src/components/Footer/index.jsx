import React from 'react'
import { FooterWrapper } from './style'
import { NavLink, useLocation } from 'react-router-dom'

export default function Footer() {
    const {pathname='/'} = useLocation()
    // console.log(pathname);
    const showFooterPath=[
        "/home/commend",
        "/home",
        "/amusement",
        "/subscribe",
        "/address",
        "/mine",
        "/home/material",
        "/home/hot",
        "/home/wangzhe",
        "/home/lol",
        "/home/outdoors",
        "/home/starshow",
        "/home/movie",
        "/home/chiji",
        "/home/dating",
        "/home/mobileLOL",
        "/home/cf",
        "/home/eat",
        "/home/yuanshen",
        "/home/face",
        "/home/consoleGames",
        "/home/myworld",
    ]
    if(!showFooterPath.includes(pathname)){
        return
    } // 页面跳转指定页面后底部导航消失
  return (
    <FooterWrapper>
        <NavLink to="/home">
            <i className='iconfont icon-shouye'></i>
            <span>首页</span>
        </NavLink>
        <NavLink to="/amusement">
            <i className='iconfont icon-shoucang'></i>
            <span>娱乐</span>
        </NavLink>
        <NavLink to="/subscribe">
            <i className='iconfont icon-aixin'></i>
            <span>订阅</span>
        </NavLink>
        <NavLink to="/address">
            <i className='iconfont icon-xiaoxi_o'></i>
            <span>虎址</span>
        </NavLink>
        <NavLink to="/mine">
            <i className='iconfont icon-wodeb'></i>
            <span>我的</span>
        </NavLink>
    </FooterWrapper>
  )
}
