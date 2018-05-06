import path from 'path';
import FsProxy from './FsProxy';

const fs = new FsProxy();

const txtFile = path.join(__dirname, '..', '..', 'src', 'proxy', 'README.txt');
const mdFile = path.join(__dirname, '..', '..', 'src', 'proxy', 'README.md');

let result = (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
};

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
