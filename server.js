const express = require('express');
const path = require('path');
// const livereload = require('livereload');
// const connectLivereload = require('connect-livereload');

const app = express();

// 👇 Livereload server para la carpeta "public" y "views"
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch([
//   path.join(__dirname, "public"),
//   path.join(__dirname, "views")
// ]);
// // 👇 Middleware para inyectar el script de livereload
// app.use(connectLivereload());

// // Actualiza el navegador cuando detecta cambios
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// // Configuración del servidor Express
app.set('view engine', 'ejs');
// app.use(express.static('public'));

// Configuración del motor de vistas y la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
