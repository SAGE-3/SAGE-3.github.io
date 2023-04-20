"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=s,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(3117),s=(a(7294),a(3905));const o={sidebar_position:10,title:"XR Integration"},r="Extended Reality (XR) Integration",i={unversionedId:"XR-Integration",id:"XR-Integration",title:"XR Integration",description:"SAGE3 supports Extended Reality (XR) environments through native (stock) applications available 'out-of-the-box' as well as through a C# API for more advanced application development.",source:"@site/docs/XR-Integration.md",sourceDirName:".",slug:"/XR-Integration",permalink:"/docs/XR-Integration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/XR-Integration.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"XR Integration"},sidebar:"tutorialSidebar",previous:{title:"Server Deployment",permalink:"/docs/Server-Deployment"},next:{title:"HTTP API",permalink:"/docs/HTTP-API"}},l={},c=[{value:"SAGE3 using Built-In Applications",id:"sage3-using-built-in-applications",level:2},{value:"Viewing SAGE3 in Meta Quest Browser",id:"viewing-sage3-in-meta-quest-browser",level:3},{value:"Streaming VR to SAGE3",id:"streaming-vr-to-sage3",level:3},{value:"SAGE3 Webview Testing with Quest2",id:"sage3-webview-testing-with-quest2",level:3},{value:"Unity Applications with SAGE3 API Integration",id:"unity-applications-with-sage3-api-integration",level:2},{value:"API Tester",id:"api-tester",level:3},{value:"glTF Model Viewer",id:"gltf-model-viewer",level:3},{value:"wsSAGE C# API",id:"wssage-c-api",level:2},{value:"Connecting to a SAGE3 Server",id:"connecting-to-a-sage3-server",level:3},{value:"GET Rooms",id:"get-rooms",level:3},{value:"GET Boards",id:"get-boards",level:3},{value:"GET Assets",id:"get-assets",level:3},{value:"Getting a Specific Asset",id:"getting-a-specific-asset",level:4},{value:"GET Apps",id:"get-apps",level:3},{value:"SUB Boards",id:"sub-boards",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"extended-reality-xr-integration"},"Extended Reality (XR) Integration"),(0,s.kt)("p",null,"SAGE3 supports Extended Reality (XR) environments through native (stock) applications available 'out-of-the-box' as well as through a C# API for more advanced application development."),(0,s.kt)("h2",{id:"sage3-using-built-in-applications"},"SAGE3 using Built-In Applications"),(0,s.kt)("h3",{id:"viewing-sage3-in-meta-quest-browser"},"Viewing SAGE3 in Meta Quest Browser"),(0,s.kt)("p",null,"SAGE3 can be viewed and interacted with in virtual reality (VR) using the Meta Quest 2's built in web browser 'Meta Quest Browser.' This provides the same functionality that can be found using a standard web browser."),(0,s.kt)("p",null,"The Quest controllers can be used to navigate and interact with SAGE2 rooms and boards. Also supports Tracked Keyboard in the Quest 2 and Quest Pro to more easily enter text."),(0,s.kt)("p",null,"The multi-browser support in the Meta Quest Browsers allows more immersion by surrounding the user in up to three different SAGE3 boards at a time."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4130026/224835970-92c8929d-1e4c-4018-acef-6dfdfec4afc8.png",alt:"SAGE3_MetaQuestBrowserWide"})),(0,s.kt)("h3",{id:"streaming-vr-to-sage3"},"Streaming VR to SAGE3"),(0,s.kt)("p",null,"A standalone application to view SAGE3 assets and applications in VR. Currently works on Oculus Quest1 & Quest2 and displays a list of all the open applications and assets on the SAGE3 client it is configured for (Currently configured for dev server). Can view small models of interest in the application. Works for models up to 102 mB. The ability to render bigger models is still a work in progress. Uses VRTK v4 SDK in order to deploy the application from Unity to Quest2. Integrated Unity's XR interaction toolkit with VRTK v4 in the application. We can now use the right controller trigger button on both Quest 1 and Quest 2 devices to interact with the application."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19904581/224168828-3b3a0a2d-2505-43f1-96d5-96bf52bceea3.jpg",alt:"dnamolecule"}),"\n",(0,s.kt)("em",{parentName:"p"},"Fig. 1: A DNA molecule rendered using the SAGE3 VR application in Quest2")),(0,s.kt)("h3",{id:"sage3-webview-testing-with-quest2"},"SAGE3 Webview Testing with Quest2"),(0,s.kt)("p",null,"We can directly stream our Quest2 content into SAGE3 web view using the steps below."),(0,s.kt)("p",null,"Steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Make sure the Quest2 device and computer are on the same network."),(0,s.kt)("li",{parentName:"ol"},"Open Webview in SAGE3 on the computer."),(0,s.kt)("li",{parentName:"ol"},"Navigate to oculus.com/casting in the Webview."),(0,s.kt)("li",{parentName:"ol"},"Login to your Oculus account (a shareable account)."),(0,s.kt)("li",{parentName:"ol"},"Login with the same account on the Quest2 device (You may already be logged in if the device has been in use)."),(0,s.kt)("li",{parentName:"ol"},"On your device navigate to the Camera icon and click on the Cast Button, select Computer, and start casting."),(0,s.kt)("li",{parentName:"ol"},"On your device open any application you wish to use.")),(0,s.kt)("p",null,"The content will now be streamed into SAGE3. Anybody who can log in to the Oculus account with the same credentials within SAGE3 webview can now view the Quest2 content on their SAGE3 board."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19904581/224113203-d426338e-e737-4e30-bed5-da7ef81ed77d.png",alt:"webviewcast"}),"\n",(0,s.kt)("em",{parentName:"p"},"Fig. 2: Casting a Quest2 App into SAGE3")),(0,s.kt)("h2",{id:"unity-applications-with-sage3-api-integration"},"Unity Applications with SAGE3 API Integration"),(0,s.kt)("p",null,"A series of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SAGE-3/sageCSharpUnityAPI"},"example applications")," are available using the wsSAGE C# API to connect to a SAGE3 server and both retrieve information about specific SAGE3 rooms, boards, assets, and running applications as well as sending information back to a SAGE3 server to interact with a board or specific applications."),(0,s.kt)("p",null,"The current list of example project:"),(0,s.kt)("h3",{id:"api-tester"},"API Tester"),(0,s.kt)("p",null,"A basic application to test general functionality of the C# API. Connects to a SAGE3 server and displays the current list of Rooms, Board, Assets, and Active Applications."),(0,s.kt)("h3",{id:"gltf-model-viewer"},"glTF Model Viewer"),(0,s.kt)("p",null,"An ongoing use case scenario to test bi-directional communication between the glTF 3D Model Viewer Application in SAGE3 and a Unity application (either as a standalone or VR application)."),(0,s.kt)("p",null,"The example Unity project connects to a SAGE3 server, retrieves the list of available assets and active applications, and filters applications by type to display only glTF Viewers."),(0,s.kt)("p",null,"The glTF model is then downloaded from the SAGE3 server, parsed and loaded in real-time in Unity, then displayed as a 3D model. The camera view from SAGE3 is synced with the camera in Unity by using the 'subscribe' board feature of the wsSAGE API."),(0,s.kt)("h2",{id:"wssage-c-api"},"wsSAGE C# API"),(0,s.kt)("p",null,"C# API for communicating between Unity and SAGE3 servers. This API is a framework to simplify communication to a SAGE3 server by providing an object-based C# wrapper around the JSON websocket requests and responses. This API and example projects are available at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SAGE-3/sageCSharpUnityAPI"},"sageCSharpUnityAPI"),"."),(0,s.kt)("p",null,"The example scene (Assets/Scenes/APITester.scene) and (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SAGE-3/sageCSharpUnityAPI/blob/master/Assets/wsSAGE/SAGEAPIExampleTester.cs"},"Assets/wsSAGE/SAGEAPIExampleTester.cs"),") is a good place to get started. We will be deconstructing the API calls in SAGEAPIExampleTester.cs in following sections."),(0,s.kt)("p",null,"Websocket communication is implemented using NativeWebSocket (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/endel/NativeWebSocket"},"https://github.com/endel/NativeWebSocket"),") since it supports Headers which are required to authenticate with a SAGE3 server."),(0,s.kt)("p",null,"In the following examples, the more SAGE3 API calls will be shown in addition to the internal websocket information to help better illustrate how the API works."),(0,s.kt)("h3",{id:"connecting-to-a-sage3-server"},"Connecting to a SAGE3 Server"),(0,s.kt)("p",null,"Initial connection to a SAGE3 server is done using the wsSAGE3.cs script found in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SAGE-3/sageCSharpUnityAPI"},"sageCSharpUnityAPI"),". The example APITester.scene will automatically connect to a localhost SAGE3 server using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'sageAPI.ConnectToSAGE3("localhost:4200", false);\n')),(0,s.kt)("p",null,"Where 'localhost:4200' is the IP address and port of the SAGE3 server. The second parameter is a bool which specifies if the target server using a secure (wss) or non-secure (ws) websocket connection. The main live SAGE3 servers are using a secure wss connection while localhost development servers typically use non-secure ws websockets."),(0,s.kt)("p",null,"In addition to specifying the address and secure flag, you will also need to have a valid API token which is read from 'Assets/Keys/token.json'"),(0,s.kt)("p",null,"This API call resolves to a websocket connection request with looks like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'// Authorization Header read as a JSON string\nDictionary<string, string> headers = new Dictionary<string, string>();\nheaders.Add("Authorization", "Bearer " + token);\n\nclient = new WebSocket("ws://localhost:4200/api", headers);\n')),(0,s.kt)("p",null,"With the 'token' read from token.json which looks like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "token": "sampletokentext_abcdefg123456789"\n}\n')),(0,s.kt)("p",null,"Once you have a successful connection to a SAGE3 server, you can begin getting information from the server using GET requests."),(0,s.kt)("h3",{id:"get-rooms"},"GET Rooms"),(0,s.kt)("p",null,"One of the first GET requests you'll probably want to do after connecting to a SAGE3 server is get the Room information since this can be useful to reference the Room ID in later requests."),(0,s.kt)("p",null,"In the SAGE3 C# API, all GET requests require a callback function that will be called when the response to the GET request is received."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"// Callbacks from SAGEAPI\nAction<object> getRoomsCallback;\n\nvoid Start()\n{\n    sageAPI = GetComponent<wsSAGE3>();\n\n    // Assign callbacks to a function\n    getRoomsCallback += GetRoomsCallback;\n\n    // Send the GET request\n    sageAPI.GetRooms(getRoomsCallback);\n}\n\nvoid GetRoomsCallback(object callbackData)\n{\n    RoomQuery roomQuery = (RoomQuery)callbackData;\n\n    // Iterate through room list\n    foreach(Room room in roomQuery.data)\n    {\n        // Print out the name of the room\n        Debug.Log(room.data.name);\n    }\n}\n")),(0,s.kt)("p",null,"When wsSAGE.GetRooms() is called, it sends a websocket GET request to the SAGE3 server in JSON format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "route": "/api/rooms/",\n    "method": "GET",\n    "id": "fd739d22-0763-477e-abfe-6b0b5503d1aa"\n}\n')),(0,s.kt)("p",null,'Where "id" is an auto generated GUID string which identifies this GET request. This ID is used to match the GET response with the callback function.'),(0,s.kt)("p",null,"Once the GET Rooms response is received, wsSAGE will parse the JSON file into a C# object 'RoomQuery' which is an object representation of the original JSON response. The full list of C# Serializable class objects derived from the JSON responses can be found in (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SAGE-3/sageCSharpUnityAPI/blob/master/Assets/wsSAGE/SAGEJsonHelper.cs"},"Assets/wsSAGE/SAGEJsonHelper.cs"),")."),(0,s.kt)("p",null,"Example JSON Response to GET Rooms:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n"data":\n    [\n        {\n        "_createdAt": 1663722087929,\n        "_createdBy": "-",\n        "_id": "0fffd2cd-9158-4fa5-9d28-4f929cc2367f",\n        "_updatedAt": 1663722087929,\n        "_updatedBy": "-",\n        "data":\n            {\n            "color": "green",\n            "description": "Builtin default room",\n            "isListed": true,\n            "isPrivate": false,\n            "name": "Main Room",\n            "ownerId": "-",\n            "privatePin": ""\n            }\n        }\n    ],\n"id": "fd739d22-0763-477e-abfe-6b0b5503d1aa",\n"success": true\n}\n')),(0,s.kt)("p",null,"Example of using the wsSAGE C# API to access RoomQuery data (compared to original JSON):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"RoomQuery roomQuery = (RoomQuery)callbackData;\n\n// Iterate through room list\nforeach(Room room in roomQuery.data)\n{\n    long _createdAt = room._createdAt;\n    string _createdBy = room._createdBy;\n    string _id = room._id;\n    string _updatedBy = room._updatedBy;\n\n    string color = room.data.color;\n    string description = room.data.description;\n    bool isListed = room.data.isListed;\n    bool isPrivate = room.data.isPrivate;\n    string name = room.data.name;\n    string ownerId = room.data.ownerId;\n    string privatePin = room.data.privatePin;\n}\n")),(0,s.kt)("h3",{id:"get-boards"},"GET Boards"),(0,s.kt)("p",null,"Very similar to how GET Rooms above works."),(0,s.kt)("p",null,"In the SAGE3 C# API, all GET requests require a callback function that will be called when the response to the GET request is received."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"// Callbacks from SAGEAPI\nAction<object> getBoardsCallback;\n\nvoid Start()\n{\n    sageAPI = GetComponent<wsSAGE3>();\n\n    // Assign callbacks to a function\n    getRoomsCallback += GetBoardsCallback;\n\n    // Send the GET request\n    sageAPI.GetBoards(getBoardsCallback);\n}\n\nvoid GetBoardsCallback(object callbackData)\n{\n    BoardQuery boardQuery = (BoardQuery)callbackData;\n\n    // Iterate through board list\n    foreach(Board board in boardQuery.data)\n    {\n\n    }\n}\n")),(0,s.kt)("p",null,"When wsSAGE.GetBoards() is called, it sends a websocket GET request to the SAGE3 server in JSON format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "route": "/api/boards/",\n    "method": "GET",\n    "id": "8fa971db-d96e-43a9-ac35-250917954428"\n}\n')),(0,s.kt)("p",null,'Where "id" is an auto generated GUID string which identifies this GET request. This ID is used to match the GET response with the callback function.'),(0,s.kt)("p",null,"Once the GET Boards response is received, wsSAGE will parse the JSON file into a C# object 'BoardQuery' which is an object representation of the original JSON response. The full list of C# Serializable class objects derived from the JSON responses can be found in (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SAGE-3/sageCSharpUnityAPI/blob/master/Assets/wsSAGE/SAGEJsonHelper.cs"},"Assets/wsSAGE/SAGEJsonHelper.cs"),")."),(0,s.kt)("p",null,"Example JSON Response to GET Boards:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n"data":\n    [\n        {\n        "_createdAt": 1663722087932,\n        "_createdBy": "-",\n        "_id": "863c9963-5d7b-4823-8e3b-97a8d28efb1d",\n        "_updatedAt": 1674190753657,\n        "_updatedBy": "5b54824d-f260-46e6-b826-0c04101ab6b1",\n        "data":\n            {\n            "color": "green",\n            "description": "Builtin default board",\n            "isPrivate": false,\n            "name": "Main Board",\n            "ownerId": "-",\n            "privatePin": "",\n            "roomId": "0fffd2cd-9158-4fa5-9d28-4f929cc2367f",\n            "whiteboardLines":\n                [\n                    {\n                    "id": "1668717021049",\n                    "isComplete": true,\n                    "points":\n                        [\n                        1504637.22369295,\n                        1505441.5915868,\n                        1504629.98847042,\n                        1505438.93645927\n                        ],\n                    "userColor": "red",\n                    "userId": "5b54824d-f260-46e6-b826-0c04101ab6b1"\n                    }\n                ]\n            }\n        }\n    ],\n"id": "8fa971db-d96e-43a9-ac35-250917954428",\n"success": true\n}\n')),(0,s.kt)("p",null,"Example of using the wsSAGE C# API to access BoardQuery data (compared to original JSON):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"BoardQuery boardQuery = (BoardQuery)callbackData;\n\n// Iterate through board list\nforeach(Board board in boardQuery.data)\n{\n    long _createdAt = board._createdAt;\n    string _createdBy = board._createdBy;\n    string _id = board._id;\n    string _updatedBy = board._updatedBy;\n\n    string color = board.data.color;\n    string description = board.data.description;\n    bool isPrivate = board.data.isPrivate;\n    string name = board.data.name;\n    string ownerId = board.data.ownerId;\n    string privatePin = board.data.privatePin;\n    string roomId = board.data.roomId;\n}\n")),(0,s.kt)("h3",{id:"get-assets"},"GET Assets"),(0,s.kt)("p",null,"Similar to how other GET requests (Board, Room) works."),(0,s.kt)("p",null,"In the SAGE3 C# API, all GET requests require a callback function that will be called when the response to the GET request is received."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"// Callbacks from SAGEAPI\nAction<object> getAssetsCallback;\n\nvoid Start()\n{\n    sageAPI = GetComponent<wsSAGE3>();\n\n    // Assign callbacks to a function\n    getAssetsCallback+= GetAssetsCallback;\n\n    // Send the GET request\n    sageAPI.GetAssets(getAssetsCallback);\n}\n\nvoid GetAssetsCallback(object callbackData)\n{\n    AssetQuery query = (AssetQuery)callbackData;\n\n    // Iterate through board list\n    foreach(Asset asset in query.data)\n    {\n\n    }\n}\n")),(0,s.kt)("p",null,"When wsSAGE.GetAssets() is called, it sends a websocket GET request to the SAGE3 server in JSON format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "route": "/api/assets/",\n    "method": "GET",\n    "id": "8fa971db-d96e-43a9-ac35-250917954428"\n}\n')),(0,s.kt)("p",null,'Where "id" is an auto generated GUID string which identifies this GET request. This ID is used to match the GET response with the callback function.'),(0,s.kt)("p",null,"Once the GET Assets response is received, wsSAGE will parse the JSON file into a C# object 'AssetQuery' which is an object representation of the original JSON response. The full list of C# Serializable class objects derived from the JSON responses can be found in (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SAGE-3/sageCSharpUnityAPI/blob/master/Assets/wsSAGE/SAGEJsonHelper.cs"},"Assets/wsSAGE/SAGEJsonHelper.cs"),")."),(0,s.kt)("p",null,"Example JSON Response to GET Assets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n"data":\n    [\n        {\n        "_createdAt": 1669714984516,\n        "_createdBy": "b25d1553-5937-445a-9490-3ae102c6aad5",\n        "_id": "07bcc7b8-5714-47d2-ab70-5aeeecded01c",\n        "_updatedAt": 1669714984516,\n        "_updatedBy": "b25d1553-5937-445a-9490-3ae102c6aad5",\n        "data":\n            {\n            "dateAdded": "2022-11-29T09:43:03.245Z",\n            "dateCreated": "2022-11-29T09:43:03.000Z",\n            "derived":\n                {\n                "aspectRatio": 2.54992076069731,\n                "filename": "dist/apps/homebase/assets/ef889e61-c348-4c03-8a09-3e22cfe2f7d7.PNG",\n                "fullSize": "api/assets/static/ef889e61-c348-4c03-8a09-3e22cfe2f7d7-full.jpg",\n                "height": 631,\n                "url": "api/assets/static/ef889e61-c348-4c03-8a09-3e22cfe2f7d7-201.webp",\n                "width": 1609\n                },\n            "destination": "dist/apps/homebase/assets",\n            "file": "ef889e61-c348-4c03-8a09-3e22cfe2f7d7.PNG",\n            "metadata": "ef889e61-c348-4c03-8a09-3e22cfe2f7d7.PNG.json",\n            "mimetype": "image/png",\n            "originalfilename": "fig 11.PNG",\n            "owner": "b25d1553-5937-445a-9490-3ae102c6aad5",\n            "path": "dist/apps/homebase/assets/ef889e61-c348-4c03-8a09-3e22cfe2f7d7.PNG",\n            "room": "9e78d7d8-e4f8-4277-969d-3ef35851830c",\n            "size": 1374669\n            }\n        },\n        {\n        "_createdAt": 1668050991683,\n        "_createdBy": "42868120-5230-4355-abf0-234b9490f1b2",\n        "_id": "836b9b01-7649-4b54-950a-eb83cb5ec418",\n        "_updatedAt": 1668050991683,\n        "_updatedBy": "42868120-5230-4355-abf0-234b9490f1b2",\n        "data":\n            {\n            "dateAdded": "2022-11-10T03:29:51.618Z",\n            "dateCreated": "2010-09-29T00:37:20.000Z",\n            "derived":\n                {\n                "aspectRatio": 1.77777777777778,\n                "filename": "f21227e2-1a3e-4704-8d52-e270cc75470a.mov",\n                "fullSize": "/api/assets/static/f21227e2-1a3e-4704-8d52-e270cc75470a.mov",\n                "height": 720,\n                "sizes":\n                    [\n                    ],\n                "url": "/api/assets/static/f21227e2-1a3e-4704-8d52-e270cc75470a.mov",\n                "width": 1280\n                },\n            "destination": "dist/apps/homebase/assets",\n            "file": "f21227e2-1a3e-4704-8d52-e270cc75470a.mov",\n            "metadata": "f21227e2-1a3e-4704-8d52-e270cc75470a.mov.json",\n            "mimetype": "video/quicktime",\n            "originalfilename": "CS527_F2010_P1_gingerabbitHD.mov",\n            "owner": "42868120-5230-4355-abf0-234b9490f1b2",\n            "path": "dist/apps/homebase/assets/f21227e2-1a3e-4704-8d52-e270cc75470a.mov",\n            "room": "1b67064a-d40c-4b0c-a6f6-96322c617bea",\n            "size": 81059467\n            }\n        }\n    ],\n"id": "8fa971db-d96e-43a9-ac35-250917954428",\n"success": true\n}\n')),(0,s.kt)("p",null,"The example above shows two assets: a .png image and a .mov video."),(0,s.kt)("p",null,"Example of using the wsSAGE C# API to access RoomQuery data (compared to original JSON):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"AssetQuery assetQuery = (AssetQuery)callbackData;\n\n// Iterate through asset list\nforeach(Asset asset in assetQuery.data)\n{\n    long _createdAt = asset._createdAt;\n    string _createdBy = asset._createdBy;\n    string _id = asset._id;\n    string _updatedBy = asset._updatedBy;\n\n    string dateAdded = asset.data.dateAdded;\n    string dateCreated = asset.data.dateCreated;\n    string destination = asset.data.destination;\n\n    // This is a SAGE3 generated filename used internally\n    // to uniquely identify this asset\n    // I.e. Would be used to access this file from the server\n    string file = asset.data.file;\n\n    string metadata = asset.data.metadata;\n    string mimetype = asset.data.mimetype;\n\n    // This is the original name of the file uploaded\n    string originalfilename = asset.data.originalfilename;\n\n    string owner = asset.data.owner;\n    string path = asset.data.path;\n    string zoom = asset.data.zoom;\n    long size = asset.data.size;\n}\n")),(0,s.kt)("h4",{id:"getting-a-specific-asset"},"Getting a Specific Asset"),(0,s.kt)("p",null,"Once you have the asset information, you can use the 'asset.data.file' field to create a GET request to get that asset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[url to server]/api/assets/static/[asset.data.file]\n")),(0,s.kt)("p",null,"In Unity, you can get an asset using Coroutines:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'void Start()\n{\n    // Example asset path based on data from an AssetQuery:: \n    string assetURL = "http://localhost:4200/api/assets/static/098c93dd-cc04-4b3b-92e3-5d40acdaad0b.glb"\n    StartCoroutine("GetAssetFromURL", assetURL);\n}\n\n\nIEnumerator GetAssetFromURL(string assetURL)\n{\n    UnityWebRequest www = UnityWebRequest.Get(assetURL);\n\n    // Sets the authorization header (includes same token used to connect to server)\n    www.SetRequestHeader("Authorization", "Bearer " + token);\n\n    // Sends the request\n    yield return www.SendWebRequest();\n\n    if (www.return == UnityWebRequest.Result.Success)\n    {\n        byte[] assetAsBytes = www.downloadHandler.data;\n        // Convert from byte[] based on what the asset is....\n    }\n}\n')),(0,s.kt)("h3",{id:"get-apps"},"GET Apps"),(0,s.kt)("h3",{id:"sub-boards"},"SUB Boards"))}p.isMDXComponent=!0}}]);