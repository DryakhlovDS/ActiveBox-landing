$(function () {
    var introHeight = $('.intro').innerHeight(),
        scrollOffset = $(window).scrollTop();;


    checkScroll(scrollOffset);

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introHeight - 69) {
            $('.header').addClass("header_fixed");
        } else {
            $('.header').removeClass("header_fixed");
        }
    }

    $(window).scroll(function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
      console.log(scrollOffset);
    });

    $('[data-scroll]').click(function (event) {
        event.preventDefault();
        $('.nav a').removeClass('nav__link_active');
        $(this).addClass('nav__link_active');
        $('.logo').removeClass('nav__link_active');

        var blockId = $(this).data('scroll'),
            offsetBlock = $(blockId).offset().top - 69;

    
        $('html, body').animate({
            scrollTop: offsetBlock
        }, 700);
    });
    
    $('.nav-toggle').click(function(){
      $(this).toggleClass("nav-toggle_active");
    });
});