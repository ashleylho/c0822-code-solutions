let count = 3;

function countdown() {
  if (count > 0) {
    console.log(count);
  }
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(counter);
  }
  count--;
}

const counter = setInterval(countdown, 1000);
