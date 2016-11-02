var path = require('path');/*eslint no-unused-vars:0*/
var express = require('express');
var api = require('./api');
var bodyParser = require('body-parser');
var port = 3001;

var app = express();

app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});
