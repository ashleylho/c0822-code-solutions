const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Ashley');

promise1.then(msg => { console.log(msg); });
promise1.catch(error => { console.log(error.message); });
