module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Cities', params: params}
    };

    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  },

  show: function(params, callback){
    var spec = {
      model: {model: 'City', params: params},
      courts: {collection: 'Cities', params: params}
    };

    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
}