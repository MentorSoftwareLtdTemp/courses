var MYAPP = {};
MYAPP.event = {
addListener: null,
removeListener: null
};

if (addListener=null || removeListener==null)
{

	if (typeof window.addEventListener === 'function') {
		MYAPP.event.addListener = function(el, type, fn) {
		el.addEventListener(type, fn, false);
	};
	MYAPP.event.removeListener = function(el, type, fn) {
		el.removeEventListener(type, fn, false);
	};	
	} else if (typeof document.attachEvent === 'function'){ // IE
	MYAPP.event.addListener = function(el, type, fn) {
		el.attachEvent('on' + type, fn);
	};
		MYAPP.event.removeListener = function(el, type, fn) {
		el.detachEvent('on' + type, fn);
	};
	} else { // older browsers
	MYAPP.event.addListener = function(el, type, fn) {
		el['on' + type] = fn;
	};
	MYAPP.event.removeListener = function(el, type, fn) {
	el['on' + type] = null;
	};
 };
}

