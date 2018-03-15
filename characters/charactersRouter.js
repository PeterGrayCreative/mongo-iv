const express = require('express');

const Character = require('./Character.js');

const router = express.Router();

router.get('/:id', (req, res) => {
  const charId = req.params.id;
  Character.find({_id: req.params.id})
  .populate('homeworld')
  .then(character => {
    res.status(200).json(character);
  })
})

router.get('/:id/vehicles', (req, res) => {
  const charId = req.params.id;
  
})

module.exports = router;
