var app = require('express')();
var bodyParser = require('body-parser');
var request = require('request');
app.use(bodyParser.json()); //可解析 parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // 可解析 application/x-www-form-urlencoded
app.post("/api", function(req, res) {
    console.log(req.body);
    res.send("get api post!!");
})
app.get("/", function(req, res) {
    console.log("web start in 8000 port");
})
app.listen(8000, function() {
    console.log("web start in 8000 port");
    //post form
    request.post("http://127.0.0.1:8000/api", {
        form: {
            key: 'value'
        }
    });
});
