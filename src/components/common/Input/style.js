import styled from "styled-components"
import style from '@/assets/global-style'

export const InputWrapper = styled.div`
    display: flex;
    /* background: red; */
    margin: 0 auto;
    width: 90%;
    height: 1rem;
    position: relative;
    align-items: center;
    input{
        height: 1rem;
        width: 100%;
        border-radius: 0.6rem;
        background: ${style["input-background-color"]};
        border: 0;
        ::placeholder{
            padding-left: 15%;
            font-size: 0.7rem;
        }
    }
    i{
        font-size: 0.8rem;
        color: black;
    }
    .icon-search{
        position: absolute;
        /* margin-left: 1%; */
    }
    .icon-saoma{
        position: absolute;
        margin-left: 85%;
    }
    
`