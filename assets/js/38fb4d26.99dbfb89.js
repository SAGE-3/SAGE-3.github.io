"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(3117),a=(r(7294),r(3905));const i={},o=void 0,p={unversionedId:"Reference/applications/VegaLiteViewer",id:"Reference/applications/VegaLiteViewer",title:"VegaLiteViewer",description:"&#36;schema//json-schema.org/draft-07/schema#",source:"@site/docs/Reference/applications/VegaLiteViewer.md",sourceDirName:"Reference/applications",slug:"/Reference/applications/VegaLiteViewer",permalink:"/docs/Reference/applications/VegaLiteViewer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Reference/applications/VegaLiteViewer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VegaLite",permalink:"/docs/Reference/applications/VegaLite"},next:{title:"VideoViewer",permalink:"/docs/Reference/applications/VideoViewer"}},c={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"$","schema: ",(0,a.kt)("a",{parentName:"p",href:"http://json-schema.org/draft-07/schema#"},"http://json-schema.org/draft-07/schema#")),(0,a.kt)("p",null,"$","ref: ",(0,a.kt)("a",{parentName:"p",href:"#/definitions/VegaLiteViewer"},"#/definitions/VegaLiteViewer")),(0,a.kt)("h1",{id:"definitions"},"definitions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"VegaLiteViewer"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Properties")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/VegaLiteViewer/properties/spec"},"spec")," `required` - Type: `string`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",{id:"#/definitions/VegaLiteViewer/properties/error"},"error")," `required` - Type: `boolean`")))),(0,a.kt)("h1",{id:"default-values"},"default values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "spec": "{\\"$schema\\": \\"https://vega.github.io/schema/vega-lite/v5.json\\",\\"description\\": \\"A simple bar chart with embedded data.\\",\\"data\\": {\\"values\\": [{\\"a\\": \\"A\\", \\"b\\": 28}, {\\"a\\": \\"B\\", \\"b\\": 55}, {\\"a\\": \\"C\\", \\"b\\": 43},{\\"a\\": \\"D\\", \\"b\\": 91}, {\\"a\\": \\"E\\", \\"b\\": 81}, {\\"a\\": \\"F\\", \\"b\\": 53},{\\"a\\": \\"G\\", \\"b\\": 19}, {\\"a\\": \\"H\\", \\"b\\": 87}, {\\"a\\": \\"I\\", \\"b\\": 52}]},\\"mark\\": \\"bar\\",\\"encoding\\": {\\"x\\": {\\"field\\": \\"a\\", \\"type\\": \\"nominal\\", \\"axis\\": {\\"labelAngle\\": 0}},\\"y\\": {\\"field\\": \\"b\\", \\"type\\": \\"quantitative\\"}}}",\n  "error": false\n}\n')))}u.isMDXComponent=!0}}]);