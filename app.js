const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const fs = require('fs');

const PORT = process.env.PORT || 3000;

var controllers = require('./routers');


var app = express();
//set morgan to log
app.use(logger('dev'));
//set middle_ware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(session({
    secret : "yummyteam",
    cookie:  {
        maxAge: 1000*60*5,
        secure : true,
    },
    resave : false,
    saveUninitialized : true,
}))
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

//LocalStrategy
passport.use(new LocalStrategy((username, password, done) => {
    fs.readFile('./fakeData.json',(err, data)=>{
        let db = JSON.parse(data);
        let userDocument = db.find(user => user.username == username);
        if(userDocument && userDocument.password == password){
            return done(null, userDocument);
        }else{
            return done(null, false);
        }
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((name, done)=>{
    fs.readFile('./fakeData.json', (err, data)=>{
        let db = JSON.parse(data);
        let userDocument = db.find(user => user.username == name);
        if(userDocument){
            return done(null, userDocument);
        }else{
            return done(null, false);
        }
    });
});
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