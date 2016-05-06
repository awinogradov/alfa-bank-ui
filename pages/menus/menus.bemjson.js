var themeSwitcher = 'alfa-on-color';

module.exports = {
    block: 'page',
    title: 'Menu examples',
    mods: { theme: themeSwitcher },
    head: [{ elem: 'css', url: 'menus.min.css' }],
    scripts: [{ elem: 'js', url: 'menus.min.js' }],
    content: [
        {
            elem: 'inner',
            content: [
                {
                    elem: 'header',
                    content: [
                        {
                            block: 'header',
                            mods: { theme: themeSwitcher },
                            menu: {
                                block: 'menu',
                                mods: {
                                    theme: themeSwitcher,
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
                                                title: 'Интернет-банк',
                                                url: '#'
                                            },
                                            {
                                                title: 'Банкоматы',
                                                url: '#'
                                            },
                                            {
                                                title: 'Интернет-банк Интернет-банк Интернет-банк',
                                                url: '#'
                                            },
                                            {
                                                title: 'Банкоматы',
                                                url: '#'
                                            },
                                            {
                                                title: 'Интернет-банк',
                                                url: '#'
                                            },
                                            {
                                                title: 'Банкоматы',
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
                                                            mods: { type: 'link', theme: themeSwitcher },
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
                                        mods: { type: 'link', theme: themeSwitcher },
                                        url: item.url,
                                        content: item.title
                                    };
                                })
                            },
                            user: {
                                block: 'user',
                                mods: { theme: themeSwitcher, size: 'm' },
                                url: '#',
                                text: 'User Name',
                                icon: {
                                    block: 'icon',
                                    mods: {
                                        theme: themeSwitcher,
                                        size: 's',
                                        user: 'body'
                                    }
                                }
                            },
                            support: {
                                block: 'support',
                                mods: { theme: themeSwitcher, size: 'm' },
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
                                        mods: { theme: themeSwitcher, size: 'xl' },
                                        content: 'Блок Menu'
                                    }
                                },
                                {
                                    elem: 'menu',
                                    content: [
                                        {
                                            block: 'menu',
                                            mods: { theme: themeSwitcher, size: 'l', view: 'horizontal' },
                                            content: [
                                                {
                                                    block: 'menu-item',
                                                    mods: {
                                                        theme: themeSwitcher,
                                                        type: 'link'
                                                    },
                                                    url: '#',
                                                    content: 'Раз'
                                                },
                                                {
                                                    block: 'menu-item',
                                                    mods: {
                                                        theme: themeSwitcher,
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
                                    content: [
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'Select + Menu'
                                        },
                                        ['s', 'm', 'l', 'xl'].map(function(size) {
                                            return [
                                                {
                                                    block: 'select',
                                                    mods: { theme: themeSwitcher, size: size, mode: 'radio' },
                                                    attrs: { style: 'margin-right: 10px;' },
                                                    val: 1,
                                                    options: [
                                                        { val: 1, text: 'Доклад' },
                                                        { val: 2, text: 'Мастер-класс' },
                                                        { val: 3, text: 'Круглый стол' }
                                                    ]
                                                },
                                                {
                                                    block: 'select',
                                                    mods: { theme: themeSwitcher, size: size, mode: 'check' },
                                                    val: [3],
                                                    options: [
                                                        { val: 1, text: 'Доклад' },
                                                        { val: 2, text: 'Мастер-класс' },
                                                        { val: 3, text: 'Круглый стол' }
                                                    ]
                                                },
                                                { tag: 'br' },
                                                { tag: 'br' }
                                            ];
                                        }),
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'menu'
                                        },
                                        {
                                            block: 'menu',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: [
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher },
                                                    content: 'Text!!!'
                                                },
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher },
                                                    content: 'Text!!!'
                                                },
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher },
                                                    content: 'Text!!!'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'menu_view_horizontal'
                                        },
                                        {
                                            block: 'menu',
                                            mods: { theme: themeSwitcher, size: 'm', view: 'horizontal' },
                                            content: [
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher },
                                                    content: 'Text!!!'
                                                },
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher },
                                                    content: 'Text!!!'
                                                },
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher },
                                                    content: 'Text!!!'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'Menu + menu-item_type_link'
                                        },
                                        ['s', 'm', 'l', 'xl'].map(function(size) {
                                            return [
                                                {
                                                    block: 'heading',
                                                    mods: { theme: themeSwitcher, size: 's' },
                                                    content: 'Size ' + size
                                                },
                                                {
                                                    block: 'menu',
                                                    mods: { theme: themeSwitcher, size: size },
                                                    content: [
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher, type: 'link' },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher, type: 'link' },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher, type: 'link' },
                                                            content: 'Text!!!'
                                                        }
                                                    ]
                                                }
                                            ];
                                        }),
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'Menu + menu-item'
                                        },
                                        ['s', 'm', 'l', 'xl'].map(function(size) {
                                            return [
                                                {
                                                    block: 'heading',
                                                    mods: { theme: themeSwitcher, size: 's' },
                                                    content: 'Size ' + size
                                                },
                                                {
                                                    block: 'menu',
                                                    mods: { theme: themeSwitcher, size: size },
                                                    content: [
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        }
                                                    ]
                                                }
                                            ];
                                        }),
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'Menu groups'
                                        },
                                        // Groups
                                        ['s', 'm', 'l', 'xl'].map(function(size) {
                                            return [
                                                {
                                                    block: 'heading',
                                                    mods: { theme: themeSwitcher, size: 's' },
                                                    content: 'Size ' + size
                                                },
                                                {
                                                    block: 'menu',
                                                    mods: { theme: themeSwitcher, size: size },
                                                    content: [
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            elem: 'group',
                                                            title: 'Title group',
                                                            content: [
                                                                {
                                                                    block: 'menu-item',
                                                                    mods: { theme: themeSwitcher },
                                                                    content: 'Text!!!'
                                                                },
                                                                {
                                                                    block: 'menu-item',
                                                                    mods: { theme: themeSwitcher },
                                                                    content: 'Text!!!'
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            elem: 'group',
                                                            title: 'Title 2 group',
                                                            content: [
                                                                {
                                                                    block: 'menu-item',
                                                                    mods: { theme: themeSwitcher },
                                                                    content: 'Text!!!'
                                                                },
                                                                {
                                                                    block: 'menu-item',
                                                                    mods: { theme: themeSwitcher },
                                                                    content: 'Text!!!'
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            elem: 'group',
                                                            title: 'Title 3 gruop',
                                                            content: [
                                                                {
                                                                    block: 'menu-item',
                                                                    mods: { theme: themeSwitcher },
                                                                    content: 'Text!!!'
                                                                },
                                                                {
                                                                    block: 'menu-item',
                                                                    mods: { theme: themeSwitcher },
                                                                    content: 'Text!!!'
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            content: 'Text!!!'
                                                        }
                                                    ]
                                                }
                                            ];
                                        }),
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'menu_mode_check'
                                        },
                                        ['s', 'm', 'l', 'xl'].map(function(size) {
                                            return [
                                                {
                                                    block: 'heading',
                                                    mods: { theme: themeSwitcher, size: 's' },
                                                    content: 'Size ' + size
                                                },
                                                {
                                                    block: 'menu',
                                                    mods: { theme: themeSwitcher, size: size, mode: 'check' },
                                                    val: [2,3],
                                                    content: [
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 1,
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 2,
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 3,
                                                            content: 'Text!!!'
                                                        },
                                                    ]
                                                }
                                            ];
                                        }),
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'menu_mode_radio'
                                        },
                                        ['s', 'm', 'l', 'xl'].map(function(size) {
                                            return [
                                                {
                                                    block: 'heading',
                                                    mods: { theme: themeSwitcher, size: 's' },
                                                    content: 'Size ' + size
                                                },
                                                {
                                                    block: 'menu',
                                                    mods: { theme: themeSwitcher, size: size, mode: 'radio' },
                                                    val: 3,
                                                    content: [
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 1,
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 2,
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 3,
                                                            content: 'Text!!!'
                                                        },
                                                    ]
                                                }
                                            ];
                                        }),
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'menu_mode_radio-check'
                                        },
                                        ['s', 'm', 'l', 'xl'].map(function(size) {
                                            return [
                                                {
                                                    block: 'heading',
                                                    mods: { theme: themeSwitcher, size: 's' },
                                                    content: 'Size ' + size
                                                },
                                                {
                                                    block: 'menu',
                                                    mods: { theme: themeSwitcher, size: size, mode: 'radio-check' },
                                                    val: 3,
                                                    content: [
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 1,
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 2,
                                                            content: 'Text!!!'
                                                        },
                                                        {
                                                            block: 'menu-item',
                                                            mods: { theme: themeSwitcher },
                                                            val: 3,
                                                            content: 'Text!!!'
                                                        },
                                                    ]
                                                }
                                            ];
                                        }),
                                        {
                                            block: 'heading',
                                            mods: { theme: themeSwitcher, size: 'm' },
                                            content: 'menu_view_horizontal + menu-item_type_link'
                                        },
                                        {
                                            block: 'menu',
                                            mods: { theme: themeSwitcher, size: 'm', view: 'horizontal' },
                                            content: [
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher, type: 'link' },
                                                    content: 'Text!!!'
                                                },
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher, type: 'link' },
                                                    content: 'Text!!!'
                                                },
                                                {
                                                    block: 'menu-item',
                                                    mods: { theme: themeSwitcher, type: 'link' },
                                                    content: 'Text!!!'
                                                }
                                            ]
                                        },
                                    ]
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
                    mods: { theme: themeSwitcher },
                    menu: {
                        block: 'menu',
                        mods: {
                            theme: themeSwitcher,
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
                                mods: { type: 'link', theme: themeSwitcher },
                                url: item.url,
                                content: item.title
                            };
                        })
                    }
                }
            ]
        }
    ]
};
