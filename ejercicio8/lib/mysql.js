// Exportamos nuestra dependencia de MySQL
const mysql = require('mysql');

// Creo mi connection 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "giothcode",
  database: "comercio"
})

const query = (SQL, ...parameters) => new Promise((resolve,reject)=>{
  connection.query(SQL,parameters.length > 0 ? Object.values(parameters) : [],(error, results)=>{
    if(error) reject(error)
    else resolve(results)
  })
})

// Exporto mi connection
module.exports = query