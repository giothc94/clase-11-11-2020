const express = require("express");

const aplicacion = express()


aplicacion.listen(3000, () => {
  console.log("http://localhost:3000")
} )