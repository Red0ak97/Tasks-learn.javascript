//taask1
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
//решение 
 
function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

//task2
// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
//решение

function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter(item => (a <= item && item <= b));
}

let arr4= [5, 3, 8, 1];

let filtered = filterRange(arr4, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr4 ); // 5,3,8,1 (без изменений)


//task3
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]
//решение
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4); // удалены числа вне диапазона 1..4

alert( arr1 ); // [3, 1]
// i--;: Вот это ключевой момент, который нужно понять! 
// После удаления элемента из массива, все последующие элементы сдвигаются на одну позицию влево.
//  Это означает, что если мы не уменьшим i на 1, то мы пропустим следующий элемент.


//task4
// Сортировать в порядке по убыванию
// важность: 4
let arr2 = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr2.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10


//task5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
//решение
function copySorted(arr) {
  return arr.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

alert( sorted );
alert( arr3 );


//task6


// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
//  «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
function Calculator() {
  this.methods = { // Создаем объект для хранения операторов
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    let parts = str.split(' ');

    if (parts.length !== 3) {
      return NaN;
    }

    let a = Number(parts[0]);
    let operator = parts[1];
    let b = Number(parts[2]);

    if (isNaN(a) || isNaN(b)) {
      return NaN;
    }

    // Используем сохраненные методы
    if (this.methods[operator]) {
      return this.methods[operator](a, b);
    } else {
      return NaN; // Оператор не поддерживается
    }
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
// Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
//  Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.


//task7
// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users = [ vasya1, petya1, masha1 ];

let names = users.map(user => user.name);

alert( names ); // Вася, Петя, Маша



//task8
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.
// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({  // внимание на круглые скобки вокруг объекта
  fullName: user.name + " " + user.surname,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


//task9

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя


//task10

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr55 = [1, 2, 3];

shuffle(arr55);
// arr = [3, 2, 1]

shuffle(arr55);
// arr = [2, 1, 3]

shuffle(arr55);
// arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность. 
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

// Есть и другие хорошие способы решить эту задачу. 
// Например, есть отличный алгоритм под названием Тасование Фишера — Йетса.
//  Суть заключается в том, чтобы проходить по массиву в обратном порядке
//   и менять местами каждый элемент со случайным элементом, который находится перед ним.
function shuffle(array) {
  // Алгоритм Фишера-Йейтса для перемешивания массива.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Получаем случайный индекс от 0 до i включительно.
    // Меняем элементы местами.  Используем деструктуризацию для красивого кода.
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


//task11
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 29 };

let arr5 = [ vasya4, petya4, masha4 ];

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert( getAverageAge(arr5) ); // (25 + 30 + 29) / 3 = 28


//task12

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O


// //task13
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.



function groupById(arr) {
  return arr.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users2);

console.log(usersById);
// Такая функция очень удобна при работе с данными, которые приходят с сервера.

// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.

// Используйте метод .reduce в решении.

