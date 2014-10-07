var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  username: null,
  password: null,
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      return;
    });
  }
});

module.exports = User;
