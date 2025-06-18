//task1
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

//решение 

function checkSpam(str) {

    if(typeof str !== "string" || str.trim() === "") {
        return false;
    }

    const lowerCaseStr = str.toLowerCase();
    if (lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx')){
        return true;
    }
    return false;
}


//task2
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"
//решение 

function truncate(str, maxlength) {
  if (typeof str !== "string" || typeof maxlength !== 'number' || maxlength <= 0 || !Number.isInteger(maxlength)) {
    return "Invalid input";
  }

  const strLength = str.length;

  if (strLength > maxlength) {
    const truncatedStr = str.slice(0, maxlength - 1) + "…";
    return truncatedStr; 
  } else {
    return str;
  }
}


//task3
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true
//решение

function extractCurrencyValue(str) {
    const extCurVal = parseInt(str);
    return +extCurVal;
}