// Get the red header text
const redHeader = $('DIV#red_header');

function clickToAddClass () {
  const header = $('header');

  header.addClass('red');
}
// // Set redHeader to have class red and use the style when the div is clicked
redHeader.on('click', clickToAddClass);
