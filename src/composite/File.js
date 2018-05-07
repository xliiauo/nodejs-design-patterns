export default class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    total() {
        return this.size;
    }
    
    print() {
        console.log(this);
    }
}