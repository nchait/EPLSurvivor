var express = require('express'),
    User = require('../models/Users'),
    router = express.Router();

// router
// // Add a binding for '/tests/automated/'
//     .get('/', function(req, res){
//         res.json({message:"hello world"})
//         // render the /tests/automated view
//     });

router.route('/')

    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    })

    .post(function(req, res) {

        var user = new User();
        user.last_name = req.body.last_name;
        user.first_name = req.body.first_name;
        user.email = req.body.email;
        user.username = req.body.username;

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });


    })

module.exports = router;