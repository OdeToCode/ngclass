var express = require("express");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/wwwroot"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

require("./routes")(app);

app.listen(8080);
console.log("Started on port 8080!");
