import styled from 'styled-components'

export const RecommendContent = styled.div`
    position: fixed;
    top: 4.2rem;
    left: 0;
    bottom: 2.5rem;
    width: 100%;
    /* overflow-y: scroll; */
    /* z-index: 100; */
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

export const Modal = styled.div`
    /* position: static; */
    position: fixed;
    z-index: 999;
    width: 200px;
    height: 100px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /* left: 50px; */
    /* top: 50px; */
    /* margin-top: 50px; */
    font-size: 16px;
    color: white;
    border-radius: 6px;
    background-color: black;
    opacity: 0.6;
    margin: auto;
    display: flex;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
`