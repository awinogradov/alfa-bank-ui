var fs = require('fs'),
    path = require('path'),
    levels = require('./config/levels'),
    postcssPlugins = require('./config/postcss-plugins'),
    techs = require('./config/techs'),
    configureBuild = require('./config/build');

module.exports = function(project) {
    project.nodes(['.protein/*', 'pages/*'], function(node) {
        var nodeDirname = node.getNodePath(),
            sublevels = [
                path.join(nodeDirname, '..', '.blocks'),
                path.join(nodeDirname, 'blocks')
            ].filter(function(level) {
                return fs.existsSync(level);
            });

        node.addTechs([
            [techs.files.provide, { target: '?.bemjson.js' }],
            [techs.bem.levels, { levels: [].concat(
                sublevels,
                levels,
                { path: 'test.blocks', check: true }
            ) }]
        ]);

        // common configure
        configureBuild(node);

        node.addTechs([
            [techs.html.bemhtml, {
                target: '?.html',
                bemhtmlFile: '.tmp.bemhtml.js'
            }]
        ]);

        node.addTargets([
            '?.min.css', '?.min.js',
            '?.html'
        ]);

        node.mode('development', function() {
            node.addTechs([
                [techs.files.copy, { source: '.tmp.css', target: '?.min.css' }],
                [techs.files.copy, { source: '.tmp.js', target: '?.min.js' }]
            ]);
        });

        node.mode('production', function() {
            node.addTechs([
                [techs.borschik, { source: '.tmp.css', target: '?.min.css', tech: 'cleancss' }],
                [techs.borschik, { source: '.tmp.js', target: '?.min.js' }]
            ]);
        });

    });

    // include tasks
    ['dist', 'specs', 'examples'].forEach(function(name) {
        project.includeConfig(path.join(__dirname, 'tasks', name + '.js'));
    });
};
