var sio = require('socket.io'),
		express = require('express'),
		stylus = require('stylus');


var	app = express.createServer();

//Configure

app.configure(function(){
	app.use(express.static(__dirname+'/public'));

});

//Route

app.get('/',function(req,res){
	res.render('index',{layout:false});
});
//Listen
app.listen(3000,function(){
	var addr = app.address();
	console.log('app is listening on http:'+addr.address+':'+addr.port);
});

var	io = sio.listen(app);

io.sockets.on('connection',function(socket){
	socket.emit('msgres',{message:'george'});
	socket.on('my event',function(data){
		console.log(data);
	});
});
