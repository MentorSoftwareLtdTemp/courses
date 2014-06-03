var timeoutID;

function delayedAlert() {
    timeoutID = window.setTimeout(slowAlert, 20);
}

function slowAlert() {
    alert("That was really slow!");
}

function clearAlert() {
    window.clearTimeout(timeoutID);
}

var nIntervId;

function changeColor() {
    nIntervId = setInterval(flashText, 500);
}

function flashText() {
    var oElem = document.getElementById("my_box");
    oElem.style.color = oElem.style.color == "red" ? "blue" : "red";
}

function stopTextColor() {
    clearInterval(nIntervId);
}