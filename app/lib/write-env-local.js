
let fs = require('fs');
let path = require('path');

module.exports = app => new Promise((resolve, reject) => {
    let localEnv = app.env.join('\n');
    let filePath = path.join('/humble-server', 'apps', app.folderName, '.env.local');

    fs.writeFile(filePath, localEnv, 'utf-8', err => {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    });
});
