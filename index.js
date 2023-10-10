let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9+\-*/.%]/.test(key)) {
        if (key === '+' && displayValue.endsWith('+')) return; // Avoid multiple '+'
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }
});
