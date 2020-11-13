// Exportamos nuestra dependencia de MySQL
const mysql = require('mysql');

// Creo mi connection 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "giothcode",
  database: "comercio"
})

// Exporto mi connection
module.exports = connection