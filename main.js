$(() => {
    $('body').addClass('spinner');
    $('body *').css({opacity: 0});
    setTimeout(() => {
        $('body *').css({opacity: 1});
        $('body').removeClass('spinner');
        $('.card').eq(0).addClass('left-to-right');
        $('.card').eq(1).addClass('fade-in');
        $('.card').eq(2).addClass('right-to-left');
        
        setTimeout(() => {
            $('.card').eq(0).removeClass('left-to-right');
            $('.card').eq(1).removeClass('fade-in');
            $('.card').eq(2).removeClass('right-to-left');
        }, 700)

    },2000);
})