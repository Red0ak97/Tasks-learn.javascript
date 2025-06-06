function isValid(str) {


    const stack = []; 
    const skobka = { 
        ')': '(',
        ']': '[',
        '}': '{'
    };


    for (let i = 0; i < str.length; i++) { 
        const char = str[i];


        if (char === '(' || char === '[' || char === '{') {
            //  Если char - открывающая 
            stack.push(char); //   Пушим в стэк 


        } else if (char === ')' || char === ']' || char === '}') {
            //  Если char - закрывающая   
            const upValue = stack.pop(); //   Берем последнюю 


            if (skobka[char] !== upValue) { //  Проверяем, на соотвествие
                //  skobka[char]  открывающая 
                //  upValue -  то что лежало сверху

                return false; //  Если не подходят будет ошибка
            }
        }
    }



    return stack.length === 0; // если стек пуст - все хорошо, если нет - ошибка!
};