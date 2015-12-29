var app = require('express')();
app.get("/", function(req, res) {
    res.send("Hello World!!");
})
app.listen(8000, function() {
    console.log("web start in 8000 port");
});
