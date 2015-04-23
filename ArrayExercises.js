var uniq = function (arr) {
  var result = [];

  for(var i = 0; i < arr.length; i++){
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};


Array.prototype.twoSum = function() {
  var result = [];

  for(var i = 0; i < this.length; i++) {
    for(var j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

var myTranspose = function(arr) {
  var result = new Array(arr[0].length);

  for(var i = 0; i < arr.length; i++) {
    result[i] = new Array(arr.length);
  }

  for(var row = 0; row < arr.length; row++){
    for(var col = 0; col < arr[0].length; col++){
      result[col][row] = arr[row][col];
    }
  }

  return result;
};
