var levels = require('./levels'),
    path = require('path'),
    fs = require('fs'),
    techs = {
        levels: require('enb-bem-techs/techs/levels'),
        levelsToBemdecl: require('enb-bem-techs/techs/levels-to-bemdecl'),
        depsByTechToBemdecl: require('enb-bem-techs/techs/deps-by-tech-to-bemdecl'),
        bemdecl: require('enb-bem-techs/techs/bemjson-to-bemdecl'),
        deps: require('enb-bem-techs/techs/deps'),
        files: require('enb-bem-techs/techs/files'),
        postcss: require('enb-postcss/techs/enb-postcss'),
        js: require('enb-diverse-js/techs/browser-js'),
        ym: require('enb-modules/techs/prepend-modules'),
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        html: require('enb-bemxjst/techs/html-from-bemjson'),
        copyFile: require('enb/techs/file-copy'),
        mergeFiles: require('enb/techs/file-merge'),
        mergeBemdecl: require('enb-bem-techs/techs/merge-bemdecl'),
        borschik: require('enb-borschik/techs/borschik')
    },
    bundles = {
    configure: function(config, platform, nodes) {
        config.nodes(nodes, function(nodeConfig) {

            var nodeDir = nodeConfig.getNodePath(),
                blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
                sublevelDir = path.join(nodeDir, 'blocks'),
                extendedLevels = [].concat(levels.getProjectLevels(platform));

            if (fs.existsSync(blockSublevelDir)) {
                extendedLevels.push(blockSublevelDir);
            }

            if (fs.existsSync(sublevelDir)) {
                extendedLevels.push(sublevelDir);
            }

            nodeConfig.addTech([techs.levels, { levels: extendedLevels }]);

            nodeConfig.addTechs([
                [techs.bemdecl],
                [techs.deps],
                [techs.files]
            ]);

            nodeConfig.addTechs([
                [techs.postcss, {
                    sourcemap: true,
                    plugins: require('./postcss-plugins')
                }],
                [techs.js, {
                    filesTarget: '?.js.files'
                }],
                [techs.mergeFiles, {
                    target: '?.pre.js',
                    sources: ['?.browser.bemhtml.js', '?.browser.js']
                }],
                [techs.ym, {
                    source: '?.pre.js',
                    target: '?.js'
                }]
            ]);

            // js techs
            nodeConfig.addTechs([
                [techs.depsByTechToBemdecl, {
                    target: '?.js-js.bemdecl.js',
                    sourceTech: 'js',
                    destTech: 'js'
                }],
                [techs.mergeBemdecl, {
                    sources: ['?.bemdecl.js', '?.js-js.bemdecl.js'],
                    target: '?.js.bemdecl.js'
                }],
                [techs.deps, {
                    target: '?.js.deps.js',
                    bemdeclFile: '?.js.bemdecl.js'
                }],
                [techs.files, {
                    depsFile: '?.js.deps.js',
                    filesTarget: '?.js.files',
                    dirsTarget: '?.js.dirs'
                }]
            ]);

            // Client Template Engine
            nodeConfig.addTechs([
                [techs.depsByTechToBemdecl, {
                    target: '?.template.bemdecl.js',
                    sourceTech: 'js',
                    destTech: 'bemhtml'
                }],
                [techs.deps, {
                    target: '?.template.deps.js',
                    bemdeclFile: '?.template.bemdecl.js'
                }],
                [techs.files, {
                    depsFile: '?.template.deps.js',
                    filesTarget: '?.template.files',
                    dirsTarget: '?.template.dirs'
                }],
                [techs.bemhtml, {
                    target: '?.browser.bemhtml.js',
                    filesTarget: '?.template.files',
                    devMode: false
                }]
            ]);

            nodeConfig.addTechs([
                [techs.bemhtml, { devMode: false }],
                [techs.html]
            ]);

            nodeConfig.addTechs([
                [techs.borschik, { source: '?.css', target: '?.min.css', minify: false }],
                [techs.borschik, { source: '?.js', target: '?.min.js', minify: false }]
            ]);

            nodeConfig.addTargets([
                '?.min.css', '?.min.js', '?.html'
            ]);
        });
    }
};

module.exports = bundles;
