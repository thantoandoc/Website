

requestLogin = (req, res) => {
    res.render('login');
}
handleLogin = (req, res, next) => {
    console.log(req.body);
    
    firebase
        .auth()
        .signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(data => {
            req.cookies.accessToken = data.user.qa;
            res.redirect("/dashboard");
        })
        .catch(err => res.json(err));
}
module.exports = {
    requestLogin,
    handleLogin,
    
}