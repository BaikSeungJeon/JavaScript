$(function(){
    $(".menu").click(function(){
        $(".gnb").stop().slideToggle(300);
    });
    $(".menu").click(function(){
        $(this).toggleClass("on");
    });
    
    let lastScroll = 0;
    $(window).scroll(function(){
        let top = $(this).scrollTop();

        if (top < lastScroll) {
            console.log("UP");
           
        }
        lastScroll = top;
    });

});