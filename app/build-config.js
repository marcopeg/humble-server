

let getHumbleConfig = require('./lib/get-humble-config');
let configToApps = require('./lib/config-to-apps');
let applyConfigToApps = require('./lib/apply-config-to-apps')

getHumbleConfig()
    .then(configToApps)
    .then(applyConfigToApps);
