function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    display.classList.remove('error');
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (result > 15) {
            display.value = 'число>15';
            display.classList.add('error');
        } else {
            display.value = result;
            display.classList.remove('error');
        }
    } catch (error) {
        display.value = 'Error';
        display.classList.add('error');
    }
}