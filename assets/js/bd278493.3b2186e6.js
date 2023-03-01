"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const i={},l=void 0,p={unversionedId:"Reference/applications/SageCell",id:"Reference/applications/SageCell",title:"SageCell",description:"&#36;schema//json-schema.org/draft-07/schema#",source:"@site/docs/Reference/applications/SageCell.md",sourceDirName:"Reference/applications",slug:"/Reference/applications/SageCell",permalink:"/docs/Reference/applications/SageCell",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Reference/applications/SageCell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RTCChat",permalink:"/docs/Reference/applications/RTCChat"},next:{title:"Screenshare",permalink:"/docs/Reference/applications/Screenshare"}},o={},s=[],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"$","schema: ",(0,a.kt)("a",{parentName:"p",href:"http://json-schema.org/draft-07/schema#"},"http://json-schema.org/draft-07/schema#")),(0,a.kt)("p",null,"$","ref: ",(0,a.kt)("a",{parentName:"p",href:"#/definitions/SageCell"},"#/definitions/SageCell")),(0,a.kt)("h1",{id:"definitions"},"definitions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"SageCell"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"object"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Properties"))),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/code"},"code")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/language"},"language")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/fontSize"},"fontSize")," `required` - Type: `number`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/theme"},"theme")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/kernel"},"kernel")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/privateMessage"},"privateMessage")," `required`",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Items"))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Properties")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/privateMessage/items/properties/userId"},"userId")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/privateMessage/items/properties/message"},"message")," `required` - Type: `string`"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/availableKernels"},"availableKernels")," `required`",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Items"))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Properties")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/availableKernels/items/properties/key"},"key")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/availableKernels/items/properties/value"},"value")))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/output"},"output")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/executeInfo"},"executeInfo")," `required`",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Properties")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/executeInfo/properties/executeFunc"},"executeFunc")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/SageCell/properties/executeInfo/properties/params"},"params"))))))))),(0,a.kt)("h1",{id:"default-values"},"default values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "code": "",\n  "language": "python",\n  "fontSize": 14,\n  "theme": "xcode",\n  "kernel": "",\n  "output": "",\n  "privateMessage": [],\n  "availableKernels": [],\n  "executeInfo": {\n    "executeFunc": "",\n    "params": {}\n  }\n}\n')))}m.isMDXComponent=!0}}]);