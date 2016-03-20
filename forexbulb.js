var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('html', engines.nunjucks),
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));

app.get('/journal', function(req,res) {

    res.render('forexbulb');

});

app.use(function(req, res) {
    res.sendStatus(404);
});

var server = app.listen(8080, function() {
    var port = server.address().port;
    console.log('Journal is on port 8080!');
});
