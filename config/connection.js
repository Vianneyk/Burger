var mysql = require("mysql");

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  else{

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Marceline1!',
    database: 'burgers_db',
});

  }

connection.connect(function (err) {
    //If there is an error when connecting to the database, log the error to the console.
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    //If a database connection is established, log the database thread number.
    console.log("connected as id " + connection.threadId);
});

//Export the connection properties so that we can use them in other files.

module.exports = connection;

