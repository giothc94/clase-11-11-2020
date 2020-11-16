const saludo = require('../ejercicio6/index');
// async - await

// Funciones autoejecutables
( async () => {
  try {
    let mensaje = await saludo()
    console.log(mensaje)
  } catch (error) {
    console.log(error)
  }
})()