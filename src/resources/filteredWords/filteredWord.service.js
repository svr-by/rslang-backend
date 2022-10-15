const filteredWordRepo = require('./filteredWord.db.repository');

const getAll = async filter => filteredWordRepo.getAll(filter);

module.exports = { getAll };
