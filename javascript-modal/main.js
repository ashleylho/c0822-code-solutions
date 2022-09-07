var $background = document.querySelector('.background');
var $open = document.querySelector('.open');
// var $no = document.querySelector('.no');

function handleClick(event) {
  $background.className = 'backgroundclick';
}
$open.addEventListener('click', handleClick);
