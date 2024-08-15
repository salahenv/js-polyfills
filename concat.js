// concat function is available on every javascript array which adds the provided values as a parameter.
// Any number of parameter can be supplied to array.contact method either array or other than array.
// I am utilizing rest operator to combined the indefinite number of parameter in array.

Array.prototype.myconcat = function (...args) {
  var resultArray = [...this];
  for(i = 0; i < args.lenght; i++) {
    Array.isArray(args[i]) ? resultArray.push(...args[i]) : resultArray.push(args[i]);
  }
  return resultArray;
}
