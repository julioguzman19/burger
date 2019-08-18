/*Requiring: MySQL (relationship database), inquirer (user input), cli-table (user table display)*/
const mysql = require("mysql");
//const Table = require("cli-table");

/*Initializing MySQL Connection*/
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
});

/*Running logic. Functions nested within displayProducts*/
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });