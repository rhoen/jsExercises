var uniq = function (arr) {
  var result = [];

  for(i = 0; i < arr.length; i++){
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};


Array.prototype.twoSum = function() {
  var result = [];

  for(i = 0; i < this.length; i++) {
    for(j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

var myTranspose = function(arr) {

};
