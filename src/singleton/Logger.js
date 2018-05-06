class Logger {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

export default class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger('The singleton logger');
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}