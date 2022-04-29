var express = require("express");
var app = express();
const req = require("express/lib/request");
var Admin=require("../Model/Admin.js");
const router = express.Router();
var bodyParser= require("body-parser")
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
  extended: true
})); 

router.post("/", (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)

    Admin.find({"username":req.body.username, "password":req.body.password })
    .then((admins) => {
        res.json(admins);
    })
    .catch((err) => {
        res.json(err);
    });
})

module.exports = router;