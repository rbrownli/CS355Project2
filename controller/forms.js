var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all users in a <table> */
router.get('/all', function (req, res) {
    db.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayUserTable.ejs', {rs: result});
        }
    );
});

/* Create a User */

// Create User Form
router.get('/cpu', function(req, res){
    res.render('cpuform.ejs', {action: '/forms/cpu'});
});

router.get('/motherboard', function(req, res){
    res.render('motherboardform.ejs', {action: '/forms/motherboard'});
});

router.get('/graphics', function(req, res){
    res.render('graphicsform.ejs', {action: '/forms/graphics'});
});

router.get('/cases', function(req, res){
    res.render('casesform.ejs', {action: '/forms/cases'});
});




// Save User to the Database
router.post('/cpu', function (req, res) {
    db.CPUInsert( req.body, function (err, result) {
            if (err) throw err;

            if(result.CName!= 'undefined') {
                var placeHolderValues = {
                    CName: req.body.CName,
                    YearReleased: req.body.YearReleased,
                    Cores: req.body.Cores,
                    ClockSpeed: req.body.ClockSpeed,
                    Cache: req.body.Cache,
                    SocketType: req.body.SocketType
                };
                res.render('displayCPUFormData.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});


router.post('/motherboard', function (req, res) {
    db.MotherboardsInsert( req.body, function (err, result) {
            if (err) throw err;

            if(result.Name!= 'undefined') {
                var placeHolderValues = {
                    Name: req.body.Name,
                    YearReleased: req.body.YearReleased,
                    Manufacture: req.body.Manufacture,
                    USB: req.body.USB,
                    Size: req.body.Size,
                    Expansion: req.body.Expansion,
                    SocketType: req.body.SocketType
                };
                res.render('displayMotherboardFormData.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});




router.post('/graphics', function (req, res) {
    db.GraphicsInsert( req.body, function (err, result) {
            if (err) throw err;

            if(result.Name!= 'undefined') {
                var placeHolderValues = {
                    Name: req.body.Name,
                    Chipset: req.body.Chipset,
                    ClockSpeed: req.body.ClockSpeed,
                    VRAM: req.body.VRAM,
                    YearReleased: req.body.YearReleased,
                    Expansion: req.body.Expansion                  
                };
                res.render('displayGraphicsFormData.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});


router.post('/cases', function (req, res) {
    db.CasesInsert( req.body, function (err, result) {
            if (err) throw err;

            if(result.Name!= 'undefined') {
                var placeHolderValues = {
                    Name: req.body.Name,
                    YearReleased: req.body.YearReleased,
                    Manufacture: req.body.Manufacture,
                    Size: req.body.Size
                                 
                };
                res.render('displayCasesFormData.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});



















router.post('/singleuser', function (req, res) {
    db.Insert( req.body, function (err, result) {
            if (err) throw err;

            if(result.CName!= 'undefined') {
                var placeHolderValues = {
                    CName: req.body.CName,
                    YearReleased: req.body.YearReleased,
                    Cores: req.body.Cores,
                    ClockSpeed: req.body.ClockSpeed,
                    Cache: req.body.Cache,
                    SocketType: req.body.SocketType
                };
                res.render('displayUserInfo.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});

router.post('/cpuinsert', function (req, res) {
    db.CPUInsert( req.body, function (err, result) {
            if (err) throw err;

            if(result.CName!= 'undefined') {
                var placeHolderValues = {
                    CName: req.body.CName,
                    YearReleased: req.body.YearReleased,
                    Cores: req.body.Cores,
                    ClockSpeed: req.body.ClockSpeed,
                    Cache: req.body.Cache,
                    SocketType: req.body.SocketType
                };
                res.render('cpus.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});


router.post('/motherboardinsert', function (req, res) {
    db.MotherboardsInsert( req.body, function (err, result) {
            if (err) throw err;

            if(result.CName!= 'undefined') {
                var placeHolderValues = {
                    Name: req.body.Name,
                    YearReleased: req.body.YearReleased,
                    Manufacture: req.body.Manufacture,
                    USB: req.body.USB,
                    Size: req.body.Size,
                    Expansion: req.body.Expansion,
                    SocketType: req.body.SocketType
                };
                res.render('motherbaordform.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});










/* View a single user's information */
/* INCOMPLETE */
router.get('/', function (req, res) {

console.log(req.query)


   
	db.GetAccountID(req.query.AccountID,
	function(err, result)
	{
	
	if(err)
	{
	throw err;
	}
	console.log(result);
	res.render('displayUserInfo.ejs', {rs: result});
	/*//if(result.length === 0){
		//res.send("User not found :(");}
		
	 if(result[0].email !="undefined")
	
		{
			  var placeHolderValues = {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    post: req.body.post
                };
		
			
			
			}
		
	else
	{
		res.send("User not found");};
	
	
	}
	*/
	}
	);
	
});


module.exports = router;

