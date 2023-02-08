"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(3117),r=(a(7294),a(3905));const i={},o="Overall",s={unversionedId:"wiki/Architecture",id:"wiki/Architecture",title:"Overall",description:"Overview",source:"@site/docs/wiki/Architecture.md",sourceDirName:"wiki",slug:"/wiki/Architecture",permalink:"/docs/wiki/Architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wiki/Architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application-Development",permalink:"/docs/wiki/Application-Development"},next:{title:"Home",permalink:"/docs/wiki/Home"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Homebase",id:"homebase",level:2},{value:"Node",id:"node",level:3},{value:"SAGEBase",id:"sagebase",level:3},{value:"API/Routes",id:"apiroutes",level:3},{value:"Asset Manager",id:"asset-manager",level:3},{value:"Redis",id:"redis",level:2},{value:"Foresight",id:"foresight",level:2},{value:"JupterLab",id:"jupterlab",level:2},{value:"Electron",id:"electron",level:2},{value:"Webapp",id:"webapp",level:2},{value:"HTTP/WS",id:"httpws",level:3},{value:"Stores",id:"stores",level:3},{value:"Components",id:"components",level:3},{value:"AI",id:"ai",level:2},{value:"OAuth",id:"oauth",level:2},{value:"Twilio",id:"twilio",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overall"},"Overall"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"SAGE3 utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/"},"NodeJs")," as the server-side platform, ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React")," as a single page application frontend, and ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io"},"Redis")," as the real time in-memory database. Redis is known for its performance and scalability, making it an ideal choice for realtime applications like SAGE3. NodeJs is used to serve the React web application and provide a simple and intuitive API to access the database through an interface called SAGEBase. SAGEBase utilizes REDIS as a non-relational database and stores data as JSON-like documents in collections. These design choices provide a flexible and scalable solution for managing data, with fast and efficient access to data stored in the database. "),(0,r.kt)("p",null,"Within the SAGE3 codebase we have 3 core components. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Homebase")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NodeJs server that manages the communication between the server and clients.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"HTTP/Websocket")," : Serves the Webapp to clients, provides API endpoints using Express.js, and a websocket channel for data subscriptions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"SAGEBase")," : Redis database interface layer that manages SAGE3's state and provides a simplified API for storing JSON documents in collections within Redis. Handles authentication through OAuth providers using [Passport](https://www.passportjs.org)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"Asset Manager")," : Handles file processing for various types and provides a file upload endpoint for the SAGE3 server."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Webapp")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React Web Application",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"HTTP/Websocket")," : Communication between the client and the server. Handles sending CRUD operations to the JSON documents stored on the server. Manages subscriptions to collections or documents on the server using web sockets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"Stores")," : [Zustand](https://github.com/pmndrs/zustand) stores that manage the state of SAGE3 throughout the React application.  These are singleton stores that all the various React components interface with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"Components")," : React functional components that structure the SAGE3 GUI. Components only communicate with the Zustand stores or various React hooks to interact with SAGE3's state."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Foresight")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Python AI Functionality ")))),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/217131814-a521d54f-78d5-4301-a82f-98b5065f5e6c.png",alt:"arch-detailed",height:"550"}),(0,r.kt)("h1",{id:"backend"},"Backend"),(0,r.kt)("h2",{id:"homebase"},"Homebase"),(0,r.kt)("p",null,"Homebase is the backend server of SAGE3 and serves as a communication bridge between the clients and the database. It also handles asset uploads and serves the React-based Webapp. "),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("p",null,"Homebase is built using NodeJs and Express, and is written in Typescript. "),(0,r.kt)("h3",{id:"sagebase"},"SAGEBase"),(0,r.kt)("p",null,"SAGEBase is a database interface for Redis developed for SAGE3. It leverages Redis to create a fast a NoSQL document-oriented database. SAGEbase allows developers to create Collections and store Documents within them. Documents within SAGEBase are JSON objects. Documents and Collections support CRUD style operations and also support subscriptions for Document EVENTS: 'CREATE', 'UPDATE', 'DELETE'. "),(0,r.kt)("p",null,"A Car Collection example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Create a SAGEBase configuration\nconst sbConfig: SAGEBaseConfig = {\n    projectName: 'Automobiles', // Name of the project. Can use the same Redis database for multiple SAGEBase projects.\n    redisUrl: 'redis://localhost:6379', // URL of the Redis server.\n  };\n\n// Initialize SAGEBase\nawait SAGEBase.init(sbConfig);\n\n// Create a Car type. This defines the Car Document schema.\ntype Car = {\n  make: string;\n  model: string;\n  year: number;\n};\n\n// Create a Car Collection using SAGEBase.\n// 'cars' is the name of the collection.\n// The second parameter are the fields to index so they are queryable. So this collection only indexes 'model' and 'year'\nconst carCollection = await SAGEBase.Database.collection<Car>('cars', { model: '', year: 0 });\n\n// Subscribe to Document EVENTS ('CREATE', 'UPDATE', 'DELETE') on the Car Collection.\ncarCollection.subscribe((message) => {\n  // This would be called after the code below runs.\n  // 1. First Event message would be CREATE and contain the new Document state.\n  // 2. Second Event message would be UPDATE and contain the updated Document state.\n  // 3. Third Event message would be DELETE\n})\n\n// CREATE a new Car Document in the Collection. This returns a REF to the Document in the database.\nconst wrxRef = await carCollection.addDoc({ make: 'Subaru', model: 'WRX', year: 2019 }, '');\n\n// Read the Document from the database.\nconst wrxDoc = await wrxRef.read();\n\n// UPDATE the Document\nawait wrxRef.update({year: 2020});\n\n// DELETE the Document\nawait wrxRef.delete();\n")),(0,r.kt)("p",null,"Collections and Documents are organized within Redis using the standard Redis prefix naming conventions. For the previous example the WRX Car would be stored with this Redis key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//PROJECT_NAME:MODULE:COLLECTION_NAME:DOC_UID\nAutoTown:DB:cars:ec3dcbe8-8e0f-4fa8-89e1-b8c9663eae64\n")),(0,r.kt)("p",null,"Module refers to the SAGEBase module, in this case the Database ",(0,r.kt)("inlineCode",{parentName:"p"},"DB")," module. Each Document is created with a unique UID automatically using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/uuid"},"UUID")," package. "),(0,r.kt)("h3",{id:"apiroutes"},"API/Routes"),(0,r.kt)("h3",{id:"asset-manager"},"Asset Manager"),(0,r.kt)("h2",{id:"redis"},"Redis"),(0,r.kt)("h2",{id:"foresight"},"Foresight"),(0,r.kt)("h2",{id:"jupterlab"},"JupterLab"),(0,r.kt)("h1",{id:"frontend"},"Frontend"),(0,r.kt)("h2",{id:"electron"},"Electron"),(0,r.kt)("h2",{id:"webapp"},"Webapp"),(0,r.kt)("h3",{id:"httpws"},"HTTP/WS"),(0,r.kt)("h3",{id:"stores"},"Stores"),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("h1",{id:"cloud-services"},"Cloud Services"),(0,r.kt)("h2",{id:"ai"},"AI"),(0,r.kt)("h2",{id:"oauth"},"OAuth"),(0,r.kt)("h2",{id:"twilio"},"Twilio"))}u.isMDXComponent=!0}}]);