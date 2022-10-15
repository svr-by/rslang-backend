const Word = require('../words/word.model');

const getAll = async filter => {
  return Word.find(filter);
};

module.exports = { getAll };
