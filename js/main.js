$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// .......SCROLL EASY...
$(document).ready(function() {
    $('.header__link').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {
        duration: 1000,
        easing: 'swing'
      });
      return false;
      });
    });

    $(document).ready(function() {
  $('.overlay-link').magnificPopup({type:'image'});
  
});