class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
        console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`);
    }
}

const user1 = new User("Алиса", 25);
const user2 = new User("Борис", 30);

user1.greet();
user2.greet();