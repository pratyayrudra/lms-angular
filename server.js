var PORT = 3000 || process.env.PORT;
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var DB = "mongodb://admin:abcd1234@ds021943.mlab.com:21943/library";
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', mainRouter);
app.use('/api', apiRouter);
mongoose.connect(DB, function(err) {
    if (err) {
        return err;
    } else {
        console.log('Successfully connected to ' + DB);
    }
});
app.set('views', __dirname + '/client/dist');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/client/dist')));


app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});
