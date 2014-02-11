var MYAPP = {};
MYAPP.dom = {};
MYAPP.dom.Button = function(text, conf) {

	var styles = {
		font : 'Verdana',
		border : '1px solid black',
		color : 'black',
		background : 'grey'
	};

	function setStyles() {
		for (var i in styles) {
			b.style[i] = conf[i] || styles[i];
		}
	}

	conf = conf || {};

	var b = document.createElement('input');
	b.type = conf['type'] || 'submit';
	b.value = text;
	setStyles();
	return b;
};


//public method
var MYAPP = {};
MYAPP.dom = ( function(){
	var _setStyle = function(el, prop, value) {
		console.log('setStyle');
		};
	var _getStyle = function(el, prop) {
		console.log('getStyle');
		};
	return {
		setStyle: _setStyle,
		getStyle: _getStyle,
		yetAnother: _setStyle
	};
})();
MYAPP.dom.setStyle();
MYAPP.dom.getStyle();

