$(document).ready(function(){

    $('.nav__toggle').click(function(){
        $('.nav__toggle').toggleClass('open'),
        $('.nav__menu-bar').toggleClass('collapse'),
        $('body').toggleClass('menu-opened');
    });

    $('.nav__menu-bar a, .nav__logo a').click(function() {
        $('.nav__menu-bar').removeClass('collapse'),
        $('.nav__toggle').removeClass('open'),
        $('body').removeClass('menu-opened');
    });

    $(window).scroll(function () {
        var location = $(this).scrollTop();
        if(location < 80) {
            $("nav").removeClass("nav__scroll");
            $(".arrow-up").removeClass("arrow-up--visible");
        } else {
            $("nav").addClass("nav__scroll");
            $(".arrow-up").addClass("arrow-up--visible");}
    });

    var scrollLink = $('.scrollTo');

    //Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 80}, 1000);
    });

    //Active link switching
   $(window).scroll(function() {

        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 90;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });
  });

  
  if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
      //IE fixed bug with juping background-image
      $('body').on("mousewheel", function () {
        event.preventDefault();
      
        var wheelDelta = event.wheelDelta / 3;
      
        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
      });
    }
  
});