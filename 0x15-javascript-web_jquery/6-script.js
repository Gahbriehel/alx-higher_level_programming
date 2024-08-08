const elementToClick = $('DIV#update_header');

function updateText () {
  $('header').text('New Header!!!');
}

elementToClick.on('click', updateText);
