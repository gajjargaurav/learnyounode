var net = require('net');
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function currentdateTime(){
		var d = new Date();
		return d.getFullYear() + '-' 
		+ zeroFill(d.getMonth() + 1) + '-'   // month starts at zero so should add 1 to get the actual month
		+ zeroFill(d.getDate()) + ' '
		+ zeroFill(d.getHours()) + ':'
		+ zeroFill(d.getMinutes());
} 

var server = net.createServer(function (socket){
	socket.end(currentdateTime() + '\n');
});
server.listen(+process.argv[2]);
