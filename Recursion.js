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
