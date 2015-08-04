({
    block: 'page',
    title: 'Menu',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок Menu'
        },
        {
            block: 'example-section',
            title: 'Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                block: 'menu',
                                mods: { theme: theme, size: size },
                                val: 2,
                                content: [
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'link' },
                                        val: 1,
                                        url: '#',
                                        content: 'Отпуск на работе'
                                    },
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'link' },
                                        val: 2,
                                        url: '#',
                                        content: 'Отпуск в горах'
                                    },
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'link' },
                                        val: 3,
                                        url: '#',
                                        content: 'Отпуск на море'
                                    },
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'link' },
                                        val: 4,
                                        url: '#',
                                        content: 'Отпуск на диване'
                                    }
                                ]
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Groups',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                block: 'menu',
                                mods: { theme: theme, size: size },
                                val: 2,
                                content: [
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'link' },
                                        val: 1,
                                        url: '#',
                                        content: 'Отпуск на работе'
                                    },
                                    {
                                        elem: 'group',
                                        title: 'Group title',
                                        content: [
                                            {
                                                block: 'menu-item',
                                                mods: { theme: theme, size: size, type: 'link' },
                                                val: 2,
                                                url: '#',
                                                content: 'Отпуск в горах'
                                            },
                                            {
                                                block: 'menu-item',
                                                mods: { theme: theme, size: size, type: 'link' },
                                                val: 3,
                                                url: '#',
                                                content: 'Отпуск на море'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'link' },
                                        val: 4,
                                        url: '#',
                                        content: 'Отпуск на диване'
                                    }
                                ]
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Additional',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                block: 'menu',
                                mods: { theme: theme, size: size },
                                content: [
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'link' },
                                        url: '#',
                                        content: 'Отпуск на работе'
                                    },
                                    {
                                        block: 'menu-item',
                                        mods: { theme: theme, size: size, type: 'dropdown' },
                                        content: 'Отпуск на диване',
                                        popup: [
                                            {
                                                block: 'menu',
                                                mix: { elem: 'additional' },
                                                mods: { theme: theme, size: size },
                                                val: 2,
                                                content: [
                                                    {
                                                        block: 'menu-item',
                                                        mix: { elem: 'additional' },
                                                        mods: { theme: theme, size: size, type: 'link' },
                                                        val: 1,
                                                        url: '#',
                                                        content: 'Отпуск на работе'
                                                    },
                                                    {
                                                        block: 'menu-item',
                                                        mix: { elem: 'additional' },
                                                        mods: { theme: theme, size: size, type: 'link' },
                                                        val: 2,
                                                        url: '#',
                                                        content: 'Отпуск на диване'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ];
                    })
                };
            })
        }
    ]
});
