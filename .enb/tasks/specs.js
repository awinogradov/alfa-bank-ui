var path = require('path'),
    techs = require('../config/techs'),
    levels = require('../config/levels');

/**
 * Creates `specs` task.
 *
 * This task allows to run test for browser JavaScript code.
 *
 * @param {ProjectConfig} project - main ENB config for this project
 * @example Run all tests
 * $ magic run specs
 * @example Run tests for desktop platform
 * $ magic make desktop.specs
 */
module.exports = function(project) {
    // load plugin
    project.includeConfig('enb-bem-specs');

    var plugin = project.module('enb-bem-specs');

    plugin
        .createConfigurator('specs')
        .configure({
            destPath: 'specs', // TODO: можно будет и это упростить
            levels: [{ path: 'common.blocks' }],
            sourceLevels: [
                { path: 'libs/bem-pr/spec.blocks', check: false },
            ].concat(levels),
            jsSuffixes: ['vanilla.js', 'browser.js', 'js'],
            specSuffixes: ['spec.js'],
            depsTech: techs.bem.deps
        });
};
