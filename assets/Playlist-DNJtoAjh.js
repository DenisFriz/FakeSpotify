import{c as j,i as _,k as u,j as s,S as i,h as p}from"./index-LNqDGMrS.js";import{g as v}from"./getTimeFromMs-CvwRTgYM.js";import{g as w}from"./getAuthors-Cz1YSSqB.js";const N=()=>s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"skeleton__list",children:[s.jsx(i,{width:185,height:185,borderRadius:5}),s.jsx(i,{width:500,height:165})]}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10}),s.jsx(i,{width:"100%",height:40,marginBottom:10})]}),f=()=>{const{playlistId:n}=j(),{data:t,isLoading:d,isError:o}=_(n),g=u();if(d)return s.jsx(N,{});if(!t||o)throw new Error("An error occurred while loading playlist page.");const x=a=>{const e={title:a.track.album.name,track_name:a.track.album.name,names_authors:w(a.track.artists),img:a.track.album.images[1].url,isShow:!0};g(p(e))};return s.jsxs("div",{className:"playlist",children:[s.jsx("div",{className:"playlist__header",children:s.jsxs("div",{className:"playlist__wrapper",children:[s.jsx("img",{className:"playlist__img",src:t.images[0].url,alt:""}),s.jsxs("div",{className:"playlist__info",children:[s.jsx("div",{className:"playlist__top",children:"Открытый плейлист"}),s.jsx("div",{className:"playlist__name",children:t.name}),s.jsx("div",{className:"playlist__desc",children:t.description||""}),s.jsx("div",{className:"playlist__footer",children:s.jsxs("span",{className:"playlist__followers",children:[t.followers.total," лайков"]})})]})]})}),s.jsxs("div",{className:"playlist__table-head",children:[s.jsx("div",{children:"#"}),s.jsx("div",{children:"Название"}),s.jsx("div",{children:"Альбом"}),s.jsx("div",{children:"Clock"})]}),t.tracks.items.map((a,e)=>{var l,r,m,c,h;return s.jsxs("div",{className:"music-item",onClick:()=>x(a),children:[s.jsx("div",{className:"music-item__index",children:e+1}),s.jsxs("div",{className:"music-item__main",children:[s.jsx("img",{className:"music-item__img",src:(r=(l=a.track)==null?void 0:l.album.images[1])==null?void 0:r.url,alt:""}),s.jsx("div",{className:"music-item__right",children:s.jsx("div",{className:"music-item__title",children:(m=a.track)==null?void 0:m.album.name})})]}),s.jsx("div",{className:"music-item__name",children:(c=a.track)==null?void 0:c.album.name}),s.jsx("div",{className:"music-item__time",children:v((h=a.track)==null?void 0:h.duration_ms)})]},e)})]})};export{f as default};
