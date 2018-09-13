const express = require("express");
var router = express.Router();

// const firebase = require("firebase-admin");
// var serviceAccount = require("./serviceAccountKey.json");
// firebase.initializeApp({
//   credential: firebase.credential.cert(serviceAccount),
//   databaseURL: "https://yummy-application.firebaseio.com"
// });
const firebase = require("../../config/firebaseConfig");

router
  .route("/")
  .get((req, res) => {
    if(!req.cookies.accessToken) {
        res.redirect("/dashboard");
    } else {
        res.render("index");
    }
  })
  .post((req, res) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(req.body.email, req.body.password)
      .then(data => {
        req.cookies.accessToken = data.user.qa;
        res.redirect("/dashboard");
      })
      .catch(err => res.json(err));
  })
  .delete()
  .put();
router
  .route("/dashboard")
  .get()
  .post()
  .put()
  .delete();

module.exports = router;
