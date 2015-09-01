var path = require('path'),
    PROJECT_LEVELS = {
        common : ['common.blocks'],
        desktop : ['common.blocks', 'desktop.blocks'],
        mobile : ['common.blocks', 'mobile.blocks']
    },
    SPEC_LEVEL = {
        path : path.join('libs', 'bem-pr', 'spec.blocks'),
        check : false
    };

/**
 * Returns list of levels for specified platform.
 *
 * @param {String} platform - platform name (desktop or touch)
 * @param {Object} [opts]
 * @param {Boolean} [opts.specs] — adds level for specs
 */
module.exports = function (platform, opts) {
    opts = opts || {};

    var levels = [
        { path: path.join('libs', 'bem-core',  'common.blocks'), check: false },
        { path: path.join('libs', 'bem-core',  'desktop.blocks'), check: false },
        { path: path.join('libs', 'bem-components', 'common.blocks'), check: false },
        { path: path.join('libs', 'bem-components', 'desktop.blocks'), check: false },
        { path: path.join('libs', 'bem-forms',  'common.blocks'), check: false },
        { path: path.join('libs', 'bem-grid', 'common.blocks'), check: false },
        { path: path.join('libs', 'bem-typography', 'common.blocks'), check: false },
        { path: 'common.blocks', check: true },
        { path: 'test.blocks', check: true }
    ];

    if(opts.specs) {
        return [].concat(
            SPEC_LEVEL,
            levels
        );
    }

    return levels;
};
