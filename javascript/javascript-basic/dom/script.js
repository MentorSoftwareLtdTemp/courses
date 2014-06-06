var capture = false;

function propagation()
{
    return document.getElementById('stopPropagation').
        checked;

}
function clickDoc(e)
{
    if (!propagation())
        e.stopPropagation();
    setMessage("Document clicked ");

    console.log("Doc",e);

}

function clickDiv(e)
{
    if (!propagation())
        e.stopPropagation();

    setMessage("Div clicked");
    console.log("DIV",e);
}

function clickP(e)
{
    if (!propagation())
        e.stopPropagation();

    setMessage("p clicked");
    console.log("P",e);

}



function setMessage( text)
{
    var mess = document.getElementById("mymessage1");
    mess.innerHTML=mess.innerHTML + "<br/>" + text;

}

function cleanMessage()
{
    var mess = document.getElementById("mymessage1");
    mess.innerHTML="";

}

function addlistener()
{
    messagges = [];
    licznik=0;
    removelistener();
    if (document.getElementById('capture').checked)
        capture = true;
    else
        capture = false;
    console.log(stopPropagation, capture);
    document.addEventListener('click',clickDoc , capture);
    document.getElementById("mydiv1").addEventListener('click',clickDiv, capture);
    document.getElementById("myp1").addEventListener('click',clickP, capture);
}

function removelistener()
{
    document.removeEventListener('click',clickDoc,capture);
    document.getElementById("mydiv1").removeEventListener('click',clickDiv, capture);
    document.getElementById("myp1").removeEventListener('click',clickP, capture);
    cleanMessage();

}




