/**
 * Created by admin on 30/03/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.send("Hello CamprozGames!");
});

module.exports = router;