const router = require("express").Router();

// "/" + "/" = "/"
router.get("/", (peticion, respuesta) => {
  respuesta.json({
    mensaje: "Hola soy Gabriel",
  });
});
// "/" + "/saludo" = "/saludo"
router.get("/mi-edad", (peticion, respuesta) => {
  respuesta.json({
    mensaje: "Y tengo 26 años",
  });
});

router.get("/mis-trabajos", (peticion, respuesta) => {
  respuesta.json({
    mensaje: {
      trabajo1: "Desarrollador fullstack js en sokai",
      trabajo2: "Desarrollador frontend en stbtechnology",
      trabajo3: "Docente en el ITQ",
    },
  });
});

module.exports = router;
