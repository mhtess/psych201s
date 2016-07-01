var _ = require("underscore");

function isNumeric(num){
  return !isNaN(num);
};

function parseFloat(x){
  return parseFloat(x);
};

function fillArray(value, len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
};

module.exports = {
  parseFloat: parseFloat,
  isNumeric: isNumeric,
  fillArray: fillArray,
  extend: _.extend,
  range: _.range,
  object: _.object,
  pluck: _.pluck,
  uniq: _.uniq
};
