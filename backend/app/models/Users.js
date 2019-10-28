var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsersSchema   = new Schema({
	last_name: String,
	email: String,
	username: String,
	first_name: String
});

module.exports = mongoose.model('Users', UsersSchema);