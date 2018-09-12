const express = require('express');
var router = express.Router();

router.route('/')
.get((req, res)=>{
    res.render('index');
})
.post((req, res) => {
    var account = req.body;
    console.log(account);
    
})
.delete()
.put();
router.route('/dashboard')
.get()
.post()
.put()
.delete();

module.exports = router;