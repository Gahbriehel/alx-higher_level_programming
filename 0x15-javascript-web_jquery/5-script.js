const elementToClick = $('DIV#add_item');

function appendList () {
  $('<li></li>').text('Item').appendTo($('UL.my_list'));
}

elementToClick.on('click', appendList);
