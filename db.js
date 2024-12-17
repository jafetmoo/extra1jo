require("dotenv").config();
const mysql = require("mysql2/promise"); // Importa mysql2 con soporte para promesas.

// Configuración del pool de conexiones
const pool = mysql.createPool({
  host: process.env.bvhnajnv5q2bwk6qbc5x - mysql.services.clever - cloud.com, // Dirección de la base de datos
  user: process.env.u0m5fdwxqkyrxaoy, // Usuario de la base de datos
  password: process.env.BB1oiGuGdHu26BwmIcqX, // Contraseña de la base de datos
  database: process.env.bvhnajnv5q2bwk6qbc5x, // Nombre de la base de datos
  waitForConnections: true,
  connectionLimit: 10, // Máximo de conexiones en el pool
  queueLimit: 0,
});

// Exporta el pool para ser utilizado en otros archivos
module.exports = pool;
