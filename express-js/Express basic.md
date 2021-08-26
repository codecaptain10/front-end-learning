<h2>Express.js - Node.js Framework</h2>

**What is Express.js ?**

	- Express is a minimal and flexible Node.js web application framework.
	- Express provides a robust set of features for web and mobile applications.
	- Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
	- Many popular frameworks are based on Express.
	
**Source**
	
	- Documentation and API
	- Source: https://expressjs.com/

**Why Express.js ?**

	- Web framework for Node.js
	- Fast
	- Unopinionated
	- Minimalist
	- Web Applications
	- APIs
	- Performance
	- Frameworks
	
**Properties**
	
	- Object Request
		- That what comes from server
		- Information about client 
		  (but also few information about user) 
		- Few methods and poperties
			- req.ip (Client's IP)
			- req.ips (Orginal IP)
			- req.method (used HTTP Method)
			- req.url / req.orginalURL / req.path (Path)
			- req.protocol / req.server (Use server HTTP/HTTPS ?)
			- req.query (parameters from request)
			- req.get() (download headers sended from client)
	- URL parameters and correct URL generator
		- encodeURIComponent
		- URLSearchParams
	- Routing and Object params
		- Methods:
			- GET	(get information about object)
			- POST	(add new user/object)
			- PATCH	(Update selected elements)
			- PUT	(Update/replace old object with new)
			- DELETE(Remove object/user)
			- A few others ...
		- Parameters in URL adresses
			- Syntax: <path>/:<value>.../:<value> ...
			- Example: /static/path/:value1/:value2
	- Object Response
		- Send answer
			- res.write() & res.end() 	(Node.js)
			- res.send()				(Express.js)
		- Method res.send()
			- Better as res.write & res.end()
			- Automatically change Content-Type to "text/html"
			- Automatically change setting to UTF-8
			- Automatically set Content-Length
			- We can send: String, Buffer, array/Object
		- Method res.json()
			- Special method to send JSON
			- With res.json we also become JSON
		- Method res.location()
			- Redirection to adress
			- Take new adress as argument
			- Require to select status (301, 302, ...)
		- Method res.redirect()
			- Also to redricection to other adress
			- Easy as res.location()
			- Doesn't requieres to set up status
			- A lot of possibilities to go back and go forward
		- HTTP Status codes
			- 301 (permanent redirect)
			- 302 (non-permanent redirect)
			- 303 
			- 307 
	- Send files in Express.js
		- Better as in Node.js
		- Method res.sendFile()
		- Method res.attachment()
		- Method res.download()
		- All needed information in docs
	- Working with headers
		- Headers
		- Cookies
		- Method res.set()
			- Using of a headerin our response
			- First set headers, next the response
		- Method res.headersSent()
		- Method res.cookies()
			- Setting cookies is setting headers
			- Example: res.cookie('ad_id', '123')
			- Cookies options:
				- domain	(To wchich domain we send)
				- expires	(How long should be rememberd)
				- maxAge	
				- httpOnly
				- others ...
		- Method res.clearCookie()
			- Clear / remove cookie
			
**Middleware**

		- Important to learn!
		- DOCS: https://expressjs.com/en/guide/using-middleware.html
		- Middleware functions are functions that have access:
			- to the request object (req), 
			- the response object (res), 
			- and the next middleware function 
			in the application’s request-response cycle. 
		- The next middleware function is commonly denoted by a variable named next.
		- Examples:
			- Middleware JSON: app.use(express.json())
			- Middleware static: app.use(express.static())
			- Cookies: app.use(cookieParser())
		- An Express application can use the following types of middleware:
			- Application-level middleware
			- Router-level middleware
			- Error-handling middleware
			- Built-in middleware
			- Third-party middleware
			
**Express Application Structure** 

	- Example Express.js Application Structure
		|- app.js
		|- package.json
		|- public
		|  |- index.html
		|  |- images
		|  |- javascripts
		|  |- stylesheets
		|     |- style.css
		|
		|- routes
		   |- index.js
		   |- users.js
		   
	- Generator
		- Generator to basic Express.js application structure
		- Install: npm install express-generator -g
		- New project: express --no-view --git <Project/folder name>
			
		
			
	
	

