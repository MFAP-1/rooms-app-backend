const express = require("express");
require("dotenv").config();

const initDb = require("./config/db.config");
const PORT = 4000;
const API_VERSION = 1;

const app = express();

// Configurando o express para aceitar requisições com o body no formato JSON
app.use(express.json());

// Rota generica de captura de erros
app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Erro interno no servidor.",
      err: err,
    });
  }
  return next();
});

// Redirecting routes
const roomRouter = require("./routes/room.routes");
app.use(`/api/v${API_VERSION}`, roomRouter);
const userRouter = require("./routes/user.routes");
app.use(`/api/v${API_VERSION}`, userRouter);

initDb
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}`));
  })
  .catch((err) => {
    console.error("Erro de conexão com o mongoDB", err);
    process.exit(5);
  });
