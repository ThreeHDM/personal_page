$(document).ready(function() {
    $('nav a[href*=#]').bind('click', function(e) {
            e.preventDefault(); 
            var target = $(this).attr("href");
            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({scrollTop: $(target).offset().top}, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });
            return false;
        });


    $("#menuToggle").click(function () {$("nav").toggle("fold", 1000);});

    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth > 737) {
            $("nav").show();
        } 
    });

    if ($(this).scrollTop() != 0) {
        $('.blackBack').fadeIn('slow');
    }

});


var sections = $('.page-section')
, nav = $('nav')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('activeSec');

            $(this).addClass('activeSec');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

            $('#' + $(this).attr('id')+ ' .blackBack').fadeIn('slow');

        }
    });
});