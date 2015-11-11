var path = require('path'),
    env = process.env,
    techs = require('./techs'),
    configurePage = require('./helpers/page');

module.exports = function(project) {
    project.setLanguages(['ru', 'en']);

    ['dist', 'specs', 'examples'].forEach(function(name) {
        project.includeConfig(path.join(__dirname, 'tasks', name + '.js'));
    });

    project.nodes('.protein/*', function(node) {
        node.addTech([techs.files.provide, { target: '?.bemjson.js' }]);

        configurePage(node, {
            platform: 'common'
        });
    });

    project.nodes('pages/*', function(node) {
        node.addTech([techs.files.provide, { target: '?.bemjson.js' }]);

        configurePage(node, {
            platform: 'common'
        });
    });
};
