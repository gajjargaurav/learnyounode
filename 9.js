var http = require('http');
var results = [];
var count = 0;
function getResponse(index) {
	var responsedata = '';
	http.get(process.argv[index+2], function (response){
		response.setEncoding('utf8');
	    response.on("data", function(data){
		    responsedata += data;
	    });
    
    	response.on("end", function() {
		    results[index] = responsedata;
		    count++
		      if(count == 3)
		      {
		      	for (var i = 0; i <3; i++) { console.log(results[i])}
		      }
	  	});
	});
}

for(var i=0; i< 3; i++)
{
   getResponse(i);
}