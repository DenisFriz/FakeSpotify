import{b as m,j as s,L as h}from"./index-DyYQMw-g.js";import{H as x}from"./HomeHeader-DiuWo-nS.js";import{R as j,S as o}from"./SkeletonRow-DDbVE3Xp.js";const p=()=>s.jsxs(s.Fragment,{children:[s.jsx(o,{}),s.jsx(o,{}),s.jsx(o,{})]}),_=()=>{const{data:a,isLoading:n,isError:i}=m(["0vw8hbjvLAp3RzW6yFkkMZ","0qz5eVJW0cw59CZAEpTFjs","74OY4qubUIAK5ztKCJL4JK","04vVbSYGntM429RyQmqzbY","4hh0RRhOnxwlFZ6ZvRbYM4"]);if(n)return s.jsx(p,{});if(!a||i)throw new Error("An error occurred while loading podcast page.");const c=e=>{const r=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],t=new Date(e),d=r[t.getMonth()],l=t.getFullYear();return`${d}. ${l} г.`};return s.jsxs("div",{children:[s.jsx(x,{}),s.jsx(j,{title:"Только для тебя",show_text:"Показать все",children:a.episodes.map((e,r)=>s.jsx(h,{to:`/FakeSpotify/episode/${e.id}`,children:s.jsxs("div",{className:"row__item",children:[s.jsx("img",{className:"row__img",src:e.images[0].url,alt:""}),s.jsx("p",{className:"row__name",children:e.name}),s.jsx("p",{className:"row__authors",children:c(e.release_date)}),s.jsx("div",{className:"hover_btn"})]})},r))})]})};export{_ as default};