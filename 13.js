var http = require('http');
var url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function(req,res){
   if(req.method === 'GET'){
   	var parsedUrl = url.parse(req.url, true);
   	var currentTime = new Date(parsedUrl.query.iso);
   	var result;
   
      if(parsedUrl.pathname === '/api/parsetime'){
         result = parsetime(currentTime)
      } 
      else if(parsedUrl.pathname === '/api/unixtime'){
      	result = unixtime(currentTime)
      }  	

      if(result)
      {
       res.writeHead(200, { 'Content-Type': 'application/json' })
       res.end(JSON.stringify(result))
      }
      else
      {
      	res.writeHead(404)
      	res.end()
      }
	}
})

server.listen(+process.argv[2]);