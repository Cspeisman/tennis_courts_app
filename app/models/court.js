var Base = require('./base');

module.exports = Base.extend({
  url: '/courts/:url',
  idAttribute: 'url'
});
module.exports.id = 'Court';
