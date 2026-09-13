
const buttons = document.querySelectorAll('.btn-calc');
const display = document.querySelector('input');







buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        var value = button.textContent;
        
        if (value === 'C') {
            display.value = '';
            return;
        }


        display.value += value;
    });
});