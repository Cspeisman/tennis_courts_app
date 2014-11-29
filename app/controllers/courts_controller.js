module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Courts', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  },

  show: function(params, callback) {
    var spec = {
      model: {model: 'Court', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'courts/show', result)
    });
  }
};