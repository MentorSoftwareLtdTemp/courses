function request(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = (function(myxhr) {
		return function() {
			callback(myxhr);
		}
	})(xhr);
	xhr.open('GET', url, true);
	xhr.send('');
}

request('content.txt', function(o) {
	document.getElementById('text').innerHTML = o.responseText;
});

request('content.html', function(o) {
	document.getElementById('html').innerHTML = o.responseText;
});

request('content.xml', function(o) {
	document.getElementById('xml').innerHTML = o.responseXML.getElementsByTagName('root')[0].firstChild.nodeValue;
});

