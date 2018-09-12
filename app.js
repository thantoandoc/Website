const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
var controllers = require('./routers');
var app = express();
//set morgan to log
app.use(logger('dev'));
//set middle_ware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//set view engine
app.set('/views',express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

// set assest
app.use('/public', express.static(__dirname + '/public'));

//router

app.use(controllers);

app.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}`);
});