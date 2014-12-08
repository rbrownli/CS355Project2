var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

// Return the text Hello, World!.
router.get('/hello', function(req, res){
    res.send('Hello, World!');
});

/* index file that links to various examples */
router.get('/', function(req, res){
    // use render instead of send, to replace the placeholders in index.ejs with the Key Value Pairs (KVP).
    res.render('index');
});

/* Example 1 - HTML Form w/o Ajax or Database Interaction */
router.get('/cpuform', function(req, res){
    res.render('cpuform.ejs', {action: '/displayFormData'});
});

router.get('/motherboardform', function(req, res){
    res.render('motherboardform.ejs', {action: '/displayFormData'});
});

router.get('/graphicsform', function(req, res){
    res.render('graphicsform.ejs', {action: '/displayFormData'});
});

router.get('/casesform', function(req, res){
    res.render('casesform.ejs', {action: '/displayFormData'});
});


/* Example 1 - Display form data submitted above */
router.post('/displayFormData', function(req, res) {
    console.log(req.body);
    res.render('displayFormData.ejs', req.body );
});

module.exports = router;

