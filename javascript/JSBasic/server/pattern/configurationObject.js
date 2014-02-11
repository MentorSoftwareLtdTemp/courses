//OK
var MYAPP = {};
MYAPP.dom = {};
MYAPP.dom.Button = function(text, type) {
	var b = document.createElement('input');
	b.type = type || 'submit';
	b.value = text;
	return b;
}

document.body.appendChild(new MYAPP.dom.Button('puuush'));



//Problem
MYAPP.dom.Button = function(text, type, color, border, font) {
// ....
}


new MYAPP.dom.Button('puuush', null, 'white', null,
'Arial, Verdana, sans-serif');



//Pattern
MYAPP.dom.Button = function(text, conf) {
var type = conf.type || 'submit';
var font = conf.font || 'Verdana';
// ...
}

var config = {
font: 'Arial, Verdana, sans-serif',
color: 'white'
};
new MYAPP.dom.Button('puuush', config);
//lub
document.body.appendChild(
	new MYAPP.dom.Button('dude', {color: 'red'})
);




