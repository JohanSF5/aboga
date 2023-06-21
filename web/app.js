var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');

// Creación de Rutas protegidas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var agregarproductosRouter = require('./routes/agregarproductos');
var eliminarProductoRouter = require('./routes/eliminarproducto');
var editarProductosRouter = require('./routes/editarproductos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Agregamos el middleware express.static aquí

// Configuración de Multer para la carga de archivos
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/'); // Carpeta donde se guardarán los archivos subidos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo: timestamp-originalname
  }
});

var upload = multer({ storage: storage });

// Llamado de rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/agregarproductos', upload.single('imagen'), agregarproductosRouter); // Agregamos upload.single() para procesar la imagen
app.use('/eliminarproducto', eliminarProductoRouter);
app.use('/editarproductos', editarProductosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
