const router = require('express').Router();

const query = require('../lib/mysql');

router.post("/", async (req, res) => {
  try {
    let SQL = "INSERT INTO users (ci, first_name, lastname, age) VALUES (?,?,?,?)"
    let data = req.body
    let results = await query(SQL,data.cedula, data.firstname, data.lastname, data.age)

    res.status(201).json({
      message: "Usuario creado",
      insertId: results.insertId
    })
  } catch (error) {
    console.log("ERROR::",error)
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
})

module.exports = router