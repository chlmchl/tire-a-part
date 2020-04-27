function setImgPosition() {
  $('.random').each(function() {
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


//appear

function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

   

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
            showImages('#d6');
    });