import React from 'react'
import styled from 'styled-components'
import style from '@/assets/global-style'

export default function HeaderRight() {
  return (
    <HeaderRightWrapper>
      <span onClick={() => alert("该模块待开发，敬请期待...")}>
        <i className='iconfont icon-youxi'></i>
      </span>
      <span onClick={() => alert("该模块待开发，敬请期待...")}>
        <i className='iconfont icon-jihuarenwu'></i>
      </span>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background: red; */
    margin-right: 0.5rem;
    display: flex;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        i{
            font-size: 1rem;
            width: 100%;
            height: 100%;
            color: ${style["font-color"]};
        }
    }
`
