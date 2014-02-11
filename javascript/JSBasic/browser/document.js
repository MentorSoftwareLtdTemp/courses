document.documentElement;
document.forms;
document.getElementsByTagName('h1');

//
var my = document.getElementById("divid");
my.className="add";


//Dodawanie
// create P
var myp = document.createElement('p');
// create text node and append to P
var myt = document.createTextNode('yet another')
myp.appendChild(myt);
// append P to BODY
document.body.appendChild(myp);


//Klonowanie
var el = document.getElementsByTagName('p')[1];
document.body.appendChild(el.cloneNode(true));


//insert
document.body.appendChild(document.createTextNode('boo!'));
document.body.insertBefore(

document.createTextNode('boo first!'),
document.body.firstChild);

//usuwanie
var myp = document.getElementsByTagName('p')[1];
var removed = document.body.removeChild(myp);
removed.firstChild;

//nadpisywanie
var p = document.getElementsByTagName('p')[1];
var replaced = document.body.replaceChild(removed, p);

//
var mypara = document.getElementById('aid');
mypara.addEventListener('click', function(){alert('Boo!')}, false);
mypara.addEventListener('click', console.log, false);


//
function paraHandler(e){
    console.log('clicked');
    console.log(e.type);
    console.log(e.target.length);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    console.log(e.bubbles);
    console.log(e.cancelable);
    console.log(e.timestamp);
}

document.body.addEventListener('click', paraHandler, true);
document.addEventListener('click', paraHandler, true);
window.addEventListener('click', paraHandler, true);
var mypara = document.getElementById('aid');
mypara.addEventListener('click', paraHandler, false);

//Remove / Parametr 3 ?
para.removeEventListener('click', paraHandler, false);
document.body.removeEventListener('click',
    function(){
        alert('clicked body')
    },
    false); // does NOT remove the handler because anonymous function



//stop
//Stop propagation
function paraHandler(e){
    alert('clicked a');
    //e.stopPropagation();
}
var para = document.getElementById('aid');
para.addEventListener('click', paraHandler, false);
document.body.addEventListener('click', function(){alert
('clicked body')}, false);
document.addEventListener('click', function(){alert
('clicked doc')}, false);
window.addEventListener('click', function(){alert
('clicked window')}, false);

//Prevent default
var all_links = document.getElementsByTagName('a');
for (var i = 0; i < all_links.length; i++) { // loop all links
    all_links[i].addEventListener('click', // event type
        function(e){ // handler
            if (!confirm('Are you sure you want to follow this link?')){
                e.preventDefault();
            }
        },
        false); // don't use capturing
}




