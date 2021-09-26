const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();
const RoomModel = require("../models/Room.model");

// Definindo nossos route listeners

// POST: New room
router.post("/room", isAuthenticated, async (req, res, next) => {
  try {
    const result = await RoomModel.create(req.body);

    return res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
});

// GET: Read all rooms
router.get("/room", async (req, res, next) => {
  try {
    const result = await RoomModel.find();

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
