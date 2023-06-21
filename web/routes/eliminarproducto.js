var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

router.post('/', function(req, res, next) {
  const productId = req.body.productId;

  const sql = "DELETE FROM tblproductos WHERE id = ?";

  db.query(sql, [productId], function (err, resultado) {
    if (err) {
      console.log(err);
      res.send("Error al eliminar el producto de la base de datos");
    } else {
      console.log("Producto eliminado exitosamente");
      console.log(productId)
      res.redirect('/agregarproductos');
    }
  });
});

module.exports = router;
