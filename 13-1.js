var http = require('http');
var url = require('url');
var director = require('director');

function parsetime () {
  var time = this.req.currentTime;
  printResult(this.res, { 
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  });
}

function unixtime () {
  var time = this.req.currentTime;
  printResult(this.res, { unixtime : time.getTime() }); 
}

function printResult(res, result){
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
}

var router = new director.http.Router({
  '/api/parsetime': { get: parsetime },
  '/api/unixtime':  { get: unixtime }
});

var server = http.createServer(function(req,res){
   if(req.method === 'GET'){
   	var parsedUrl = url.parse(req.url, true);
    req.currentTime = new Date(parsedUrl.query.iso);
    router.dispatch(req, res, function (err) {
      if (err) {
        res.writeHead(404);
        res.end();
      }
    });
  }
})

server.listen(+process.argv[2]);