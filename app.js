var express = require('express'),
    http = require('http');

var app = express();

app.engine('handlebars', require('express3-handlebars')({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.use(require('morgan')('dev'));

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res ){
  res.render('map');
});
app.get('/event', function(req, res ){
  res.render('event');
});
app.get('/error', function(req, res){
  throw new Error('Whoops!');
});
app.use(function(req,res){
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error('Server error:' + err.stack);
  res.render('500');
});

app.listen(3001, function(){
  console.log("IMI has started!!");
});
