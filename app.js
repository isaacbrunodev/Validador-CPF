const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicionado para tratar CORS
const cpfValidator = require('cpf-check');

app.use(cors()); // Usar middleware cors
app.use(bodyParser.json());

app.post('/validar_cpf', (req, res) => {
  const { cpf } = req.body;

  if (!cpf) {
    return res.status(400).json({ error: 'CPF não fornecido.' });
  }

  const isValid = cpfValidator.validate(cpf);

  res.json({ isValid });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
