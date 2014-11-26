var Court = require('../models/court')
  , Base = require('./base');

module.exports = Base.extend({
  model: Court,
  url: '/courts'
});
module.exports.id = 'Courts';
