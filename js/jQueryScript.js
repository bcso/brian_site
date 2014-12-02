//$("#home").click(function () {
//    $('html, body').animate({
//        scrollTop: $("#home").offset().top
//    }, 2000);
//});

function visitHome() {
    window.location = '#home';
}

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});