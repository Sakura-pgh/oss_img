$( document ).ready(function() {
  // console.log( "ready!" );
  checkScroll();

  $(window).scroll(function() {
      checkScroll();
  });

  function checkScroll() {
  	var scroll = $(window).scrollTop();
  	if (scroll >= 50) {
  	    $(".navbar").addClass('scroll');
  	} else {
  	    $(".navbar").removeClass("scroll");
  	}
  }

  $('.main-container').scrollspy({ target: '#navbar-scrollspy' });

	$('.card-text').matchHeight();

  $('.nav-link-scroll').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

  // Change img src according to feature img inside
  $('.collapse').on('show.bs.collapse', function () {
    var imgsrc = $(this).children().children().children('.feature-img').attr('src'), imgsrc2x = $(this).children().children().children('.feature-img').attr('srcset');
    // console.log(imgsrc + imgsrc2x);
    $("#feature-img-cont").fadeOut(200)
       // .delay(200)
       .queue(function(next) { $(this).dequeue(); $("#feature-img-cont").attr({'src':imgsrc,'srcset':imgsrc2x});  next(); })
       // .delay(300)
       .fadeIn(200);
    // $('#feature-img-cont').attr({'src':imgsrc,'srcset':imgsrc2x});
  });


  // Video Play button
  $('#play-video').on('click', function(e) {
    e.preventDefault();
    $("#video").css("padding", "0");
    $('#youtube-video').fadeIn();
    $('#pre-video').hide();
    $('html, body').animate({ scrollTop: $('#video').offset().top - 60}, 200, 'linear');
    $("#video-iframe")[0].src += "&autoplay=1";
  });

  function onPlayerStateChange(event) {
    // check if video ended and remove player
    if (event.data == YT.PlayerState.ENDED) {
      console.log($('#video-iframe').remove());
      done = true;
    }
  }

  
});