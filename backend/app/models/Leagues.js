var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LeaguesSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('Leagues', LeaguesSchema);