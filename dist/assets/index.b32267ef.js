import{s as d,a as g,c as b,R as x,u as f,r as p,b as o,F as u,j as e,P as v,d as w,M as y}from"./index.958c47d3.js";const k=d.div`
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
            background: ${g["input-background-color"]};
        }
        i{
            position: absolute;
            font-size: 0.8rem;
            color: black;
            padding-top: 5px;
            padding-left: 5px;
        }
    }
`,N=d.div`
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
`;function S(t){let a=f();const{subscribe:r}=t,{deleteSubscribeItemDispatch:l}=t,[s,n]=p.exports.useState(!1),c=i=>{n(!0),i(!1),h()},m=()=>s&&e(y,{children:e("span",{children:"\u53D6\u6D88\u6210\u529F!"})}),h=()=>{setTimeout(()=>{n(!1)},1500)};return o(u,{children:[m(),o(k,{children:[e("div",{className:"sub-header-L",children:"\u6211\u7684\u8BA2\u9605"}),o("div",{className:"sub-header-input",children:[e("i",{className:"iconfont icon-sousuo"}),e("input",{type:"text",onClick:()=>a("/search")})]})]}),e(N,{children:e("div",{className:"container",children:r.map(i=>o("div",{className:"room-item",children:[o("div",{className:"item-pic",children:[e("span",{className:"pic-classify",children:i.classify}),e("span",{className:"pic-name",children:i.name}),o("span",{className:"pic-popularity",children:[e("i",{className:"iconfont icon-redupaixu"}),i.popularity,"\u4E07"]}),e("div",{className:"pic",children:e("img",{src:i.coverImg,alt:""})})]}),o("div",{className:"item-desc",children:[e("span",{children:i.title}),e(z,{item:i,deleteSubscribeItemDispatch:l,showDeleteSubModal:c})]})]},i.id))})})]})}const z=({item:t,showDeleteSubModal:a,deleteSubscribeItemDispatch:r})=>{const[l,s]=p.exports.useState(!1),n=c=>{r(c),a(s)};return o(u,{children:[e("i",{className:"iconfont icon-gengduo",onClick:()=>{s(!0)}}),e(v,{visible:l,onMaskClick:()=>{s(!1)},bodyStyle:{height:"100px"},children:e("div",{style:{height:"50px",width:"100%",fontSize:"1rem",textAlign:"center",lineHeight:"50px"},children:e("button",{onClick:()=>n(t.id),style:{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"#ffa200"},children:"\u53D6\u6D88\u8BA2\u9605"})})})]})},D=t=>({subscribe:t.recommend.subscribe}),C=t=>({deleteSubscribeItemDispatch(a){t(w(a))}});var P=b(D,C)(x.memo(S));export{P as default};
