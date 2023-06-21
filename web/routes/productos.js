let express = require('express');
let router = express.Router();
let db = require("../conexion/conexion");

/* GET productos. */
router.get('/', function(req, res, next) {
    
    db.query("SELECT * FROM tblproductos", function (err, resultado) {

        console.log(resultado)
        res.render('productos', { title: 'Productos disponibles',Libros:resultado });


    });

  });

  module.exports = router;