//a Separate responsibility  for  mysql connection string
// database connectivity
var mysql= require('mysql');
//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'shopping'
});
connection.connect(function(err){
    if(err) throw err;

});
module.exports=connection;