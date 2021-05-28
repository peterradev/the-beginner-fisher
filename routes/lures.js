const express = require('express');
const router = express.Router();
const Lure = require('../models/Lure');

router.get('/',  async (req, res) => {
  const lures = await Lure.find();

  res.json(lures);
});

module.exports = router;
