$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 200){
            $('.cta').addClass('active');
        }
        else{
            $('.cta').removeClass('active');
        }
    });
});