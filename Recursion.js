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

var recSumArray = function (arr) {
  if (arr.length === 1){
    return arr[0];
  }
  else if(arr.length === 0){
    return [];
  }

  var prevSolution = recSumArray(arr.slice(1, arr.length));
  return arr[0] + prevSolution;

};
