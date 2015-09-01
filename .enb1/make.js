var bundles = require('./bundles'),
    sets = require('./sets'),
    levels = require('./levels'),
    bundlesPlatforms = Object.keys(levels.bundlesPlatforms),
    setsPlatforms = Object.keys(levels.setsPlatforms);

module.exports = function(config) {
    config.includeConfig('enb-bem-examples');
    config.includeConfig('enb-bem-docs');
    config.includeConfig('enb-bem-specs');
    config.includeConfig('enb-bem-tmpl-specs');

    bundlesPlatforms.forEach(function(platform) {
        var platformBundles = [platform + '.bundles/*'];

        config.nodes(platformBundles, function(nodeConfig) {
            nodeConfig.addTech([require('enb/techs/file-provider'), { target: '?.bemjson.js' }]);
        });

        bundles.configure(config, platform, platformBundles);
    });

    setsPlatforms.forEach(function(platform) {
        var platformBundles = [platform + '.tests/*/*', platform + '.examples/*/*'];

        sets.configure(platform, {
            examples: config.module('enb-bem-examples').createConfigurator('examples'),
            docs: config.module('enb-bem-docs').createConfigurator('docs', 'examples'),
            specs: config.module('enb-bem-specs').createConfigurator('specs'),
            tmplSpecs: config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs')
        });

        bundles.configure(config, platform, platformBundles);
    });

};
