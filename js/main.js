
var initbgcol = $(".sub-nav li:nth-child(1)").attr("data-bg-col")
 $("html").css("background", initbgcol);
 $(".navbar").css({"background": initbgcol, "box-shadow": "0 -60px 60px " + initbgcol});

 var cutoffValues = [];
   $(".portfolio-item").each(function(){
      cutoffValues.push($(this).offset().top + $(this).height() - 300);
   });
   console.log(cutoffValues)
   $(window).scroll(function(){
      $(".sub-nav li").removeClass("active")
      for(var i = 0; i < cutoffValues.length; i++ ){
         if($(window).scrollTop() < cutoffValues[i]){
            $(".sub-nav li:nth-child(" + (i+1) + ")").addClass("active");
            var bgcol = $(".sub-nav li:nth-child(" + (i+1) + ")").attr("data-bg-col");
            $("html").css("background", bgcol);
            $(".navbar").css({"background": bgcol, "box-shadow": "0 -60px 60px " + bgcol});
            return;
         }
      }
   });
