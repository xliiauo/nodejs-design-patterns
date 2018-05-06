export default class Employee {
    constructor(name, dob) {
        this._name = name;
        this._employee = true;
        this._dob = dob;
    }

    toString() {
        return `name: ${this._name}, dob: ${this._dob}, employee: ${this._employee}`;
    }
}