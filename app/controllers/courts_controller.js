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
      // We must check for an error before accessing `result.model` (below),
      // which may be undefined if there's an error (404, 500, etc.).
      if (err) return callback(err);

      callback(null, result);
    }.bind(this));
  }
};