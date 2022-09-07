var $contactForm = document.forms[0];

function handleSubmit(event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log('MessageData:', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
