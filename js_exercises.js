var uniq = function (arr) {
  var result = [];

  for(i = 0; i < arr.length; i++){
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
