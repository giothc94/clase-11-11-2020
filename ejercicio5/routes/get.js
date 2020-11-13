const router = require('express').Router();

const connection = require('../lib/mysql');

router.get("/", (req, res) => {
  let SQL = "SELECT * FROM users;"
  connection.query(SQL, (error, results, fields) => {
    if (error) {
      console.log("ERROR::",error);
      res.status(500).json({
        message: "Internal Server Error"
      })
    } else {
      res.status(200).json({
        message: "Lista de usuarios",
        fields: fields.map((field) => field.name),
        data: results
      })
    }
  })
})

module.exports = router