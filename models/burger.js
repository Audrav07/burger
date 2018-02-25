// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

//table to create/read/update
const table = "burgers";

const burger = {
  all: (cb) =>{
    orm.selectAll(table, res => { cb(res) })
  },
  insert: (cols, vals, cb) =>{
    orm.insertOne(table, cols, vals, res => { cb(res) })
  },
  update: (objColVals, condition, cb) =>{
    orm.updateOne(table, objColVals, condition, res => { cb(res) })
  }
}

module.exports = burger;
