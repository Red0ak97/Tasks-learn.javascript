// task1
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
//решение

function sumInput() {
  const numbers = [];
  let num; 

  do {
    num = prompt("Введите число:", 0); 

    if (num === null || num === "" || !isFinite(num)) {
      break;
    }

    numbers.push(+num);
  } while (true); 

  let sum = 0;
  for(let number of numbers){
    sum += number;
  }
  return sum;
}


//task 2
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

// решение 
//АЛГОРИТМ КАДАНЕ (Kadane’s Algorithm) - O(n)
function getMaxSubSum(arr) {
  let maxSoFar = 0;  
  let currentMax = 0; 

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}



