function ExampleConstructor() {

}

console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var aExampleConstructor = new ExampleConstructor();
console.log('aExampleConstructor:', aExampleConstructor);
var constructed = aExampleConstructor instanceof ExampleConstructor;
console.log('constructed:', constructed);
