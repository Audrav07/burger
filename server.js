const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers/burgers_controller.js");
const app = express();


const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Override with POSt having ?)method =delete
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(process.cwd() + '/public'));
// app.use(express.static(path.join(__dirname + 'assets')));

app.use("/", routes);

app.listen(PORT, function(){
	 console.log("App now listening at localhost:" + PORT);
});
