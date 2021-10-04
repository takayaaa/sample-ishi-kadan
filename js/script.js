AOS.init({
    offset: 100,
    duration: 3000,
    easing: 'ease',
    delay: 100,
    once: false,
});

$(function () {
    $('.tab li').click(function () {
    var index = $('.tab li').index(this);
    $('.tab li').removeClass('active');
    $(this).addClass('active');
    $('.news-wrap ul').removeClass('show').eq(index).addClass('show');
    });
});
// modal
$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});
// vegas2
$(function() {
    $('#vegas').vegas({
        slides: [
            { src: 'https://github.com/takayaaa/sample-ishi-kadan/blob/main/images/mainbg01.jpg?raw=true'},
            { src: 'https://github.com/takayaaa/sample-ishi-kadan/blob/main/images/mainbg02.jpg?raw=true'},
            { src: 'https://github.com/takayaaa/sample-ishi-kadan/blob/main/images/menu03.jpg?raw=true'},
            
        ],
        transition: 'fade'
    });
});    
// header scroll
jQuery(window).on('scroll', function () {
    　if (600 < jQuery(this).scrollTop()) {
    　　jQuery('.header_inner').addClass('header_charge_color');
    　} else {
    　　jQuery('.header_inner').removeClass('header_charge_color');
    　}
    });


//     $(function() {
//         $('#vegas').vegas({
//             slides: [
//                 { src: '/img/mainbg01.jpg'},
//                 { src: '/img/mainbg02.jpg'},
//                 { src: '/img/mainbg03.jpg'},
                
//             ],
//             transition: 'fade'
//         });
//     });    
    
