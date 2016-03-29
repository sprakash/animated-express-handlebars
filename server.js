
var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.engine('handlebars', 
	exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('index')
});

app.get('/about', function(req, res){
	res.render('about')
})


app.use('/public', express.static('public'));


var port = Number(process.env.PORT || 8080);
app.listen(port, function(){
	console.log('Hi There! Head over to port 8080 :)')
});