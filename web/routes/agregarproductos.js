let express = require('express');
let router = express.Router();
let db = require("../conexion/conexion");


router.post('/', function(req, res, next) {

  const { titulo, imagen, descripcion, precio } = req.body;

      console.log("Título:", titulo);
      console.log("Imagen:", imagen);
      console.log("Descripción:", descripcion);
      console.log("Precio:", precio);

  const sql = "INSERT INTO tblproductos (titulo, imagen, descripcion, precio) VALUES (?, ?, ?, ?)";
  
  
  db.query(sql, [titulo, imagen, descripcion, precio], function (err, resultado) {
    if (err) {
      console.log(err);

      res.send("Error al guardar el producto en la base de datos");
    } else {

      res.redirect('/agregarproductos');
    }
  });
});

/* GET productos. */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM tblproductos", function (err, resultado) {
    console.log(resultado)
    res.render('agregarproductos', { title: 'Productos disponibles', Libros: resultado });
  });
});

module.exports = router;
