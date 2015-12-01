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
    responsive:{
        0:{
            items:1,
            nav:true
        },
        750:{
            items:3,
            nav:false,
            loop:true,
            dots: true,
            dotsEach: true
        },
        970:{
            items:4,
            nav:true,
            loop:true,
            margin: 12,
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
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
  limitY: false,
  scalarX: 10,
  scalarY: 12,
  frictionX: 0.2,
  frictionY: 0.8,
  originX: 0.5,
  originY: 0.5,
  
});