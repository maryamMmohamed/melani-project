$('.slick-slide').slick({ //.product-item .slick-slide  .deals-slider-active
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  dots: true,
	  arrows: true,
	  autoplay: true,
	  autoplaySpeed: 1000
	});

    $('.links li a').click(function(){
    $('html,body').animate({
         scrollTop: $( '#' + $(this).data('value') ).offset().top +1 // 3shan ynzlna bn3oma lma ados 3la ay kelma f nav ywdena ll div ely wa5da id bta3ha
    },1000);
 });

    // navbar changed background
    var navbar= $('.navbar');
	$(window).scroll(function(){

		if($(window).scrollTop() > 600){
			navbar.css("background-color", "#fff");
			navbar.css("box-shadow", "0 0 8px 1px rgba(0, 0, 0, 0.2)");
		}
		else
		{
            navbar.css("background-color", "transparent");
            navbar.css("box-shadow", "none");
		}
	});

	// //links add active class******************
 //  $('.links li a').click(function(){
 //      $(this).addClass('active').siblings().removeClass('active'); //5ly li ely ana wa2f 3leha 7otlha class active bs w shel class active mn 3nd a5watha
 //  });

 //trigger niceScroll w dh gaybeno mn 3la elnet
   // $('html').niceScroll({
   // 	cursorcolor: '#fdb813',
   // 	cursorwidth:'10px',
   // 	cursorborder:'1px solid #fdb813',
   // 	cursorborderradius: '0'
   // });

   //caching the scroll top element
        var scrollButton = $("#scroll-top");
        $(window).scroll(function()
        {
          if($(this).scrollTop() >= 700){
             scrollButton.show();
          }
          else{
            scrollButton.hide();
          }
        });

        scrollButton.click(function() // 3shan lma kant gowa window w ndos 3la el sehm mknsh byrda ynzl b scroll tany
          {
             $("html,body").animate({scrollTop : 0},600);
          });


        /////////////////////////////// hide placeholder on focus
var x='';
$('[placeholder]').focus(function(){

  x = $(this).attr('placeholder');

  $(this).attr('placeholder','');

}).blur(function(){

  $(this).attr('placeholder',x);
});


///////////////////

// clients
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
