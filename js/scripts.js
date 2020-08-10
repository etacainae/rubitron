$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});
$(document).ready(function() {
  $('.multilang').niceSelect();
});
// Проверка полей на пустоту для плейсхолдера
$(document).ready(function(){
  $('.form-input').on('blur', function() {
      if( $(this).val().trim().length > 0 ) {
          $(this).parent().addClass('filled');
      } else {
          $(this).parent().removeClass('filled');
      }
  });

  $('.form-input').each(function() {
      if( $(this).val().trim().length > 0 ) {
          $(this).parent().addClass('filled');
      }
  });
});
$(document).ready(function(){
  var button = $('.contact-us-btn');
  var form = $('.contact-us-modal');
  var close = $('.contact-us-modal .close');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(document).ready(function(){
  var button = $('.book-btn');
  var form = $('.book-modal');
  var close = $('.book-modal .close');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(document).ready(function(){
  var button = $('.about__video .btn-play');
  var form = $('.about__video__modal');
  var overlay = $('.overlay');
  var body = $('body');
  var video = $('.about__video__modal iframe'),
      src = video.attr('src');

  button.click(function(){
    video.attr('src', src + '?autoplay=1');
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  overlay.click(function(){
    video.attr('src', src);
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(window).on('load resize', function() {
    
    var slider = $('.advantages-wrap');

    var settings = {
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
           slidesToShow: 2,
          }
        },
        {
          breakpoint: 769,
          settings: {
           slidesToShow: 1,
           dots: true,
          }
        },
      ],
    }
   
   if ($(window).width() >= '1200') 
   {
      
      if (slider.hasClass('slick-initialized')) {
         slider.slick('unslick');
      }
      return;
   }
   
   else if (!slider.hasClass('slick-initialized')) 
   {
      return slider.slick(settings);
   }
});
$(".location-nav__item").click(function() {
  $(".location-nav__item").removeClass('active');
  $(this).addClass('active');
  $(".map__item").removeClass('active');
  var activeTab = $(this).attr("rel");
  $("."+activeTab).addClass('active');
});

$(".contacts-wrap__nav__item").click(function() {
  $(".contacts-wrap__nav__item").removeClass('active');
  $(this).addClass('active');
  $(".contacts-wrap__info__item").removeClass('active');
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).addClass('active');
  if ($(window).width() <= '768') {
    $(this).parent().toggleClass('view');
  }
});
$(document).ready(function(){
  var button = $('.burger-btn');
  var form = $('header');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    button.toggleClass('open');
    form.toggleClass("open");
    overlay.toggleClass('active');
    body.toggleClass('no-scroll');
  });
  overlay.click(function(){
    button.removeClass('open');
    form.removeClass("open");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$('.certificate-thumb').magnificPopup({
  type: 'image'
});