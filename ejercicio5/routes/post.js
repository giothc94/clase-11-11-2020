const router = require('express').Router();

const connection = require('../lib/mysql');

router.post("/", (req, res) => {
  let SQL = "INSERT INTO users (ci, first_name, lastname, age) VALUES ();"
  connection.query(SQL, (error, result, fields) => {
    if (error) {
      console.log("ERROR::",error)
      res.status(500).json({
        message: "Internal Server Error"
      })
    } else {
      res.status(201).json({
        message: "Usuario creado",
        data: result
      })
    }
  })
})

module.exports = router