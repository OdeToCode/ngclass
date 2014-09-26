var express = require("express");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/../../client"));
app.use("/", express.static(__dirname + "/../../bower_components"));


require("./routes")(app);

app.listen(8080);
console.log("Started on port 8080!");