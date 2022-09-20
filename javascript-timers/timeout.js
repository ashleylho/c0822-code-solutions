var $h1 = document.querySelector('.message');

function update() {
  $h1.textContent = 'Hello There';
}

setTimeout(update, 2000);
