var range = function (start, end) {
  if (start === end) {
    return [end];
  }
  else if (end < start) {
    return [];
  }
  var prevSolution = range(start + 1, end);
  return [start].concat(prevSolution);
};

var sumArray = function (arr) {
  var sum = 0;
  var forEachFunc = function(element, index, array){
    sum += element;
  }
  arr.forEach(forEachFunc);

  return sum;
};
