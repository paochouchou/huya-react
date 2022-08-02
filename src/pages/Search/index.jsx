import React, { useEffect, useRef } from 'react'
import { HeaderWrapper } from '@/pages/Home/style'
import { SearchBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ShortcutWrapper } from './style'

export default function Search() {
  const searchNo = [
    {no:1,name:"张大仙"},
    {no:2,name:"童锦程"},
    {no:3,name:"dota2"},
    {no:4,name:"东星-耀阳"},
    {no:5,name:"LDL"},
    {no:6,name:"LCK"},
    {no:7,name:"鲨鱼哟"},
    {no:8,name:"天霸-沫子"},
    {no:9,name:"KPL"},
    {no:10,name:"一起看"},
  ]
  const navigate = useNavigate()
  const queryRef = useRef()
  
  const [query,setQuery] = useState('')
  const [show,setShow] = useState(true)
  
  const handleChange = (e) =>{
    setQuery(e)
  }
  useEffect(()=>{
    queryRef.current.focus()
    if(query.length>0){
      setShow(false)
    }else{
      setShow(true)
    }
  })
  return (
    <>
      <HeaderWrapper>
        <i 
          className='iconfont icon-zuo'
          style={{marginTop:"5px"}}
          onClick={()=>navigate(-1)}
        ></i>
        <SearchBar placeholder='搜索主播/房间号' showCancelButton={()=>true} 
          style={{marginTop:"5px"}}
          className='search-bar'
          ref={queryRef}
          onChange={(value)=>handleChange(value)}
        />
      </HeaderWrapper>
      <ShortcutWrapper show={show}>
        <div className='short-header'>大家都在搜</div>
        <div className='search-list'>
          {
            searchNo.map(item=>{
              return(
                <div key={item.no} className='list-no-item'>
                  <span>{item.no}</span>
                  <span className='item-name'>{item.name}</span>
                </div>
              )
            })
          }
        </div>
      </ShortcutWrapper>
    </>
  )
}
