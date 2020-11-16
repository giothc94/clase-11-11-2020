const saludo = (nombre) =>
  new Promise((resolve, reject) => {
    if (nombre) {
      resolve(`Hola, soy ${nombre}`);
    } else {
      reject("No hay nombre definido");
    }
  });
function saludo2(nombre) {
  return new Promise(function (resolve, reject) {
    if (nombre) {
      resolve(`Hola, soy ${nombre}`);
    } else {
      reject("No hay nombre definido");
    }
  });
}

// Forma de resolverse
// saludo("Gabriel").then().catch();
// saludo("Gabriel")
//   .then((mensaje) => {
//     console.log("MENSAJE:: ", mensaje);
//   })
//   .catch((error) => {
//     console.log("ERROR:: ", error);
//   });

// saludo2("Gio")
//   .then((mensaje) => {
//     console.log("MENSAJE:: ", mensaje);
//   })
//   .catch((error) => {
//     console.log("ERROR:: ", error);
//   });

module.exports = saludo