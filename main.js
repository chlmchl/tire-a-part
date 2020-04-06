function setImgPosition() {
  $('.draggable').each(function() {
    var contW = $('#container').width(),
      contH = $('#container').height(),
      maxPosX = (contW - $(this).outerWidth() - 10),
      maxPosY = (contH - $(this).outerHeight() - 10),
      randPosX = Math.ceil((Math.random() * maxPosX)),
      randPosY = Math.ceil((Math.random() * maxPosY)),
      randZind = Math.ceil((Math.random() * 3));
    $(this).css({
      'left': randPosX,
      'top': randPosY,
      //'z-index': randZind
    });
  });
}

window.onload = setImgPosition;


// draggable
$( function() {
    $( ".draggable" ).draggable();
    $(".close").click(function(){
      $(event.target).closest('.stuff').hide();
      $(event.target).closest('.img').hide();
    });
  } );




