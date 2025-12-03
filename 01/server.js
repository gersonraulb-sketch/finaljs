const express = require('express');
const path = require('path');
const serv = express();
const PORT = 3000;

serv.use(express.static(path.join(__dirname, 'js')));
serv.use('/Data', express.static(path.join(__dirname, 'Data')));

serv.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

serv.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
