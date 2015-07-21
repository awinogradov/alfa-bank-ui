({
    block: 'page',
    title: 'icon',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: (function() {

        return [
            {
                block: 'example-header',
                title: 'Блок Icon'
            },
            template('currency', ['rub']),
            template('card', ['visa', 'visaelectron', 'mastercard', 'maestro']),
            template('action', ['ok', 'fail', 'repeat', 'error']),
            template('network', ['twitter', 'vk', 'facebook']),
            template('tool', ['pdf', 'pr', 'email', 'close', 'calendar', 'search', 'help']),
            template('arrow', ['left', 'right', 'up', 'down']),
            template('user', ['out']),
            template('bank', [2449, 3308, 5475, 285, 10223, 439, 9908, 3001, 1490, 4267, 7311, 1516, 1309, 8967, 351, 6415, 4924, 5030, 256, 1415, 2377, 7687, 7686, 244, 404]),
        ];

        function template(modName, modVals) {
            return modVals.map(function(modVal) {
                return {
                    block: 'example-section',
                    title: modName + '_' + modVal,
                    content: [
                        ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                            return {
                                elem: 'col',
                                elemMods: { theme: theme },
                                content: ['s', 'm', 'l', 'xl'].map(function(size) {

                                    var iconMods = { theme: theme, size: size };
                                    iconMods[modName] = modVal;

                                    return [
                                        {
                                            elem: 'size',
                                            content: size
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods: iconMods
                                                }
                                            ]
                                        }
                                    ];
                                })
                            };
                        })
                    ]
                };
            });
        }

    })()
});
