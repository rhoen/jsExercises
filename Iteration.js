var bubbleSort = function(arr) {
  var sorted, i;

  while (!sorted) {
    sorted = true

    for(i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var store = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = store;
        sorted = false;
      }
    }
  }

  return arr;
};

var substrings = function (str) {
  var i, j, subs, sub;
  subs = [];
  for(i = 0; i < str.length; i++){
    for (j = i + 1; j <= str.length; j++){
      sub = str.substring(i,j);
      if (subs.indexOf(sub) === -1) {
        subs.push(sub);
      }
    }
  }

  return subs;
};
