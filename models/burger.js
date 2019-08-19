// Import orm.js

let orm = require("../config/orm.js");

let burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(valOfCol, valOfOtherCol, cb) {
		orm.insertOne("burgers", valOfCol, valOfOtherCol, function(res) {
			cb(res);
		});
	},
	updateOne: function(columnInput, condition, cb) {
		orm.updateOne("burgers", columnInput, condition, function(res) {
			cb(res);
		});
	}
};

// Exporting to burgers_controller.js 
module.exports = burger;