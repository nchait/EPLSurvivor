var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SubscriptionsSchema   = new Schema({
	league: Schema.Types.ObjectId,
	user: Schema.Types.ObjectId
});

module.exports = mongoose.model('Subscriptions', SubscriptionsSchema);