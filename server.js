
var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var hbs = require('hbs');



app.engine('handlebars', 
	exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function(req, res){
	res.render('index')
});

app.get('/film', function(req, res){
	var user = {};
	res.render('film')
});

app.get('/theater', function(req, res){
	var user = {};
	res.render('theater', user)
});

app.get('/music', function(req, res){
	var user = {}  	
	res.render('music', user)
});

app.get('/code', function(req, res){
	var user = {};
	res.render('code', user)
});

app.get('/about', function(req, res){
	var user = {};
	res.render('about',user)
});



app.use('/public', express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');

// test

var port = Number(process.env.PORT || 8080);
app.listen(port, function(){
	console.log('Hi There! Head over to port 8080 :)')
});
