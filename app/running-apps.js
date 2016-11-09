/**
 * It should do something more fancy but right now it just returns
 * all the apps that were defined into the server
 */

let getHumbleConfig = require('./lib/get-humble-config');
let configToApps = require('./lib/config-to-apps');

getHumbleConfig()
    .then(configToApps)
    .then(apps => apps.map(app => app.folderName))
    .then(apps => console.log(apps.join(' ')));
