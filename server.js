let express = require("express");
let bodyParser = require("body-parser");
let path = require("path")

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/pizzas_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});