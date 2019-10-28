var express = require('express'),
    router = express.Router();

router
// Add a binding for '/tests/automated/'
    .get('/', function(req, res){
        res.json({message:"hello world"})
        // render the /tests/automated view
    });

module.exports = router;