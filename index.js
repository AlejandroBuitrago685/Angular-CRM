require('./src/Base-Datos/conexion.js');

const cors = require('cors');
const express = require("express");
const port = (process.env.port || 3000);
const app = express();
app.use(cors());
app.set("port", port);

//Tipos de datos admitidos
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api",require("./src/Base-Datos/rutas"));


app.listen(app.get("port"), (err)=>{
    if (err) {
        console.log("Error al iniciar el servicor " + err);
    }
    else{
        console.log(`Servidor iniciado en el puerto ${port}`)
    }
})