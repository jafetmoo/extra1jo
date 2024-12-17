const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.bvhnajnv5q2bwk6qbc5x - mysql.services.clever - cloud.com, // Dirección de la base de datos
  user: process.env.u0m5fdwxqkyrxaoy, // Usuario de la base de datos
  password: process.env.BB1oiGuGdHu26BwmIcqX, // Contraseña de la base de datos
  database: process.env.bvhnajnv5q2bwk6qbc5x, //
});

module.exports = pool.promise();
