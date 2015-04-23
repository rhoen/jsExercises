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

var fib = function (n) {
  if (n === 1) {
    return [1];
  }
  else if (n === 2) {
    return [1, 1];
  }

  var prevSolution = fib(n - 1);
  var sum = prevSolution[prevSolution.length - 1] + prevSolution[prevSolution.length - 2];
  prevSolution.push(sum);
  return prevSolution;
};

var bsearch = function(arr, val){
  var midPoint = (arr.length % 2 === 0) ? arr.length / 2 : (arr.length - 1) / 2;
  if(arr[midPoint] === val) {
    return midPoint;
  }
  else if (arr.length <= 1) {
    return NaN;
  }

  if (arr[midPoint] < val){
    return midPoint + 1 + bsearch(arr.slice(midPoint + 1, arr.length), val);
  }
  else if (arr[midPoint] > val){
    return bsearch(arr.slice(0, midPoint), val);
  }

};
