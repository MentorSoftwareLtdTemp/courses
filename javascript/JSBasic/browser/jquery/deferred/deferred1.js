///Konstruktor
function createDeffered()
{
    var defferedObj = new jQuery.Deferred();

    console.log(defferedObj.state());

//Wykonaj funkcje zawsze
    defferedObj.always( function(context) {
        console.log('function always');
    } );

    defferedObj.done(function()
    {
        console.log('function done');
        console.log(this);

    });

    defferedObj.fail(
        function(){ console.log('function fail'); });

    defferedObj.progress(
        function(){ console.log('function progress'); });

    return defferedObj;

}

function asyncEvent()
{
    console.log(defObj.state());
    var dfd = createDeffered();

    // Resolve after a random interval
    setTimeout(function() {
        dfd.resolve( "hurray" );
    }, Math.floor( 400 + Math.random() * 2000 ) );
// Reject after a random interval
    setTimeout(function() {
        dfd.reject( "sorry" );
    }, Math.floor( 400 + Math.random() * 2000 ) );
// Show a "working..." message every half-second
    setTimeout(function working() {
        if ( dfd.state() === "pending" ) {
            dfd.notify( "working... " );
            setTimeout( working, 500 );
        }
    }, 1 );

    // Return the Promise so caller can't change the Deferred
    return dfd.promise();
}

$.when(asyncEvent());

