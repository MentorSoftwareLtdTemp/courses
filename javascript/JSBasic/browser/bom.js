navigator;
console.dir(navigator);



window.navigator.userAgen
window.location;

//Navigate to new place
window.location.href = 'http://www.packtpub.com'
location.href = 'http://www.packtpub.com'
location = 'http://www.packtpub.com'
location.assign('http://www.packtpub.com')
location.replace('http://www.yahoo.com')

//reload
location.reload();
window.location.href = window.location.href
location = location;


myWindow=window.open("","","width=200,height=100");
myWindow.document.write("<p>This is 'myWindow'</p>");
myWindow.moveTo(100,100);

var myWindow;
function createWindow()
{
    myWindow=window.open("","","width=200,height=100");
    myWindow.document.write("<p>This is 'myWindow'</p>");
    return myWindow;
}

function moveWindow()
{
     //win.moveTo(0,0);
    myWindow.moveBy(10,10);
    myWindow.focus();
}

var win = createWindow();
setInterval(moveWindow,3000);




window.alert('alert'); 
window.prompt('Prompt');
window.confirm('Yes No');


function boo(){alert('Boo!');}
setTimeout(boo, 2000);


function boo() {console.log('boo')};
var id = setInterval(boo, 2000);


clearInterval(id);

var win = window.open('http://www.mentorsoftwareltd.com', 'packt',
'width=300,height=300,resizable=yes')



