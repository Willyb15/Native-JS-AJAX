//GATHER REQUESTS
_send = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function() {
  	
  
  	//COLLECT XHR PAYLOAD FOR ANALYTICS
  	if (arguments[0] !== null) {
      xhrPayloadExport = JSON.parse(arguments[0]);
      try {
        //_satellite.setVar("Analytics",xhrPayloadExport);
        _satellite.track(xhrPayloadExport.name);
        console.log(xhrPayloadExport);
      }
      catch(err) {
        console.log("No Satellite event " + xhrPayloadExport.name);
      }
    }
  	//END COLLECT XHR PAYLOAD	
  
  
	 	//PUT BACK XHR REQUEST
  	var callback = this.onreadystatechange;
  	this.onreadystatechange = function() {
			callback.apply(this, arguments);
		}
		_send.apply(this, arguments);
}
return true;



(function(open) {

  XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
     open.call(this, method, url, async, user, pass);
   //XMLHttpRequest.prototype.send = function(method, url, async, user, pass) {
   // console.log(arguments);
  //};(XMLHttpRequest.prototype.send); 
  };
})(XMLHttpRequest.prototype.open);
 
return true;