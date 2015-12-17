var fs = require('fs'),
    path = require('path'),
    levels = require(path.resolve(__dirname, '..', 'config', 'levels')),
    techs = require(path.resolve(__dirname, '..', 'config', 'techs'));

module.exports = function(node) {
    node.addTechs([
        [techs.bem.bemjsonToBemdecl, { target: '.tmp.bemdecl.js' }],
        [techs.bem.deps, {
            target: '.tmp.deps.js',
            bemdeclFile: '.tmp.bemdecl.js'
        }],
        [techs.bem.files, {
            depsFile: '.tmp.deps.js'
        }],

        // build templates
        [techs.templates.bemhtml, {
            target: '.tmp.bemhtml.js',
            sourceSuffixes: ['bemhtml', 'bemhtml.js']
        }],

        // build JavaScript for browsers
        [techs.js, {
            target: '.tmp.browser.js',
            sourceSuffixes: ['vanilla.js', 'js', 'browser.js']
        }],
        [techs.files.merge, {
            target: '.tmp.pre.js',
            sources: ['.tmp.bemhtml.js', '.tmp.browser.js']
        }],
        [techs.ym, {
            source: '.tmp.pre.js',
            target: '.tmp.js'
        }],

        // build CSS
        [techs.postcss.engine, {
            sourceSuffixes: ['css', 'post.css'],
            target: '.tmp.css',
            sourcemap: true,
            plugins: techs.postcss.plugins
        }],
    ]);
};
