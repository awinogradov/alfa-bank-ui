({
    block: 'page',
    title: 'App',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
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
                            menu: {
                                block: 'menu',
                                mods: {
                                    theme: 'alfa-on-color',
                                    size: 'm',
                                    view: 'horizontal'
                                },
                                content: [
                                    {
                                        title: 'Частным лицам',
                                        url: '#'
                                    },
                                    {
                                        title: 'Бизнесу',
                                        url: '#'
                                    },
                                    {
                                        title: 'Отделения',
                                        url: '#'
                                    },
                                    {
                                        title: 'Интернет-банк',
                                        url: '#',
                                        items: [
                                            {
                                                title: 'Банкоматы',
                                                url: '#'
                                            },
                                            {
                                                title: 'Интернет-банк',
                                                url: '#'
                                            }
                                        ]
                                    }
                                ].map(function(item) {
                                    if (item.items){
                                        return {
                                            block: 'menu-item',
                                            mods: { type: 'dropdown' },
                                            content: item.title,
                                            popup: [
                                                {
                                                    block: 'menu',
                                                    mix: { elem: 'additional' },
                                                    content: item.items.map(function(item) {
                                                        return {
                                                            block: 'menu-item',
                                                            mods: { type: 'link', theme: 'alfa-on-color' },
                                                            mix: { elem: 'additional' },
                                                            url: item.url,
                                                            content: item.title
                                                        };
                                                    })
                                                }
                                            ]
                                        };
                                    }
                                    return {
                                        block: 'menu-item',
                                        mods: { type: 'link', theme: 'alfa-on-color' },
                                        url: item.url,
                                        content: item.title
                                    };
                                })
                            },
                            user: {
                                block: 'user',
                                mods: { theme: 'alfa-on-color', size: 'm' },
                                url: '/logout',
                                text: 'User Name',
                                icon: {
                                    block: 'icon',
                                    mods: {
                                        theme: 'alfa-on-color',
                                        size: 's',
                                        user: 'out'
                                    }
                                }
                            },
                            support: {
                                block: 'support',
                                mods: { theme: 'alfa-on-color', size: 'm' },
                                city: 'Москва',
                                phone: '+7 (777) 777-77-77'
                            }
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
                                        mods: { theme: 'alfa-on-color', size: 'xl' },
                                        content: 'Заголовок Заголовок Заголовок Заголовок'
                                    }
                                },
                                {
                                    elem: 'menu',
                                    content: [
                                        {
                                            block: 'menu',
                                            mods: { theme: 'alfa-on-color', size: 'l', view: 'horizontal' },
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
                    menu: {
                        block: 'menu',
                        mods: {
                            theme: 'alfa-on-color',
                            size: 'm',
                            view: 'horizontal'
                        },
                        content: [
                            {
                                title: 'Частным лицам',
                                url: '#'
                            },
                            {
                                title: 'Бизнесу',
                                url: '#'
                            },
                            {
                                title: 'Отделения',
                                url: '#'
                            }
                        ].map(function(item) {
                            return {
                                block: 'menu-item',
                                mods: { type: 'link', theme: 'alfa-on-color' },
                                url: item.url,
                                content: item.title
                            };
                        })
                    }
                }
            ]
        }
    ]
});
