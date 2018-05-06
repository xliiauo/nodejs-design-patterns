export default class Customer {
    constructor(name, dob) {
        this._name = name;
        this._employee = false;
        this._dob = dob;
    }

    toString() {
        return `name: ${this._name}, dob: ${this._dob}, employee: ${this._employee}`;
    }
}