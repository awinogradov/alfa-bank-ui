({
    block: 'page',
    title: 'App',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'app',
            mix: { block: 'service-name' },
            content: [
                {
                    elem: 'title',
                    content: {
                        block: 'heading',
                        mods: { theme: 'alfa-on-color' },
                        lvl: 1,
                        content: 'Заголовок'
                    }
                },
                {
                    elem: 'menu',
                    content: [
                        {
                            block: 'menu',
                            mods: { theme: 'alfa-on-color', size: 'l', horizontal: true },
                            content: [
                                {
                                    block: 'menu-item',
                                    mods: {
                                        theme: 'alfa-on-color',
                                        type: 'link'
                                    },
                                    url: '#',
                                    content: 'Раз'
                                },
                                {
                                    block: 'menu-item',
                                    mods: {
                                        theme: 'alfa-on-color',
                                        type: 'link'
                                    },
                                    url: '#',
                                    content: 'Два'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'content',
                    content: 'Какой-то блок'
                }
            ]
        }
    ]
});
