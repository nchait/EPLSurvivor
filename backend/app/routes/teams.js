var express = require('express'),
    router = express.Router(),
    Subscription = require('../models/Subscriptions'),
    League  = require('../models/Leagues'),
    Team    = require('../models/Teams');

router.route('/epl')
    .get(async function(req, res){
        let teams = await Team.find({}).lean();
        res.json({teams:teams})
    });

module.exports = router;