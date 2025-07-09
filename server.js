const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const Usuario = require('./models/usuario');
const Habito = require('./models/habito');
const Registro = require('./models/registro');
const Categoria = require('./models/categoria');

// Habilita o CORS para todas as origens (pode ser customizado para origens específicas)
app.use(cors());
app.use(express.json()); // Para que o Express consiga entender JSON no corpo da requisição

// Configuração do MongoDB
const MONGO_URI = process.env.MONGODB_URI; 
//'mongodb+srv://danielm26:newsenhamongodb@habitsappcluster.lhwikak.mongodb.net/?retryWrites=true&w=majority&appName=HabitsAppCluster'; // Substitua pela URI do MongoDB Atlas se necessário

// Conectando ao MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });


// importar e usar rotas
const habitosRoutes = require("./routes/habitos");
app.use("/habitos", habitosRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
