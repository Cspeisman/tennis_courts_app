var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'cities_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.courts = this.options.courts;
    return data;
  }
});

module.exports.id = 'cities/show';