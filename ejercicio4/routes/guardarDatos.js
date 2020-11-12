// Uso express, el router de express
const router = require('express').Router();

// Configuro el router
// app.use("/guardar-datos")
// "/"
// "/guardar-datos" + "/" = "/guardar-datos/"
router.post("/", (peticion, respuesta) => {
  // console.log(peticion)
  let datoRecibido = peticion.body
  respuesta.json({
    message: "Dato recibido",
    user: datoRecibido
  })
})
router.post("/cual-es-tu-deporte", (peticion, respuesta) => {
  // console.log(peticion)
  let datoRecibido = peticion.body.deporte
  respuesta.json({
    saludo: `Tu deporte es: ${datoRecibido}`
  })
})
// Exporto el router ya configurado
module.exports = router