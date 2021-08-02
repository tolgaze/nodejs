var express = require("express");
var app = express();
app.listen(9000, () => {
 console.log("Server running on port 9000");
});

app.use(express.text())

var dict = new Map();

app.post("/input", (req, res, next) => {
    addorincrement(req.body);
    res.json(dict);
});

function addorincrement(key){
    if(dict.has(key)){
        dict.set(key, dict.get(key)+1);
    }
    else{
        dict.set(key,1);
    }
}

app.get("/query", (req, res, next) => {
    var key = req.query.key;
    if(dict.has(key)){
        res.json([dict.get(key)]);
    } 
    else{
        res.json([0]);
    }
});