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

router
  .route('/login')
  .get(helper.requestLogin)
  .post(passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/dashboard' }));

module.exports = router;
