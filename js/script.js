$(function(){
    $(".menu").click(function(){
        $(".gnb").stop().slideToggle(300);
    });
    $(".menu").click(function(){
        $(this).toggleClass("on");
    });
});