import File from './File';
import Folder from './Folder';

let index = new File('index', 1024);
let file = new File('file', 2048);
index.print();
file.print();

let composite = new Folder('composite', [index, file]);
console.log(composite.total());
composite.print();

let tmp = new File('tmp', 1024);
let src = new Folder('src', [tmp, composite]);
console.log(src.total());
src.print();
