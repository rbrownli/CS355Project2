// import libraries
var express = require('express'),
    ejs     = require('ejs'),
    bodyParser = require('body-parser'),
	mysql      = require('mysql'),
	 http       = require('http'),
    path       = require('path'),
	connect    = require('connect');
// import routes
var routes = require('./controller/index');
var account  = require('./controller/forms');

// initialize express web application framework
// http://expressjs.com/
var app = express();

// these two lines replace bodyParser()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// configure static directory
app.use(express.static('public'));

//configure view rendering engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// subtitle values access via the header template
app.set('subtitle', 'Lab 16');

//configure routes
app.use('/', routes);
app.use('/forms', account);



var connection = mysql.createConnection({
        host     : 'cwolf.cs.sonoma.edu',
        user     : 'rbrownlie',
        password : '003603527',
    });
connection.query('USE rbrownlie', function (err) {
	if (err) throw err;
});


app.get('/CPUs', function(req, res){
	connection.query("SELECT * FROM CPUs", function (err, rows){
		if (err) console.log(err);
		res.send(rows);
	});
});

app.get('/Motherboards', function(req, res){
	connection.query("SELECT * FROM Motherboards", function (err, rows){
		if (err) console.log(err);
		res.send(rows);
	});
});



app.get('/Graphics', function(req, res){
	connection.query("SELECT * FROM Graphics", function (err, rows){
		if (err) console.log(err);
		res.send(rows);
	});
});



app.get('/Cases', function(req, res){
	connection.query("SELECT * FROM Cases", function (err, rows){
		if (err) console.log(err);
		res.send(rows);
	});
});










app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.get('/public/style.css', function(req, res) {
	res.sendfile(__dirname + '/public/style.css');
});

app.get('/index.html', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/about.html', function(req, res) {
	res.sendfile(__dirname + '/about.html');
});

app.get('/tables.html', function(req, res) {
	res.sendfile(__dirname + '/tables.html');
});

app.get('/forms.html', function(req, res) {
	res.sendfile(__dirname + '/forms.html');
});

app.get('/images/favicon.ico', function(req, res) {
	res.sendfile(__dirname + '/images/favicon.ico');
});

app.get('/favicon.ico', function(req, res) {
	res.sendfile(__dirname + '/favicon.ico');
});


app.get('/cpus.html', function(req, res) {
	res.sendfile(__dirname + '/cpus.html');
});

app.get('/motherboards.html', function(req, res) {
	res.sendfile(__dirname + '/motherboards.html');
});

app.get('/graphics.html', function(req, res) {
	res.sendfile(__dirname + '/graphics.html');
});

app.get('/cases.html', function(req, res) {
	res.sendfile(__dirname + '/cases.html');
});
app.get('/cpuinsert.php', function(req, res) {
	res.sendfile(__dirname + '/cpuinsert.php');
});



app.get('/css/banner.css', function(req, res) {
	res.sendfile(__dirname + '/css/banner.css');
});

app.get('/css/content.css', function(req, res) {
	res.sendfile(__dirname + '/css/content.css');
});

app.get('/css/slideshow.css', function(req, res) {
	res.sendfile(__dirname + '/css/slideshow.css');
});


app.get('/css/base.css', function(req, res) {
	res.sendfile(__dirname + '/css/base.css');
});

app.get('/js/analytics.js', function(req, res) {
	res.sendfile(__dirname + '/js/analytics.js');
});

app.get('/js/jquery-1.3.2.min.js', function(req, res) {
	res.sendfile(__dirname + '/js/jquery-1.3.2.min.js');
});

app.get('/js/nivo-slider.js', function(req, res) {
	res.sendfile(__dirname + '/js/nivo-slider.js');
});

app.get('/js/jquery-tablestripes.js', function(req, res) {
	res.sendfile(__dirname + '/js/jquery-tablestripes.js');
});




app.get('/images/banner1.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/banner1.jpg');
});

app.get('/images/banner2.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/banner2.jpg');
});

app.get('/images/banner3.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/banner3.jpg');
});

app.get('/images/banner4.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/banner4.jpg');
});

app.get('/images/banner5.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/banner5.jpg');
});


app.get('/images/banner6.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/banner6.jpg');
});

app.get('/ssi/footer.html', function(req, res) {
	res.sendfile(__dirname + '/ssi/footer.html');
});

app.get('/ssi/navigation.html', function(req, res) {
	res.sendfile(__dirname + '/ssi/navigation.html');
});

app.get('/ssi/search-navbars.html', function(req, res) {
	res.sendfile(__dirname + '/ssi/search-navbars.html');
});

app.get('/images/bg-banner.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/bg-banner.jpg');
});

app.get('/images/header-bg.jpg', function(req, res) {
	res.sendfile(__dirname + '/images/header-bg.jpg');
});





































app.set('port', 8002);
app.listen(app.get('port'));
console.log("Express server listening on port", app.get('port'));
// Main route sends our HTML file
/*




























	res.sendfile(__dirname + '/.htaccess');
});

app.get('/public/codebase/dhtmlxgrid.css', function(req, res) {
	res.sendfile(__dirname + '/public/codebase/dhtmlxgrid.css');
});

app.get('/public/codebase/dhtmlxgrid_dhx_skyblue.css', function(req, res) {
	res.sendfile(__dirname + '/public/codebase/dhtmlxgrid_dhx_skyblue.css');
});



//CPU Table



// Static Content Directory

app.use(express.static(path.join(__dirname, 'public')));



app.set('port', 8002);
app.listen(app.get('port'));
console.log("Express server listening on port", app.get('port'));
*/
