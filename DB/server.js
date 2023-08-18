const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000; // Puedes cambiar este número al puerto que prefieras

// Configuración de middleware
app.use(bodyParser.json());
app.use(cors()); //Course-Origin Resource Sharing - Restringe HTTP

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/abogados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Conectado a la base de datos de MongoDB');
});

// Definición del esquema y modelo para el usuario
const userSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  contraseña: String,
});

//Definicion del esquema para registrar citas
const citaSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
  cita: String,
});

const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  mensaje: String,
});

const dataSchema = new mongoose.Schema({
  value: Number
});

const DataModel = mongoose.model("Data", dataSchema, "sensores");
const User = mongoose.model('User', userSchema, 'usuarios');
const Citas = mongoose.model('Citas', citaSchema, 'citas');
const Contactos = mongoose.model('Contactos', contactoSchema, 'contactos');

//Ruta para leer citas y mostrarlas
app.get('/obtener-citas', async (req, res) => {
  try {
    const citas = await Citas.find(); // Obtén las citas desde MongoDB
    res.json(citas); // Envía las citas como respuesta JSON
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las citas.' });
  }
});

//Ruta para actualizar el valor del sensor ESP32
app.post("/actualizar-valor", async (req, res) => {
  const value = req.body.value;

  try {
    const data = await DataModel.findOne(); // Suponiendo que solo hay un registro en la base de datos

    if (data) {
      data.value = value;
      await data.save();
      res.json({ message: "Valor actualizado correctamente", value: value });
    } else {
      const newData = new DataModel({ value });
      await newData.save();
      res.json({ message: "Nuevo valor creado y guardado correctamente", value: value });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el valor" });
  }
});

// Ruta para el registro de usuarios
app.post('/registrar', async (req, res) => {
    console.log('Solicitud recibida:', req.body);
  const { nombre, correo, contraseña } = req.body;

  const newUser = new User({
    nombre,
    correo,
    contraseña,
  });

  try {
    await newUser.save();
    res.status(200).send('Usuario registrado exitosamente');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al registrar usuario');
  }
});

// Ruta para el registro de citas
app.post('/registrarcita', async (req, res) => {
  console.log('Solicitud recibida:', req.body);
const { nombre, correo, telefono, cita } = req.body;

const newCita = new Citas({
  nombre,
  correo,
  telefono,
  cita,
});

try {
  await newCita.save();
  res.status(200).send('Cita registrada correctamente');
} catch (err) {
  console.error(err);
  res.status(500).send('Error al registrar cita');
}
});


// Ruta para el registro de dudas
app.post('/contacto', async (req, res) => {
  console.log('Solicitud recibida:', req.body);
const { nombre, correo, mensaje } = req.body;

const newContacto = new Contactos({
  nombre,
  correo,
  mensaje,
});

try {
  await newContacto.save();
  res.status(200).send('Duda registrada correctamente');
} catch (err) {
  console.error(err);
  res.status(500).send('Error al registrar duda');
}
});

// Ruta para el inicio de sesión
app.post('/iniciarSesion', async (req, res) => {
  
  const { correo, contraseña } = req.body;
  console.log('Solicitud recibida:', req.body);

  try {
    // Buscar el usuario en la base de datos por correo y contraseña
    const user = await User.findOne({ correo, contraseña });

    if (user) {
      // Usuario encontrado, inicio de sesión exitoso
      res.status(200).json({ success: true });
    } else {
      // Usuario no encontrado, credenciales incorrectas
      res.status(200).json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error al iniciar sesión' });
  }
});

// Ruta para obtener el valor actualizado del sensor
app.get('/obtener-valor', async (req, res) => {
  try {
    // Aquí utilizamos async/await para manejar la Promesa
    const data = await DataModel.findOne().exec();

    if (data) {
      res.json({ success: true, value: data.value });
    } else {
      res.json({ success: false, message: "No se encontró el valor del sensor" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error al obtener el valor del sensor" });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

