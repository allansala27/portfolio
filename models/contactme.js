var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema ({
	name: {
		type: String,
    	unique: true
	},
	email: {
		type: String,
		unique: true
	},
	subject: {
		type: String
	},
	message: [{
   		type: String
 	}]
});

var Contacts = mongoose.model("Contacts", ContactSchema);

module.exports = Contacts; 