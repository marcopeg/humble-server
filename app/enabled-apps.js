
let getHumbleConfig = require('./lib/get-humble-config');
let configToApps = require('./lib/config-to-apps');

getHumbleConfig()
    .then(configToApps)
    .then(apps => apps
        .filter(app => app.enabled.toLowerCase() === 'yes')
        .map(app => app.folderName)
    )
    .then(apps => console.log(apps.join(' ')));
