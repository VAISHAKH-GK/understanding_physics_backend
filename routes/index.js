var express = require('express');
var router = express.Router();

/* GET home page. */
router.post("/form_submission", (req, res, next) => {
    let question = req.body;
    console.log(question);
    res.json("data received");
});

module.exports = router;
