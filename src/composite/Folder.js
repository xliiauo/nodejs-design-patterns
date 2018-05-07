export default class Folder {
    constructor(name, files=[]) {
        this.name = name;
        this.files = files;
    }

    total() {
        return this.files.reduce((total, curr) => total + curr.total(), 0);
    }

    print() {
        console.log(`${this.name}`);
        this.files.forEach(i => i.print());
    }
}