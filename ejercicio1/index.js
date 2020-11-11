/**
 * main
 */
const operaciones = require("./modules");
let resultado = operaciones.suma(2,3)
console.log("resultado de suma 1 = ",resultado)

const suma = require("./modules").suma;
let resultado2 = suma(1,2)
console.log("resultado de suma 2 = ", resultado2)

const resta = require("./modules").resta;
let resultadoResta = resta(5,2)
console.log("resultado de resta 1 = ", resultadoResta)

const multiplicacion = require("./modules").multiplicacion;
let resultadoMultiplicacion = multiplicacion(3,3)
console.log("Resultado de multiplicacion: ",resultadoMultiplicacion)
