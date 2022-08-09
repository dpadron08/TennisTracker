const Player = require("../models/player.model");

// @desc    Get a particular player's info
// @route   GET /api/player/:id
// @access  Public
const getPlayerBasicInfo = async (req, res) => {
  const id = req.params.id;
  const { _id, name, tier } = await Player.findById(id);
  res.status(200).json({ user: name, tier: tier });
};

module.exports = {
  getPlayerBasicInfo,
};
