$(document).ready(function(){
    $(".panel-button").click(function() {
        $(".info").fadeToggle(1000); 
    })
});

$(document).ready(function(){
    $(".more-info-panel-button").click(function(){
        $(".more-info").toggle(2000);
    })
});

$(document).ready(function(){
    $(".raiders").click(function(){
        $(".raiders1").slideToggle(1000);
    });
});
