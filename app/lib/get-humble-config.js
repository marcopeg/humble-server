let yamlJs = require('yamljs');

module.exports = () => new Promise((resolve, reject) => {
    try {
        resolve(yamlJs.load('/humble-server/humble-server.yml'));
    } catch(err) {
        reject(err);
    }
});
