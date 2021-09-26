const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
  name: { type: String, required: true },
  roomNumber: { type: String, required: true },
  capacity: { type: Number, min: 0, required: true },
  price: { type: Number, min: 0, required: true },
});

module.exports = model("Room", roomSchema);
