var http = require('http');
var responsedata = '';
http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
    response.on("data", function(data){
    responsedata +=data;
    });
 response.on("end", function() {
    console.log(responsedata.length);
    console.log(responsedata);
	});
});