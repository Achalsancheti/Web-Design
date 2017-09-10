  $(document).ready(function() {
  
  $(window).scroll(function () { 
    if ($(window).scrollTop() > 50) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 119) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});