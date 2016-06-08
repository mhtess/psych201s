var present = require('present');

function getTime(){
  return present()
};

function isNumeric(num){
  return !isNaN(num);
};

function wpParseFloat(x){
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
  wpParseFloat: wpParseFloat,
  isNumeric: isNumeric,
  getTime:getTime,
  fillArray: fillArray
};
