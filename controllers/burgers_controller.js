// var express = require('express');
// var router = express.Router();
// var burgers = require("../models/burger.js");

//     router.get('/', function(req, res){
//         res.redirect('/burgers');
//     });

//     router.get('/burgers', function(req, res){
//         burgers.all(function(data){
//             res.render('index', {burgers: data});
//         });
//     });

//     router.post('/burgers/create', function(req, res){
//         burgers.create(['burger_name'], [req.body.burger], function(){
//             res.redirect('/burgers');
//         });
//     });

//     router.put('/burgers/update/:id', function(req, res){

//         burgers.update(req.body.devoured, req.params.id, function(){
//             res.redirect('/burgers');
//         });
//     });






// module.exports = router;





const express = require("express");
const burger = require("../models/burger");
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

 