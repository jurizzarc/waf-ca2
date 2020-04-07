$(document).ready(function () {
    $('td .btn').mouseover(function () {
        $(this).find('.jam').css({
            'fill': '#fff'
        });
    });

    $('td .btn').mouseleave(function () {
        $(this).find('.jam').css({
            'fill': '#161616'
        });
    });
});