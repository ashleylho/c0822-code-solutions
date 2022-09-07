var $body = document.querySelector('body');
var $circle = document.querySelector('.circle');

function handleClick(event) {
  var currentStatus = $body.className;
  if (currentStatus === 'lightbulb') {
    $body.className = 'dark';
    $circle.className = 'click-circle';
  } else {
    $body.className = 'lightbulb';
    $circle.className = 'circle';
  }
}

$circle.addEventListener('click', handleClick);
