function reduce(array, reducer, initialValue) {
  if (initialValue) {
    var result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result = reducer(result, array[i]);
    }
  } else {
    result = array[0];
    for (let i = 1; i < array.length; i++) {
      result = reducer(result, array[i]);
    }
  }
  return result;
}
