import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import HomeCommend from '@/components/HomeNav/HomeCommend'
// import PlayClassify from '@/pages/PlayClassify'
const Amusement = lazy(() => import('@/pages/Amusement'))
const Subscribe = lazy(() => import('@/pages/Subscribe'))
const Address = lazy(()=> import('@/pages/Address'))
const Mine = lazy(()=> import('@/pages/Mine'))
const HomeMaterial = lazy(()=> import('@/components/HomeNav/HomeMaterial'))
const HomeHot = lazy(()=> import('@/components/HomeNav/HomeHot'))
const HomeWangzhe = lazy(()=> import('@/components/HomeNav/HomeWangzhe'))
const HomeLol = lazy(()=> import('@/components/HomeNav/HomeLol'))
const HomeOutdoors = lazy(()=> import('@/components/HomeNav/HomeOutdoors'))
const HomeStarshow = lazy(()=> import('@/components/HomeNav/HomeStarshow'))
const HomeMovie = lazy(()=> import('@/components/HomeNav/HomeMovie'))
const HomeChiji = lazy(()=> import('@/components/HomeNav/HomeChiji'))
const HomeDating = lazy(()=> import('@/components/HomeNav/HomeDating'))
const PlayClassify = lazy(()=> import('@/pages/PlayClassify'))
const Search = lazy(()=> import('@/pages/Search'))
const Waiting = lazy(()=> import('@/components/common/Waiting'))

const RouterConfig = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {/* redirect 重定项 */}
                <Route path='/' element={<Navigate to="/home/commend" replace={true} />}></Route>
                <Route path='/home' element={<Home />}>
                {/* <Route path='/home' element={<Navigate to="/home/commend" replace={true} />}> */}
                    <Route path='/home/material' element={<HomeMaterial />}></Route>
                    <Route path='/home/commend' element={<HomeCommend />}></Route>
                    <Route path='/home/hot' element={<HomeHot />}></Route>
                    <Route path='/home/wangzhe' element={<HomeWangzhe />}></Route>
                    <Route path='/home/lol' element={<HomeLol />}></Route>
                    <Route path='/home/outdoors' element={<HomeOutdoors />}></Route>
                    <Route path='/home/starshow' element={<HomeStarshow />}></Route>
                    <Route path='/home/movie' element={<HomeMovie />}></Route>
                    <Route path='/home/chiji' element={<HomeChiji />}></Route>
                    <Route path='/home/dating' element={<HomeDating />}></Route>
                    <Route path='/home/myworld' element={<Waiting />}></Route>
                    <Route path='/home/cf' element={<Waiting />}></Route>
                    <Route path='/home/eat' element={<Waiting />}></Route>
                    <Route path='/home/mobileLOL' element={<Waiting />}></Route>
                    <Route path='/home/face' element={<Waiting />}></Route>
                    <Route path='/home/yuanshen' element={<Waiting />}></Route>
                    <Route path='/home/consoleGames' element={<Waiting />}></Route>
                </Route>
                <Route path='/amusement' element={<Amusement />}></Route>
                <Route path='/subscribe' element={<Subscribe />}></Route>
                <Route path='/address' element={<Address />}></Route>
                <Route path='/mine' element={<Mine />}></Route>
                <Route path='/playclassify' element={<PlayClassify />}></Route>
                <Route path='/search' element={<Search />}></Route>
            </Routes>
        </Suspense>
    )
}

export default RouterConfig