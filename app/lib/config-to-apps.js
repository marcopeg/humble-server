/**
 * Converts the YAML config object into the list of apps
 * where each app has it's key as name (if not defined)
 */

let extend = require('extend');

module.exports = config => Object.keys(config.apps).map(appKey => {

    let defaultValues = {
        name: appKey,
        folderName: appKey,
    };

    return extend(defaultValues, config.apps[appKey]);
});
