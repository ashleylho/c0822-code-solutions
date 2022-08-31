/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  var rsquared = Math.pow(radius, 2);
  var areaOfCircle = rsquared * Math.PI;
  return areaOfCircle;
}
