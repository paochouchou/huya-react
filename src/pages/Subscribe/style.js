import styled from "styled-components"
import style from '@/assets/global-style'

export const SubscribeWrapper =styled.div`
    width: 100%;
    height: 2.2rem;
    display: flex;
    align-items: center;
    background: var(--background-color);
    color: var(--font-color);
    .sub-header-L{
        display: flex;
        flex: 1;
        margin-left: 0.5rem;
    }
    .sub-header-input{
        display: flex;
        position: relative;
        input{
            width: 80px;
            height: 1rem;
            margin-right: 0.5rem;
            border-radius: 0.6rem;
            background: ${style["input-background-color"]};
        }
        i{
            position: absolute;
            font-size: 0.8rem;
            color: black;
            padding-top: 5px;
            padding-left: 5px;
        }
    }
`

export const SubContent = styled.div`
    position: fixed;
    top: 2.2rem;
    left: 0;
    bottom: 2.5rem;
    width: 100%;
    overflow-y: scroll;
    padding-top: 0.5rem;
    .container{
        display: flex;
        flex-wrap: wrap;
    }
    .room-item{
        width: 47%;
        margin-left: 2%;
        margin-bottom: 0.5rem;
    }
    .item-pic{
        position: relative;
    }
    .pic-classify{
        font-size: 0.6rem;
        position: absolute;
        z-index: 1;
        right: 3px;
        top: 3px;
        padding: 2px 6px;
        vertical-align: middle;
        color: #eee;
        background: rgba(44,49,54,0.7);
    }
    .pic-name{
        font-size: 0.6rem;
        position: absolute;
        z-index: 1;
        left: 3px;
        bottom: 3px;
        padding: 2px 6px;
        vertical-align: middle;
        color: white;
        font-weight: 600;
        /* background: rgba(44,49,54,0.7); */
    }
    .pic-popularity{
        font-size: 0.6rem;
        position: absolute;
        z-index: 1;
        right: 3px;
        bottom: 3px;
        padding: 2px 6px;
        vertical-align: middle;
        color: white;
        font-weight: 600;
        /* background: rgba(44,49,54,0.7); */
    }
    .pic{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 56.25%;
        overflow: hidden;
        img{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    }
    .item-desc{
        line-height: 1.2rem;
        display: flex;
        color: #000;
        align-items: center;
        span{
            flex: 1;
            font-size: 0.7rem;
            text-align: left;
            padding: 0.3rem 3px 0 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        i{
            display: flex;
            margin-right: 3px;
            font-size: 0.9rem;
            padding-top: 5px;
        }
    }
`