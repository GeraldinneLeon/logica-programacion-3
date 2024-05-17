document.getElementById('calculateButton').addEventListener('click', function() {
    let input = document.getElementById('numberInput').value;
    let number = parseInt(input);

    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = 'Por favor, introduce un número entero positivo.';
        return;
    }

    let factorialResult = factorial(number);
    document.getElementById('result').innerText = `El factorial de ${number} es ${factorialResult}.`;
});

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}