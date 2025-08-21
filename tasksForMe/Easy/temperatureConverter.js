// Напиши программу, которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта и наоборот.

const celsiusTemp = 20;
const fahrenheitTemp = celsiusTemp * 9/5 + 32;
console.log(`${celsiusTemp}°C равно ${fahrenheitTemp}°F`);

const fahrenheitInput = 68;
const celsiusOutput = (fahrenheitInput - 32) * 5/9;
console.log(`${fahrenheitInput}°F равно ${celsiusOutput}°C`);
