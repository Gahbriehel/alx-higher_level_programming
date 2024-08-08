// Get the header to click
const header = $('DIV#toggle_header');

function changeColor () {
  const header = $('header');

  header.toggleClass('green', !header.hasClass('green'));
  header.toggleClass('red', !header.hasClass('red'));
}

header.on('click', changeColor);
