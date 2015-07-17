({
    block: 'page',
    title: 'Font',
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
                    content: [100, 300, 400, 500].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                elem: 'item',
                                content: {
                                    attrs: { style: 'font-family: "Roboto"; font-weight: ' + size },
                                    content: 'Шрифт Roboto'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    attrs: { style: 'font-weight: ' + size },
                                    content: 'Шрифт по умолчанию'
                                }
                            }
                        ];
                    })
                };
            })
        }
    ]
});
