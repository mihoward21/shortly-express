var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  username: null,
  password: null,
  salt: null,

  initialize: function(){
    this.on('creating', function(model, attrs, options){
      model.set('password', bcrypt.hashSync(model.get('password'), model.get('salt')));
      return;
    });
  },

  defaults: {
    salt: bcrypt.genSaltSync(10)
  }
});

module.exports = User;
