({
    block: 'page',
    title: 'Header on White',
    mods: { theme: 'alfa-on-white' },
    head: [{ elem: 'css', url: 'header-on-white.min.css' }],
    scripts: [{ elem: 'js', url: 'header-on-white.min.js' }],
    content: [
        {
            block: 'header',
            mods: { theme: 'alfa-on-white' },
            menu: {
                block: 'menu',
                mods: {
                    theme: 'alfa-on-white',
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
                        title: 'Банкоматы',
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
                    },
                    {
                        title: 'Интернет-банк',
                        url: '#'
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
                                            mods: { type: 'link', theme: 'alfa-on-white' },
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
                        mods: { type: 'link', theme: 'alfa-on-white' },
                        url: item.url,
                        content: item.title
                    };
                })
            },
            user: {
                block: 'user',
                mods: { theme: 'alfa-on-white', size: 'm' },
                url: '/logout',
                text: 'User Name',
                icon: {
                    block: 'icon',
                    mods: {
                        theme: 'alfa-on-white',
                        size: 's',
                        user: 'out'
                    }
                }
            },
            support: {
                block: 'support',
                mods: { theme: 'alfa-on-white', size: 'm' },
                city: 'Москва',
                phone: '+7 (777) 777-77-77'
            }
        },
        [1,2,3,4,5,6,7,8,9,10].map(function(line) {
            return {
                attrs: { style: 'height:200px; border-bottom: 6px solid;' },
                content: line
            };
        })
    ]
});
