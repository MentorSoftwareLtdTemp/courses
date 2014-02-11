//1
console.log(window.location.hash);
console.log(window.location.href)
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.port);
console.log(window.location.protocol);
console.log(window.location.search);

//2
window.location.reload();
window.location.assign();
window.location.replace();


//3
console.log(window.history.length);

//4
console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.width);
console.log(screen.height);


//5
window.open("http://www.mentorsoftware.pl");
window.alert('aaa');
window.prompt();
window.confirm("Close the window");

//6
//http://stackoverflow.com/questions/729921/settimeout-or-setinterval
var intervalVar=window.setInterval(function(){console.log("Log every 3 sec")},10000);
var timoutVar=window.setTimeout(function(){console.log("Call once after 3 sec.")},10000);


window.clearInterval(intervalVar);


function openWin()
{
    myWindow=window.open("","myWindow","width=200,height=100");
    myWindow.document.write("<p>This is 'myBadWindow'</p>");
}
function moveWin(x,y)
{
    myWindow.moveTo(x,y);
    myWindow.focus();
}
openWin();
moveWin(0,0);

var x=0;
var y=0;
