import styled from "styled-components"
import style from '@/assets/global-style'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 2.2rem;
    display: flex;
    align-items: center;
    background: var(--background-color);
    i{
        width: 2rem;
        font-size: 0.9rem;
        color: var(--font-color);
        
    }
    .search-bar{
        flex: 1;
        button{
            color: var(--font-color);
        }
    }
`
export const NavBar = styled.div`
    width: 100%;
    height: 2rem;
    background: var(--background-color);
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    .navBar{
        display: flex;
        flex: 1;
        align-items: center;
        height: 100%;
        overflow-x: auto;// x轴滚动
        white-space:nowrap;// 不换行
        &::-webkit-scrollbar{
            display: none; // 去除滚动条
        }
    }
    .moreClassify{
        display: flex;
        width: 2rem;
        height: 100%;
        /* background: red; */
        justify-content: center;
        align-items: center;
        line-height: 2rem;
        i{
            font-size: 28px;
            color: var(--font-color);
        }
    }
`
export const NavItem = styled.div`
    height: 2rem;
    display: flex;
    margin: 0.5rem;
    justify-content: center;
    align-items: center;
    /* position: relative; */
    a{
        /* margin: 0.5rem; */
        /* height: 100%; */
        /* display: flex; */
        font-size: 0.7rem;
        color: var(--font-color);
        position: relative;
        span{
            height: 1.1rem;
        }
        &.active {
            font-size: 0.8rem;
            /* position: relative; */
            span {
                display: flex;
                font-weight: 700;
                color: ${style["theme-color"]};
            }
        }
        &.active::after
            {
                content: "";
                background-color: ${style["theme-color"]};
                width:0.7rem;
                height: 0.18rem;
                border-radius: 0.5rem;
                position: absolute;
                bottom: -0.1rem;
                left: 0;
                right: 0;
                margin: 0 auto;
            }
    }
`
export const Content = styled.div`
    position: fixed;
    top: 4.2rem;
    left: 0;
    bottom: 2.5rem;
    width: 100%;
    /* background: green; */
`