import styled from 'styled-components'

export const ShortcutWrapper = styled.div`
    position: absolute;
    top: 2.2rem;
    bottom: 0;
    width: 100%;
    background: var(--background-color);
    display: ${props => props.show? "" : "none"};
    .short-header{
        color: var(--font-color);
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    .search-list{
        margin-top: 0.5rem;
        color: var(--font-color);
    }
    .list-no-item{
        height: 2.5rem;
        width: 100%;
        padding-left: 1rem;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
    }
    .list-no-item:first-child span:first-child{
        width: 1rem;
        height: 1rem;
        background: #f04230;
    }
    .list-no-item span:first-child{
        width: 1rem;
        height: 1rem;
    }
    .list-no-item:nth-child(2) span:first-child{
        width: 1rem;
        height: 1rem;
        background: #ffa200;
    }
    .list-no-item:nth-child(3) span:first-child{
        width: 1rem;
        height: 1rem;
        background: #fc0;
    }
    
    .item-name{
        padding-left: 20px;
    }
`