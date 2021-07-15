var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", (req, res) => {
  res.send("Api is working properly");
});

module.exports = router;
