"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_position:3},i=void 0,l={unversionedId:"Server-Deployment",id:"Server-Deployment",title:"Server-Deployment",description:"The SAGE3 server can be deployed on a Window, Mac or Linux machine with a fully qualified name and a SSL certificate to support HTTPS.",source:"@site/docs/Server-Deployment.md",sourceDirName:".",slug:"/Server-Deployment",permalink:"/docs/Server-Deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server-Deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Architecture"},next:{title:"Wiki",permalink:"/docs/wiki/"}},s={},p=[{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Ubuntu",id:"ubuntu",level:2},{value:"Status and problem solving",id:"status-and-problem-solving",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The SAGE3 server can be deployed on a Window, Mac or Linux machine with a fully qualified name and a SSL certificate to support HTTPS."),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows, MacOS, or Linux operating system"),(0,o.kt)("li",{parentName:"ul"},"Docker installation"),(0,o.kt)("li",{parentName:"ul"},"Fully Qualified Domain Name (FQDN)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"i.e. A hostname recognized on a public network or your institutions private network",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ex. myserver.mycompany.com"),(0,o.kt)("li",{parentName:"ul"},"Ex. myserver.cs.university.edu"))))),(0,o.kt)("li",{parentName:"ul"},"SSL Certificates for server (or wildcard certificate for a domain)"),(0,o.kt)("li",{parentName:"ul"},"Optional services:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Google OAuth credentials, for authentication"),(0,o.kt)("li",{parentName:"ul"},"CILogin OAuth credentials, for authentication"),(0,o.kt)("li",{parentName:"ul"},"Twilio API registration, for screen sharing")))),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop for Windows"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Windows Subsystem for Linux WSL using distribution Ubuntu 22.04")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(optional) You can install Visual Studio Code with the WSL extension to edit some files inside WSL."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell\nwsl --install -d Ubuntu-22.04\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install NVM within the WSL subsystem")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Ensure Curl is installed\nsudo apt-get install curl\n\n# Curl the NVM Installer\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash\n\n# Close Powershell and reopen to verify NVM installed\ncommand -v nvm\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install NodeJS within the WSL subsystem")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Install Node v18.xx\nnvm install v18\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1ILDxFNR4dEpEWqoRBdcRqZ49Ql-wkBra/view?usp=sharing"},"SAGE3 Server Package")," and extract it within the WSL subsystem")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Move the downloaded file to your user's home folder\nmv SAGE3-1.0-linux-amd64.tgz ~\ncd ~\n\n# Extract file\ntar xvfz SAGE3-1.0-linux-amd64.tgz\ncd SAGE3-1.0\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Copy your SSL Certificates to the configurations folder. There should be two files, your PRIVATE key and the CERTIFICATE file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Copy SSL Certs to the SAGE3 Keys folder. Remember these names for a later step.\ncp PRIVATE_KEY_FILE ~/SAGE3-1.0/configurations/node/keys\ncp CERTIFICATE_FILE ~/SAGE3-1.0/configurations/node/keys\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Copy the SSL Files to the JupyterLab Folder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change to the SAGE3 Server Directory\ncd ~/SAGE3-1.0\n\n# Copy SSL Files\ncp ./configurations/node/keys/PRIVATE_KEY_FILE ./configurations/jupyter/conf/keys/private-key.key \ncp ./configurations/node/keys/CERTIFICATE_FILE ./configurations/jupyter/conf/keys/certificate.crt \n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Generate JWT Keys and Token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Switch to the SAGE3 Node Keys Directory\ncd ~/SAGE3-1.0/configurations/node/keys\n\n# Generate JWT Keys and Token\n./genJWT_keys.sh\n./genJWT_token.sh\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Edit the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," File")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change directory to the SAGE3 Server Folder\ncd ~/SAGE3-1.0\n\n# Edit .env file with your preferred editor\nvim .env\nHOST=YOUR_SERVERS_HOST_NAME\nFUNCX_SDK_CLIENT_ID= # This can be ignored for now\nFUNCX_SDK_CLIENT_SECRET= # This can be ignored for now\nTOKEN= # token value copied without \u201c\u201d from: configurations/node/keys/token.json\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Edit the Configuration file ",(0,o.kt)("inlineCode",{parentName:"li"},"sage3-prod.hjson"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change directory to the SAGE3 Server Node Folder\ncd ~/SAGE3-1.0/configurations\n\n# Edit the sage3-prod.hsjon file with your preferred editor\n# The file is documented with instructions.\nvim sage3-prod.hjson\n")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start Docker Desktop within Windows")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pull the Docker Images"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change to the SAGE3 Server Directory\ncd ~/SAGE3-1.0\n\n# Pull images\ndocker compose pull\n\n# Might take a while but results should be:\nPulling redis-server ... done\nPulling node-server  ... done\nPulling python       ... done\nPulling jupyter      ... done\n")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Start the Server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change to the SAGE3 Server Directory\ncd ~/SAGE3-1.0\n\n# Start Server\n./GO\n\n# To Stop the Server \n./STOP\n")),(0,o.kt)("h2",{id:"macos"},"MacOS"),(0,o.kt)("p",null,"// TODO"),(0,o.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("p",null,"// TODO"),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The server configuration file is located here: ",(0,o.kt)("inlineCode",{parentName:"p"},"/configurations/node/sage3-prod.hsjon"),"."),(0,o.kt)("p",null,"This is JSON file that support comments and slightly more relaxed syntax.\nMake sure to stop the server (./STOP) before editing the file, and restart the server afterwards (./GO)"),(0,o.kt)("p",null,"This file allows you to configure your server to your specific needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   // Is the server in production mode. \n   // Leave as true if you are deploying your server.\n  "production": true,\n\n   // Name of the server to show in the UI\n  "serverName": "My Local Server",\n\n  // HTTP Settings\n  "port": 443,\n  "tlsVersion": "TLSv1.2",\n\n  // SSL Certificate names\n  "ssl": {\n    // Located in the `/configurations/node/keys\' folder\n    "certificateFile": "localhost-server.crt",\n    "certificateKeyFile": "localhost-server.key"\n  },\n\n  // These can be left alone, they are used to find the assets\n  "root": ".",\n  "public": "dist/apps/homebase/assets",\n  "assets": "dist/apps/webapp/assets/",\n\n  // Redis Database Config\n  "redis": {\n    // The Redis Database URL.\n    // If using the default deployment, leave as such.\n    "url": "redis://redis-server:6379"\n  },\n\n // External Services\n "services": {\n    // To enable screen sharing you must register for a Twilio account.\n    // Video Rooms is the Twilio feature we use for ScreenSharing.\n    // After setting this, ensure \'Screenshare\' is in the \'features.apps` array.\n    twilio: {\n      // Your Account SID from www.twilio.com/console\n      accountSid: "", \n      // API Key. \n      apiKey: "", \n      // API Secret\n      apiSecret: "" \n    }\n  }, \n\n  // How to enable/disable some features for safety\n  "features": {\n    // Enable Plugins. Allows uploading of Webapps.\n    plugins: true, \n    // Which Apps to enable.  Available Apps: \n    // ChartMaker, Leaflet, JupyterLab, Notepad, SageCell, KernelDashboard, Stickie, Screenshare, Webview\n    apps: ["ChartMaker", "Leaflet", "Notepad", "SageCell", "KernelDashboard", "Stickie", "Screenshare", "Webview"],\n  },\n\n  // Auth Configuration\n  "auth": {\n    // Secret HASH for the sessions. Change this to something unique.\n    "sessionSecret": "SUPERSECRET!!$$",\n    // Max age for a session per user. In milliseconds. 7 days\n    "sessionMaxAge": 604800000,\n    // Which login strategies to enable for the server. \n    // If you enbable them ensure you add the relevant config information below.\n    "strategies": [\n      "google",\n      "cilogon",\n      "guest",\n      "jwt"\n    ],\n    // A List of emails to enable those users to be admins.\n    // This will enable a ADMIN page for these users.\n    "admins": [],\n    // Guest configuration\n    "guestConfig": {\n      // Endpoint for the guest login. No need to change this\n      "routeEndpoint": "/auth/guest"\n    },\n    // Google configuration\n    "googleConfig": {\n      // Client ID from the Google Developer Console\n      "clientID": "",\n      // Client Secret from the Google Developer Console\n      "clientSecret": "",\n      // Endpoint for the google login\n      "routeEndpoint": "/auth/google",\n      // Callback URL for the google login\n      "callbackURL": "/auth/google/redirect"\n    },\n    // JWT configuration\n    "jwtConfig": {\n      // The issuer of the JWT\n      "issuer": "sage3app@gmail.com",\n      // The audience of the JWT\n      "audience": "sage3.app",\n      // Public key location. Leave this alone\n      "publicKey": "./keys/jwt_public.pem",\n      // JWT Route endpoint\n      "routeEndpoint": "/auth/jwt"\n    },\n    // CILogon configuration\n    "cilogonConfig": {\n      // Client ID from CILogon\n      "clientID": "",\n      // Client Secret from CILogon\n      "clientSecret": "",\n      // Endpoint for the cilogon login\n      "routeEndpoint": "/auth/cilogon",\n      // Callback URL for the cilogon login\n      "callbackURL": "/auth/cilogon/redirect"\n    }\n  },\n  // Namespace for signing uuid v5 keys. Change to a unique value.\n  "namespace": "XXX"\n}\n')),(0,o.kt)("h2",{id:"status-and-problem-solving"},"Status and problem solving"),(0,o.kt)("p",null,"To check if the state of the system, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List the docker images present on the system:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> docker images\nREPOSITORY                     TAG       IMAGE ID       CREATED        SIZE\nsage3/next                     arm64     f4a12118d9de   19 hours ago   2.81GB\njupyter/datascience-notebook   latest    0eec664fc1da   2 days ago     4.34GB\nredis/redis-stack-server       latest    6e2ccdafd235   5 days ago     256MB\nsage3/foresight                arm64     5e0d6c0a484c   10 days ago    1.32GB\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check system status")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> docker ps\nCONTAINER ID   IMAGE                             COMMAND                  CREATED        STATUS                  PORTS                      NAMES\n904b5100f02e   sage3/foresight:arm64             "python proxy.py"        18 hours ago   Up 18 hours                                        sage3-10-python-1\n4c28afb5774a   sage3/next:arm64                  "docker-entrypoint.s\u2026"   18 hours ago   Up 4 hours (healthy)    0.0.0.0:443->443/tcp       sage3-10-node-server-1\ndf5c2ded42d9   jupyter/datascience-notebook      "tini -g -- /conf/st\u2026"   18 hours ago   Up 18 hours (healthy)   0.0.0.0:4443->8888/tcp     sage3-10-jupyter-1\nbe99c7f9d29e   redis/redis-stack-server:latest   "redis-server /conf/\u2026"   18 hours ago   Up 18 hours             127.0.0.1:6379->6379/tcp   sage3-10-redis-server-1\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See logs of a container")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> docker logs sage3-10-node-server-1\nMode> production\nHTTPS> listening on port 443\nGoogle Login> Setup done\nJWT> Login setup done\nGuest Login> Setup done\nCILogon Login> Setup done\n...\n")),(0,o.kt)("h1",{id:"google-login"},"Google Login"),(0,o.kt)("p",null,"To enable Google Login for users from the Login page you must setup a Google Cloud account. Google OAuth is a free service that allows users to sign into SAGE3 with their Google Accounts."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to your Google account from the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud Platform")," website.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Console")," in the upper right corner."))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174990-6c6e0403-c080-4b01-97dd-c276bdfc7caf.png",alt:"arch-detailed",height:"100"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"New Project")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Manage Resources")," page. Can be found using the search box at the top of the page. ")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220175501-4015e780-f944-446f-bc14-d20bdeea2016.png",height:"100"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE PROJECT"),".")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220175717-04355645-d9ce-47de-bc9b-6d504fc5cc31.png",height:"100"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Enter the information and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create"),". (The information here is just organization/hierarchy information.) It might take a few minutes for it to be created.")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220175865-9d8460a5-eefc-40c1-93b2-7425c2c92511.png",height:"320"}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go back to the homepage by clicking the Google Cloud icon in the upper left corner.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the drop down menu at the top of the page select your newly created project."))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220176270-a99e4da6-95c1-487d-8095-8b5a8f5db6e0.png",height:"50"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"Credentials")," page from the main dropdown menu.")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220176765-5e054ba4-9eb2-485e-a4ad-6cb38f517ab2.png",height:"300"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Credentials")," and select ",(0,o.kt)("inlineCode",{parentName:"li"},"OAuth client ID"))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220177297-d41bb7a5-9d9d-41c3-8910-50a77e5cba3b.png",height:"320"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"Configure Consent Screen")," click the button. If not continue to step 15.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"OAuth Consent Screen. Select External and click create. Enter the information below. All the other fields can be left blank."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"App name:"),"  The Name of the SAGE3 Server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User support email:")," The email of the person managing your SAGE3 server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Authorized Domain:")," The ",(0,o.kt)("inlineCode",{parentName:"li"},"domain")," of your SAGE3 Server. (Ex. For ",(0,o.kt)("inlineCode",{parentName:"li"},"https://sage3.manoa.hawaii.edu")," it is ",(0,o.kt)("inlineCode",{parentName:"li"},"hawaii.edu"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Developer contact information:")," The email of the person managing your SAGE3 server.")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Scopes. Click ",(0,o.kt)("inlineCode",{parentName:"li"},"ADD OR REMOVE SCOPES")," and select ",(0,o.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.email")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.profile")," then click ",(0,o.kt)("inlineCode",{parentName:"li"},"UPDATE"),". Then click ",(0,o.kt)("inlineCode",{parentName:"li"},"SAVE AND CONTINUE"))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220178116-a4ca5ae1-c1a5-4da8-a4e5-21256484cfb3.png",height:"300"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test Users. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVE AND CONTINUE"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Summary. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"BACK TO DASHBOARD"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create OAuth client ID. "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Web application"),".  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," The name of your OAuth 2.0 client. This name is only used to identify the client in the console and will not be shown to end users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Authorized JavaScript origin:")," Click ",(0,o.kt)("inlineCode",{parentName:"li"},"ADD URI")," and enter you server's URL. (Ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://sage3.manoa.hawaii.edu"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Authorized Redirect URIs:")," Click ",(0,o.kt)("inlineCode",{parentName:"li"},"ADD URI")," and enter you server's URL with the route ",(0,o.kt)("inlineCode",{parentName:"li"},"/auth/google/redirect")," attached. (Ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://sage3.manoa.hawaii.edu/auth/google/redirect"),")")),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE")," and you should be shown the following screen with your ",(0,o.kt)("inlineCode",{parentName:"li"},"CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"CLIENT_SECRET"),". ")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220179572-9c39ae47-40d9-468f-8365-e118ec722048.png",height:"300"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_SECRET")," into the SAGE3 Server Configuration file located here: ",(0,o.kt)("inlineCode",{parentName:"p"},"/configurations/node/sage3-prod.hjson"),". They should be copied in the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.googleConfig")," fields under ",(0,o.kt)("inlineCode",{parentName:"p"},"clientID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure within the SAGE3 Server Configuration you have ",(0,o.kt)("inlineCode",{parentName:"p"},"google")," listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.strategies")," array."))),(0,o.kt)("p",null,"Test logging into your SAGE3 server using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Login with Google")," button on the homepage."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174055-dc242c68-7e7c-4fcc-9b1b-d33d8fefd0ab.png",alt:"arch-detailed",height:"300"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h1",{id:"cilogon"},"CILogon"),(0,o.kt)("p",null,"To enable CILogon Login for users from the Login page you must request a CILogon. CILogon provides a standards-compliant OpenID Connect (OAuth 2.0) interface to federated authentication for cyberinfrastructure."),(0,o.kt)("p",null,"Instructions to do so are located here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cilogon.org/oidc"},"CILogon OpenID Connect (OAuth 2.0)")),(0,o.kt)("p",null,"To register, use this link: ",(0,o.kt)("a",{parentName:"p",href:"https://cilogon.org/oauth2/register"},"CILogon Client Registration")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client Name:")," The Client Name is displayed to end-users on the Identity Provider selection page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," This email address is used for operational notices regarding your client and for validating your affiliation. A mailing list address for your operations team is recommended."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Home URL:")," URL of the Server (Ex. ",(0,o.kt)("a",{parentName:"li",href:"https://sage3.manoa.hawaii.edu"},"https://sage3.manoa.hawaii.edu"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Callback URLs:")," To ensure CILogon redirects back to the SAGE3 server after the user logins, postfix your server URL with: ",(0,o.kt)("inlineCode",{parentName:"li"},"/auth/cilogon/redirect"),". (Ex. ",(0,o.kt)("a",{parentName:"li",href:"https://sage3.manoa.hawaii.edu/auth/cilogon.redirect"},"https://sage3.manoa.hawaii.edu/auth/cilogon.redirect"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client Type:")," Confidential"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scopes:")," Ensure ",(0,o.kt)("inlineCode",{parentName:"li"},"openid")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"email")," are selected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Refresh Tokens:")," No")),(0,o.kt)("p",null,"After Registering the Client you should be shown a ",(0,o.kt)("inlineCode",{parentName:"p"},"SECRET")," key. Copy this down somewhere safe. OpenID OIDC should email you at the ",(0,o.kt)("inlineCode",{parentName:"p"},"contact email")," from above within a day or two to confirm the registration and provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_ID"),"."),(0,o.kt)("p",null,"With in the Server Configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"configurations/node/sage3-prod.hjson")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.cilogonConfig")," paste the ",(0,o.kt)("inlineCode",{parentName:"p"},"SECRET")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," in their respective fields. Also ensure the array ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.strategies")," contains ",(0,o.kt)("inlineCode",{parentName:"p"},"cilogon")," to enable the feature. "),(0,o.kt)("p",null,"Test logging into your SAGE3 server using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Login with CILogon")," button on the homepage."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174055-dc242c68-7e7c-4fcc-9b1b-d33d8fefd0ab.png",alt:"arch-detailed",height:"300"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Which should redirect to a page that looks like: "),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174174-f25e1d05-4880-4f71-a498-668f81accae8.png",alt:"arch-detailed",height:"400"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h1",{id:"twilio"},"Twilio"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.twilio.com"},"Twilio")," provides programmable communication tools for handling the Screenshare portion of SAGE3. It's an affordable option and allows multiple screenshares within board. SAGE3 uses Twilio's ",(0,o.kt)("inlineCode",{parentName:"p"},"Video Groups")," and more information about it can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.twilio.com/en-us/video/pricing"},"here"),". "),(0,o.kt)("p",null,"To enable screen sharing on your SAGE3 server:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Signup for a Twilio Account. ",(0,o.kt)("a",{parentName:"p",href:"https://www.twilio.com/try-twilio"},"Twilio Registration"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify your account. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After creating you should be shown the page below. Select: "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Video")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Other")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"With code")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JavaScript")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"No, I want to use my own hosting service"))),(0,o.kt)("p",null,"Then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Started with Twilio"),"."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220181384-77a0e96e-45a3-4c8b-99f9-5de281399b43.png",alt:"arch-detailed",height:"500"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Auth Token & API Keys")," ")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220181596-28c7b1c8-1531-4604-9a07-5fb2ff8df734.png",alt:"arch-detailed",height:"500"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create API key")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the form."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Friendly name:")," A friendly name for this ",(0,o.kt)("inlineCode",{parentName:"li"},"API Key")," that shows in the Twilio console."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Region:")," Select the region that is closest to the majority of your SAGE3 users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Key type:")," Standard")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220181925-d4630a63-115b-4f0b-aa5a-da07da238b1c.png",alt:"arch-detailed",height:"300"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will then be shown your ",(0,o.kt)("inlineCode",{parentName:"p"},"SID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret"),". Copy these down somewhere safe. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Done"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auth Token & API Keys")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Live credentials")," copy down the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account SID"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will now have three keys/tokens. ",(0,o.kt)("inlineCode",{parentName:"p"},"Account SID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SID"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy these keys/tokens to the SAGE3 Server Configuration file located ",(0,o.kt)("inlineCode",{parentName:"p"},"/configurations/node/sage3-prod.hjson"),". Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"services.twilio")," enter the three keys/tokens into the following fields:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"accountSid: ",(0,o.kt)("inlineCode",{parentName:"li"},"Account SID")),(0,o.kt)("li",{parentName:"ul"},"apiKey: ",(0,o.kt)("inlineCode",{parentName:"li"},"SID")),(0,o.kt)("li",{parentName:"ul"},"apiSecret: ",(0,o.kt)("inlineCode",{parentName:"li"},"Secret"))),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},'Ensure the "Screenshare" app is enabled by adding "Screenshare" to the ',(0,o.kt)("inlineCode",{parentName:"li"},"features.apps")," array in the SAGE3 Server Configuration file located ",(0,o.kt)("inlineCode",{parentName:"li"},"/configurations/node/sage3-prod.hjson"),".")))}c.isMDXComponent=!0}}]);