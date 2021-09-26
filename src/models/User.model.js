const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  role: { type: String, enum: ["User", "Admin"], default: "User" },
});

module.exports = model("User", userSchema);
