var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

router.get('/:id', function(req, res, next) {
  const productId = req.params.id;

  const sql = "SELECT * FROM tblproductos WHERE id = ?";

  db.query(sql, [productId], function (err, resultado) {
    if (err) {
      console.log(err);

      res.send("Error al obtener los detalles del producto de la base de datos");
    } else {
      res.render('editarproductos', { title: 'Editar Producto', producto: resultado[0] });
    }
  });
});

router.post('/:id', function(req, res, next) {
  const productId = req.params.id;
  const titulo = req.body.titulo;
  const imagen = req.body.imagen;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;

  const sql = "UPDATE tblproductos SET titulo = ?, imagen = ?, descripcion = ?, precio = ? WHERE id = ?";

  db.query(sql, [titulo, imagen, descripcion, precio, productId], function (err, resultado) {
    if (err) {
      console.log(err);

      res.send("Error al guardar los cambios en el producto en la base de datos");
    } else {
      console.log("Producto editado exitosamente");
      res.redirect('/agregarproductos');
    }
  });
});

module.exports = router;
