function request(fileName, id1) {
}

function request2(fileName, id1)
{
    var d=$(id1);

}

$(document).ready(function()
{
    $("#btn1").click(function(){
        $.get("content.txt", function(result){
            $("#text").html(result);
        }, "html");

    });

    $("#btn2").click(function(){
        $.ajax({
            url: "content.html"
        }).done(function(data) {
            console.log('Data loaded');
            $("#html").html(data);
        });
    });

    $("#btn3").click(function(){
        $('#xml').load("content.xml",'',function() {});
    });

});
