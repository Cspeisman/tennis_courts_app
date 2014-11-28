var  City = require('../models/city')
  , Base = require('./base');

module.exports = Base.extend({
  model: City,
  url: function(){
    if (this.params.id != null) {
      return '/cities/:id/courts'
    } else {
      return '/cities'
    }
  }
});
module.exports.id = 'cities';
