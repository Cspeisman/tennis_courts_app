module.exports = function(match) {
  match('',                   'home#index');
  match('courts',             'courts#index');
  match('courts/:url',        'courts#show');
  match('cities',             'cities#index');
  match('cities/:id',         'cities#show');
};
