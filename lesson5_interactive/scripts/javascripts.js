// Mark Hiles - July 2, 2025

function changeGreeting() {
    const greetingInput = document.getElementById("greetingInput").value;
    document.getElementById("greeting").textContent = greetingInput;
}

function changeParagraph() {
    const paraInput = document.getElementById("para1Input").value;
    document.getElementById("para1").textContent = paraInput;
}

function changeBackgroundColor() {
    const selectedColor = document.getElementById("bgColorSelect").value;
    document.body.style.backgroundColor = selectedColor;
}

function applyChanges() {
    changeGreeting();
    changeParagraph();
    changeBackgroundColor();
}
