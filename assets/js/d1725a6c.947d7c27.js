"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8801],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(3117),a=(r(7294),r(3905));const i={},p=void 0,o={unversionedId:"applications/JupyterLab",id:"applications/JupyterLab",title:"JupyterLab",description:"&#36;schema//json-schema.org/draft-07/schema#",source:"@site/docs/applications/JupyterLab.md",sourceDirName:"applications",slug:"/applications/JupyterLab",permalink:"/docs/applications/JupyterLab",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/applications/JupyterLab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImageViewer",permalink:"/docs/applications/ImageViewer"},next:{title:"KernelDashboard",permalink:"/docs/applications/KernelDashboard"}},s={},u=[],c={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"$","schema: ",(0,a.kt)("a",{parentName:"p",href:"http://json-schema.org/draft-07/schema#"},"http://json-schema.org/draft-07/schema#")),(0,a.kt)("p",null,"$","ref: ",(0,a.kt)("a",{parentName:"p",href:"#/definitions/JupyterLab"},"#/definitions/JupyterLab")),(0,a.kt)("h1",{id:"definitions"},"definitions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"JupyterLab"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Properties")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/_id"},"_id")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/_createdAt"},"_createdAt")," `required` - Type: `number`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/_updatedAt"},"_updatedAt")," `required` - Type: `number`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/_updatedBy"},"_updatedBy")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/_createdBy"},"_createdBy")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/data"},"data")," `required` - Type: `object` - **_Properties_** - ",(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/data/properties/jupyterURL"},"jupyterURL")," `required` - Type: `string` - ",(0,a.kt)("b",{id:"#/definitions/JupyterLab/properties/data/properties/notebook"},"notebook")," `required` - Type: `string`")))),(0,a.kt)("p",null,"Generated by SAGE3"))}l.isMDXComponent=!0}}]);