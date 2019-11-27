let express = require('express'),
    router  = express.Router(),
    mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectID = require("mongodb").ObjectID,
    Subscription = require('../models/Subscriptions'),
    League  = require('../models/Leagues'),
    Team    = require('../models/Teams');

router.route('/user/:user_id')
    .get(async function(req, res){
        let subscriptions = await Subscription.find({user:req.params.user_id}).lean();
        let myLeagues = subscriptions.map(x => x.league)
        let leagues = await League.find({_id:{ $in: myLeagues }}).lean();
        res.json({leagues: leagues, subscriptions: subscriptions})
    });

module.exports = router;