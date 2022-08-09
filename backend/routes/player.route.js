const express = require("express");
const { getPlayerBasicInfo } = require("../controllers/player.controller");

const playerRouter = express.Router();

playerRouter.get("/:id", getPlayerBasicInfo);

module.exports = playerRouter;
