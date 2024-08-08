// Get the div element
const redHeader = $('DIV#red_header');

function changeHeaderColor () {
  const header = $('header');

  header.css('color', '#FF0000');
}
// // Set the text of the header to change when the div is clicked
redHeader.on('click', changeHeaderColor);
