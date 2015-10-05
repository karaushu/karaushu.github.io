$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(document).ready(function () {
    $('#watch_blue').click(function () {
        $('#chgImage').attr('src', 'images/watch/watch_blue.jpg');
    });
    $('#watch_red').click(function () {
        $('#chgImage').attr('src', 'images/watch/watch_red.jpg');
    });
    $('#watch_grey').click(function () {
        $('#chgImage').attr('src', 'images/watch/watch_grey.jpg');
    });
    $('#watch_pupkin').click(function () {
        $('#chgImage').attr('src', 'images/watch/watch_pupkin.jpg');
    });
    $('#watch_wet').click(function () {
        $('#chgImage').attr('src', 'images/watch/watch_wet_asphalt.jpg');
    });
    $('#watch_metal').click(function () {
        $('#chgImage').attr('src', 'images/watch/watch_metal.jpg');
    });


});