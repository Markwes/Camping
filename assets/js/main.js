$(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 78) {
      $('#main-nav').removeClass('bg-none').addClass('bg-primary');
    } else {
      $('#main-nav').removeClass('bg-primary').addClass('bg-none');
    }
  })
});
