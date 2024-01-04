"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4288],{1469:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(5893),t=s(1151);const o={sidebar_position:11,title:"FAQ"},l="Frequently Asked Questions",r={id:"FAQ",title:"FAQ",description:"- Can I run the SAGE3 client on Linux while AppArmor is enabled?",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FAQ.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Server Deployment",permalink:"/docs/Server-Deployment"},next:{title:"Electron",permalink:"/docs/Electron-client"}},a={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Can I run the SAGE3 client on Linux while AppArmor is enabled?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It seems that Ubuntu 23.x and 24.x have AppArmor enabled and it causes issues with Chrome/Electron based application using sandboxes."}),"\n",(0,i.jsx)(n.li,{children:"Install the latest version of the client."}),"\n",(0,i.jsxs)(n.li,{children:["as root, create a file in ",(0,i.jsx)(n.code,{children:"/etc/apparmor.d/"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["file name can/should be (?) the path to the application binary: for instance ",(0,i.jsx)(n.code,{children:"home.luc.SAGE3-linux-x64.SAGE3"})]}),"\n",(0,i.jsx)(n.li,{children:"the file content is copied from the Chrome one, adjusted for the binary path (see below)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Then add the file into AppArmor:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["as root: ",(0,i.jsx)(n.code,{children:"sudo apparmor_parser -r /etc/apparmor.d/home.luc.SAGE3-linux-x64.SAGE3"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Go back to the SAGE3 folder and run './SAGE3'"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"abi <abi/4.0>,\ninclude <tunables/global>\n\n/home/luc/SAGE3-linux-arm64/SAGE3 flags=(unconfined) {\n  userns,\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"On macOS, what to do if I can't get to the SAGE3 window (the client disappeared)?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can go to the menu bar and select 'File / Clear Preferences on Quit' and quit the SAGE3 client and relaunch it. The preferences should have been cleaned, and you can restart fresh.\n",(0,i.jsx)(n.img,{src:"https://github.com/SAGE-3/next/assets/5595452/be1cc871-6b4d-457f-a736-314fa9b6e762",alt:"Screenshot 2023-11-29 at 11 43 02\u202fAM"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"What ports need to be open for communication with the SAGE3 server, what encryption and protocols are used and what authentication?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Only the HTTPS port (443) is required to be open. All the communications are initiated with over HTTPS using TLS 1.2.  We use HTTPS calls, secure Websocket communication and peer-to-peer communications (WebRTC), all initiated over HTTPS. Screen-sharing is mediated through a commercial entity (Twilio, for signaling through VPN and such), also over HTTPS."}),"\n",(0,i.jsxs)(n.li,{children:["We rely on  delegated authentication services for login: we mostly support Google auth and CILogon which supports a long list of universities and institutions. It's mostly based on a OpenID Connect (OAuth 2.0) interface. Test at: ",(0,i.jsx)(n.a,{href:"https://test.cilogon.org/",children:"https://test.cilogon.org/"})]}),"\n",(0,i.jsx)(n.li,{children:"We have a simple PIN code system to limit access to some rooms and boards (SHA-1 hash) which should not be considered as a strong password."}),"\n",(0,i.jsx)(n.li,{children:"In the configuration file, you can specify the email of several admin-level users, who can access an administrative page for maintenance and debugging."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Is the content of webview (web content) synchronized across clients ?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No, the content is not synchronized (scrolling, navigation, etc)."}),"\n",(0,i.jsx)(n.li,{children:"There's a tech-demo of webview streaming working, but not ready for production"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Can I be logged in 2 clients at once?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Yes, you should be able to login in multiple clients at once (for instance, in a classroom setting, you can login on the public display client (wall display, TV, projector) and on your laptop. Then, you can share you laptop to the public display using ",(0,i.jsx)(n.code,{children:"screensharing"}),".  Your ",(0,i.jsx)(n.code,{children:"presence"})," values (pointer, viewport) might temporarily confused if you use both keyboard/mouse."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"How to develop or run the Electron client from sources"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/SAGE-3/next/wiki/Electron-client",children:"https://github.com/SAGE-3/next/wiki/Electron-client"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"What are the command line arguments for the Electron client"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Usage: electron [options]\n\nOptions:\n  -V, --version              output the version number\n  -d, --display <n>          Display client ID number (int) (default: 0)\n  -f, --fullscreen           Fullscreen (boolean) (default: false)\n  -m, --monitor <n>          Select a monitor (int) (default: null)\n  -n, --no_decoration        Remove window decoration (boolean) (default: false)\n  -s, --server <s>           Server URL (string) (default: "https://minim1.evl.uic.edu/#/home")\n  -x, --xorigin <n>          Window position x (int) (default: 226)\n  -y, --yorigin <n>          Window position y (int) (default: 38)\n  -c, --clear                Clear window preferences (default: false)\n  --allowDisplayingInsecure  Allow displaying of insecure content (http on https) (default: true)\n  --allowRunningInsecure     Allow running insecure content (scripts accessed on http vs https) (default:\n                             true)\n  --cache                    Clear the cache at startup (default: false)\n  --console                  Open the devtools console (default: false)\n  --debug                    Open the port debug protocol (port number is 9222 + clientID) (default:\n                             false)\n  --experimentalFeatures     Enable experimental features (default: false)\n  --height <n>               Window height (int) (default: 944)\n  --disable-hardware         Disable hardware acceleration (default: false)\n  --show-fps                 Display the Chrome FPS counter (default: false)\n  --profile <s>              Create a profile (string)\n  --width <n>                Window width (int) (default: 1061)\n  -h, --help                 display help for command\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"How to logout from the client or switch login account?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can logout using the bottom left button labelled with your user name: the bottom menu item is the ",(0,i.jsx)(n.code,{children:"logout"})," action."]}),"\n",(0,i.jsx)(n.li,{children:"The top 'Account' menu item allows to check and change some of your user settings (you display name, your default color, you user type as client or wall, your login authority, and check your login expiration (usually from 1 month to 1 year, depending on the server settings)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"What are the main SAGE3 features?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sage-3.github.io/docs/SAGE3-Features",children:"https://sage-3.github.io/docs/SAGE3-Features"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Is there a Quick Start guide?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sage-3.github.io/docs/Quick-Start-Guide",children:"https://sage-3.github.io/docs/Quick-Start-Guide"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sage-3.github.io/pdf/SAGE3-2023b.pdf",children:"https://sage-3.github.io/pdf/SAGE3-2023b.pdf"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"What are the included applications?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sage-3.github.io/docs/Applications",children:"https://sage-3.github.io/docs/Applications"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"What are the keyboard shortcuts available?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sage-3.github.io/docs/Shortcuts",children:"https://sage-3.github.io/docs/Shortcuts"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Where can I download the binary client for my machine?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sage3.sagecommons.org/?page_id=719",children:"https://sage3.sagecommons.org/?page_id=719"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"GPU recommendations for tiled display wall?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AMD: no idea currently"}),"\n",(0,i.jsxs)(n.li,{children:["Nvidia for 'many displays'","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"single slot card: 'NVIDIA RTX A4000' ~ $1,000 (because inexpensive, 4 display-port at 4K 120Hz, mosaic). 'Ada' version might be around $1,500 (Summer 2023)"}),"\n",(0,i.jsx)(n.li,{children:"dual slot 'maximum perf' expensive: 'NVIDIA RTX A6000' or 'NVIDIA RTX A6000/50000/4500 Ada'"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Nvidia for a couple of TVs","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"any GeForce should be Ok, 3080, 4080, ..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var i=s(7294);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);