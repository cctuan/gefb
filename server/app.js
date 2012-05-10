var io = require('socket.io'),
		express = require('express'),
		stylus = require('stylus');


var	app = express.createServer(),
		io = io.listen(app);

app.configure(function(){
	app.use(express.static(__dirname+'/pubic'));

});


app.listen(3000,function(){
	var addr = app.address();
	console.log('app is listening on http:'+addr.address+':'+addr.port);
});
