const express = require('express');
const app = express();
const path = require('path');
const ButtonComponent = require('./components/button');

app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Endpoint para retornar o componente
app.get('/component/button', (req, res) => {
  const button = ButtonComponent();
  res.json(button);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
