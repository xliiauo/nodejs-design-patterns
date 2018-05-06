export default class Employee {
    constructor(name) {
        this._name = name;
        this._skills = [];
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    addSkill(val) {
        this._skills.push(val);
    }

    get skills() {
        return this._skills;
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);

        cloned._name = this.name;
        cloned._skills = [...this.skills];

        return cloned;
    }
}