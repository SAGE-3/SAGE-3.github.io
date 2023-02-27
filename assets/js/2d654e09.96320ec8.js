"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(3117),i=(n(7294),n(3905));const o={sidebar_position:4},r="Application Development",l={unversionedId:"Application-Development",id:"Application-Development",title:"Application Development",description:"Getting Started",source:"@site/docs/Application-Development.md",sourceDirName:".",slug:"/Application-Development",permalink:"/docs/Application-Development",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Application-Development.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Server Deployment",permalink:"/docs/Server-Deployment"},next:{title:"SAGE3 XR",permalink:"/docs/XR-Integration"}},p={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Plugin Application",id:"plugin-application",level:2},{value:"Webapp",id:"webapp",level:3},{value:"Unity",id:"unity",level:3},{value:"Upload to a SAGE3 Server",id:"upload-to-a-sage3-server",level:3},{value:"Integrated Application",id:"integrated-application",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"application-development"},"Application Development"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Applications within SAGE3 are similar to an Application on an Operating System. Within SAGE3 Applications exist on ",(0,i.kt)("inlineCode",{parentName:"p"},"Boards")," and can be manipulated by various clients. There are two types of Applications: Plugin Applications and Integrated Applications. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Plugin Applications:")," Developed outside of the SAGE3 source code and are uploaded to a SAGE3 server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integrated Applications:")," Developed within the SAGE3 source code.")),(0,i.kt)("p",null,"Plugin Applications allow developers to develop their application however they want. It can be a Vanilla HTML/JS webpage, React App, Angular, Svelt, Vue...any framework is supported. Developers can also use any library they desire without the worry of cross pollution without Applications. With the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sage3/sageplugin")," (optional) you can also sync your applications state across clients."),(0,i.kt)("p",null,"Integrated Applications are developed within the SAGE3 source code and are built/integrated into the bundled SAGE3 Webapp. Integrated applications have more access to SAGE3 features but are also more restricted. "),(0,i.kt)("p",null,"Currently the best way to develop a new app for SAGE3 is to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sage3/sageplugin"},"@sage3/sageplugin")," npm package. This way you don't have to work with the SAGE3 source code and can develop your app in which ever environment of your choosing, we recommend ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev"},"Vite"),". You can also ignore using the @sage3/sageplugin package completely and just develop a vanilla webapp or webpage. "),(0,i.kt)("h2",{id:"plugin-application"},"Plugin Application"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT!!")),(0,i.kt)("p",null,"The one key thing to ensure are imports in your distributed ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," (assets, scripts, styles, etc.) are referenced with relative paths."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instead of ",(0,i.kt)("inlineCode",{parentName:"li"},'<script src="script.js">')),(0,i.kt)("li",{parentName:"ul"},"It has to be relative, ",(0,i.kt)("inlineCode",{parentName:"li"},'<script src="./script.js"/>'))),(0,i.kt)("p",null,"The Vite example here configures this in step 3, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"vite.config.js")," file, so you don't have to worry about it. If you use your own framework you will have to ensure the paths are relative."),(0,i.kt)("h3",{id:"webapp"},"Webapp"),(0,i.kt)("p",null,"You do not have to use the @sage3/sageplugin library, but without it you will not be able to sync state across clients. Using the @sage3/sageplugin library enables developers to leverage SAGE3 to sync state for their Plugin App across clients."),(0,i.kt)("p",null,"To get started you can make your application using which ever framework you desire but we recommend ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev"},"ViteJs")," "),(0,i.kt)("p",null,"Ensure you have NodeJs installed and create a new project with Vite."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new project for you application. I'm using Vanilla (No framework) and Typescript, but you don't have to.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm create vite@latest my-first-sage-app\n> Vanilla \n> Typescript\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Initial Setup")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd my-first-sage-app\nnpm install\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Configure vite by creating a file in the root folder of the project named ",(0,i.kt)("inlineCode",{parentName:"li"},"vite.config.js")," and copy the text below into it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { defineConfig } from "vite";\n\nimport * as packageconfig from "./package.json";\n\nexport default defineConfig({\n  base: "./",\n  build: {\n    outDir: `./dist/${packageconfig.name}`,\n  },\n});\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create you app within the src folder. Vite comes with some boiler plate code to get you started."),(0,i.kt)("li",{parentName:"ol"},"(OPTIONAL) Install the ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@sage3/sageplugin"},"@sage3/sageplugin")," library.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @sage3/sageplugin\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"(OPTIONAL) Utilize the @sage3/sageplugin library. Here is a basic example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Import the Package\nimport { SAGE3Plugin } from "@sage3/sageplugin";\n\n// You Plugin app state type\ntype CounterState = {\n  count: number;\n}\n\n// The local variable we a syncing for this example.\nconst counter = 0;\n\n// Intialize the SAGE3Plugin.\n// Only intalize once. Utilize it as a singleton throughout your app.\nconst s3api = new SAGE3Plugin<CounterState>();\n\n// Subscribe to updates from the SAGE3 server when other clients update the state.\ns3api.subscribeToUpdates((state) => {\n  if (state.data.state.count) {\n    counter = state.data.state.count;\n  }\n});\n\n// Push an update to the SAGE3 server.\ns3api.update({ state: { count: counter + 1 } });\n\n// Can also reference the current state object from the S3Plugin\nconst currentCount = s3api.state.data.state.count;\ns3api.update({ state: { count: currentCount + 1 } });\n')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Build you app for deployment")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run build\n")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"If successful, there should be a folder named ",(0,i.kt)("inlineCode",{parentName:"li"},"my-first-sage-app")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"dist")," folder."),(0,i.kt)("li",{parentName:"ol"},"Zip this folder using your Operating Systems tools."),(0,i.kt)("li",{parentName:"ol"},"Skip to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload")," Section.")),(0,i.kt)("h3",{id:"unity"},"Unity"),(0,i.kt)("p",null,"You can also upload a Unity WebGL application through the SAGE3 Plugin Interface. We currently don't have a way to sync state across clients but it is a way to share your Unity Applications through SAGE3."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set you Build Target to WebGL.")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220777612-f99b5666-722d-46d5-a5b5-bc6981124b43.png",height:"400px"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Disable the Compression Format. Under Player Settings > Publish Settings > Compression Format > ",(0,i.kt)("inlineCode",{parentName:"li"},"Disabled"))),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220778228-ca569df6-dc5c-481b-b648-9de8d7587819.png",height:"400px"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build your Unity Project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Zip you Unity Project's Build folder from step 3.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Skip to the Upload Section."))),(0,i.kt)("h3",{id:"upload-to-a-sage3-server"},"Upload to a SAGE3 Server"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open SAGE3 and go to the server of your choice."),(0,i.kt)("li",{parentName:"ol"},"Open the Plugin Menu from the lower left corner Main menu.")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220774198-4f0001cb-1fc2-4284-9818-d7dc1ec34285.png",height:"300px"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload")," select the ",(0,i.kt)("inlineCode",{parentName:"li"},"zip")," file created above. Enter you Plugin's name, and your Plugin's Description. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload"),".")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220774658-985f493b-d82a-41f2-9cf9-b2f479e596b5.png",height:"400px"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"After your plugin uploads it should appear in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Your Plugins")," list.")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220774833-47f050fb-0aaf-4088-8621-9e6b69625eb3.png",height:"400px"}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to a board of your choosing.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within the Plugin Panel you should now see your newly uploaded Plugin."))),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220775097-ebdde9bc-846b-4dd1-bd1c-a096ba158e39.png",height:"400px"}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Click your Plugin's button from the Plugin Panel to open it on the board.")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220775466-283b7e4d-4592-4c17-9ba4-25b3493b14c8.png",height:"400px"}),(0,i.kt)("h2",{id:"integrated-application"},"Integrated Application"),(0,i.kt)("p",null,"An Integrated Application is a SAGE3 App that is contained within the SAGE3 Source code. It is fully integrated within SAGE3 and has access to a lot more features than a Plugin Application. Documentation explaining how to develop an Integrated Application is ",(0,i.kt)("strong",{parentName:"p"},"COMING SOON"),"."))}c.isMDXComponent=!0}}]);