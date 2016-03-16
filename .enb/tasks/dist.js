var techs = require('../config/techs'),
    levels = require('../config/levels'),
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
    project.task('dist', function(task) {
        return task.buildTargets(['dist/desktop']);
    });

    project.nodes(['dist/desktop'], function(node) {
        node.addTechs([
            // get FileList
            [techs.bem.levels, { levels: levels }],
            [techs.bem.levelsToBemdecl, { target: '.tmp.bemdecl.js' }],
            [techs.bem.deps, { bemdeclFile: '.tmp.bemdecl.js', target: '.tmp.deps.js' }],
            [techs.bem.files, { depsFile: '.tmp.deps.js' }],

            // build dev CSS
            [techs.postcss.engine, {
                target: '.tmp.css',
                plugins: techs.postcss.plugins
            }],
            [techs.borschik, { source: '.tmp.css', target: LIB_NAME + '.css', freeze: true, minify: false }],
            [techs.borschik, { source: '.tmp.css', target: LIB_NAME + '.min.css', freeze: true, minify: true }],

            // build JavaScript for browsers
            [techs.js, {
                target: '.tmp.js',
                sourceSuffixes: ['vanilla.js', 'browser.js', 'js']
            }],
            [techs.ym, {
                source: '.tmp.js',
                target: LIB_NAME + '.js'
            }],
            [techs.borschik, { source: LIB_NAME + '.js', target: LIB_NAME + '.min.js' }],

            // build BEMHTML
            [techs.templates.bemhtml, {
                target: LIB_NAME + '.bemhtml.js',
                sourceSuffixes: ['bemhtml', 'bemhtml.js']
            }],
            [techs.borschik, { source: LIB_NAME + '.bemhtml.js', target: LIB_NAME + '.min.bemhtml.js' }],

            // merge JavaScript with BEMHTML
            [techs.files.merge, {
                target: '.tmp.js+bemhtml.js',
                sources: ['.tmp.js', LIB_NAME + '.bemhtml.js']
            }],
            [techs.ym, {
                source: '.tmp.js+bemhtml.js',
                target: LIB_NAME + '.js+bemhtml.js'
            }],
            [techs.borschik, { source: LIB_NAME + '.js+bemhtml.js', target: LIB_NAME + '.min.js+bemhtml.js' }]

        ]);

        node.addTargets([
            '.css',
            '.min.css',
            '.js',
            '.min.js',
            '.bemhtml.js',
            '.min.bemhtml.js',
            '.js+bemhtml.js',
            '.min.js+bemhtml.js'
        ].map(function(ext) {
            return LIB_NAME + ext;
        }));
    });
};

