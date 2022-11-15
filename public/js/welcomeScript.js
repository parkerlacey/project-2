$(document).ready(function() {

    $(".welcome").click(function(){
        window.location=$(this).data("href");
        return false;
   });
});
