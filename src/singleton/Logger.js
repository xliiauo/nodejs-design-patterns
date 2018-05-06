class Logger {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        if (!this._name) {
            this._name = val;
        }
    }
}

export class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger('The only logger');
        }
    }

    get instance() {
        return Singleton.instance;
    }
}

export default new Logger('The only logger');