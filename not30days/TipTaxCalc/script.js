console.log("script loaded");

const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const resultEl = document.getElementById("result")
const btn = document.getElementById("calc")

btn.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const tip = parseFloat(tipInput.value);

    if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
    resultEl.textContent = 'Введите корректные значения 😊';
    return;
    }

    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;

    resultEl.textContent = `Сумма чаевых: ${tipAmount.toFixed(2)}\nОбщая сумма: ${total.toFixed(2)}`;
});