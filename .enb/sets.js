var path = require('path'),
    fs = require('fs'),
    levels = require('./levels'),
    naming = require('bem-naming'),
    set = {
    configure: function(platform, sets) {
        sets.examples.configure({
            destPath: platform + '.examples',
            levels: levels.getLibLevels(platform),
            techSuffixes: ['examples'],
            fileSuffixes: ['bemjson.js', 'title.txt'],
            inlineBemjson: true,
            processInlineBemjson: set.wrapInPage
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
    },

    wrapInPage: function(bemjson, meta) {
        var basename = '_' + path.basename(meta.filename, '.bemjson.js');
        return {
            block: 'page',
            title: naming.stringify(meta.notation),
            head: [{ elem: 'css', url: basename + '.css' }],
            scripts: [{ elem: 'js', url: basename + '.js' }],
            mods: { theme: set.getThemeFromBemjson(bemjson) },
            content: bemjson
        };
    },

    getThemeFromBemjson: function(bemjson) {
        if (typeof bemjson !== 'object') return;

        var theme, key;

        for (key in bemjson) {
            if (theme = key === 'mods' ? bemjson.mods.theme :
                    set.getThemeFromBemjson(bemjson[key])) return theme;
        }
    }
};

module.exports = set;
