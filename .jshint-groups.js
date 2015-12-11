module.exports = {
    options: {
        boss: true,
        eqeqeq: true,
        evil: true,
        expr: true,
        forin: true,
        immed: true,
        loopfunc: true,
        maxdepth: 4,
        maxlen: 120,
        noarg: true,
        noempty: true,
        onecase: true,
        quotmark: 'single',
        sub: true,
        supernew: true,
        undef: true,
        unused: true
    },

    groups: {
        protojs: {
            options: {
                esnext: true
            },
            includes: ['*.blocks/**/*.proto.js']
        },

        browserjs: {
            options: {
                browser: true,
                predef: ['modules']
            },
            includes: ['*.blocks/**/*.js'],
            excludes: [
                '*.blocks/**/*.bemhtml.js',
                '*.blocks/**/*.node.js',
                '*.blocks/**/*.proto.js',
                '**/*.i18n/*.js',
                '**/*.bem/*.js',
                '**/_*.js',
                '**/*.bh.js',
                '**/*.spec.js',
                '**/*.deps.js',
                '**/*.bemjson.js'
            ]
        },

        specjs: {
            options: {
                browser: true,
                maxlen: 150,
                predef: [
                    'modules',
                    'describe',
                    'it',
                    'before',
                    'beforeEach',
                    'after',
                    'afterEach',
                    'chai'
                ]
            },
            includes: ['*.blocks/**/*.spec.js']
        },

        bemhtml: {
            options: {
                predef: [
                    'apply',
                    'applyCtx',
                    'applyNext',
                    'attrs',
                    'bem',
                    'block',
                    'cls',
                    'content',
                    'def',
                    'elem',
                    'js',
                    'local',
                    'match',
                    'mix',
                    'mod',
                    'mode',
                    'tag'
                ]
            },
            includes: [
                '*.blocks/**/*.bemhtml',
                '*.blocks/**/*.bemhtml.js'
            ],
            excludes: ['test.blocks/**/*']
        },

        bemjsonjs: {
            options: {
                asi: true
            },
            includes: ['*.bundles/**/*.bemjson.js']
        }
    }
};
