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




exports.CPUInsert = function(userInfo, callback) {
    console.log(userInfo);
  
   var query = 'INSERT INTO CPUs(CName, YearReleased, Cores, ClockSpeed, Cache, SocketType) VALUES (\'' + userInfo.CName + '\', \'' + userInfo.YearReleased + '\', \'' + userInfo.Cores + '\', \'' + userInfo.ClockSpeed + '\', \'' + userInfo.Cache + '\', \'' + userInfo.SocketType + '\');';
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




exports.MotherboardsInsert = function(userInfo, callback) {
    console.log(userInfo);
  
   var query = 'INSERT INTO Motherboards(Name, YearReleased, Manufacture, USB, Size, Expansion, SocketType) VALUES (\'' + userInfo.Name + '\', \'' + userInfo.YearReleased + '\', \'' + userInfo.Manufacture + '\', \'' + userInfo.USB + '\', \'' + userInfo.Size + '\', \'' + userInfo.Expansion + '\', \'' + userInfo.SocketType + '\');';
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




exports.GraphicsInsert = function(userInfo, callback) {
    console.log(userInfo);
  
   var query = 'INSERT INTO Graphics(Name, Chipset, ClockSpeed, VRAM, YearReleased, Expansion) VALUES (\'' + userInfo.Name + '\', \'' + userInfo.Chipset + '\', \'' + userInfo.ClockSpeed + '\', \'' + userInfo.VRAM + '\', \'' + userInfo.YearReleased + '\', \'' + userInfo.Expansion + '\');';
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



exports.CasesInsert = function(userInfo, callback) {
    console.log(userInfo);
  
   var query = 'INSERT INTO Cases(Name, YearReleased, Manufacture, Size) VALUES (\'' + userInfo.Name + '\', \'' + userInfo.YearReleased + '\', \'' + userInfo.Manufacture + '\', \'' + userInfo.Size + '\');';
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