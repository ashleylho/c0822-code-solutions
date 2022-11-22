/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() !== undefined) {
    const first = stack.pop();
    const second = stack.peek();
    stack.push(first);
    return second;
  }
}
