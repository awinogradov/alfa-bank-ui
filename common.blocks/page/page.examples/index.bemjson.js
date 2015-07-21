({
    block: 'page',
    title: 'Page',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mix: { block: 'test', js: true },
    content: [
        {
            elem: 'inner',
            content: [
                {
                    elem: 'header',
                    content: [
                        {
                            block: 'header',
                            mods: { theme: 'alfa-on-color' },
                            menu: [
                                {
                                    title: 'Вернуться в интернет-банк',
                                    url: '#'
                                }
                            ],
                            customer: 'Владимир Киба'
                        }
                    ]
                },
                {
                    elem: 'content',
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
                }
            ]
        },
        {
            elem: 'footer',
            content: [
                {
                    block: 'footer',
                    mods: { theme: 'alfa-on-color' },
                    menu: [
                        {
                            title: 'Сайт Альфа-Банка',
                            url: '#'
                        }
                    ]
                }
            ]
        }
    ]
});
