const pool = require('../db'); // Importamos el pool de conexiones

// Ping periódico para mantener la conexión activa
function keepDatabaseAlive() {
  setInterval(async () => {
    try {
      await pool.query('SELECT 1'); // Consulta de prueba
      console.log('Ping a la base de datos exitoso');
    } catch (error) {
      console.error('Error en el ping a la base de datos:', error);
    }
  }, 30000); // Ejecuta cada 30 segundos
}

module.exports = keepDatabaseAlive;
