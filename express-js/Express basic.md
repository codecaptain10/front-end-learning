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
			
		
			
	
	

