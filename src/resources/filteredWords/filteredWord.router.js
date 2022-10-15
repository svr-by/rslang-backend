const { OK } = require('http-status-codes');
const router = require('express').Router();
const filteredWordsService = require('./filteredWord.service');

router.route('/').get(async (req, res) => {
  const filter = req.query.filter ? JSON.parse(req.query.filter) : null;
  const words = await filteredWordsService.getAll(filter);
  res.status(OK).send(words.map(word => word.toResponse()));
});

module.exports = router;
