var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade")

app.get('/', function (req, res) {
    res.render('alphazero');
});

app.get('/about-me', function (req, res) {
    res.render('about-me');
});

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 5000, function () {
    console.log('Node server is running..');
});
