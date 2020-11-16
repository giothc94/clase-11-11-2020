const express = require("express");

const app = express();

const PORT = 3000;

// Aqui van mis rutas.
// Traer rutas
const routerGet = require("./routes/get");
const routerPost = require("./routes/post");

// middlewares
app.use(express.json()) // ayuda a transformar nuestros datos recibidos en json

// utilizar mis rutas - Endpoints
app.use("/lista-usuarios", routerGet);
app.use("/crear-usuario", routerPost);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
