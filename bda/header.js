'use strict';

module.exports = function(env) {

  var subset = function(s, k, a, df, field, value) {
    return k(s, _.filter(df, function(d) { return d[field] === value }));
  };

  return { subset: subset };

};