$(document).ready(function(){
    $("a").mouseenter(function(){
      $(".letra, .logo").animate({
        opacity: 1,}, 1000);
    });
    $("a").mouseleave(function(){
        $(".letra").animate({
        opacity: 0,}, 1000);
        $(".logo").animate({
        opacity: .5,}, 1000);
    });
  });
