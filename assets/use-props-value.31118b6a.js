import{r as o}from"./index.e83f1881.js";function l(n){var e=o.exports.useRef(n);e.current=o.exports.useMemo(function(){return n},[n]);var r=o.exports.useRef();return r.current||(r.current=function(){for(var u=[],t=0;t<arguments.length;t++)u[t]=arguments[t];return e.current.apply(this,u)}),r.current}var d=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var u=r.call(n),t,a=[],s;try{for(;(e===void 0||e-- >0)&&!(t=u.next()).done;)a.push(t.value)}catch(c){s={error:c}}finally{try{t&&!t.done&&(r=u.return)&&r.call(u)}finally{if(s)throw s.error}}return a},p=function(){var e=d(o.exports.useState({}),2),r=e[1];return o.exports.useCallback(function(){return r({})},[])},v=p;function h(n){const{value:e,defaultValue:r,onChange:u}=n,t=v(),a=o.exports.useRef(e!==void 0?e:r);e!==void 0&&(a.current=e);const s=l((c,i=!1)=>{const f=typeof c=="function"?c(a.current):c;if(!(!i&&f===a.current))return a.current=f,t(),u==null?void 0:u(f)});return[a.current,s]}export{l as a,h as u};
