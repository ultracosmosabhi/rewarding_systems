document.addEventListener('DOMContentLoaded', (event) => {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const numberInput = document.getElementById('number');

    decrementButton.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link default behavior
        let currentValue = parseInt(numberInput.value, 10);
        if (currentValue > 0) {
            numberInput.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link default behavior
        let currentValue = parseInt(numberInput.value, 10);
        numberInput.value = currentValue + 1;
    });
});
