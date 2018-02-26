
// // Import MySQL connection.
const connection = require("../config/connection.js");


function objToSql(ob) {
 var arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
  
     if (ob.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
     return arr.toString();
   }

   const orm = {
    all: (tableInput, cb) =>{
      //put all rows in table
      let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, (err, result) =>{
        if(err) throw err;
      

        cb(result);
      });
    },
    insertOne: (table, cols, vals, cb) =>{
      //insert new burger
      let queryString = "INSERT INTO "  + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ", devoured) ";
      queryString += "VALUES ('";
      queryString += vals.toString();
      queryString += "', false) ";
      
      connection.query(queryString, vals, (err, result) =>{
        if(err){
          throw err;
        }
        cb(result);
      });
    },
   updateOne: (table, objColVals, condition, cb) =>{
    //update burger to devoured
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if(err){
        throw err;
      }
      cb(result);
    });
   }
 }
module.exports = orm;
   