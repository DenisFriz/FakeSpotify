import{c as x,e as N,f as v,r as w,g as b,j as s,S as t,h as k}from"./index-LNqDGMrS.js";import{g as n}from"./getTimeFromMs-CvwRTgYM.js";import{g as h}from"./getAuthors-Cz1YSSqB.js";const p=()=>s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"skeleton__list",children:[s.jsx(t,{width:185,height:185,borderRadius:5}),s.jsx(t,{width:500,height:165})]}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10}),s.jsx(t,{width:"100%",height:40,marginBottom:10})]}),C=()=>{const{artistId:r}=x(),{data:m,isLoading:o,isError:d}=N(r),{data:e}=v(r),[c,u]=w.useState(!1),g=b();if(o)return s.jsx(p,{});if(!m||!e)return null;if(!m||d)throw new Error("An error occurred while loading artist page.");const l=({title:a,track_name:i,names_authors:_,img:j})=>{g(k({title:a,track_name:i,names_authors:_,img:j,isShow:!0}))};return s.jsxs("div",{className:"artist",children:[s.jsxs("div",{className:"artist__header",children:[s.jsx("img",{className:"artist__img",src:m.images[0].url,alt:""}),s.jsxs("div",{className:"artist__info",children:[s.jsx("div",{className:"artist__confirm",children:"Подтвержденный исполнитель"}),s.jsx("div",{className:"artist__name",children:m.name})]})]}),c?e.tracks.map((a,i)=>s.jsxs("div",{className:"music-item",onClick:()=>l({title:a.album.name,track_name:a.album.name,names_authors:h(e.tracks[0].artists),img:a.album.images[1].url}),children:[s.jsx("div",{className:"music-item__index",children:i+1}),s.jsxs("div",{className:"music-item__main",children:[s.jsx("img",{className:"music-item__img",src:a.album.images[1].url,alt:""}),s.jsx("div",{className:"music-item__right",children:s.jsx("div",{className:"music-item__title",children:a.album.name})})]}),s.jsx("div",{className:"music-item__name",children:a.album.name}),s.jsx("div",{className:"music-item__time",children:n(a.duration_ms)})]},i)):Array.from({length:5},(a,i)=>s.jsxs("div",{className:"music-item",onClick:()=>l({title:e.tracks[i].album.name,track_name:e.tracks[i].album.name,names_authors:h(e.tracks[0].artists),img:e.tracks[i].album.images[1].url}),children:[s.jsx("div",{className:"music-item__index",children:i+1}),s.jsxs("div",{className:"music-item__main",children:[s.jsx("img",{className:"music-item__img",src:e.tracks[i].album.images[1].url,alt:""}),s.jsx("div",{className:"music-item__right",children:s.jsx("div",{className:"music-item__title",children:e.tracks[i].album.name})})]}),s.jsx("div",{className:"music-item__name",children:e.tracks[i].album.name}),s.jsxs("div",{className:"music-item__time",children:[" ",n(e.tracks[i].duration_ms)]})]},i)),s.jsx("button",{className:"artist__show-more-btn",onClick:()=>u(a=>!a),children:c?"Свернуть":"Еще"})]})};export{C as default};
