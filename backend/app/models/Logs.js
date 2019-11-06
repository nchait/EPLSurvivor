var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LogsSchema   = new Schema({
	fixtureUpdate: Number,
	week: Number
});

module.exports = mongoose.model('Logs', LogsSchema);