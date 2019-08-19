/*Requiring: MySQL (relationship database), inquirer (user input), cli-table (user table display)*/
const mysql = require("mysql");

/*Initializing MySQL Connection*/
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

//making connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
// Export connection for our ORM to use.
  module.exports = connection;