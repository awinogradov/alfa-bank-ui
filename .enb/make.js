var path = require('path'),
    env = process.env,
    techs = require('./techs'),
    config = require('./config'),
    configurePage = require('./helpers/page');

module.exports = function(project) {
    project.setLanguages(['ru', 'en']);

    ['dist', 'specs', 'examples', 'docs'].forEach(function(name) {
        project.includeConfig(path.join(__dirname, 'tasks', name + '.js'));
    });

    // build `common.bundles/index` page
    // project.node('common.bundles/index', function (node) {
    //     // provide BEMJSON file
    //     node.addTech([techs.files.provide, { target : '?.bemjson.js' }]);
    //
    //     configurePage(node, {
    //         platform : 'common'
    //     });
    // });
};
