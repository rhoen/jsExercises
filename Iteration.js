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
