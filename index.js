
const buttons = document.querySelectorAll('.btn-calc');
const display = document.querySelector('input');







buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        var value = button.textContent;
        
        if (value === 'C') {
            clearDisplay();
            return;
        }
function clearDisplay() {
    display.value = '';
}

        display.value += value;
    });
});