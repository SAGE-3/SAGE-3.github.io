"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,p=function(e,t){if(null==e)return{};var r,i,p={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(r),f=p,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||n;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,o=new Array(n);o[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=r(3117),p=(r(7294),r(3905));const n={},o=void 0,a={unversionedId:"Reference/collections/app",id:"Reference/collections/app",title:"app",description:"&#36;schema//json-schema.org/draft-07/schema#",source:"@site/docs/Reference/collections/app.md",sourceDirName:"Reference/collections",slug:"/Reference/collections/app",permalink:"/docs/Reference/collections/app",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Reference/collections/app.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SAGE3 Collections",permalink:"/docs/Reference/collections/"},next:{title:"asset",permalink:"/docs/Reference/collections/asset"}},s={},d=[],c={toc:d};function l(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"$","schema: ",(0,p.kt)("a",{parentName:"p",href:"http://json-schema.org/draft-07/schema#"},"http://json-schema.org/draft-07/schema#")),(0,p.kt)("p",null,"$","ref: ",(0,p.kt)("a",{parentName:"p",href:"#/definitions/app"},"#/definitions/app")),(0,p.kt)("h1",{id:"definitions"},"definitions"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("em",{parentName:"strong"},"app"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Type: ",(0,p.kt)("inlineCode",{parentName:"li"},"object")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},(0,p.kt)("em",{parentName:"strong"},"Properties")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("b",{id:"#/definitions/app/properties/_id"},"_id")," `required` - Type: `string`"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("b",{id:"#/definitions/app/properties/_createdAt"},"_createdAt")," `required` - Type: `number`"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("b",{id:"#/definitions/app/properties/_updatedAt"},"_updatedAt")," `required` - Type: `number`"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("b",{id:"#/definitions/app/properties/_updatedBy"},"_updatedBy")," `required` - Type: `string`"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("b",{id:"#/definitions/app/properties/_createdBy"},"_createdBy")," `required` - Type: `string`"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("b",{id:"#/definitions/app/properties/data"},"data")," `required` - Type: `object` - **_Properties_** - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/title"},"title")," `required` - Type: `string` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/roomId"},"roomId")," `required` - Type: `string` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/boardId"},"boardId")," `required` - Type: `string` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/position"},"position")," `required` - Type: `object` - **_Properties_** - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/position/properties/x"},"x")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/position/properties/y"},"y")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/position/properties/z"},"z")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/size"},"size")," `required` - Type: `object` - **_Properties_** - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/size/properties/width"},"width")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/size/properties/height"},"height")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/size/properties/depth"},"depth")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/rotation"},"rotation")," `required` - Type: `object` - **_Properties_** - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/rotation/properties/x"},"x")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/rotation/properties/y"},"y")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/rotation/properties/z"},"z")," `required` - Type: `number` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/type"},"type")," `required` - Type: `string` - ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/state"},"state"),"- ",(0,p.kt)("b",{id:"#/definitions/app/properties/data/properties/raised"},"raised")," `required` - Type: `boolean`")))),(0,p.kt)("p",null,"Generated by SAGE3"))}l.isMDXComponent=!0}}]);