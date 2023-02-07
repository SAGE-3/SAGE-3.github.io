"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(3117),r=(a(7294),a(3905));const n={},o="Overall",l={unversionedId:"wiki/Architecture",id:"wiki/Architecture",title:"Overall",description:"Simplified View",source:"@site/docs/wiki/Architecture.md",sourceDirName:"wiki",slug:"/wiki/Architecture",permalink:"/docs/wiki/Architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wiki/Architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application-Development",permalink:"/docs/wiki/Application-Development"},next:{title:"Home",permalink:"/docs/wiki/Home"}},s={},p=[{value:"Simplified View",id:"simplified-view",level:2},{value:"Detailed View",id:"detailed-view",level:2},{value:"Homebase",id:"homebase",level:2},{value:"Node",id:"node",level:3},{value:"SAGEBase",id:"sagebase",level:3},{value:"API/Routes",id:"apiroutes",level:3},{value:"Asset Manager",id:"asset-manager",level:3},{value:"Redis",id:"redis",level:2},{value:"Foresight",id:"foresight",level:2},{value:"JupterLab",id:"jupterlab",level:2},{value:"Electron",id:"electron",level:2},{value:"Webapp",id:"webapp",level:2},{value:"HTTP/WS",id:"httpws",level:3},{value:"Stores",id:"stores",level:3},{value:"Components",id:"components",level:3},{value:"AI",id:"ai",level:2},{value:"OAuth",id:"oauth",level:2},{value:"Twilio",id:"twilio",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overall"},"Overall"),(0,r.kt)("h2",{id:"simplified-view"},"Simplified View"),(0,r.kt)("p",null,"SAGE3 utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/"},"NodeJs")," as the server-side platform, ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React")," as a single page application frontend, and ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io"},"Redis")," as the real time in-memory database. Redis is known for its performance and scalability, making it an ideal choice for realtime applications like SAGE3. NodeJs is used to serve the React web application and provide a simple and intuitive API to access the database through an interface called SAGEBase. SAGEBase utilizes REDIS as a non-relational database and stores data as JSON-like documents in collections. These design choices provide a flexible and scalable solution for managing data, with fast and efficient access to data stored in the database. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/19752298/217091923-2c915569-c375-4650-9014-91862ff0fe1f.png",title:"arch-simple"})),(0,r.kt)("h2",{id:"detailed-view"},"Detailed View"),(0,r.kt)("p",null,"Within the SAGE3 architecture we have 3 core components. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Homebase")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NodeJs server that manages the communication between the server and clients.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"HTTP/Websocket")," : Serves the Webapp to clients, provides API endpoints using Express.js, and a websocket channel for data subscriptions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"SAGEBase")," : Redis database interface layer that manages SAGE3's state and provides a simplified API for storing JSON documents in collections within Redis. Handles authentication through OAuth providers using [Passport](https://www.passportjs.org)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"Asset Manager")," : Handles file processing for various types and provides a file upload endpoint for the SAGE3 server."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Webapp")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React Web Application",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"HTTP/Websocket")," : Communication between the client and the server. Handles sending CRUD operations to the JSON documents stored on the server. Manages subscriptions to collections or documents on the server using web sockets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"Stores")," : [Zustand](https://github.com/pmndrs/zustand) stores that manage the state of SAGE3 throughout the React application.  These are singleton stores that all the various React components interface with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"Components")," : React functional components that structure the SAGE3 GUI. Components only communicate with the Zustand stores or various React hooks to interact with SAGE3's state."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Foresight")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Python AI Functionality ")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/19752298/217131814-a521d54f-78d5-4301-a82f-98b5065f5e6c.png",title:"arch-detailed"})),(0,r.kt)("h1",{id:"backend"},"Backend"),(0,r.kt)("h2",{id:"homebase"},"Homebase"),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("h3",{id:"sagebase"},"SAGEBase"),(0,r.kt)("h3",{id:"apiroutes"},"API/Routes"),(0,r.kt)("h3",{id:"asset-manager"},"Asset Manager"),(0,r.kt)("h2",{id:"redis"},"Redis"),(0,r.kt)("h2",{id:"foresight"},"Foresight"),(0,r.kt)("h2",{id:"jupterlab"},"JupterLab"),(0,r.kt)("h1",{id:"frontend"},"Frontend"),(0,r.kt)("h2",{id:"electron"},"Electron"),(0,r.kt)("h2",{id:"webapp"},"Webapp"),(0,r.kt)("h3",{id:"httpws"},"HTTP/WS"),(0,r.kt)("h3",{id:"stores"},"Stores"),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("h1",{id:"cloud-services"},"Cloud Services"),(0,r.kt)("h2",{id:"ai"},"AI"),(0,r.kt)("h2",{id:"oauth"},"OAuth"),(0,r.kt)("h2",{id:"twilio"},"Twilio"))}u.isMDXComponent=!0}}]);