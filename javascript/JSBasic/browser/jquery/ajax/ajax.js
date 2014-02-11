$(document).ready(function() {

$("#btext").click(function(){
  $.get("content.txt", function(result){
    $("#text").html(result);
  });
}); 		

});

