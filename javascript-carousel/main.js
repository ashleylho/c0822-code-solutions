var $image = document.querySelectorAll('.pokemon');
var $star = document.querySelectorAll('.fa-star');
var $progressDots = document.querySelector('.stars');
var $arrows = document.querySelector('.arrows');
var $left = document.querySelector('.fa-chevron-left');
var $right = document.querySelector('.fa-chevron-right');
var counter = 0;
var id = null;

function carousel() {
  $image[counter].classList.add('hidden');
  $star[counter].className = 'fa-regular fa-star';
  counter++;
  if (counter === $image.length) {
    counter = 0;
  }
  $image[counter].classList.remove('hidden');
  $star[counter].className = 'fa-solid fa-star';
}

id = setInterval(carousel, 3000);

$progressDots.addEventListener('click', handleClick);
$arrows.addEventListener('click', handleArrow);

function handleClick(event) {
  for (var i = 0; i < $star.length; i++) {
    if (event.target === $star[i]) {
      $image[i].classList.remove('hidden');
      $star[i].className = 'fa-solid fa-star';
      counter = i;
    } else {
      $image[i].classList.add('hidden');
      $star[i].className = 'fa-regular fa-star';
    }
  }
  reset();
}

function handleArrow(event) {
  if (event.target === $right) {
    $image[counter].classList.add('hidden');
    $star[counter].className = 'fa-regular fa-star';
    counter++;
    if (counter === $image.length) {
      counter = 0;
      $image[counter].classList.remove('hidden');
      $star[counter].className = 'fa-solid fa-star';
    }
    $image[counter].classList.remove('hidden');
    $star[counter].className = 'fa-solid fa-star';
    reset();
  } else if (event.target === $left) {
    if (counter === 0) {
      $image[counter].classList.add('hidden');
      $star[counter].className = 'fa-regular fa-star';
      counter = 4;
      $image[counter].classList.remove('hidden');
      $star[counter].className = 'fa-solid fa-star';
    } else {
      $image[counter].classList.add('hidden');
      $star[counter].className = 'fa-regular fa-star';
      counter--;
      $image[counter].classList.remove('hidden');
      $star[counter].className = 'fa-solid fa-star';
    }
    reset();
  }
}

function reset() {
  clearInterval(id);
  id = setInterval(carousel, 3000);
}
