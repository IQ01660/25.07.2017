$(window).scroll(function() {
   if ($("body").scrollTop()>=100) {
        $(".navigIntro").css("background","#1E7A45");

   }
   else  {
        $(".navigIntro").css("background","rgba(27, 109, 63,0.01)");
   }
   $(window).scroll(function() {
        if ($("body").scrollTop()>=550 && $("body").scrollTop()<=1320) {
            $("#about").css("color","white");
        }
        else {
            $("#about").css("color","#BED0C0");
        }
   })
   
})
