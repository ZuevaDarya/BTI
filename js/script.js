"use strict"

$(function () {
    $('.slider__img').cycle({
        fx: 'scrollHorz',
        speed: 500,
        timeout: 3000,
        prev: '#prev',
        next: '#next',
        width: '700px',
        pager: '#pager',
        pause: 1,
        rev: 1,
        cleartypeNoBg: true,
    });
});


