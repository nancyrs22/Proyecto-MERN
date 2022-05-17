const express = require("express");
const cors = require("cors");
const app = express();

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Para usar cookies

//Permitir accesar desde un origen distinto
app.use (
    cors( {
        origin: "http://localhost:3000",
        //Credenciales
    })
)

//Inicilizamos BD
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/portafolio.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, () => console.log("Sevidor listo!"));