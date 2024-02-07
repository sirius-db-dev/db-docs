"use strict";(self.webpackChunkdb_dev=self.webpackChunkdb_dev||[]).push([[2256],{4980:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(7624),r=t(2172);const a={id:"many_to_many",sidebar_position:3,description:""},s="\u0421\u0432\u044f\u0437\u044c \u043c\u043d\u043e\u0433\u0438\u0435 \u043a\u043e \u043c\u043d\u043e\u0433\u0438\u043c",o={id:"postgresql/relations/many_to_many",title:"\u0421\u0432\u044f\u0437\u044c \u043c\u043d\u043e\u0433\u0438\u0435 \u043a\u043e \u043c\u043d\u043e\u0433\u0438\u043c",description:"",source:"@site/docs/03.postgresql/01.relations/03.many_to_many.md",sourceDirName:"03.postgresql/01.relations",slug:"/postgresql/relations/many_to_many",permalink:"/db-docs/docs/postgresql/relations/many_to_many",draft:!1,unlisted:!1,editUrl:"https://github.com/sirius-db-dev/db-docs/tree/main/docs/03.postgresql/01.relations/03.many_to_many.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"many_to_many",sidebar_position:3,description:""},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0432\u044f\u0437\u044c \u043e\u0434\u0438\u043d \u043a \u043e\u0434\u043d\u043e\u043c\u0443",permalink:"/db-docs/docs/postgresql/relations/one_to_one"}},d={},l=[];function m(n){const e={br:"br",code:"code",h1:"h1",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u0441\u0432\u044f\u0437\u044c-\u043c\u043d\u043e\u0433\u0438\u0435-\u043a\u043e-\u043c\u043d\u043e\u0433\u0438\u043c",children:"\u0421\u0432\u044f\u0437\u044c \u043c\u043d\u043e\u0433\u0438\u0435 \u043a\u043e \u043c\u043d\u043e\u0433\u0438\u043c"}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u0430\u043d\u044b 2 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0430\u043a\u0442\u0435\u0440 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0438\u043c\u044f, \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u0438 \u0434\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(e.li,{children:"\u0444\u0438\u043b\u044c\u043c \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u0436\u0430\u043d\u0440 \u0438 \u0433\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u0410\u043a\u0442\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0444\u0438\u043b\u044c\u043c\u0430\u0445.",(0,i.jsx)(e.br,{}),"\n","\u0412 \u0444\u0438\u043b\u044c\u043c\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u043a\u0442\u0435\u0440\u043e\u0432."]}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u0430\u043d\u043d\u044b\u043c \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430:"}),"\n",(0,i.jsx)(e.mermaid,{value:'erDiagram\n    actor {\n        int id PK\n        text first_name\n        text last_name\n        date birth_date\n    }\n    film {\n        int id PK\n        text title\n        text genre\n        int year\n    }\n    actor }o..o{ film : ""'}),"\n",(0,i.jsx)(e.p,{children:"\u042d\u0442\u043e\u0439 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0435 \u0432 SQL \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0441\u0432\u044f\u0437\u0438:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"drop table if exists actors, films, film_to_actor cascade;\n\ncreate table actors\n(\n    id         int primary key generated by default as identity,\n    first_name text,\n    last_name  text,\n    birth_date date\n);\n\ncreate table films\n(\n    id    int primary key generated by default as identity,\n    title text,\n    genre text,\n    year  int\n);\n\n-- \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441\u0432\u044f\u0437\u0438 many-to-many\ncreate table film_to_actor\n(\n    actor_id int references actors,\n    film_id  int references films,\n    primary key (actor_id, film_id)\n);\n\ninsert into actors(id, first_name, last_name, birth_date)\nvalues (1, 'Tom', 'Hanks', '1956-07-09'),\n       (2, 'Robert', 'De Niro', '1943-08-17'),\n       (3, 'Al', 'Pacino', '1940-04-25');\n\ninsert into films(id, title, genre, year)\nvalues (1, 'Forrest Gump', 'Drama', 1994),\n       (2, 'The Godfather', 'Crime', 1972),\n       (3, 'The Godfather: Part II', 'Crime', 1974),\n       (4, 'The Irishman', 'Crime', 2019);\n\ninsert into film_to_actor(actor_id, film_id)\nvalues (1, 1),\n       (1, 4),\n       (2, 2),\n       (2, 3),\n       (3, 2),\n       (3, 3),\n       (3, 4);\n\n-- \u0432\u044b\u0432\u043e\u0434 \u0430\u043a\u0442\u0435\u0440\u043e\u0432 \u0438 \u0438\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432\nselect *\nfrom actors a\n         left join film_to_actor fa on a.id = fa.actor_id\n         left join films f on fa.film_id = f.id;\n"})})]})}function c(n={}){const{wrapper:e}={...(0,r.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}}}]);