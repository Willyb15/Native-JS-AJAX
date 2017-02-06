# Native-JS-AJAX
#Experimenting with Native JS Ajax functions  - 
```js
XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.open
```
##I was trying to track server calls from an React.js Application that was compiling data via an anomymous function in the app.js file. In order to capture this put in a js file to listen for these calls, intercept them, save the XHR payload as a variable, then put the call back in order to be sent.

```js
  	var callback = this.onreadystatechange;
  	this.onreadystatechange = function() {
			callback.apply(this, arguments);
		}
		_send.apply(this, arguments);
}
return true;
```
