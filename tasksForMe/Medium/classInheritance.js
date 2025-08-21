class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position; 
    }

    getInfo() {
        console.log(`${this.name}(${this.position})`);
    }
}

class Menager extends Employee {
    constructor(name, position, department){
        super(name, position);
        this.department = department;
    }
    getInfo() {
        console.log(`${this.name} (${this.position}), отдел: ${this.department}`);
    }
}


const employee1 = new Employee("Иван", "Программист");
employee1.getInfo();
const manager1 = new Menager("Анна","Руководитеель отдела","Разработка");
manager1.getInfo();