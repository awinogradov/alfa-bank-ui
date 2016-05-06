({
    block: 'page',
    title: 'Popups',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'popups.min.css' }],
    scripts: [{ elem: 'js', url: 'popups.min.js' }],
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
                                url: '#',
                                text: 'User Name',
                                icon: {
                                    block: 'icon',
                                    mods: {
                                        theme: 'alfa-on-color',
                                        size: 's',
                                        user: 'body'
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
                                        content: 'Popups demo'
                                    }
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            block: 'select',
                                            mods: {
                                                theme: 'alfa-on-color',
                                                mode: 'radio',
                                                size: 'm'
                                            },
                                            val: 1,
                                            options: [
                                                { val: 1, text: 'Доклад' },
                                                { val: 2, text: 'Мастер-класс' },
                                                { val: 3, text: 'Круглый стол' }
                                            ]
                                        },
                                        {
                                            block: 'form-field',
                                            mods: {
                                                theme: 'alfa-on-color',
                                                type: 'select',
                                                'has-validation': true,
                                                size: 'm',
                                                message: 'popup'
                                            },
                                            js: {
                                                required: {
                                                    message: 'Super required!'
                                                }
                                            },
                                            content: [
                                                {
                                                    elem: 'control',
                                                    content: [
                                                        {
                                                            block: 'select',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                mode: 'radio',
                                                                size: 'm'
                                                            },
                                                            val: 1,
                                                            options: [
                                                                { val: 1, text: 'Доклад' },
                                                                { val: 2, text: 'Мастер-класс' },
                                                                { val: 3, text: 'Круглый стол' }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'input',
                                            mods: {
                                                theme: 'alfa-on-color',
                                                size: 'm',
                                                'has-autocomplete': true
                                            },
                                            options : [
                                                { val : 'MSC', content : 'Moscow' },
                                                { val : 'NYC', content : 'New York' }
                                            ]
                                        },
                                        {
                                            block: 'form-field',
                                            mods: {
                                                theme: 'alfa-on-color',
                                                type: 'input',
                                                'has-validation': true,
                                                size: 'm',
                                                message: 'popup'
                                            },
                                            js: {
                                                required: {
                                                    message: 'Super required!'
                                                }
                                            },
                                            content: [
                                                {
                                                    elem: 'control',
                                                    content: [
                                                        {
                                                            block: 'input',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                size: 'm',
                                                                'has-autocomplete': true
                                                            },
                                                            options : [
                                                                { val : 'MSC', content : 'Moscow' },
                                                                { val : 'NYC', content : 'New York' }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'input',
                                            mods: {
                                                theme: 'alfa-on-color',
                                                size: 'm',
                                                'has-calendar': true
                                            }
                                        },
                                        {
                                            block: 'form-field',
                                            mods: {
                                                theme: 'alfa-on-color',
                                                type: 'input',
                                                'has-validation': true,
                                                size: 'm',
                                                message: 'popup',
                                                imvalid: true
                                            },
                                            js: {
                                                required: {
                                                    message: 'Super required!'
                                                }
                                            },
                                            content: [
                                                {
                                                    elem: 'control',
                                                    content: [
                                                        {
                                                            block: 'input',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                size: 'm',
                                                                'has-calendar': true
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'dropdown',
                                            mods: {
                                                switcher: 'link',
                                                theme: 'alfa-on-color',
                                                size: 'm'
                                            },
                                            switcher: {
                                                block: 'link',
                                                text: 'Show popup'
                                            },
                                            popup: 'Text popup'
                                        }
                                    ].map(function(item) {
                                        return {
                                            block: 'line',
                                            content: item
                                        };
                                    })
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
                    mods: { theme: 'alfa-on-color' }
                }
            ]
        }
    ]
});
