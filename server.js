const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'L4D2 Survivor Log API funcionando. Stay safe out there.' }));


app.use('/api/missions', require('./routes/missionRoutes'));


app.use('/api/survivors', require('./routes/survivorRoutes'));

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/l4d2_survivor_log';

mongoose
  .connect(MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
    )
  )
  .catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err);
    process.exit(1);
  });
