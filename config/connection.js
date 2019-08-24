/*Requiring: MySQL (relationship database), inquirer (user input), cli-table (user table display)*/
const mysql = require("mysql");
let connection;
/*Initializing MySQL Connection*/
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
   connection = mysql.createConnection({
    host: "sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    user: "	l8fzotpjz8imzxe1",
    password: "	f33s54h6m0j0pabw",
    database: "xpvdxniw7k26g0ru"
});
};
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