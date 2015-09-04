var bh = new (require('bh').BH),
    exec = require('child_process').exec,
    fs = require('fs-extra'),
    path = require('path'),
    _ = require('lodash'),
    formatJson = require('format-json');

require('console.json');

var PROTEIN_MODS = { block: 1, name: 1, options: 1, default: 1, data: 1, states: 1, themes: 1, mods: 1 };

bh.match('config', function(ctx, json) {
    var mods = { default: false };

    Object.keys(json).forEach(function(key) {
        !PROTEIN_MODS[key] && key.charAt(0) !== '_' && (mods[key] = json[key]);
    });

    return Object.keys(mods).map(function (modName) {
        var content = _.cloneDeep(json.data);
        return {
            block: 'example',
            themes: json.themes,
            states: json.states,
            default: json.default,
            modName: modName,
            modVals: mods[modName],
            content: _.assign(content, json.options[modName])
        };
    });
});

// -----------------------------------------------------------------------------

bh.match('example', function(ctx, json) {
    var block = json.content,
        themes = json.themes || [],
        states = _.cloneDeep(json.states) || [],
        defaultMods = json.default || {},
        modName = json.modName,
        modVals = json.modVals || [];

    states.unshift('');

    function buildState(b, state) {
        var bc = _.cloneDeep(b);
        state && (bc.mods[state] = true);
        return bc;
    }

    function buildModVal(blocks, modName, modVal) {
        var blc = _.cloneDeep(blocks);
        return blc.map(function (b) {
            b.mods[modName] = modVal;
            return b;
        });
    }

    function buildTheme(blocks, theme) {
        var blc = _.cloneDeep(blocks);
        return blc.map(function (b) {
            if(b.mods) {
                b.mods.theme = theme;
                return b;
            }
            else {
                return b.map(function (blWithMod) {
                    blWithMod.mods.theme = theme;
                    return blWithMod;
                });
            }
        });
    }

    block.mods = _.assign(block.mods || {}, defaultMods);

    var blocksExtendedWithStates = states.map(function (state) {
        return buildState(block, state);
    });

    var blocksExtendedWithMods;
    if(modVals) {
        if(modVals.length) {
            blocksExtendedWithMods = modVals.map(function (modVal) {
                return buildModVal(blocksExtendedWithStates, modName, modVal);
            });
        } else if(modVals) {
            blocksExtendedWithMods = [buildModVal(blocksExtendedWithStates, modName, true)];
        }
    } else {
        blocksExtendedWithMods = [blocksExtendedWithStates];
    }

    var blocksExtendedWithThemes = themes.map(function (theme) {
        return buildTheme(blocksExtendedWithMods, theme);
    });

    json.content = blocksExtendedWithThemes.map(function (blocksWithMods, i) {
        return {
            block: 'theme',
            mods: { name: themes[i] },
            content: [
                { elem: 'name', content: themes[i] },
                {
                    elem: 'val',
                    content: {
                        block: 'mod',
                        mods: { theme: themes[i] },
                        states: states,
                        content: [
                            modName && { elem: 'name', content: modName },
                            blocksWithMods.map(function (blocksWithStates, j) {
                                return {
                                    elem: 'items',
                                    val: modVals[j],
                                    content: blocksWithStates
                                };
                            })
                        ]
                    }
                }
            ]
        };
    });
});

// -----------------------------------------------------------------------------

bh.match('theme', function(ctx, json) {
    ctx.tParam('blockMods', json.mods);
});

bh.match('theme__name', function(ctx, json) {
    json.mods = {};
    json.content = {
        block: 'heading',
        mods: { theme: ctx.tParam('blockMods').name },
        lvl: 2,
        content: json.content
    };
});

// -----------------------------------------------------------------------------

bh.match('mod', function(ctx, json) {
    ctx.tParam('blockMods', json.mods);
    ctx.tParam('blockStates', json.states);
});

bh.match('mod__name', function(ctx, json) {
    json.mods = {};
    json.content = {
        block: 'heading',
        mods: { theme: ctx.tParam('blockMods').theme },
        lvl: 3,
        content: json.content
    };
});

bh.match('mod__items', function(ctx, json) {
    var blockMods = ctx.tParam('blockMods'),
        blockStates = ctx.tParam('blockStates');

    json.content = [
        {
            elem: 'val',
            content: {
                block: 'heading',
                mods: { theme: blockMods.theme },
                lvl: 4,
                content: json.val
            }
        },
        {
            elem: 'instance',
            content: json.content.map(function (blockWithState, i) {
                return {
                    block: 'state',
                    mods: { theme: blockMods.theme },
                    content: [
                        { elem: 'name', content: blockStates[i] || 'default' },
                        {
                            elem: 'instance',
                            content: blockWithState
                        }
                    ]
                };
            })
        }
    ];
});

// -----------------------------------------------------------------------------

bh.match('state', function(ctx, json) {

});

// -----------------------------------------------------------------------------




var levels = [
    'common.blocks',
    'mobile.blocks'
];

var EXTENSION = '.proto.js';

levels.forEach(function(level) {

    exec('find ' + level + ' -iname \'*.proto.js\'', function(err, stdout, stdin) {

        var proteinConfigs = stdout.split('\n');

        proteinConfigs.pop();

        proteinConfigs.forEach(function (pathToConfig) {
            var filename = path.basename(pathToConfig),
                component = filename.replace(EXTENSION, ''),
                config = require(path.join(process.cwd(), pathToConfig));

            config.block = 'config';
            config.name = component;
            config.data = config.data || {};
            config.data.block = component;

            pathToExample = path.join(pathToConfig.replace(filename, ''), component + '.examples', component + '.bemjson.js');

            fs.outputFile(pathToExample,
            '(' +
                formatJson.diffy({
                    block: 'page',
                    title: component,
                    head: [{ elem: 'css', url: component + '.min.css' }],
                    scripts: [{ elem: 'js', url: component + '.min.js' }],
                    content: bh.processBemJson(config)
                }).toString() +
            ')', function (err) {
                console.log('done!');
            });
        });
    });
});
