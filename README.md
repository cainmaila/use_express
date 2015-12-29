# Express 4 使用教學範例

###  開啟一個web服務
```javascript
var app = require('express')();
app.get("/", function(req, res) {
    res.send("Hello World!!");
})
app.listen(8000, function() {
    console.log("web start in 8000 port");
});
```
請見 app_1.js

### 接收一個 Post form
要解析 Post form 必須先安裝 body-parser 掛件<br>
加入```app.use(bodyParser.urlencoded({ extended: true }));```<br>
request 可以幫你做個簡單 get 或 post
```javascript
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
```
請見 app_2.js
