// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/\^/g, '**'));
    } catch {
        display.value = 'Error';
    }
}
