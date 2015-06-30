var path = require('path'),
    fs = require('fs'),
    lvls = {
    getLibLevels: function(platform) {
        return (lvls.bundlesPlatforms[platform] || lvls.setsPlatforms[platform]).map(function(level) {
            return level + '.blocks';
        });
    },

    getProjectLevels: function(platform) {
        var platformNames = (lvls.bundlesPlatforms[platform] || lvls.setsPlatforms[platform]),
            levels = [];

        // YANDEX CORE LIBS
        platformNames.forEach(function(name) {
            levels.push(
                { path: path.join('libs', 'bem-core', name + '.blocks') },
                { path: path.join('libs', 'bem-components', name + '.blocks') }
            );
        });

        // EXTERNAL LIBS
        levels.push({ path: path.join('libs', 'bem-grid', 'common.blocks') });
        levels.push({ path: path.join('libs', 'bem-typography', 'common.blocks') });
        levels.push({ path: path.join('libs', 'bem-forms', 'common.blocks') });

        // PROJECT LEVELS
        platformNames.forEach(function(name) {
            levels.push({ path: name + '.blocks', check: true });
        });

        // DEMO OVERRIDES
        levels.push({ path: 'demo.blocks', check: true });

        return levels;
    },

    getSpecLevels: function(platform) {
        return [].concat(
            { path: path.join('libs', 'bem-pr', 'spec.blocks') },
            lvls.getProjectLevels(platform)
        );
    },

    bundlesPlatforms: {
        'desktop': ['common', 'desktop'],
        'touch-phone': ['common', 'touch'],
        'touch-pad': ['common', 'touch']
    },

    setsPlatforms: {
        'desktop': ['common', 'desktop'],
        'touch': ['common', 'touch']
    }
};

module.exports = lvls;
