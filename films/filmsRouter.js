const express = require('express');

const Film = require('./Film.js');

const router = express.Router();

// add endpoints here
router.get('/', function(req, res) {
  const producerFilter = req.query.producer;
  const releasedFilter =  req.query.released;

  let query = Film.find({})
    .sort('episode')
    .select('title producer')
    .populate(
      'characters',
      '_id name gender height skin_color hair_color eye_color'
    )
    .populate('planets', 'name climate terrain gravity diameter');

  if (producerFilter) {
    query.where({ producer: { $regex: new RegExp(producerFilter, 'i') } });
  }
  if(releasedFilter) {
    query.where({ release_date: { $regex: new RegExp(releasedFilter, 'i') } });
  }

  query.then((films) => {
    res.json(films);
  });
});
module.exports = router;
