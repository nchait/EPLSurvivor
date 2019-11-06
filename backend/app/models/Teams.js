var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TeamsSchema   = new Schema({
	team_id: Number,
	name: String,
	logo: String,
	venue_name: String
});

module.exports = mongoose.model('Teams', TeamsSchema);