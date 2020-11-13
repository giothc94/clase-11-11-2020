const express = require("express");

const app = express();

const PORT = 3000;

// Aqui van mis rutas.
// Traer rutas
const routerGet = require("./routes/get");
const routerPost = require("./routes/post");

// utilizar mis rutas
app.use("/lista-usuarios", routerGet);
app.use("/crear-usuario", routerPost);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
