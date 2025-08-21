class BankAccount {
    // 1. Приватное поле #balance
    // Объявляется с префиксом #
    #balance; 

    constructor(initialBalance) {
        // Проверка начального баланса, чтобы он был валидным числом
        if (typeof initialBalance !== 'number' || initialBalance < 0) {
            throw new Error("Начальный баланс должен быть неотрицательным числом.");
        }
        // Инициализация приватного поля #balance
        this.#balance = initialBalance;
    }

    // 2. Приватный метод #logTransaction
    // Объявляется с префиксом #
    #logTransaction(amount, type) {
        console.log(`Транзакция: ${type}, Сумма: ${amount}. Новый баланс: ${this.#balance}.`);
    }

    // 3. Публичный метод deposit
    deposit(amount) {
        // Валидация суммы
        if (typeof amount !== 'number' || amount <= 0) {
            console.error("Ошибка: Сумма для пополнения должна быть положительным числом.");
            return; // Прерываем выполнение метода, если сумма некорректна
        }
        
        // Изменение приватного поля #balance
        this.#balance += amount;
        // Вызов приватного метода для логирования
        this.#logTransaction(amount, 'Пополнение');
    }

    // 4. Публичный метод withdraw
    withdraw(amount) {
        // Валидация суммы
        if (typeof amount !== 'number' || amount <= 0) {
            console.error("Ошибка: Сумма для снятия должна быть положительным числом.");
            return;
        }

        // Проверка достаточности средств
        if (amount > this.#balance) {
            console.error("Ошибка: Недостаточно средств на счете.");
            return;
        }

        // Изменение приватного поля #balance
        this.#balance -= amount;
        // Вызов приватного метода для логирования
        this.#logTransaction(amount, 'Снятие');
    }

    // 5. Публичный метод getBalance
    getBalance() {
        // Возвращает значение приватного поля. Доступ к приватным полям разрешен из публичных методов.
        return this.#balance;
    }
}

// --- Проверка работы ---

// Создаем экземпляр
const myAccount = new BankAccount(1000);

// 2. Попытка прямого доступа к приватному полю #balance (вызовет ошибку!)
try {
    // console.log(myAccount.#balance); 
} catch (error) {
    console.error("Ошибка при попытке прямого доступа к #balance:", error.message); 
    // Ожидаемая ошибка: SyntaxError: Private field '#balance' must be declared in an enclosing class
}

// 3. Вызов deposit
myAccount.deposit(500); // Ожидаемый вывод: Транзакция: Пополнение, Сумма: 500. Новый баланс: 1500.
myAccount.deposit(-100); // Ожидаемый вывод: Ошибка: Сумма для пополнения должна быть положительным числом.

// 4. Вызов withdraw
myAccount.withdraw(200); // Ожидаемый вывод: Транзакция: Снятие, Сумма: 200. Новый баланс: 1300.
myAccount.withdraw(1500); // Ожидаемый вывод: Ошибка: Недостаточно средств на счете.

// 5. Вызов getBalance
const currentBalance = myAccount.getBalance();
console.log(`Текущий баланс: ${currentBalance}`); // Ожидаемый вывод: Текущий баланс: 1300

// Дополнительно: попытка вызвать приватный метод #logTransaction напрямую (вызовет ошибку!)
try {
    // myAccount.#logTransaction(100, 'Тест');
} catch (error) {
    console.error("Ошибка при попытке прямого доступа к #logTransaction:", error.message);
    // Ожидаемая ошибка: SyntaxError: Private field '#logTransaction' must be declared in an enclosing class
}