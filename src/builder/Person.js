export default class Person {
    constructor(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.isManager = builder.isManager || false;
        this.salary = builder.salary;
    }

    toString() {
        return JSON.stringify(this);
    }
}