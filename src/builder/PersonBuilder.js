import Person from './Person';

export default class PersonBuilder {
    constructor(name) {
        this.name = name;
    }

    age(val) {
        this.age = val;
        return this;
    }

    makeManager() {
        this.isManager = true;
        return this;
    }

    salary(val) {
        this.salary = val;
        return this;
    }

    build() {
        return new Person(this);
    }
}
