var Base = require('./base');

module.exports = Base.extend({
  url: '/cities/:id',
  idAttribute: '_id'
});
module.exports.id = 'City';
