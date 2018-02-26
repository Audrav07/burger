const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();


const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.

 app.use(express.static(__dirname + '/public'));

// app.use(express.static("/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
//Override with POSt having ?)method =delete
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// app.use(express.static(process.cwd() + '/public'));

const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(app.get("PORT"), function() {
	console.log("You are running on port", app.get("PORT"));
});

app.listen(PORT, function(){
	 console.log("App now listening at localhost:" + PORT);
});
