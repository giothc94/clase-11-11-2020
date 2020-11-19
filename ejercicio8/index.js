const express = require("express");

const app = express();

const cors = require('cors');

const PORT = 3000;

// Aqui van mis rutas.
// Traer rutas
const routerGet = require("./routes/get");
const routerPost = require("./routes/post");
const routerDelete = require("./routes/delete");
const routerPut = require("./routes/put");

// middlewares
app.use(express.json()) // ayuda a transformar nuestros datos recibidos en json
app.use(cors())

// utilizar mis rutas - Endpoints
app.use("/lista-usuarios", routerGet);
app.use("/crear-usuario", routerPost);
app.use("/actualizar-usuario", routerPut);
app.use("/eliminar-usuario", routerDelete);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
