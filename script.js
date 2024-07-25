const convert = function() {
    const input = parseFloat(document.getElementById('input').value);
    const unit = document.getElementById('inputCont').value;
    const resultCont = document.getElementById('result');

    let result;

    if (unit === 'celsius') {
        result = (input * 9/5) + 32;
        resultCont.innerText = `${input}°C is equal to ${result.toFixed(2)}°F`;
    } else {
        result = (input - 32) * 5/9;
        resultCont.innerText = `${input}°F is equal to ${result.toFixed(2)}°C`;
    }
}
