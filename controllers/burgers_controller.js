





const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();




// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    let hbsObject = {
      burger: data
    };
  
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.insert("burger_name", req.body.burger_name, function()
    {
      res.redirect("/");
    });
});

router.put("/:id", (req, res) =>{

//id of button
let condition = "id = " + req.params.id;

//change value to true when devoured
burger.update({
devoured: req.body.devoured
}, condition, function() {
  res.redirect("/");
});
});
module.exports = router;

 