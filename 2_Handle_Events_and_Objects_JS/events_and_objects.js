// Event Handlers
function handleClickEvent() {
    document.getElementById("message").innerHTML = "You clicked the button!";
}

function handleDoubleClickEvent() {
    document.getElementById("message").innerHTML = "You double-clicked the button!";
}

function handleMouseOverEvent() {
    document.getElementById("message").innerHTML = "Mouse is over the box!";
}

function handleMouseOutEvent() {
    document.getElementById("message").innerHTML = "Mouse left the box!";
}

function handleKeyPressEvent(event) {
    document.getElementById("message").innerHTML = "You pressed the key: " + event.key;
}

function handleInputChangeEvent() {
    const input = document.getElementById("inputField").value;
    document.getElementById("message").innerHTML = "Input changed to: " + input;
}
