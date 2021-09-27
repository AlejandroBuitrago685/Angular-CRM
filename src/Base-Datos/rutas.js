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
    rol='${rol}' where id = '${id}'`;

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

//Obtener empleados pidiendo un departamento o varios departamentos
rutas.get("/empleados/departamentos/:id", function (req, res) {
  const id = req.params.id;
  let consulta = `SELECT nombre,apellidos FROM empleados WHERE departamentos_id=(SELECT id_empleado from empl_dep WHERE id_departamento='${id}')`;
  conexion.query(consulta, (err, rows, fields) => {

      if (err) {
          throw err;
      }
      else {
          res.json(rows)
      }

  })
});

//Obtener nombre departamentos de un empleado
rutas.get("/empleados/departamentos_nombre/:id", function (req, res) {
  const id = req.params.id;
  let consulta = `SELECT nombre_dep FROM departamentos WHERE id IN (SELECT id_departamento from empl_dep WHERE id_empleado='${id}')`;
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

//Eliminar empleado
rutas.delete("/empleados/delete/:email", (req, res) => {
  const { email } = req.params
  let consulta = `delete from empleados where email = '${email}'`
  conexion.query(consulta, (err, rows, fields) => {

      if (err) {
          throw err;
      }
      else {
          res.json({ status: "Empleado eliminado" });
      }

  });
});

//Modificar empleados por id
rutas.put("/empleados/modify/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellidos, email, telefono, dni, fecha_alta, calle, localidad, cp, provincia, departamentos } = req.body;
  let consulta = `update empleados set
  nombre='${nombre}',
  apellidos='${apellidos}',
  email='${email}',
  telefono='${telefono}',
  dni='${dni}',
  fecha_alta='${fecha_alta}',
  calle='${calle}',
  localidad='${localidad}',
  cp='${cp}',
  provincia='${provincia}',
  departamentos_id='${departamentos}' where id = '${id}'
  `;


  conexion.query(consulta, (err, rows, fields) => {

      if (err) {
          throw err;
      }
      else {
          res.json({ status: "Empleado actualizado" });
      }

  });
});


//Obtener departamentos de empleados
rutas.get("/empleados/departamentos/:id", function (req, res) {
    const { id } = req.params;
    let consulta = `select departamentos_id from empleados where id = '${id}' `;
    conexion.query(consulta, [id] , (err, rows, fields) => {

        if (err) {
            throw err;
        }
        else {
            res.json(rows)
        }

    })
});




module.exports = rutas;
