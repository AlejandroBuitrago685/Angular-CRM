const rutas = require("express").Router();
const { Router } = require("express");
const conexion = require("./conexion");


//Obtener usuarios
rutas.get("/users", function (req, res) {
    let consulta = 'select * from usuarios';
    conexion.query(consulta, (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json(rows)
        }

    })
});


//Obtener un usuario POR EMAIL
rutas.get("/users/:email", function (req, res) {
    const { email } = req.params;
    let consulta = 'select * from usuarios where email = ?';
    conexion.query(consulta, [email], (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json(rows)
        }

    })
});

//Añadir usuario
rutas.post("/users", (req, res) => {
    const { nombre, email, password, token, rol } = req.body;
    let consulta = `insert into usuarios(nombre, email, password, token, rol) values('${nombre}', '${email}', '${password}' , '${token}', '${rol}') `;
    conexion.query(consulta, (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json({ status: "Usuario creado" });
        }

    });
});


//Eliminar usuario por email
rutas.delete("/users/:email", (req, res) => {
    const { email } = req.params
    let consulta = `delete from usuarios where email = '${email}'`
    conexion.query(consulta, (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json({ status: "Usuario eliminado" });
        }

    });
});

//Modificar usuario por id
rutas.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { email, password, token, rol } = req.body;
    let consulta = `update usuarios set
    email='${email}',
    password='${password}',
    token='${token}',
    rol='${rol}' `;

    conexion.query(consulta, (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json({ status: "Usuario actualizado" });
        }

    });
});


//*OBTENER USUARIO POR TOKEN*//
rutas.get("/users/token/:token", function (req, res) {
  const { token } = req.params;
  let consulta = 'select nombre from usuarios where token = ?';
  conexion.query(consulta, [token], (err, rows, fields) => {

      if (err) {
          throw err;
      }
      else {
          res.json(rows)
      }

  })
});

//----------------------------------EMPLEADOS----------------------------------------------------
//Obtener todos los empleados
rutas.get("/empleados/all", function (req, res) {
    let consulta = 'select * from empleados';
    conexion.query(consulta, (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json(rows)
        }

    })
});

//Añadir empleado
rutas.post("/empleados/add", (req, res) => {
    const { nombre, apellidos, email, telefono, dni, fecha_alta, calle, localidad, cp, provincia, departamentos } = req.body;
    let consulta = `insert into empleados(nombre, apellidos, email, telefono, dni, fecha_alta, calle, localidad, cp, provincia, departamentos_id) values('${nombre}', '${apellidos}', '${email}', '${telefono}' , '${dni}', '${fecha_alta}', '${calle}', '${localidad}', '${cp}', '${provincia}', '${departamentos}') `;
    conexion.query(consulta, (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json({ status: "Empleado creado" });
        }

    });
});


module.exports = rutas;
