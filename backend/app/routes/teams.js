var express = require('express'),
    router = express.Router();

router
// Add a binding for '/tests/automated/'
    .get('/', function(req, res){
        res.json({message:"hello world"})
    });

module.exports = router;