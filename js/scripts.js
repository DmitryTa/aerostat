$(document).ready(function(){
	$("#slider").owlCarousel({
		items: 4,
		margin: 20,
		loop: true,
		center: false,
		autoplay: true,
		autoplayTimeout: 4500,
		nav: true,
		navText: false,
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

$('#scene').parallax({
  calibrateX: true,
  calibrateY: true,
  invertX: false,
  invertY: true,
  limitX: false,
  limitY: 10,
  scalarX: 15,
  scalarY: 8,
  frictionX: 0.2,
  frictionY: 0.8,
  originX: 0.0,
  originY: 1.0
});