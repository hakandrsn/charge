var express = require("express");
const req = require("express/lib/request");
var User = require("../Model/User.js");
const router = express.Router();

router.get("/", (req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/:site", (req, res) => {
    User.find({ "site": req.params.site })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        });
})

router.post("/", (req, res) => {
    const product = new User({
        userid: req.body.userid,
        cardid: req.body.cardid,
        username: req.body.username,
        password: req.body.password,
        balance: req.balance,
        devices: req.body.devices,
        operations: req.operations,
    });
    product.save();
    res.json(product);
})

router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        userid: req.body.userid,
        cardid: req.body.cardid,
        username: req.body.username,
        password: req.body.password,
        balance: req.body.balance,
        devices: req.body.devices,
        // operations: req.body.operations,
    }, {
        $push: { operations: [req.body.operations] }
    })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        });
})

router.delete("/", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        });
})

module.exports = router;