const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'test'
});

conexion.connect((error) => {
    if (error) {
        console.log(`Error en la conexion con la base de datos` + error)
    }
    else {
        console.log("Conexión correcta con la base de datos")
    }
});

module.exports = conexion;