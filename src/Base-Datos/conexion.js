const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'sql11.freesqldatabase.com',
    user: 'sql11438604',
    password: 'D1HgSxGtYg',
    port: '3306',
    database: 'sql11438604'
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