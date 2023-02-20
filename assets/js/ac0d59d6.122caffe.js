"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(3117),a=(n(7294),n(3905));const r={},i="Requirements",l={unversionedId:"wiki/Server-Deployment",id:"wiki/Server-Deployment",title:"Requirements",description:"- Windows, MacOS, or Linux",source:"@site/docs/wiki/Server-Deployment.md",sourceDirName:"wiki",slug:"/wiki/Server-Deployment",permalink:"/docs/wiki/Server-Deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wiki/Server-Deployment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SAGEBase",permalink:"/docs/wiki/SAGEBase"}},s={},p=[{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Ubuntu",id:"ubuntu",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows, MacOS, or Linux"),(0,a.kt)("li",{parentName:"ul"},"Docker"),(0,a.kt)("li",{parentName:"ul"},"Fully Qualified Domain Name (FQDN)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"i.e. A hostname recognized on a public network or your institutions private network",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ex. myserver.mycompany.com"),(0,a.kt)("li",{parentName:"ul"},"Ex. myserver.cs.university.edu"))))),(0,a.kt)("li",{parentName:"ul"},"SSL Certificates for server"),(0,a.kt)("li",{parentName:"ul"},"Optional",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Google OAuth Credentials"),(0,a.kt)("li",{parentName:"ul"},"CILogin OAuth Credentials"),(0,a.kt)("li",{parentName:"ul"},"Twilio API Registration")))),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop for Windows")," ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Windows Subsystem for Linux WSL using distribution Ubuntu 22.04"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell\nwsl --install -d Ubuntu22.04\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Install NVM within the WSL subsystem")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Ensure Curl is installed\nsudo apt-get install curl\n\n# Curl the NVM Installer\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash\n\n# Close Powershell and reopen to verify NVM installed\ncommand -v nvm\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Install NodeJS within the WSL subsystem")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Install Node v18.xx\nnvm install v18\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1ILDxFNR4dEpEWqoRBdcRqZ49Ql-wkBra/view?usp=sharing"},"SAGE3 Server Package")," and extract it within the WSL subsystem")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Move the downloaded file to your user's home folder\nmv SAGE3-1.0-linux-amd64.tgz ~\ncd ~\n\n# Extract file\ntar xvfz SAGE3-1.0-linux-amd64.tgz\ncd SAGE3-1.0\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Copy your SSL Certificates to the configurations folder. There should be two files, your PRIVATE key and the CERTIFICATE file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Copy SSL Certs to the SAGE3 Keys folder. Remember these names for a later step.\ncp PRIVATE_KEY_FILE ~/SAGE3-1.0/configurations/node/keys\ncp CERTIFICATE_FILE ~/SAGE3-1.0/configurations/node/keys\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Copy the SSL Files to the JupyterLab Folder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change to the SAGE3 Server Directory\ncd ~/SAGE3-1.0\n\n# Copy SSL Files\ncp ./configurations/node/keys/PRIVATE_KEY_FILE ./configurations/jupyter/conf/keys/private-key.key \ncp ./configurations/node/keys/CERTIFICATE_FILE ./configurations/jupyter/conf/keys/certificate.crt \n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Generate JWT Keys and Token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Switch to the SAGE3 Node Keys Directory\ncd ~/SAGE3-1.0/configurations/node/keys\n\n# Generate JWT Keys and Token\n./genJWT_keys.sh\n./genJWT_token.sh\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Edit the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," File")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change directory to the SAGE3 Server Folder\ncd ~/SAGE3-1.0\n\n# Edit .env file with your preferred editor\nvim .env\nHOST=YOUR_SERVERS_HOST_NAME\nFUNCX_SDK_CLIENT_ID= # This can be ignored for now\nFUNCX_SDK_CLIENT_SECRET= # This can be ignored for now\nTOKEN= # token value copied without \u201c\u201d from: configurations/node/keys/token.json\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Edit the Configuration file ",(0,a.kt)("inlineCode",{parentName:"li"},"sage3-prod.hjson"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change directory to the SAGE3 Server Node Folder\ncd ~/SAGE3-1.0/configurations\n\n# Edit the sage3-prod.hsjon file with your preferred editor\n# The file is documented with instructions.\nvim sage3-prod.hjson\n")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start Docker Desktop within Windows")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pull the Docker Images"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change to the SAGE3 Server Directory\ncd ~/SAGE3-1.0\n\n# Pull images\ndocker compose pull\n\n# Might take a while but results should be:\nPulling redis-server ... done\nPulling node-server  ... done\nPulling python       ... done\nPulling jupyter      ... done\n")),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"Start the Server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Open Powershell and switch to WSL\nwsl\n\n# Change to the SAGE3 Server Directory\ncd ~/SAGE3-1.0\n\n# Start Server\n./GO\n\n# To Stop the Server \n./STOP\n")),(0,a.kt)("h2",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"// TODO"),(0,a.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,a.kt)("p",null,"// TODO"),(0,a.kt)("h1",{id:"config-file"},"Config File"),(0,a.kt)("p",null,"The Server Configuration file is located here: ",(0,a.kt)("inlineCode",{parentName:"p"},"/configurations/node/sage3-prod.hsjon"),"."),(0,a.kt)("p",null,"This file allows you to configure your server to your specific needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   // Is the server in production mode. \n   // Leave as true if you are deploying your server.\n  "production": true,\n\n   // Name of the server to show in the UI\n  "serverName": "My Local Server",\n\n  // HTTP Settings\n  "port": 443,\n  "tlsVersion": "TLSv1.2",\n\n  // SSL Certificate names\n  "ssl": {\n    // Located in the `/configurations/node/keys\' folder\n    "certificateFile": "localhost-server.crt",\n    "certificateKeyFile": "localhost-server.key"\n  },\n\n  // These can be left alone, they are used to find the assets\n  "root": ".",\n  "public": "dist/apps/homebase/assets",\n  "assets": "dist/apps/webapp/assets/",\n\n  // Redis Database Config\n  "redis": {\n    // The Redis Database URL.\n    // If using the default deployment, leave as such.\n    "url": "redis://redis-server:6379"\n  },\n\n // External Services\n "services": {\n    // To enable screen sharing you must register for a Twilio account.\n    // Video Rooms is the Twilio feature we use for ScreenSharing.\n    // After setting this, ensure \'Screenshare\' is in the \'features.apps` array.\n    twilio: {\n      // Your Account SID from www.twilio.com/console\n      accountSid: "", \n      // API Key. \n      apiKey: "", \n      // API Secret\n      apiSecret: "" \n    }\n  }, \n\n  // How to enable/disable some features for safety\n  "features": {\n    // Enable Plugins. Allows uploading of Webapps.\n    plugins: true, \n    // Which Apps to enable.  Available Apps: \n    // ChartMaker, Leaflet, JupyterLab, Notepad, SageCell, KernelDashboard, Stickie, Screenshare, Webview\n    apps: ["ChartMaker", "Leaflet", "Notepad", "SageCell", "KernelDashboard", "Stickie", "Screenshare", "Webview"],\n  },\n\n  // Auth Configuration\n  "auth": {\n    // Secret HASH for the sessions. Change this to something unique.\n    "sessionSecret": "SUPERSECRET!!$$",\n    // Max age for a session per user. In milliseconds. 7 days\n    "sessionMaxAge": 604800000,\n    // Which login strategies to enable for the server. \n    // If you enbable them ensure you add the relevant config information below.\n    "strategies": [\n      "google",\n      "cilogon",\n      "guest",\n      "jwt"\n    ],\n    // A List of emails to enable those users to be admins.\n    // This will enable a ADMIN page for these users.\n    "admins": [],\n    // Guest configuration\n    "guestConfig": {\n      // Endpoint for the guest login. No need to change this\n      "routeEndpoint": "/auth/guest"\n    },\n    // Google configuration\n    "googleConfig": {\n      // Client ID from the Google Developer Console\n      "clientID": "",\n      // Client Secret from the Google Developer Console\n      "clientSecret": "",\n      // Endpoint for the google login\n      "routeEndpoint": "/auth/google",\n      // Callback URL for the google login\n      "callbackURL": "/auth/google/redirect"\n    },\n    // JWT configuration\n    "jwtConfig": {\n      // The issuer of the JWT\n      "issuer": "sage3app@gmail.com",\n      // The audience of the JWT\n      "audience": "sage3.app",\n      // Public key location. Leave this alone\n      "publicKey": "./keys/jwt_public.pem",\n      // JWT Route endpoint\n      "routeEndpoint": "/auth/jwt"\n    },\n    // CILogon configuration\n    "cilogonConfig": {\n      // Client ID from CILogon\n      "clientID": "",\n      // Client Secret from CILogon\n      "clientSecret": "",\n      // Endpoint for the cilogon login\n      "routeEndpoint": "/auth/cilogon",\n      // Callback URL for the cilogon login\n      "callbackURL": "/auth/cilogon/redirect"\n    }\n  },\n  // Namespace for signing uuid v5 keys. Change to a unique value.\n  "namespace": "XXX"\n}\n')),(0,a.kt)("h1",{id:"google-login"},"Google Login"),(0,a.kt)("p",null,"To enable Google Login for users from the Login page you must setup a Google Cloud account. Google OAuth is a free service that allows users to sign into SAGE3 with their Google Accounts."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login to your Google account from the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud Platform")," website.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Console")," in the upper right corner."))),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174990-6c6e0403-c080-4b01-97dd-c276bdfc7caf.png",alt:"arch-detailed",height:"100"}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"New Project")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Manage Resources")," page. Can be found using the search box at the top of the page. ")),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220175501-4015e780-f944-446f-bc14-d20bdeea2016.png",height:"100"}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE PROJECT"),".")),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220175717-04355645-d9ce-47de-bc9b-6d504fc5cc31.png",height:"100"}),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Enter the information and click create. (The information here is just organization/hierarchy information.) It might take a few minutes for it to be created.")),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220175865-9d8460a5-eefc-40c1-93b2-7425c2c92511.png",height:"300"}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go back to the homepage by clicking the Google Cloud icon in the upper left corner.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the drop down menu at the top of the page select your newly created project."))),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220176270-a99e4da6-95c1-487d-8095-8b5a8f5db6e0.png",height:"100"}),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"Credentials")," page from the main dropdown menu.")),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220176765-5e054ba4-9eb2-485e-a4ad-6cb38f517ab2.png",height:"300"}),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Credentials")," and select ",(0,a.kt)("inlineCode",{parentName:"li"},"OAuth client ID"))),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220177297-d41bb7a5-9d9d-41c3-8910-50a77e5cba3b.png",height:"300"}),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If it requests to ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure Consent Screen")," click the button. If not continue to step 15.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"OAuth Consent Screen. Select External and click create. Enter the information below. All the other fields can be left blank."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"App name:"),"  The Name of the SAGE3 Server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User support email:")," The email of the person managing your SAGE3 server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authorized Domain:")," The ",(0,a.kt)("inlineCode",{parentName:"li"},"domain")," of your SAGE3 Server. (Ex. For ",(0,a.kt)("inlineCode",{parentName:"li"},"https://sage3.manoa.hawaii.edu")," it is ",(0,a.kt)("inlineCode",{parentName:"li"},"hawaii.edu"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Developer contact information:")," The email of the person managing your SAGE3 server.")),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"Scopes. Click ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD OR REMOVE SCOPES")," and select ",(0,a.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.email")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.profile")," then click ",(0,a.kt)("inlineCode",{parentName:"li"},"UPDATE"),". Then click ",(0,a.kt)("inlineCode",{parentName:"li"},"SAVE AND CONTINUE"))),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220178116-a4ca5ae1-c1a5-4da8-a4e5-21256484cfb3.png",height:"300"}),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test Users. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"SAVE AND CONTINUE"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Summary. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"BACK TO DASHBOARD"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create OAuth client ID. "))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Application Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Web application"),".  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name:")," The name of your OAuth 2.0 client. This name is only used to identify the client in the console and will not be shown to end users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authorized JavaScript origin:")," Click ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD URI")," and enter you server's URL. (Ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://sage3.manoa.hawaii.edu"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authorized Redirect URIs:")," Click ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD URI")," and enter you server's URL with the route ",(0,a.kt)("inlineCode",{parentName:"li"},"/auth/google/redirect")," attached. (Ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://sage3.manoa.hawaii.edu/auth/google/redirect"),")")),(0,a.kt)("ol",{start:16},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE")," and you should be shown the following screen with your ",(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_SECRET"),". ")),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220179572-9c39ae47-40d9-468f-8365-e118ec722048.png",height:"300"}),(0,a.kt)("ol",{start:17},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_SECRET")," into the SAGE3 Server Configuration file located here: ",(0,a.kt)("inlineCode",{parentName:"p"},"/configurations/node/sage3-prod.hjson"),". They should be copied in the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.googleConfig")," fields under ",(0,a.kt)("inlineCode",{parentName:"p"},"clientID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clientSecret"),". ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure within the SAGE3 Server Configuration you have ",(0,a.kt)("inlineCode",{parentName:"p"},"google")," listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.strategies")," array."))),(0,a.kt)("p",null,"Test logging into your SAGE3 server using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Login with Google")," button on the homepage."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174055-dc242c68-7e7c-4fcc-9b1b-d33d8fefd0ab.png",alt:"arch-detailed",height:"300"}),(0,a.kt)("h1",{id:"cilogon"},"CILogon"),(0,a.kt)("p",null,"To enable CILogon Login for users from the Login page you must request a CILogon. CILogon provides a standards-compliant OpenID Connect (OAuth 2.0) interface to federated authentication for cyberinfrastructure."),(0,a.kt)("p",null,"Instructions to do so are located here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cilogon.org/oidc"},"CILogon OpenID Connect (OAuth 2.0)")),(0,a.kt)("p",null,"To register, use this link: ",(0,a.kt)("a",{parentName:"p",href:"https://cilogon.org/oauth2/register"},"CILogon Client Registration")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client Name:")," The Client Name is displayed to end-users on the Identity Provider selection page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contact Email:")," This email address is used for operational notices regarding your client and for validating your affiliation. A mailing list address for your operations team is recommended."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Home URL:")," URL of the Server (Ex. ",(0,a.kt)("a",{parentName:"li",href:"https://sage3.manoa.hawaii.edu"},"https://sage3.manoa.hawaii.edu"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Callback URLs:")," To ensure CILogon redirects back to the SAGE3 server after the user logins, postfix your server URL with: ",(0,a.kt)("inlineCode",{parentName:"li"},"/auth/cilogon/redirect"),". (Ex. ",(0,a.kt)("a",{parentName:"li",href:"https://sage3.manoa.hawaii.edu/auth/cilogon.redirect"},"https://sage3.manoa.hawaii.edu/auth/cilogon.redirect"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client Type:")," Confidential"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scopes:")," Ensure ",(0,a.kt)("inlineCode",{parentName:"li"},"openid")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"email")," are selected."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Refresh Tokens:")," No")),(0,a.kt)("p",null,"After Registering the Client you should be shown a ",(0,a.kt)("inlineCode",{parentName:"p"},"SECRET")," key. Copy this down somewhere safe. OpenID OIDC should email you at the ",(0,a.kt)("inlineCode",{parentName:"p"},"contact email")," from above within a day or two to confirm the registration and provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_ID"),"."),(0,a.kt)("p",null,"With in the Server Configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"configurations/node/sage3-prod.hjson")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.cilogonConfig")," paste the ",(0,a.kt)("inlineCode",{parentName:"p"},"SECRET")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," in their respective fields. Also ensure the array ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.strategies")," contains ",(0,a.kt)("inlineCode",{parentName:"p"},"cilogon")," to enable the feature. "),(0,a.kt)("p",null,"Test logging into your SAGE3 server using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Login with CILogon")," button on the homepage."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174055-dc242c68-7e7c-4fcc-9b1b-d33d8fefd0ab.png",alt:"arch-detailed",height:"300"}),(0,a.kt)("p",null,"Which should redirect to a page that looks like: "),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/19752298/220174174-f25e1d05-4880-4f71-a498-668f81accae8.png",alt:"arch-detailed",height:"400"}),(0,a.kt)("h1",{id:"twilio"},"Twilio"),(0,a.kt)("h1",{id:"custom-branch-deployment"},"Custom Branch Deployment"))}u.isMDXComponent=!0}}]);