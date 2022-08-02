import React from 'react'
import { InputWrapper } from './style'
import { useNavigate } from  'react-router-dom'

export default function Input() {
  let navigate = useNavigate()
  return (
    <InputWrapper>
      <i className='iconfont icon-sousuo icon-search'></i>
      <i className='iconfont icon-saoma icon-saoma' 
        onClick={()=>alert("该模块待开发，敬请期待...")}></i>
      <input type="text" 
          onClick={()=>navigate("/search")}
          placeholder={"22222"}  
      />
    </InputWrapper>
  )
}
