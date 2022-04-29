var express = require("express");
const req = require("express/lib/request");
var Device=require("../Model/Device.js");
const router = express.Router();

router.get("/", (req, res) => {
    Device.find()
        .then((device) => {
            res.json(device);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/:site", (req, res) => {
    Device.find({"site":req.params.site})
        .then((device) => {
            res.json(device);
        })
        .catch((err) => {
            res.json(err);
        });
})

router.post("/", (req, res) => {
    const product = new Device({
        deviceid: req.body.deviceid,
        location: req.body.location,
        site: req.body.site,
        type:req.body.type,
        allowedsites:req.body.allowedsites,
        operations: req.operations,
    });
    product.save();
    res.json(product);
})

router.put("/:id", (req, res) => {
    Device.findByIdAndUpdate(req.params.id, {
        deviceid: req.body.deviceid,
        location: req.body.location,
        site: req.body.site,
        type:req.body.type,
        allowedsites:req.body.allowedsites,
        operations: req.operations,
    })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        });
})

router.delete("/", (req, res) => {
    Device.findByIdAndDelete(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        });
})

module.exports = router;