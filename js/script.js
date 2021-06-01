$(document).ready(function() {
  $(window).on('scroll', fixNav);
  $(window).on('resize', fixNav);
});

var $navSelectors = $('nav, .logo, .navbar-nav');
function fixNav() {
    if($(window).width() >=760) {
        var scroll = $(window).scrollTop();
        if(scroll > 50) {
            $navSelectors.addClass('efix');
            }
            else {
                $navSelectors.removeClass('efix');
            }
        } else {
           $navSelectors.removeClass('efix');
        }
   
}