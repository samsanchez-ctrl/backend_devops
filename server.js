const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;


const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'alumno',
  password: process.env.DB_PASSWORD || 'alumno123',
  database: process.env.DB_NAME || 'tienda_perritos'
});

app.get('/', (req, res) => {
  res.send('API de Tienda de Perritos funcionando 🐶');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});