var mysql   = require('mysql');


/* DATABASE CONFIGURATION */
var connection = mysql.createConnection({
    host: 'cwolf.cs.sonoma.edu',
    user: 'rbrownlie',
    password: '003603527'
    //user: 'your_username',
    //password: 'your_password'
});

var dbToUse = 'rbrownlie';

//use the database for any queries run
var useDatabaseQry = 'USE ' + dbToUse;

//create the User table if it does not exist
connection.query(useDatabaseQry, function (err) {
    if (err) throw err;

    var createTableQry = 'CREATE TABLE IF NOT EXISTS CPUs('
        + 'CName VARCHAR(255) PRIMARY KEY'
        + ',YearReleased INT'
        + ',Cores INT'
        + ',ClockSpeed VARCHAR(255)'
        + ',Cache INT'
        + ',SocketType VARCHAR(255)'
        + ')';
    connection.query(createTableQry, function (err) {
        if (err) throw err;
    });
});

exports.GetAll = function(callback) {
    connection.query('select AccountID, Username, Email, Post from Account',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetAccountID = function(AccountID, callback) {

	var query = 'select AccountID, Username, Email, Password, Post from Account WHERE AccountID =' + AccountID;
	console.log(query);
    connection.query('select AccountID, Username, Email, Password, Post from Account WHERE AccountID =' + AccountID,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.Insert = function(CPUs, callback) {
    console.log(CPUs);
  
    var query = 'INSERT INTO CPUs(CName, YearReleased, Cores, ClockSpeed, Cache, SocketType) VALUES (\'' + CPUs.CName + '\', \'' + CPUs.YearReleased + '\', \'' + CPUs.Cores + '\', \'' + CPUs.ClockSpeed + '\', \'' + CPUs.Cache + '\', \'' + CPUs.SocketType + '\');';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
			            callback(false, result);
        }
    );
}