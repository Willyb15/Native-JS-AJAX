(function(open) {
  XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
      console.log(this,"this is the protoype open this")
      console.log(url, "this is in the prototype")
    //open.call(this, method, url, async, user, pass);
     open.call(this, method, url, async, user, pass);
     return open.apply(this,arguments);
     console.log(arguments);
      console.log(this, "this is this under the open")
      console.log(url, "this is the url under the open")
  };
})(XMLHttpRequest.prototype.open);
 
return true;



(function(open) {
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener("readystatechange", function() {
            console.log(this.readyState);
        }, false);
        open.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.open);

(function(send) {
  XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
    send.call(this, method, url, async, user, pass);
    console.log(arguments);
    //return send.apply(this,arguments)
   // console.log(arguments);
    console.log(data);
  };
})(XMLHttpRequest.prototype.open);
 
return true;


 XMLHttpRequest.prototype.send = function(method, url, async, user, pass) {
    console.log(arguments);
  };