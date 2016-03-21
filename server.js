// var express = require('express');
// var app = express();
// port = process.argv[2] || 8000;

// app.configure(function () {
//     app.use(
//         "/", //the URL throught which you want to access to you static content
//         express.static(__dirname) //where your static content is located in your filesystem
//     );
// });
// app.listen(port); //the port you want to use
// console.log("Express server running");

// var express = require('express');
// var app = express();

// app.get('/index.html', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// })

var express = require('express');
var app = express();
var path = require('path');
app.set('view engine','ejs');
app.set('views', __dirname+'/templates');
app.set('/css', __dirname+'/css');
app.set('/bower_components', __dirname+'/bower_components');
app.set('/images', __dirname+'/images');
// app.set('/js', __dirname+'/js');



app.use(express.static(path.join(__dirname, 'public')));
// app.use("/public/css",express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/js'));


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/theater', function (req, res) {
  res.send('theater');
});
app.listen(8080);