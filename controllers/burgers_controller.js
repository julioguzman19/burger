// Requiringnpm express to create a router & burger.js for database
let express = require("express");
let burger = require("../models/burger.js");
let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

//get request to get data from database
//utilizing selectAll function in orm.js
router.get("/", function(req, res) {
    
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  //post request post data to database and to get data from database. used to CREATE
  //utilizing insertOne function in orm.js
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  //put request is used to create or update
  //utilizing updateOne function in orm.js
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("Burger status: ", burgerId);
  
    burger.updateOne({
      devoured: 1
    }, burgerId, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });



// Export routes for server.js to use.
module.exports = router;
