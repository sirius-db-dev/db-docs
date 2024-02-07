"use strict";(self.webpackChunkdb_dev=self.webpackChunkdb_dev||[]).push([[9280],{2292:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var r=s(7624),d=s(2172);const l={id:"install",sidebar_position:2,description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 docker"},i="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",c={id:"docker/install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 docker",source:"@site/docs/02.docker/02.install.md",sourceDirName:"02.docker",slug:"/docker/install",permalink:"/db-docs/docs/docker/install",draft:!1,unlisted:!1,editUrl:"https://github.com/sirius-db-dev/db-docs/tree/main/docs/02.docker/02.install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"install",sidebar_position:2,description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 docker"},sidebar:"tutorialSidebar",previous:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",permalink:"/db-docs/docs/docker/intro"},next:{title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438",permalink:"/db-docs/docs/docker/manage_containers"}},o={},t=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 docker \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e bash \u0441\u043a\u0440\u0438\u043f\u0442\u0430",id:"script-installation",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0440\u0443\u0447\u043d\u0443\u044e",id:"manual-installation",level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438",id:"check-version",level:2},{value:"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432",id:"grant-rights",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438",id:"network",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"troubleshooting",level:2},{value:"linux",id:"linux",level:3},{value:"windows",id:"windows",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c ",(0,r.jsx)(n.strong,{children:"docker"})," \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(n.strong,{children:"apt"})," \u0438\u043b\u0438 ",(0,r.jsx)(n.strong,{children:"snap"}),". \u041f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u044d\u0442\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438 \u0432 \u0440\u0430\u0431\u043e\u0442\u0435 ",(0,r.jsx)(n.strong,{children:"docker"})," \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c\n\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u043e\u0436\u043d\u043e \u0440\u0435\u0448\u0430\u0442\u044c."]})}),"\n",(0,r.jsx)(n.h2,{id:"script-installation",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 docker \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e bash \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh ./get-docker.sh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"manual-installation",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0440\u0443\u0447\u043d\u0443\u044e"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u0441\u043a\u0440\u0438\u043f\u0442 \u043d\u0435 \u0441\u043c\u043e\u0433 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043e\u0442\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository",children:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0435\u0439"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"check-version",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438\u0441\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 ",(0,r.jsx)(n.strong,{children:"docker"})," \u0438 ",(0,r.jsx)(n.strong,{children:"docker compose"}),"."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0412\u0435\u0440\u0441\u0438\u044f ",(0,r.jsx)(n.strong,{children:"docker"})," \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043d\u0438\u0436\u0435 ",(0,r.jsx)(n.strong,{children:"25.0.0"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker --version\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"> Docker version 25.0.0"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0412\u0435\u0440\u0441\u0438\u044f ",(0,r.jsx)(n.strong,{children:"docker compose"})," \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043d\u0438\u0436\u0435 ",(0,r.jsx)(n.strong,{children:"2.24.0"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker compose version\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"> Docker Compose version v2.24.0"})}),"\n",(0,r.jsx)(n.h2,{id:"grant-rights",children:"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f"})," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,r.jsx)(n.strong,{children:"docker"})," \u0441 ",(0,r.jsx)(n.strong,{children:"root"})," \u043f\u0440\u0430\u0432\u0430\u043c\u0438. ",(0,r.jsx)(n.strong,{children:"docker image"})," \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043a\u0430\u043a \u0431\u0430\u0433\u0438, \u0442\u0430\u043a \u0438\n\u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u043a\u043e\u0434, \u0437\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044e \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043f\u043e\u0440\u0447\u0435 \u0438 \u0443\u0442\u0435\u0447\u043a\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo groupadd docker\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo usermod -aG docker $USER\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"newgrp docker\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0417\u0430\u0442\u0435\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0431\u0443\u0442 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0447\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f ",(0,r.jsx)(n.strong,{children:"\u0411\u0415\u0417(!!!) \u0440\u0443\u0442 \u043f\u0440\u0430\u0432"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run --rm hello-world\n"})}),"\n",(0,r.jsx)(n.h2,{id:"network",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 ",(0,r.jsx)(n.strong,{children:"linux"}),"-based OS. \u0412 ",(0,r.jsx)(n.strong,{children:"Mac"})," \u0438 ",(0,r.jsx)(n.strong,{children:"Windows"})," \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e."]})}),"\n",(0,r.jsx)(n.p,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u0435\u0442\u0438 \u0434\u043e\u043a\u0435\u0440\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0430 \u043d\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432\u0430\u043b\u0430 \u0441 \u0430\u0434\u0440\u0435\u0441\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 wi-fi \u0421\u0438\u0440\u0438\u0443\u0441\u0430. \u0418\u043d\u0430\u0447\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo mkdir /etc/docker &> /dev/null\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo \'{\n  "live-restore": true,\n  "bip": "172.20.0.1/16",\n  "default-address-pools": [{\n    "base": "172.20.0.0/8",\n    "size": 16\n  }]\n}\n\' | sudo tee /etc/docker/daemon.json\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:'"bip": "172.20.0.1/16"'})," - \u044d\u0442\u043e \u0441\u043c\u0435\u043d\u0430 \u043f\u043e\u0434\u0441\u0435\u0442\u0438 \u0434\u043e\u043a\u0435\u0440\u0430"]}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u0443 \u0434\u043e\u043a\u0435\u0440\u0430 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438,\n\u0442\u0430\u043c \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d ",(0,r.jsx)(n.code,{children:"172.20.0.0/16"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo service docker restart\ndocker network inspect bridge\n"})}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"}),"\n",(0,r.jsxs)(n.p,{children:["\u041d\u0430 ",(0,r.jsx)(n.strong,{children:"linux"})," \u0438 ",(0,r.jsx)(n.strong,{children:"windows"})," \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 ",(0,r.jsx)(n.strong,{children:"docker"}),"\n\u0431\u044b\u043b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(n.strong,{children:"apt"})," \u0438\u043b\u0438 ",(0,r.jsx)(n.strong,{children:"snap"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"linux",children:"linux"}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0435\u0441\u0442\u044c \u043b\u0438 docker \u043f\u0430\u043a\u0435\u0442\u044b \u0432 snap:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"snap list --all | grep docker\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442\u044b \u0435\u0441\u0442\u044c, \u043d\u0443\u0436\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043d\u0438\u0445:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"snap remove docker\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0417\u0430\u0442\u0435\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u0448\u0430\u0433\u0438 \u0438\u0437 \u0441\u0442\u0430\u0442\u044c\u0438\n",(0,r.jsx)(n.a,{href:"https://www.golinuxcloud.com/ubuntu-uninstall-docker/",children:"completely uninstall docker"}),",\n\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u0438 \u0437\u0430\u043d\u043e\u0432\u043e \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",(0,r.jsx)(n.strong,{children:"docker"})," \u0447\u0435\u0440\u0435\u0437 \u0441\u043a\u0440\u0438\u043f\u0442."]}),"\n",(0,r.jsx)(n.h3,{id:"windows",children:"windows"}),"\n",(0,r.jsx)(n.p,{children:"\ud83e\udd14"})]})}function h(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);