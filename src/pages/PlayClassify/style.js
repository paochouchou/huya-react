import styled from "styled-components"
import style from '@/assets/global-style'

export const Container = styled.div`
    position: fixed;
    background: red;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    /* height: 100vh; */
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
    /* CSSTransition 过度类型给children */
    &.fly-enter,&.fly-appear{
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%,0,0);
    }
    &.fly-enter-active,&.fly-apply-active{
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0,0,0);
    }
    &.fly-exit{
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    &.fly-exit-active{
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%,0,0);
    }
    .tabs-classify{
        margin-top: 0.5rem;
        background: var(--background-color);
        color: var(--font-color);
        .adm-tabs-tab-active {
            color:${style["theme-color"]};
        }
        .adm-tabs {
            --active-line-color: ${style["theme-color"]};
        }
    }
    .common-wrapper{
        background: var(--background-color);
        color: var(--font-color);
        overflow: hidden;
        ul{
            overflow: hidden;
            padding: 0 0.25rem 0.5rem 0.25rem;
        }
        li{
            float: left;
            margin-left: 0.5rem;
            margin-top: 0.5rem;
            .common-item{
                position: relative;
                border: 1px solid black;
                border-radius: 1.1rem;
                height: 1.1rem;
                line-height: 1.1rem;
                font-size: 0.6rem;
                span{
                    margin: 0 0.8rem;
                }
                i{  
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    line-height: 15px;
                    font-size: 15px;
                    right: 0px;
                    top: -4px;
                    background: gray;
                    color: white;
                    vertical-align: middle;
                    z-index: 1;
                    border-radius: 50%;
                }
            }
        }
    }
    
`
export const ClassifyHeaderWrapper = styled.div`
    width: 100%;
    height: 2.2rem;
    display: flex;
    align-items: center;
    background: var(--background-color);
    color: var(--font-color);
    i{
        width: 2rem;
        font-size: 0.9rem;
        color: var(--font-color);
        display: flex;
        justify-content: center;
    }
    .header-center{
        flex: 1;
        color: var(--font-color);
        font-size: 0.8rem;
    }
    span{
        display: flex;
        width: 2rem;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;
        color: var(--font-color);
    }
`