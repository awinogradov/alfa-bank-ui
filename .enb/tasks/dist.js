var techs = require('../techs'),
    config = require('../config'),
    PLATFORMS = config.platforms,
    LIB_NAME = 'ui';

/**
 * Creates `dist` task.
 *
 * This task allows to build distribution of this project.
 *
 * @param {ProjectConfig} project - main ENB config for this project
 * @example Build dist for all platforms
 * $ magic run dist
 * @example Build dist for desktop platform
 * $ magic make dist/desktop
 */
module.exports = function(project) {
    var dirs = PLATFORMS.map(function(platform) {
        return 'dist/' + platform;
    });

    project.task('dist', function(task) {
        return task.buildTargets(dirs);
    });

    PLATFORMS.forEach(function(platform, i) {
        var dir = dirs[i];

        project.node(dir, function(node) {
            configure(node, platform);
        });
    });
};

/**
 * Configures task for specified platform.
 *
 * @param {NodeConfig} node — instance for configure dir with dist for specified platform
 * @param {String} platform - platform name
 */
function configure(node, platform) {
    node.addTechs([
        // get FileList
        [techs.bem.levels, { levels: config.levels(platform) }],
        [techs.bem.levelsToBemdecl, { target: '.tmp.bemdecl.js' }],
        [techs.bem.deps, { bemdeclFile: '.tmp.bemdecl.js', target: '.tmp.deps.js' }],
        [techs.bem.files, { depsFile: '.tmp.deps.js' }],

        // build CSS
        [techs.postcss, {
            target: LIB_NAME + '.dev.css',
            sourcemap: true,
            plugins: require('../helpers/postcss-plugins')
        }],
        [techs.borschik, { source: LIB_NAME + '.dev.css', target: LIB_NAME + '.css' }],

        // build JavaScript for browsers
        [techs.js, {
            target: '.tmp.js',
            sourceSuffixes: ['vanilla.js', 'browser.js', 'js']
        }],
        [techs.ym, {
            source: '.tmp.js',
            target: LIB_NAME + '.dev.js'
        }],
        [techs.borschik, { source: LIB_NAME + '.dev.js', target: LIB_NAME + '.js' }],

        // build BEMHTML
        [techs.engines.bemhtml, { target: LIB_NAME + '.dev.bemhtml.js' }],
        [techs.borschik, { source: LIB_NAME + '.dev.bemhtml.js', target: LIB_NAME + '.bemhtml.js' }],

        // merge JavaScript with BEMHTML
        [techs.files.merge, {
            target: '.tmp.js+bemhtml.js',
            sources: ['.tmp.js', LIB_NAME + '.dev.bemhtml.js']
        }],
        [techs.ym, {
            source: '.tmp.js+bemhtml.js',
            target: LIB_NAME + '.dev.js+bemhtml.js'
        }],
        [techs.borschik, { source: LIB_NAME + '.dev.js+bemhtml.js', target: LIB_NAME + '.js+bemhtml.js' }],

    ]);

    node.addTargets([
        '.dev.css',
        '.dev.js',
        '.dev.bemhtml.js',
        '.dev.js+bemhtml.js',

        '.css',
        '.js',
        '.bemhtml.js',
        '.js+bemhtml.js'
    ].map(function(ext) {
        return LIB_NAME + ext;
    }));
}
