var $h1 = document.querySelector('.countdown-display');
var count = 4;

function countdown() {
  count -= 1;
  $h1.textContent = count;
  if (count <= 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(counter);
  }
}

var counter = setInterval(countdown, 1000);
