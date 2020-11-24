for (i = 0; i < 16; i++) {
    $('#container').append('<div class="boxes"></div>')
}

$('#container').on('click', '.boxes', function() {
  
    let idk = $(this)
    idk.toggleClass('boxesChange');
  });
  