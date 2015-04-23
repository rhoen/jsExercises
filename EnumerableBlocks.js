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

var addOne = function(val) {
  return val + 1;
};

class Array
def my_map(&blk)
  result = []
  self.each do |el|
    result << blk.call(el)
  end

  result
end
