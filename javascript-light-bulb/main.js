var $body = document.querySelector('body');
var $circle = document.querySelector('.circle');

function handleClick(event) {
  if ($body.className === 'lightbulb') {
    $body.className = 'dark';
    $circle.className = 'click-circle';
  } else {
    $body.className = 'lightbulb';
    $circle.className = 'circle';
  }
  // other option:
  // $body.classList.toggle('dark');
  // $circle.classList.toggle('click-circle');
}

$body.addEventListener('click', handleClick);
