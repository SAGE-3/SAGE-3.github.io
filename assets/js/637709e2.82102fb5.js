"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[858],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8430:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(3117),i=(t(7294),t(3905));const o={},a=void 0,s={unversionedId:"Reference/collections/user",id:"Reference/collections/user",title:"user",description:"&#36;schema//json-schema.org/draft-07/schema#",source:"@site/docs/Reference/collections/user.md",sourceDirName:"Reference/collections",slug:"/Reference/collections/user",permalink:"/docs/Reference/collections/user",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Reference/collections/user.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"room",permalink:"/docs/Reference/collections/room"},next:{title:"SAGE3 Applications",permalink:"/docs/Reference/applications/"}},p={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"$","schema: ",(0,i.kt)("a",{parentName:"p",href:"http://json-schema.org/draft-07/schema#"},"http://json-schema.org/draft-07/schema#")),(0,i.kt)("p",null,"$","ref: ",(0,i.kt)("a",{parentName:"p",href:"#/definitions/user"},"#/definitions/user")),(0,i.kt)("h1",{id:"definitions"},"definitions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"user"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Properties")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/user/properties/_id"},"_id")," `required` - Type: `string`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/user/properties/_createdAt"},"_createdAt")," `required` - Type: `number`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/user/properties/_updatedAt"},"_updatedAt")," `required` - Type: `number`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/user/properties/_updatedBy"},"_updatedBy")," `required` - Type: `string`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/user/properties/_createdBy"},"_createdBy")," `required` - Type: `string`"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",{id:"#/definitions/user/properties/data"},"data")," `required` - Type: `object` - **_Properties_** - ",(0,i.kt)("b",{id:"#/definitions/user/properties/data/properties/name"},"name")," `required` - Type: `string` - ",(0,i.kt)("b",{id:"#/definitions/user/properties/data/properties/email"},"email")," `required` - Type: `string` - ",(0,i.kt)("b",{id:"#/definitions/user/properties/data/properties/color"},"color")," `required` - Type: `string` - ",(0,i.kt)("b",{id:"#/definitions/user/properties/data/properties/profilePicture"},"profilePicture")," `required` - Type: `string` - ",(0,i.kt)("b",{id:"#/definitions/user/properties/data/properties/userType"},"userType"),' `required` - Type: `string` - The value is restricted to the following: 1. _"wall"_ 2. _"client"_ - ',(0,i.kt)("b",{id:"#/definitions/user/properties/data/properties/userRole"},"userRole"),' `required` - Type: `string` - The value is restricted to the following: 1. _"admin"_ 2. _"user"_ 3. _"guest"_')))),(0,i.kt)("p",null,"Generated by SAGE3"))}u.isMDXComponent=!0}}]);