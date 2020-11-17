const router = require('express').Router();

const connection = require('../lib/mysql');

router.delete("/", (req, res) => {
  let SQL = "DELETE FROM users WHERE id_users = ?;"
  let data = req.body
  connection.query(SQL, [data.id_users], (error, result, fields) => {
    if (error) {
      console.log("ERROR::",error)
      res.status(500).json({
        message: "Internal Server Error"
      })
    } else {
      res.status(201).json({
        message: "Usuario eliminado"
      })
    }
  })
})

module.exports = router