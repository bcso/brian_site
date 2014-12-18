$(document).ready(function(){
    $.material.init();
    $("#mainNav").hide().fadeIn("100");
	$('#home, #portfolio, #resume, #contact').hide().fadeIn("500");
    
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        if ($anchor.attr('href') == "#home"){
            $('html, body').stop().animate({
                scrollTop: $('html').offset().top
            }, 1500, 'easeInOutExpo');                              
        } else {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        }
        event.preventDefault();
    });
    
    $('.brand-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('html').offset().top
        }, 1500, 'easeInOutExpo');
    });
});