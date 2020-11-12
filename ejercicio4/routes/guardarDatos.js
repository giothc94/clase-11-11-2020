// Uso express, el router de express
const router = require('express').Router();

// Configuro el router
// app.use("/guardar-datos")
// "/"
// "/guardar-datos" + "/" = "/guardar-datos/"
router.post("/", (peticion, respuesta) => {
  respuesta.json({
    message: "Funciona!!"
  })
})
// Exporto el router ya configurado
module.exports = router