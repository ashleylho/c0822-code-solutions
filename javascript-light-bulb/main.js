var $body = document.querySelector('body');
var $circle = document.querySelector('.circle');
var currentStatus = false;

function handleClick(event) {
  if (currentStatus === true) {
    $body.className = 'dark';
    $circle.className = 'click-circle';
  } else {
    $body.className = 'lightbulb';
    $circle.className = 'circle';
  }
  currentStatus = !currentStatus;
}

$circle.addEventListener('click', handleClick);
