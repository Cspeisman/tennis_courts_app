var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'courts_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.build = this.options;
    return data;
  }
});

module.exports.id = 'courts/show';
