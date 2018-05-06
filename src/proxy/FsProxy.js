import fs from 'fs';

export default class FsProxy {
    constructor() {
        this.fs = fs;
    }

    readFile(path, encode, callback) {
        if (path.match(/.md$|.MD$/)) {
            this.fs.readFile(path, encode, (err, data) => {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null, data);
                }
            });
        } else {
            return callback(new Error('Only markdown files allowed.'));
        }

    }
}