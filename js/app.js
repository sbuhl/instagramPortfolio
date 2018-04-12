$(function() {
    var jumboHeight = $('.header').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.banner').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });
 
    //Set up instafeed
    var feed = new Instafeed({
        clientId: 'dbf12bbd983f4ea1a9762d5a0f8bab1e',
        target: 'instafeed',
        get: 'tagged',
        tagName: 'photographyportfolio',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
 
});
// https://www.instagram.com/oauth/authorize/?client_id=dbf12bbd983f4ea1a9762d5a0f8bab1e&redirect_uri=http://macbook-pro-de-cerrer.local:5757/&response_type=token&scope=public_content