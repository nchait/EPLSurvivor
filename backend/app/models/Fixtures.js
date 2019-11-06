var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FixturesSchema   = new Schema({
	fixture_id: Number,
	event_date: Date,
	week: Number,
	venue: String,
	homeTeam: Number,
	awayTeam: Number,
	statusShort: String,
	goalsHomeTeam: Number,
	goalsAwayTeam: Number
});

module.exports = mongoose.model('Fixtures', FixturesSchema);