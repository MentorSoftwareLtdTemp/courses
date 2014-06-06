function clickDoc(e) {
    console.log("Doc",e);
}

function clickDiv(e) {
    console.log("Div",e);
}

function clickP(e) {
    console.log("P",e);
}

function addlistener()
{
    document.addEventListener('click',clickDoc , false);
    document.getElementById('mydiv1').addEventListener('click',clickDiv , false);
    document.getElementById('myp1').addEventListener('click',clickP , false);

    //Dodamnoe listnera do div,p,doc
}