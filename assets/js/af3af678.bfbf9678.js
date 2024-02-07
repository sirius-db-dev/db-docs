"use strict";(self.webpackChunkdb_dev=self.webpackChunkdb_dev||[]).push([[8580],{6352:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(7624),i=n(2172);const o={id:"intro",sidebar_position:1,description:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 docker"},d="\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",c={id:"docker/intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 docker",source:"@site/docs/02.docker/01.intro.md",sourceDirName:"02.docker",slug:"/docker/intro",permalink:"/db-docs/docs/docker/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/sirius-db-dev/db-docs/tree/main/docs/02.docker/01.intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,description:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 docker"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/db-docs/docs/category/docker"},next:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",permalink:"/db-docs/docs/docker/install"}},t={},l=[];function a(e){const r={h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Docker Logo",src:n(1028).c+"",width:"634",height:"526"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Docker"})," - \u044d\u0442\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u0445. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u0438 \u0432\u0441\u0435 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0435\u0434\u0438\u043d\u0443\u044e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u0443\u044e ",(0,s.jsx)(r.strong,{children:"docker image"}),". \u042d\u043a\u0437\u0435\u043c\u043b\u044f\u0440\u044b docker image - ",(0,s.jsx)(r.strong,{children:"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b"}),",\n\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0435\u0433\u043a\u043e\u0432\u0435\u0441\u043d\u044b\u043c\u0438 \u0438 \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u043b\u044e\u0431\u043e\u0439 \u0441\u0440\u0435\u0434\u0435 \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438\n\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0441\u0435\u0445 \u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"docker image"}),": \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u043d\u0438\u043c\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0438 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u043c\u0438.\nDocker image \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u043c \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440"}),": \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 docker image'\u0430. \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b \u043e\u0442 \u0441\u0440\u0435\u0434\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f,\n\u043c\u043e\u0433\u0443\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430."]}),"\n"]}),"\n"]})]})}function k(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1028:(e,r,n)=>{n.d(r,{c:()=>s});const s=n.p+"assets/images/docker-logo-214251bc4fe444606345648a38c0d2fa.png"}}]);