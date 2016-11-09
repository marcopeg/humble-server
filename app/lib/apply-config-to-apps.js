
let eachAsync = require('async').each;
let writeEnvLocal = require('./write-env-local');

module.exports = apps => new Promise((resolve, reject) => {

    let step = (app, next) => {
        writeEnvLocal(app)
            .then(() => next())
            .catch(next)
    };

    let end = err => {
        if (err) {
            reject(err)
        } else {
            resolve(apps);
        }
    };

    eachAsync(apps, step, end);
});
