/* exported defaults */
// output will be updated target
// go through keys of sourcce to check to see if it is found in property of target
// if it isn't, add key and value to target

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
