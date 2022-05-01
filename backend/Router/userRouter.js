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

router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
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
        operations: req.body.operations,
        site:req.body.site,
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
        operations: req.body.operations,
    })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        });
})

router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        });
})

module.exports = router;