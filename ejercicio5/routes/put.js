const router = require('express').Router();

const connection = require('../lib/mysql');

router.put("/", (req, res) => {
  let SQL = "UPDATE users SET ci = ?, first_name = ?, lastname = ?, age = ? WHERE id_users = ?;"
  let data = req.body
  connection.query(SQL, [data.cedula, data.firstname, data.lastname, data.age, data.id_users], (error, result, fields) => {
    if (error) {
      console.log("ERROR::",error)
      res.status(500).json({
        message: "Internal Server Error"
      })
    } else {
      res.status(201).json({
        message: "Usuario actualizado"
      })
    }
  })
})

module.exports = router