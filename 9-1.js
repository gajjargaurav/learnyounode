var http = require('http');
var async = require('async');
function getResponse(url, cb) {
	var responsedata = '';
	http.get(url, function (response){
		response.setEncoding('utf8');
	    response.on("data", function(data){ responsedata += data; });
       	response.on("end", function() { cb(null, responsedata); });
	});
}
async.parallel([getResponse.bind(null, process.argv[2]), getResponse.bind(null,process.argv[3]), getResponse.bind(null,process.argv[4])], function(err, results) {
	results.forEach(function(result){
			console.log(result);
	});
});