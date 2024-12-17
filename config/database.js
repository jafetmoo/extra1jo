const mysql = require('mysql2');

function handleDisconnect() {
  const connection = mysql.createConnection({
    host: 'bvhnajnv5q2bwk6qbc5x-mysql.services.clever-cloud.com',
    user: 'u0m5fdwxqkyrxaoy',
    password: 'BB1oiGuGdHu26BwmIcqX',
    database: 'bvhnajnv5q2bwk6qbc5x'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      setTimeout(handleDisconnect, 2000); // Reintento después de 2 segundos
    } else {
      console.log('Conexión exitosa a la base de datos.');
    }
  });

  connection.on('error', (err) => {
    console.error('Error en la conexión:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('Reconectando...');
      handleDisconnect(); // Reconexión automática
    } else {
      throw err;
    }
  });

  module.exports = connection;
}

handleDisconnect();
