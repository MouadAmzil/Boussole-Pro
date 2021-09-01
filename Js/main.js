$(function () {
    'use strict';
    //I will get height of element window , upperHeader and navBar

    var WinH = $(window).height(), Upper = $(".upper-header").innerHeight(), navbar = $(".navbar").innerHeight();
    $(".slider  ,.carousel-item").innerHeight(WinH - (Upper + navbar));

    //will add  opacity of element not select in section Features work
    //first step iw ill get element click
    $(".feature-work li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var data = $(this).data("class");
        if (data == "ALL") {
            console.log(data);
            $(".feature-work .row img").parent().css("opacity", 1);

        } else {
            $(".feature-work .row img").parent().css("opacity", 0.3);
            $(".feature-work .row img"+data).parent().css("opacity", 1);
        }
    });

});
$(document).ready(function(){
    
    'use strict';
$(window).scroll(function(){
    if($(this).scrollTop() > 40)
    {
         $('#tpbtn').fadeIn();
    }
    else
    {
        $('#tpbtn').fadeOut();
    }
});
$("#tpbtn").on('click',function(){
    $('html,body').animate({scrollTop: 0},800);
});
    $(".nav-link").removeClass("active");
    $(".nav-link").click(function (e) { 
        e.preventDefault();
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
});







