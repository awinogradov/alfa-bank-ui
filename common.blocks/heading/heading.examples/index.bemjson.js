({
    block: 'page',
    title: 'Heading',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: [1, 2, 3, 4].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: 'lvl ' + size
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'heading',
                                    mods: { theme: theme },
                                    lvl: size,
                                    content: 'Вход в Интернет-банк'
                                }
                            }
                        ];
                    })
                };
            })
        }
    ]
});
