var $taskList = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target && event.target.matches('button')) {
    var ancestor = event.target.closest('li');
    console.log('closest .task-list-item:', ancestor);
    ancestor.remove();
  }
}

$taskList.addEventListener('click', handleClick);
