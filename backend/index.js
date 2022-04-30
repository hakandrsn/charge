var express = require("express")
var app = express();
// const path = require('path');
var bodyparser = require("body-parser")
var mongoose = require("mongoose")
var cors = require("cors")
// const basicAuth = require('express-basic-auth')
// app.use(basicAuth({
//     users: { 'M.a.r.s.i.s': 'P.o.w.e.r.s.a.r.j' }
// }))
app.use(cors());

mongoose.connect("mongodb+srv://receptanilcengiz:Rtc123456@cluster0.pxlal.mongodb.net/localapp?retryWrites=true&w=majority", (e) => {
    if (e) {
        console.log(e);
    }
    else {
        console.log("Connected Mongo")
    }
});
// const port = process.env.PORT || 5000;
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get("*", (req, res) => {
//         req.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     })
// }

const isloggledin = true;
app.listen(3000);

adminRouter = require("./Router/adminRouter.js");
userRouter = require("./Router/userRouter.js");
deviceRouter = require("./Router/deviceRouter.js");

app.use(bodyparser.json());
app.use((req, res, next) => {
    if (!isloggledin) {
        res.send("Login First!")
        next();
    }
    else { next() }
});

app.use("/login", adminRouter);
app.use("/users", userRouter);
app.use("/devices", deviceRouter);

app.get("/", (req, res) => {
    res.send("Anasayfa")
})
