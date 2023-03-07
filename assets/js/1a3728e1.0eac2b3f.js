"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||n;return a?i.createElement(m,o(o({ref:t},d),{},{components:a})):i.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(3117),r=(a(7294),a(3905));const n={sidebar_position:4},o="Applications",l={unversionedId:"Applications",id:"Applications",title:"Applications",description:"Here are the applications in the SAGE3 system.",source:"@site/docs/Applications.md",sourceDirName:".",slug:"/Applications",permalink:"/docs/Applications",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Applications.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Server Deployment",permalink:"/docs/Server-Deployment"},next:{title:"Application Development",permalink:"/docs/Application-Development"}},s={},p=[{value:"AIPane",id:"aipane",level:2},{value:"CSVViewer",id:"csvviewer",level:2},{value:"ChartGenerator",id:"chartgenerator",level:2},{value:"ChartMaker",id:"chartmaker",level:2},{value:"Clock",id:"clock",level:2},{value:"Cobrowse",id:"cobrowse",level:2},{value:"Counter",id:"counter",level:2},{value:"DataTable",id:"datatable",level:2},{value:"DeepZoomImage",id:"deepzoomimage",level:2},{value:"GLTFViewer",id:"gltfviewer",level:2},{value:"HCDP",id:"hcdp",level:2},{value:"ImageViewer",id:"imageviewer",level:2},{value:"JupyterLab",id:"jupyterlab",level:2},{value:"KernelDashboard",id:"kerneldashboard",level:2},{value:"Kernels",id:"kernels",level:2},{value:"LeafLet",id:"leaflet",level:2},{value:"Linker",id:"linker",level:2},{value:"Notepad",id:"notepad",level:2},{value:"PDFResult",id:"pdfresult",level:2},{value:"PDFViewer",id:"pdfviewer",level:2},{value:"PluginApp",id:"pluginapp",level:2},{value:"RTCChat",id:"rtcchat",level:2},{value:"SageCell",id:"sagecell",level:2},{value:"Screenshare",id:"screenshare",level:2},{value:"Seer",id:"seer",level:2},{value:"SensorOverview",id:"sensoroverview",level:2},{value:"Stickie",id:"stickie",level:2},{value:"TwilioScreenshare",id:"twilioscreenshare",level:2},{value:"VegaLite",id:"vegalite",level:2},{value:"VegaLiteViewer",id:"vegaliteviewer",level:2},{value:"VideoViewer",id:"videoviewer",level:2},{value:"Webview",id:"webview",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"applications"},"Applications"),(0,r.kt)("p",null,"Here are the applications in the SAGE3 system."),(0,r.kt)("h2",{id:"aipane"},"AIPane"),(0,r.kt)("h2",{id:"csvviewer"},"CSVViewer"),(0,r.kt)("p",null,"Simple viewer application from CSV files. No operations on the data is available.\nCSV files can be uploaded to the asset manager and are automatically opened using this application.\nCSV files are parse on the client side using the ",(0,r.kt)("a",{parentName:"p",href:"https://csv.js.org/parse/"},"csv-parse")," library. It could potentially parse large files using its stream API, but it is not used yet.\nThe table is built using ",(0,r.kt)("a",{parentName:"p",href:"https://virtuoso.dev/"},"React Virtuoso")," which is a high-performance virtualized list component for React."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/5595452/223557405-3cc1ec05-01c2-4101-bfeb-99856d1e9270.jpg",style:{width:"100%",maxWidth:"600px"}}),(0,r.kt)("h2",{id:"chartgenerator"},"ChartGenerator"),(0,r.kt)("h2",{id:"chartmaker"},"ChartMaker"),(0,r.kt)("h2",{id:"clock"},"Clock"),(0,r.kt)("p",null,"Clock is a simple application that displays time using an SVG clock face (current time of the client). D3.js is used to render the clock face and the hands.\nAn input box allows the user to type a location to show the time at that location. Google maps is used to geocode the location and ",(0,r.kt)("inlineCode",{parentName:"p"},"timezonedb")," is used to get the time zone information.\nThe location/timezone process is buggy right now."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/5595452/223557467-920aac2f-90b6-4020-9146-f3656e4a1596.jpg",style:{width:"100%",maxWidth:"600px"}}),(0,r.kt)("h2",{id:"cobrowse"},"Cobrowse"),(0,r.kt)("p",null,'An experiement in cobrowsing. The user starting the session is the "driver" and streams the pixels of the browser window to the other users. The other users are "passengers" and see the driver\'s browser window.\nPixels are captured using Electron API of the webview and sent using websockets. A webRTC peer-to-peer approach could be used instead of websockets.'),(0,r.kt)("p",null,"Application not functional yet."),(0,r.kt)("h2",{id:"counter"},"Counter"),(0,r.kt)("p",null,"A simple counter application that can be used to test the SAGE3 system and a tutorial for creating new applications, showing how to maintain state and communicate with the server."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/5595452/223557624-173c2ca5-654b-4832-876b-5f514bee5172.jpg",style:{width:"100%",maxWidth:"600px"}}),(0,r.kt)("h2",{id:"datatable"},"DataTable"),(0,r.kt)("h2",{id:"deepzoomimage"},"DeepZoomImage"),(0,r.kt)("p",null,"A viewer for DeepZoom images. DeepZoom images are a format for tiled images that can be used to display large images. The DeepZoom format is supported by many other frameworks.\nLarge images are processed using ",(0,r.kt)("a",{parentName:"p",href:"https://www.libvips.org/"},"VIPS")," and converted to DeepZoom format. It resuls in a directory with a ",(0,r.kt)("inlineCode",{parentName:"p"},"dzi")," file and a ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," directory with the tiles, that needs to be hosted on a web server.\nWe use the ",(0,r.kt)("a",{parentName:"p",href:"https://openseadragon.github.io/"},"OpenSeadragon")," library to display the images."),(0,r.kt)("p",null,"Interaction:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click and drag to pan"),(0,r.kt)("li",{parentName:"ul"},"Scroll to zoom in and out"),(0,r.kt)("li",{parentName:"ul"},"Click to zoom in, Shift+click to zoom out"),(0,r.kt)("li",{parentName:"ul"},"Keys - and = to zoom in and out"),(0,r.kt)("li",{parentName:"ul"},"Keyboard arrows to pan"),(0,r.kt)("li",{parentName:"ul"},"Minimap on the top-right shows the current view")),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/5595452/223557672-0277e79a-2030-4ed2-845f-7fc6000d3082.jpg",style:{width:"100%",maxWidth:"600px"}}),(0,r.kt)("h2",{id:"gltfviewer"},"GLTFViewer"),(0,r.kt)("p",null,"A simple 3D model viewer using the ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/"},"Three.js")," library. We also use the React render for Three.js ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"},"react-three/fiber"),". The model is loaded using the ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#examples/en/loaders/GLTFLoader"},"GLTFLoader"),".\nGLTF files can be uploaded to the asset manager and are automatically opened using this application. The 3D file can be downloaded from the application."),(0,r.kt)("p",null,"This is a work in progress, to be integrated with the HDM VR work in Unity."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/5595452/223557706-841cdef2-eff5-4362-9c0a-9e7eb5591967.jpg",style:{width:"100%",maxWidth:"600px"}}),(0,r.kt)("h2",{id:"hcdp"},"HCDP"),(0,r.kt)("h2",{id:"imageviewer"},"ImageViewer"),(0,r.kt)("p",null,"Application is displaying images. Valid formats are handled when the file is uploaded to the asset manager (JPEG, PNG, ...). HEIC are currently not supported because they require a native library to be installed on the server.\nAfter upload, all images are scaled to multiple resolutions and converted to the efficent web-compatible WebP format. The original image is also kept for download, but converted to JEPG for compatibility.\nThe viewer matches dynamically the window size, dpi of the display, and scale of the board to an optimal resolution."),(0,r.kt)("p",null,"The application supports displaying bounding boxes generated by AI models.\nThe application has also access to all the metadata collected on the initial file (EXIF, IPTC, XMP, ...)."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/5595452/223557751-43fb8682-3d1d-4d68-ae39-e462bd9e4a35.jpg",style:{width:"100%",maxWidth:"600px"}}),(0,r.kt)("h2",{id:"jupyterlab"},"JupyterLab"),(0,r.kt)("p",null,"Webview into the Jupyter instance running in the backend.\nMight be deprecated in the future (security and collaboration issues).\nMigtht be replaced by a standard notebook render (PDF, image, ...) or a nbviewer instance."),(0,r.kt)("h2",{id:"kerneldashboard"},"KernelDashboard"),(0,r.kt)("h2",{id:"kernels"},"Kernels"),(0,r.kt)("h2",{id:"leaflet"},"LeafLet"),(0,r.kt)("h2",{id:"linker"},"Linker"),(0,r.kt)("h2",{id:"notepad"},"Notepad"),(0,r.kt)("h2",{id:"pdfresult"},"PDFResult"),(0,r.kt)("h2",{id:"pdfviewer"},"PDFViewer"),(0,r.kt)("h2",{id:"pluginapp"},"PluginApp"),(0,r.kt)("h2",{id:"rtcchat"},"RTCChat"),(0,r.kt)("h2",{id:"sagecell"},"SageCell"),(0,r.kt)("h2",{id:"screenshare"},"Screenshare"),(0,r.kt)("h2",{id:"seer"},"Seer"),(0,r.kt)("h2",{id:"sensoroverview"},"SensorOverview"),(0,r.kt)("h2",{id:"stickie"},"Stickie"),(0,r.kt)("h2",{id:"twilioscreenshare"},"TwilioScreenshare"),(0,r.kt)("h2",{id:"vegalite"},"VegaLite"),(0,r.kt)("h2",{id:"vegaliteviewer"},"VegaLiteViewer"),(0,r.kt)("h2",{id:"videoviewer"},"VideoViewer"),(0,r.kt)("h2",{id:"webview"},"Webview"))}c.isMDXComponent=!0}}]);