({
    block: 'page',
    title: 'Footer',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
            return {
                attrs: { style: 'padding: 50px 0; background: ' + ((theme === 'alfa-on-white') ? 'white' : '') },
                content: {
                    block: 'footer',
                    mods: { theme: theme },
                    menu: {
                        block: 'menu',
                        mods: {
                            theme: theme,
                            size: 'm',
                            horizontal: true
                        },
                        content: [
                            {
                                title: 'menu 1',
                                url: '#'
                            },
                            {
                                title: 'menu 2',
                                url: '#'
                            }
                        ].map(function(item) {
                            return {
                                block: 'menu-item',
                                mods: { type: 'link' },
                                url: item.url,
                                content: item.title,
                                target: item.target
                            };
                        })
                    },
                    additional: 'asdf',
                    copyright: {
                        block: 'copyright',
                        mods: { theme: theme }
                    }
                }
            };
        })
    ]
});
