// header sticky
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  AOS.init();


// owl-carousel slider
$(document).ready(function(){
    $("#owl-client").owlCarousel({
      items:1,
      loop:false,
      mouseDrag:false,
      dots:false,
    });
    $("#owl-product").owlCarousel({
      items:4,
      margin:20,
      nav:true,
      dots:false,
      autoplay:false,
      loop:true,
      center:true,
      navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    });
    $('.re_images a').click(function(){
      $('.re_images a').removeClass('active')
      $(this).addClass('active');
   });


  //  bottam to top arrow
   var btn = $('.bottam_to_top_arrow');
   btn.hide();
   $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.fadeIn();
      } else {
        btn.fadeOut();
      }
   });
      btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 },
      '300');
    });

    // pre-loader
    setTimeout (function() {
      $('.pre_loader').fadeOut();
    }, 3000);
});