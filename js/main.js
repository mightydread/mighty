
$(document).ready(function(){
    $(".m").click(function(){
        window.open("http://soundcloud.com/mightydread",'_blank');
    });
    $(".m").mouseenter(function(){
        $("#mighty").hide();
        $("#music").show();
    });
    $(".m").mouseleave(function(){
        $("#music").hide();
        $("#mighty").show();
    });
    $(".i").mouseenter(function(){
        $("#mighty").hide();
        $("#it").show();

    });
    $(".i").mouseleave(function(){
        $("#it").hide();
        $("#mighty").show();
    });
});
