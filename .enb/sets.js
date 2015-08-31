var path = require('path'),
    fs = require('fs'),
    levels = require('./levels'),
    set = {
    configure: function(platform, sets) {
        sets.examples.configure({
            destPath: platform + '.examples',
            levels: levels.getLibLevels(platform),
            techSuffixes: ['examples'],
            fileSuffixes: ['bemjson.js']
        });

        sets.docs.configure({
            destPath: platform + '.docs',
            levels: levels.getLibLevels(platform),
            exampleSets: [platform + '.examples'],
            jsdoc: { suffixes: ['vanilla.js', 'browser.js', 'js'] }
        });

        sets.specs.configure({
            destPath: platform + '.specs',
            levels: levels.getLibLevels(platform),
            sourceLevels: levels.getSpecLevels(platform),
            jsSuffixes: ['vanilla.js', 'browser.js', 'js']
        });

        sets.tmplSpecs.configure({
            destPath: platform + '.tmpl-specs',
            levels: levels.getLibLevels(platform),
            sourceLevels: levels.getSpecLevels(platform),
            engines: {
                'bemhtml-dev': {
                    tech: 'enb-bemxjst/techs/bemhtml',
                    options: { devMode: true }
                },
                'bemhtml-prod': {
                    tech: 'enb-bemxjst/techs/bemhtml',
                    options: { devMode: false }
                }
            }
        });
    }
};

module.exports = set;
