//task1
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:

function unique(arr) {
  /* ваш код */
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.


//task2
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

function aclean(arr){
    let map = new Map();

    for(let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


//task3

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys1 = map.keys();
// а надо
let keys11 = Array.from(map.keys());
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys11.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?


// map.keys()Этот метод возвращает итерируемый объект (не сам массив, а специальный объект, который знает, как перебирать ключи Map). 
// В нашем случае этот итератор будет выдавать ключи: сначала "name".
// Array.from(...)Этот метод берёт итерируемый объект (который вернул map.keys()) и создаёт на его основе новый, отдельный массив.
// Таким образом, переменная keys теперь содержит массив ["name"]. Этот массив является отдельной сущностью, не связанной напрямую с самим Map после создания.
// keys.push("more");Мы добавляем строку "more" в массив keys. Поскольку keys — это обычный массив, к которому мы применили метод push(), он становится ["name", "more"].