var MYAPP = {};
MYAPP.myevent = {
	addListener : function(el, type, fn) {
		if ( typeof el.addEventListener === 'function') {
			MYAPP.myevent.addListener = function(el, type, fn) {
				el.addEventListener(type, fn, false);
			};
		} else if ( typeof el.attachEvent === 'function') {
			MYAPP.myevent.addListener = function(el, type, fn) {
				el.attachEvent('on' + type, fn);
			};
		} else {
			MYAPP.myevent.addListener = function(el, type, fn) {
				el['on' + type] = fn;
			};
		}
		MYAPP.myevent.addListener(el, type, fn);
	}
};
