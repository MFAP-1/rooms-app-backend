const mongoose = require("mongoose");

const DB_NAME = "roomsApp";

module.exports = mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`)
  .then((self) =>
    console.log(`Conectado com sucesso ao database ${self.connection.name}`)
  )
  .catch((err) => console.error(err));
