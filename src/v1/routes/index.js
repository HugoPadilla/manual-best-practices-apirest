const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.send("Hello from root")
})

router.route("/task").get((req, res) => {
    res.send("Get task v1 api")
})

module.exports = router;