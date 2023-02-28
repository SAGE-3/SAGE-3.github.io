"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(3117),i=(r(7294),r(3905));const a={},o=void 0,p={unversionedId:"Reference/applications/Clock",id:"Reference/applications/Clock",title:"Clock",description:"&#36;schema//json-schema.org/draft-07/schema#",source:"@site/docs/Reference/applications/Clock.md",sourceDirName:"Reference/applications",slug:"/Reference/applications/Clock",permalink:"/docs/Reference/applications/Clock",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Reference/applications/Clock.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ChartGenerator",permalink:"/docs/Reference/applications/ChartGenerator"},next:{title:"Cobrowse",permalink:"/docs/Reference/applications/Cobrowse"}},c={},l=[],s={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"$","schema: ",(0,i.kt)("a",{parentName:"p",href:"http://json-schema.org/draft-07/schema#"},"http://json-schema.org/draft-07/schema#")),(0,i.kt)("p",null,"$","ref: ",(0,i.kt)("a",{parentName:"p",href:"#/definitions/Clock"},"#/definitions/Clock")),(0,i.kt)("h1",{id:"definitions"},"definitions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Clock"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Properties")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/Clock/properties/_id"},"_id")," `required` - Type: `string`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/Clock/properties/_createdAt"},"_createdAt")," `required` - Type: `number`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/Clock/properties/_updatedAt"},"_updatedAt")," `required` - Type: `number`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/Clock/properties/_updatedBy"},"_updatedBy")," `required` - Type: `string`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/Clock/properties/_createdBy"},"_createdBy")," `required` - Type: `string`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/Clock/properties/data"},"data")," `required` - Type: `object` - **_Properties_** - ",(0,i.kt)("b",{id:"#/definitions/Clock/properties/data/properties/file"},"file")," `required` - Type: `string` - ",(0,i.kt)("b",{id:"#/definitions/Clock/properties/data/properties/city"},"city")," `required` - Type: `string`")))),(0,i.kt)("p",null,"Generated by SAGE3"))}d.isMDXComponent=!0}}]);