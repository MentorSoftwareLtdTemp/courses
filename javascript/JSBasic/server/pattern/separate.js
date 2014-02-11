<body>
<form id="myform" method="post" action="server.php">
<fieldset>
<legend>Search</legend>
<input
name="search"
id="search"
type="text"
/>
<input type="submit" />
</fieldset>
</form>
<script type="text/javascript" src="behaviors.js"></script>
</body>


// init
myevent.addListener('myform', 'submit', function(e){
// no need to propagate further
e = myevent.getEvent(e);
myevent.stopPropagation(e);
// validate
var el = document.getElementById('search');
if (!el.value) { // too bad, field is empty
myevent.preventDefault(e); // prevent the form submission
alert('Please enter a search string');
}
});
