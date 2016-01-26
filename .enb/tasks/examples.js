var path = require('path'),
    configureBuild = require('../config/build');

module.exports = function(project) {
    // load plugin
    if (!project._modules['enb-bem-examples']) {
       project.includeConfig('enb-bem-examples');
    }
    var plugin = project.module('enb-bem-examples'),
        helper = plugin.createConfigurator('examples');

    helper.configure({
        destPath: 'examples',
        // ADD test.blocks for render example pages
        levels: [
            { path: 'common.blocks', check: true },
            { path: 'test.blocks', check: true }
        ],
        techSuffixes: ['examples'],
        fileSuffixes: ['bemjson.js', 'title.txt']
    });

    // configure pages building by BEMJSON files
    project.nodes(['examples/*/*'], function(node) {
        configureBuild(node);
    });
};
