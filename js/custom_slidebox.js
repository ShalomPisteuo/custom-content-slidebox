;(function ($) {
  $(window).scroll(function() {
    var distanceTop = $('#slidebox_trigger').offset().top - $(window).height() - 1000;

    if  ($(window).scrollTop() >= distanceTop) {
      $('#custom-slidebox').animate({'right':'0px'}, 300);
    } else {
      $('#custom-slidebox').stop(true).animate({'right': '-' + ($('#custom-slidebox').width() + 30) + 'px'}, 100);
    }
  });
})(jQuery);
