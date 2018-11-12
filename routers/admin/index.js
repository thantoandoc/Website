const express = require("express");
const passport = require('passport');
var router = express.Router();


const helper = require('./helper');

function isAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router
  .route("/")
  .get(isAuth, (req, res) => {
    res.redirect('/dashboard');
  });

router
  .route("/dashboard")
  .get((req, res)=>{
    res.render('dashboard');
  })
  .post()
  .put()
  .delete();

// router
//   .route('/login')
//   .get(helper.requestLogin)
//   .post(passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/dashboard' }));

router.route('/users')
.get((req, res)=>{
  res.render('user');
});

router.route('/tables').get((req, res)=>{
  res.render('table');
});

router.route('/create_user').get((req, res)=>{
  res.render('create_user');
});

router.route('/databases').get((req, res)=>{
  res.render('database');
});

router.route('/add_food').get((req, res)=>{
  res.render('add_food');
});


router.route('/bills').get((req, res)=>{
  res.render('bills');
});

module.exports = router;
