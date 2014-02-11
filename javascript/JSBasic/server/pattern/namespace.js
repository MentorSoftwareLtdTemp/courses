// object together with the method declarations
MYAPP.event = {
	addListener : function(el, type, fn) {
		// .. do the thing
	},
	removeListener : function(el, type, fn) {
		// ...
	},
	getEvent : function(e) {
		// ...
	}
	// ... other methods or properties
};

MYAPP.dom = {};
MYAPP.dom.Element = function(type, prop) {
	var tmp = document.createElement(type);
	for (var i in prop) {
		tmp.setAttribute(i, prop[i]);
	}
	return tmp;
}

MYAPP.dom.Text = function(txt) {
	return document.createTextNode(txt);
}
var el1 = new MYAPP.dom.Element('a', {
	href : 'http://phpied.com'
});
var el2 = new MYAPP.dom.Text('click me');
el1.appendChild(el2);
document.body.appendChild(el1);

