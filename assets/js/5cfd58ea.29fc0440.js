"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4053],{4867:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=i(5893),a=i(1151);const s={sidebar_position:2},o="SAGE3 Features",r={id:"SAGE3-Features",title:"SAGE3 Features",description:"banner",source:"@site/docs/SAGE3-Features.md",sourceDirName:".",slug:"/SAGE3-Features",permalink:"/docs/SAGE3-Features",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SAGE3-Features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Quick Start Guide",permalink:"/docs/Quick-Start-Guide"}},l={},c=[{value:"Applications Supported",id:"applications-supported",level:2},{value:"Window and Application Manipulation",id:"window-and-application-manipulation",level:2},{value:"Control Widgets",id:"control-widgets",level:2},{value:"Server/Room/Board Hierarchy",id:"serverroomboard-hierarchy",level:2}];function d(e){const t={em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sage3-features",children:"SAGE3 Features"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"banner",src:i(7630).Z+"",width:"3000",height:"1122"})}),"\n",(0,n.jsx)(t.h2,{id:"applications-supported",children:"Applications Supported"}),"\n",(0,n.jsx)(t.p,{children:"Board content is a collection of SAGE3 application windows. Every window is of a specific application type and contains an internal state in line with the purpose of the application, for example, a stickie note window state holds the text on the stickie, the font size, and the color of the stickie, while a pdf window holds a url to the file it is showing, the index of the current page etc. This state is mostly synchronized across SAGE3 clients, however, some applications may support local changes that should not synchronize, such as the muting/unmuting of audio on a video player. Users control the application state either directly in the application window or via an application specific toolbar. Toolbars are contextual to specific applications and only appear when a window is in focus (the user selected it with a click). Toolbars do not scale with the board zoom level and will hover near the selected window, either above or below its position. Toolbars always include buttons to Zoom to app, Duplicate app, and Close app. See some Toolbar examples below:"}),"\n",(0,n.jsxs)("p",{align:"center",style:{columnCount:2},children:[(0,n.jsx)("img",{width:"160",alt:"image1",src:"https://user-images.githubusercontent.com/13429117/224425890-e565d98a-0cd8-48fe-b589-cbf9e4eb7096.png"}),(0,n.jsx)("img",{width:"100",alt:"image13",src:"https://user-images.githubusercontent.com/13429117/224425952-62f65e4e-cc52-4dfa-9ae8-42db5b7d2e18.png"}),(0,n.jsx)("img",{width:"280",alt:"image6",src:"https://user-images.githubusercontent.com/13429117/224425922-cf5a9c33-d20f-4a0c-a373-7c0963792e6a.png"}),(0,n.jsx)("img",{width:"280",alt:"image12",src:"https://user-images.githubusercontent.com/13429117/224425938-8d435330-c731-43eb-97d0-6fc1a5d370f2.png"}),(0,n.jsx)("img",{width:"280",alt:"image14",src:"https://user-images.githubusercontent.com/13429117/224425978-08348395-50af-4674-bf16-6dfbad83ce15.png"}),(0,n.jsx)("img",{width:"280",alt:"image22",src:"https://user-images.githubusercontent.com/13429117/224426016-65e16e68-440b-4bec-ae54-9ad33b0e8ad2.png"})]}),"\n",(0,n.jsx)(t.p,{children:"The SAGE3 beta release has the following applications available:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Web browser"})}),": An embedded webview where users provide URLs and interact with the respective pages. Our webview implementation supports synchronization of URLs and navigation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Sticky Note"})})," (also known as Quick Note or Post-It Note): Application for text entry, in which the user can select one of 8 available colors for a note and type text that resizes automatically to the size of the note. Notes content can be downloaded."]}),"\n",(0,n.jsx)(t.li,{children:"Screen Sharing: Application that prompts the user to select which screen or window to share. SAGE3 supports any number of screen shares, and each screen share can be resized and repositioned anywhere on the board. When a screen share is initiated, SAGE3 creates a notification prompting users to zoom to that application window."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Notepad"})}),": Application for collaborative formatted text entry. The notepad supports longform text entries with various styles applied to them (color, bold, text alignment, lists etc.) as well as images dropped into the application window. The resulting document can be downloaded as an html file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Leaflet"})}),": A map application. Users can search for a location and pan and zoom across the map."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Kernel Dashboard"})}),": Application for the management of Python kernels. In this dashboard, users can create new kernels (which can be made private for the user) and see the status of existing kernels."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"SAGE Cell"})}),": Application running Python code that includes an editor and an output panel. The user must select a kernel from the available running kernels to execute the code."]}),"\n"]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image18",src:"https://user-images.githubusercontent.com/13429117/224426293-660b2d2a-b1f9-40f5-becb-6831a06bb4b1.png"})}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image11",src:"https://user-images.githubusercontent.com/13429117/224426308-c71980d8-8bf9-4caa-becb-d6ccae461755.png"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"ChartMaker"})}),": A chat-like interface that uses natural language queries to create charts from csv files."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In addition, here are implicit applications initiated by dragging and dropping files on the board space:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Image Viewer"})}),": Shows a JPG, GIF or PNG image. Images can be downloaded."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Video Viewer"})}),": Shows a MOV or MP4 file. Videos can be played, paused and looped. Videos are synchronized across a board, so any display showing that board running the video is synch\u2019ed to the same frame. Videos can be downloaded."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"PDF Viewer"})}),": Shows a PDF file. SAGE3 supports multi-page presentation of a PDF file; i.e., a user can indicate that they want to view multiple pages side by side (three pages displayed side-by-side is shown here). Users can move to the next or previous page in the document through the toolbar or keyboard shortcuts. PDFs can be downloaded."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"GeoJSON Viewer"})}),": Loads the content of a GeoJSON file on a Leaflet application."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Jupyter Lab"})}),": Shows .IPYNB files (computational notebooks). Use of Jupyter Lab on the front end of SAGE3 is being phased out in favor of SageCells."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"CSVViewer"})}),": Shows a table representing an uploaded .CSV file"]}),"\n"]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image3",src:"https://user-images.githubusercontent.com/13429117/224427041-192ec01e-ea0e-4efb-a063-01a03d377b34.png"})}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image4",src:"https://user-images.githubusercontent.com/13429117/224427051-19f84197-656a-4d66-87cd-8b43cda4c98f.png"})}),"\n",(0,n.jsx)(t.h2,{id:"window-and-application-manipulation",children:"Window and Application Manipulation"}),"\n",(0,n.jsx)(t.p,{children:"In the SAGE3 beta release, in addition to application window\u2019s support for resizing and repositioning, we also support the selection of multiple application windows and manipulating them as a group."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Window manipulation"})}),": SAGE3 group found that using the title bar as a handle for window positioning was not feasible on an infinite canvas with varying zoom levels, therefore, in the current version of SAGE3, a window can be dragged about using its full area as long as it is not in focus. Focused windows are highlighted with a teal outline and have their toolbar visible around the window periphery. Application toolbars are contextual to the type of application and its current state. To unfocus a window, the user can click away on the board, select another application with a click, or hit ESC. Windows can always be resized by placing the cursor near the boundary of the window until a resize cursor appears and dragging to the desired size."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Window Group manipulation"})}),": Using Shift + drag to create a selection box (see below), users can select multiple windows and perform group actions on them. Currently, available actions include repositioning the selected windows (drag and drop to the new location), Zoom to the selected applications, Duplicate the selected applications, Duplicate and move the selected applications to a different board in the same room, and close all the selected applications.\nFuture versions may add more AI service actions that can be applied to the selected group."]}),"\n"]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image2",src:"https://user-images.githubusercontent.com/13429117/224427711-52cd4784-e3f8-440e-be5d-afecf9a03fc4.png"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"AI Manipulation"})}),": In SAGE3, all the properties of application windows including their internal state and board position are accessible through the python back-end and can be manipulated via code, for example, using SageCell. Currently, back-end manipulation is used in an \u201cOrganize Board\u201d action that will reposition the applications on a given board based on their calculated similarity."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"control-widgets",children:"Control Widgets"}),"\n",(0,n.jsx)(t.p,{children:"In the SAGE3 beta release, boards are controlled using flexible widget panels that can be minimized and or positioned anywhere on the board. A single main menu widget is always visible and controls the visibility of 6 other panels:"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"800",alt:"image15",src:"https://user-images.githubusercontent.com/13429117/224428196-f56973fc-c58f-4e79-9e0b-4d88c8bf167e.png"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Annotation Panel"})}),": SAGE3 boards include an annotation layer. Users can select a color out of 9 available options and click-drag to draw freely in the board space. Users can erase their own lines, erase all annotation lines, or click on the screen shot button to capture their current view."]}),"\n",(0,n.jsxs)(t.li,{children:["Users Panel: This menu consists of avatars representing all users currently viewing the board. The avatars indicate whether the user is of type \u2018wall\u2019 (shown as a colorful square), or \u2018client\u2019 (colorful circle). When clicking on one of the avatars in the menu, users can select to:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Show Cursor - jumps the user\u2019s view to be centered around the cursor of the avatar\u2019s user"}),"\n",(0,n.jsx)(t.li,{children:"Show View - jumps the user's view to the cursor of the avatar\u2019s user and also tries to adjust the zoom level so that the user\u2019s view is as close as possible to the avatar\u2019s user\u2019s view."}),"\n",(0,n.jsx)(t.li,{children:"Follow - similar to show view, but stay persistent as the followed user moves about the board. When activated, follow mode is indicated with a change of the avatar to an eye icon."}),"\n",(0,n.jsx)(t.li,{children:"Unfollow (if following) - will stop follow mode."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Applications Panel"})}),": This menu shows the SAGE3 supported applications. Users can use it to launch applications. When clicking an application name, the window appears in the center of the user's view. The application name can also be dragged and drop to an exact location. See the list of supported applications above."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Navigation Panel"})}),": The Navigation panel includes a mini-map showing a simplified representation of the application windows on the board along with various navigation related functions:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Zoom in/Zoom out buttons along with a label showing the current zoom value"}),"\n",(0,n.jsx)(t.li,{children:"Button for clearing all applications on the board"}),"\n",(0,n.jsx)(t.li,{children:"A \u201cShow all Apps\u201d button that will adjust the zoom and position of the view so it contains in its bounds all of the applications on the board"}),"\n",(0,n.jsx)(t.li,{children:"\u201cLock View\u201d button will prevent the panning and zooming functions on the board via drag and scroll, effectively locking the view to avoid accidental view changes"}),"\n",(0,n.jsx)(t.li,{children:"\u201cOrganize Apps\u201d is an AI service we are currently testing, it inspects the content of the board and clusters/relocates applications based on similarity."}),"\n",(0,n.jsx)(t.li,{children:"In addition, the mini-map itself also shows the presence of user cursors and view areas, on hover over a window, the title of the window is shown to make it easier to identify applications in the simplified representation, clicking on a window will change your view so it fits in zoom and position to show the clicked application in maximum view. This combination of showing window titles and \u201cjump to\u201d window on click can help with navigation on a cluttered board where the rectangular representation of windows may seem small on the mini-map."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Assets Panel"})}),": The Assets panel provides access to the assets available in the room in which the board resides.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Information about the files uploaded to the room includes: filename, file owner (the user who added the file), file type, date modified, when it was added, and the file size."}),"\n",(0,n.jsx)(t.li,{children:"The panel supports searching and sorting through the files."}),"\n",(0,n.jsx)(t.li,{children:"Right-click menu on an asset supports copying the url of the asset, downloading it, or deleting it from the room\u2019s assets store."}),"\n",(0,n.jsx)(t.li,{children:"Double-clicking an asset will try to launch a copy of it with the default application associated with its file type. The window appear in the center of the user's view. Dragging the asset name and dropping it to the board will create a new window with the asset content."}),"\n",(0,n.jsx)(t.li,{children:"An \u201cUpload\u201d button provides an alternative upload option in addition to dragging and dropping content, and can also support \u201cFolder uploads\u201d. The assets store does not preserve folder hierarchies, but will recursively upload content from the selected folder."}),"\n",(0,n.jsx)(t.li,{children:"Multiple assets can be selected with Shift + click and Cmd/Ctrl + click as commonly possible in other file managers (macOS Finder, Windows Explorer, etc.). When multiple assets are selected, they can be dragged to the board to be opened. Also, selected assets can be deleted with a 'Del' key press."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Plugins Panel"})}),": The Plugin panel is a mimic of the application panel in that it allows launching applications, however, while the application panel is dedicated to native SAGE3 applications, plugins are external web-based applications that can be uploaded to SAGE3 by any user from the User Menu Plugins feature."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In addition, to the applications and widgets, the board includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Info"})}),": The top-left corner of the board displays the names of the current server, room, and board and, for convenience, the top-right displays a clock (local time at the client\u2019s location)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"User Menu"})}),": The User Menu is permanently attached to the bottom-left corner of the board and will include the name of the user as it was entered to the system."]}),"\n"]}),"\n",(0,n.jsxs)("p",{align:"center",style:{columnCount:2},children:[(0,n.jsx)("img",{width:"150",alt:"image28",src:"https://user-images.githubusercontent.com/13429117/224429373-746c7af2-f140-4966-a933-317f21730e70.png"}),(0,n.jsx)("img",{width:"270",alt:"image9",src:"https://user-images.githubusercontent.com/13429117/224429406-b423960b-f91b-4c1f-a7da-31d53241c2d4.png"}),(0,n.jsx)("img",{width:"300",alt:"image5",src:"https://user-images.githubusercontent.com/13429117/224429433-2b07e677-59d7-43d4-8359-115580f7fe13.png"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The User Menu includes the following features:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Edit your user Account. Currently, editable properties are: user name, user color, user type (Client or Wall, will determine the shape of the avatar, circle or square respectively, and whether to display a bounding box of the viewport on the board, which is unique to a Wall). It will also indicate if you are logged in (show your email) or are identified as a guest."}),"\n",(0,n.jsx)(t.li,{children:"Plugin feature allows every user to add an external web-based application to sage. From this button the user will be able to upload, manage, and remove plugins associated with them."}),"\n",(0,n.jsx)(t.li,{children:"\u201cDark/Light mode\u201d will flip the general visuals of the SAGE3 program between dark and light."}),"\n",(0,n.jsx)(t.li,{children:"Copy Board Link will copy to the computer\u2019s pasteboard a full SAGE3 url which includes the \u201csage3://\u201d directive to open the SAGE3 program, the url of the server, as well as the unique identifiers of the room and the board. These board links can be easily shared with other users (email, chat, slack, etc.) to indicate which board to use."}),"\n",(0,n.jsx)(t.li,{children:"\u201cBack to Room\u201d will return to the list of rooms with the current room selected."}),"\n",(0,n.jsx)(t.li,{children:"\u201cAbout\u201d button shows some information about the version of SAGE3, its licensing and website."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Right Click Menu"})}),": The SAGE3 beta release currently has a board-level right-click menu (shown here) that appears when clicking an area of the board that does not have an application window. This menu offers some common actions taken from various other panels or menus, and quick application launch. It includes going back to the room, bring controller (will move the main controller to the location of cursor), clear the board, toggle Light/Dark mode, zoom to show all applications on the board, launch a SageCell, a screenshare, a stickie, or a webview, reset the view, toggle snap window positions to grid, toggle showing the interface (i.e. main controller and panels), toggle showing application titles. The future purpose of the right click menu might encapsulate board-level AI actions."]}),"\n"]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image19",src:"https://user-images.githubusercontent.com/13429117/224429633-917fd21f-775d-4f02-91ee-abdcced53f26.png"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Notifications"})}),": Various actions will trigger notifications in the form of a little textual message at the bottom-center of the board (commonly called \u201cToasts\u201d by UI designers) that disappear after a few seconds have elapsed."]}),"\n"]}),"\n",(0,n.jsxs)("p",{align:"center",style:{columnCount:3},children:[(0,n.jsx)("img",{width:"250",alt:"image20",src:"https://user-images.githubusercontent.com/13429117/224430034-3c2b5590-14a5-4b6e-a1df-a5164ce4829b.png"}),(0,n.jsx)("img",{width:"250",alt:"image7",src:"https://user-images.githubusercontent.com/13429117/224429993-2f583eb4-93cd-4036-9e0d-e113495898e8.png"}),(0,n.jsx)("img",{width:"250",alt:"image16",src:"https://user-images.githubusercontent.com/13429117/224430014-6804ca72-16fa-4340-9d9c-df7ca058f440.png"}),(0,n.jsx)("img",{width:"250",alt:"image25",src:"https://user-images.githubusercontent.com/13429117/224430093-a3029048-e703-46fb-8cfc-cc7bc0a8ad9b.png"}),(0,n.jsx)("img",{width:"250",alt:"image24",src:"https://user-images.githubusercontent.com/13429117/224430065-73b6fd75-353d-4423-9161-b80c67e661ad.png"})]}),"\n",(0,n.jsx)(t.h2,{id:"serverroomboard-hierarchy",children:"Server/Room/Board Hierarchy"}),"\n",(0,n.jsx)(t.p,{children:"The SAGE3 program now supports several servers that are made public by the SAGE3 group in addition to private SAGE3 servers maintained by community members."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image17",src:"https://user-images.githubusercontent.com/13429117/224430472-e1eacbbf-5bfa-44dc-a2c8-a35c986cfd27.png"})}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image10",src:"https://user-images.githubusercontent.com/13429117/224430491-e9ef1c43-c594-4db2-a7cb-ae110166beef.png"})}),"\n",(0,n.jsx)(t.p,{children:"A bookmarking feature allows users of the SAGE3 client quick access to all bookmarked servers, which by default include the public servers maintained by the SAGE3 group (top left). Users can type a url for a SAGE3 server (for example, if it is private) in an input box (top right), the url will be validated and the user will be directed to that server, where they can choose to add a bookmark for future access."}),"\n",(0,n.jsx)(t.p,{children:"Once a server is selected, the user is prompted to login either with a 3rd party authentication service or as a guest (bottom left). They are then presented with a list of rooms available to them (some rooms may be private) as well as a list of boards for a given selected room (bottom right)."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image26",src:"https://user-images.githubusercontent.com/13429117/224430564-a6f63f94-a47f-4919-81b0-58e57ad812fb.png"})}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"400",alt:"image8",src:"https://user-images.githubusercontent.com/13429117/224430608-a02e045b-5fee-4cec-ab9b-3858608647a4.png"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7630:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/sage3-evl-e2ac993a363720cd5b21727cf2ffe640.jpg"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);