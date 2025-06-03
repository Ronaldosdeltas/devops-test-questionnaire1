const express = require('express');
const app = express();
const mongoUrl = process.env.MONGO_URL || "mongodb://mongodb-service:27017/database";
app.get('/', (req, res) => res.send('Backend rodando!'));
app.listen(3000, () => console.log('Servidor na porta 3000'));
