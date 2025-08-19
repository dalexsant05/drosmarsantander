const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();

// 👇 Livereload server para la carpeta "public" y "views"
const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
  path.join(__dirname, "public"),
  path.join(__dirname, "views")
]);

// 👇 Middleware para inyectar el script de livereload
app.use(connectLivereload());

// Actualiza el navegador cuando detecta cambios
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Configuración del servidor Express
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
