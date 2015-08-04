({
    block: 'page',
    title: 'List',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок List'
        },
        {
            block: 'example-section',
            title: 'Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'list',
                            mods: { theme: theme },
                            items: [
                                'Тексты и переводы песен № 0 - 1400',
                                'Тексты и переводы песен № 1400 - 2800',
                                'Тексты и переводы песен № 2800 - 4200',
                                'Тексты и переводы песен № 4200 - 5600',
                                'Тексты и переводы песен № 5600 - 7000',
                                'Тексты и переводы песен № 7000 - 8400',
                                [
                                    'ordered item 4',
                                    {
                                        block: 'list',
                                        mods: { type: 'ordered' },
                                        items: ['nested and ordered item 1', 'nested and ordered item 2']
                                    }
                                ]
                            ]
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Type Ordered',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'list',
                            mods: { theme: theme, type: 'ordered' },
                            items: [
                                'Тексты и переводы песен № 0 - 1400',
                                'Тексты и переводы песен № 1400 - 2800',
                                'Тексты и переводы песен № 2800 - 4200',
                                'Тексты и переводы песен № 4200 - 5600',
                                'Тексты и переводы песен № 5600 - 7000',
                                'Тексты и переводы песен № 7000 - 8400',
                                [
                                    'ordered item 4',
                                    {
                                        block: 'list',
                                        mods: { type: 'ordered' },
                                        items: ['nested and ordered item 1', 'nested and ordered item 2']
                                    }
                                ]
                            ]
                        }
                    }
                };
            })
        }
    ]
});
