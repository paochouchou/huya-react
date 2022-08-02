import styled from "styled-components"
import style from '@/assets/global-style'

export const RecommendHotWrapper = styled.div`
    height: 100%;
    background: var(--background-color);
    border-top: 1px solid #eee;
    /* color: var(--font-color); */
    .list-box{
        height: 100%;
        overflow-y: scroll;
    }
    a{
        color: var(--font-color);
    }
    ul{
        overflow: hidden;
        /* display: inline-block; */
        padding-bottom: 30px;
        .hot-li{
            float: left;
            margin-top: 1rem;
            width: 25%;
            height: 70px;
        }
        .hot-a{
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            color: var(--font-color);
            .hot-desc{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                font-size: 0.6rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .hot-item{
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            img{
                display: block;
                margin: 0 auto;
                width: 50%;
            }
            span{
                font-size: 0.6rem;
                position: absolute;
                top: 3px;
                right: 6px;
                background: rgba(44,49,54,0.7);
                color: #eee;
                vertical-align: middle;
                z-index: 1;
            }
        }
    }
`