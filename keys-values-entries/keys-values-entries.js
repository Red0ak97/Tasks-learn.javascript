//task1
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0)
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

//task2
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».