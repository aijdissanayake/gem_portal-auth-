const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Welcome to Gem Portal!"
  });
});

module.exports = router;