const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Você está acessando a rota ${req.route.path}`)
})

app.listen(3000);
