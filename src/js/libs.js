$(document).ready(function () {

    $(function() {
        if (!$.cookie('hideModal')) {
            var delay_popup = 1000;
            setTimeout("document.querySelector('.bottom__cookie-block').style.display='inline-block'", delay_popup);
        }
        $.cookie('hideModal', true, {
            expires: 30,
            path: '/'
        });
    });

    $('#js-video-play').on('click', function () {
        $('.video').trigger('play');
        $(this).hide()
        $('#js-video-pause').show()
    })
    $('#js-video-pause').on('click', function () {
        $('.video').trigger('pause');
        $(this).hide()
        $('#js-video-play').show()
    })

    $('.ok').click(function(){
        $('.bottom__cookie-block').fadeOut();
    });

    ymaps.ready(init);
    var myMap;

    function init() {

        myMap = new ymaps.Map("map", {
            center: [57.82108935769948,28.315937776224686],
            zoom: 15
        });

        myMap.controls.add(
            new ymaps.control.ZoomControl()
        );

        myPlacemark = new ymaps.Placemark([57.819417699963005,28.30718304600006], {},
            {
                iconLayout: "default#image",
                iconImageHref: "../images/main/mappin.svg",
                iconImageSize: [122, 59],
                iconImageOffset: [-60, -50]
            });
        myMap.geoObjects.add(myPlacemark);
    };

    var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,

    });
    $(".popup").magnificPopup();

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        thumbs: {
            swiper: galleryThumbs
        }
    });

});


