const express = require("express");

const aplicacion = express();

const routerDescripcion = require("./routes/miDescripcion");
const routerGuardarDatos = require("./routes/guardarDatos");

const PORT = 3000;

aplicacion.use("/", routerDescripcion);
aplicacion.use("/guardar-datos", routerGuardarDatos);

aplicacion.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
