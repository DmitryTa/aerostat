$(document).ready(function(){
	$("#slider").owlCarousel({
		items: 4,
		margin: 20,
		loop: true,
		center: false,
		autoplay: true,
		autoplayTimeout: 4500,
		nav: true,
		dotsEach: true,
		
	});

	$("#countdown").countdown({
		until: new Date(2015, 11, 31),
	});

});
$('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 2000);
    });
