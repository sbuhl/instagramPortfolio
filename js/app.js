$(function() {
    var jumboHeight = $('.header').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.banner').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });
 
    

});
