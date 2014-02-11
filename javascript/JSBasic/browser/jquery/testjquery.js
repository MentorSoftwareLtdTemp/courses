$("p").hide();
$("p").show();
$("#test").hide();
$(test).show();


$( "div" ).find( "p" ).css( "background-color", "red" );
$( "div" ).children().css( "background-color", "yellow" );


//animation
$("div").animate({left:'250px'});

$("#div5").fadeIn();
$("#div6").fadeIn("slow");
$("#div7").fadeIn(3000);

//events
$( "#div1" ).bind( "mouseenter mouseleave", function(event) {
    console.log("Mouse enter mouse leave", event);
});

$("input").focus(function(){
    $(this).css("background-color","#cccccc");
});

$("input").blur(function(){
    $(this).css("background-color","#ffffff");
});

$( "input" ).change(function() {
    console.log( "Handler for .change() called." );
});

var foo = function() {
    console.log(click);
};
// Now foo will be called when paragraphs are clicked
$( "p" ).live( "click", foo );
// Now foo will no longer be called
$( "p" ).die( "click", foo );

$( "#buthideshow" ).trigger( "click" );
