Array.prototype.myEach = function(func) {
  for(var i = 0; i < this.length; i++) {
    func(this[i]);
  }

  return this;
};

Array.prototype.myMap = function(func) {
  var result = [];

  var mapFunc = function (val){
    result.push(func(val));
  };

  this.myEach(mapFunc);

  return result;
};

Array.prototype.myInject = function (func) {
  var accumulator = this[0];

  var injectFunc = function (val) {
    accumulator = func(accumulator, val);
  };

  this.slice(1, this.length).myEach(injectFunc);

  return accumulator;
};
