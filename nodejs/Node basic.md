<h2>Basic Node.js</h2>

**1) What is Node.js ?**

	- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
	
**2) Tips for configuration in VSC**
	
	- Material Icon Theme
	- npm intellisense
	- Path intellisense
	- Auto Close Tag
	
	
**3) JSON-Settings:**
	
		"editor.formatOnSave": true,
		"eslint.alwaysShowStatus": true,
		"editor.wordWrap": "on",
		"window.zoomLevel": 1,
		"editor.fontSize": 20,
		"terminal.integrated.fontSize": 16,
		"emmet.includeLanguages": {
		   "javascript": "javascriptreact"
		},
		"editor.minimap.enabled": false,
		"editor.tabSize": 2,
		"terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
		"explorer.confirmDelete": false,
		"editor.acceptSuggestionOnCommitCharacter": false
		
**4) Node.js installation and first code**
	
	- Source: nodejs.org 
	- Hello World in Node.js
	
**5) Webserver in Node.js**
	
	- Modules
	- Modul http
	- request and response
	- require() method

**6) REPL**
	
	- Read Eval Print Loop
	- Node.js CLI
	- Useful options:
		- .editor 	(code editor in CLI)
		- 2 x TAB 	(all functions for object global)
		- global  	(object global)
		- process 	(object process)
	
**7) Object global and object process**

**8) Callback function**
	
	- A function passed into another function as an argument
	- This argument is then invoked inside the outer functon to complete some kind of routine or action
	
**9) Asynchronous in JavaScrip**
		
	- Callbacks
	- Promises
	- Aysync Await
	
**10) Callstack**

**11) Event loop and non blocking I/O**

**12) NPM**
	
	- Node Package Manager
	- Source: npmjs.com
	- npm is the world's largest software registry 
	- open source developers from every continent use npm to share and borrow packages
	- many organizations use npm to manage private development as well.
	- npm init
		- Create a package.json file
		- JSON file with all information about the project
	- Install some package (example):
		- npm i express
		- npm install express
	- Example: package colors.js
		- Source: https://www.npmjs.com/package/colors
		- npm install colors
		
**13) JSON**
	
	- JavaScriptObjectNotation
	- Methods:
		JSON.parse : JSON -> Object JS
		JSON.stringify: Object Js -> JSON

**14) Nodemon**

	- Nodemon is a tool that helps develop node.js based applications 
	- Automatically restarting the node application 
	- Restarting when file changes in the directory are detected.
	- Source: https://www.npmjs.com/package/nodemon
	
**15) Moduls in Node.js**

**16) Web Server in Node.js**
	
	- Architecture
	- Creating Web server
	- Request & Response
	- Response status:
		- 200 Status ok
		- 301 Moved Permanantly
		- 403 Forbidden (no access)
		- 404 Not found (server ok, bad url/url doesn't exist)
		- 500 Internal Server Error
	- Routing
	- API (Application Programming Interface)
	- Endpoints
		- GET
		- PUT
		- POST
		- DELETE
		- others...
	- Express.js
		- Node.js framework
		- Built on HTTP module
		- Better, faster, efficiently