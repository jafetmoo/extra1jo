const express = require('express');
const keepDatabaseAlive = require('./utils/keepAlive'); // Importa el Keep-Alive
const clientesRoutes = require('./routes/clientes'); // Importa las rutas de clientes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api', clientesRoutes);

// Mantener la conexión a la base de datos activa
keepDatabaseAlive(); // Llama a la función de Keep-Alive

// Iniciar el servidor
app.listen(process.env.PORT || 8080, () => {
    console.log(
      `Servidor corriendo en https://extra1joel.onrender.comlhost:${
        process.env.PORT || 8080
      }`
    );
  });