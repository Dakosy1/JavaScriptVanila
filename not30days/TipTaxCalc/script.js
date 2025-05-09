console.log("script loaded");

const billInput = document.getElementById("bill");
const tipInput  = document.getElementById("tip");
const resultEl  = document.getElementById("result");
const btn       = document.getElementById("calc");

// форматируем числа по-русски с двумя знаками
const fmt = new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 2 });

btn.addEventListener("click", () => {
  // всегда сначала скрываем старый результат
  resultEl.style.display = "none";

  const bill = parseFloat(billInput.value);
  const tip  = parseFloat(tipInput.value);

  // валидация
  if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
    resultEl.innerHTML = `<span class="label">Введите корректные значения 😊</span>`;
    resultEl.style.display = "flex";
    return;
  }

  // расчёт
  const tipAmount = bill * (tip / 100);
  const total     = bill + tipAmount;

  // формируем красивую разметку
  resultEl.innerHTML = `
    <div class="label">Сумма чаевых</div>
    <div class="value">${fmt.format(tipAmount)} ₸</div>
    <div class="label">Общая сумма</div>
    <div class="value">${fmt.format(total)} ₸</div>
  `;

  // показываем блок → CSS-анимация fadeIn
  resultEl.style.display = "flex";
});
