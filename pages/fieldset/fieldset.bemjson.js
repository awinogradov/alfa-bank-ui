({
    block: 'page',
    title: 'Fieldset',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'fieldset.min.css' }],
    scripts: [{ elem: 'js', url: 'fieldset.min.js' }],
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
                                        content: 'Fieldset demo'
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
                                    content: [
                                        {
                                            block: 'heading',
                                            mods: { theme: 'alfa-on-color', size: 'l' },
                                            content: 'Заголовок формы'
                                        },
                                        {
                                            block: 'form',
                                            mods: {
                                                'has-vaidation': true,
                                                message: 'text'
                                            },
                                            content: [
                                                {
                                                    elem: 'content',
                                                    content: [
                                                        {
                                                            block: 'fieldset',
                                                            mods: { view: 'line' },
                                                            legend: [
                                                                {
                                                                    block: 'link',
                                                                    mods: { theme: 'alfa-on-color', size: 'l' },
                                                                    text: 'Первая часть вторая строка'
                                                                },
                                                                { tag: 'br' },
                                                                { tag: 'br' },
                                                                {
                                                                    block: 'paragraph',
                                                                    mods: { theme: 'alfa-on-color' },
                                                                    content: [
                                                                        'Какой-то подсказочный текст можно написать'
                                                                    ]
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test2',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test3',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block : 'input',
                                                                                mods : {
                                                                                    theme: 'alfa-on-color',
                                                                                    size : 'm',
                                                                                    'has-calendar' : true,
                                                                                    'readable-date' : true
                                                                                },
                                                                                earlierLimit : '20.03.2015',
                                                                                laterLimit : '20.06.2015',
                                                                                offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
                                                                                icon: {
                                                                                    block: 'icon',
                                                                                    mods: {
                                                                                        theme: 'alfa-on-color',
                                                                                        size: 'm',
                                                                                        tool: 'calendar'
                                                                                    }
                                                                                }

                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'fieldset',
                                                            mods: { view: 'line' },
                                                            legend: [
                                                                {
                                                                    block: 'heading',
                                                                    mods: { theme: 'alfa-on-color', size: 's' },
                                                                    content: 'Первая часть вторая строка'
                                                                },
                                                                {
                                                                    block: 'paragraph',
                                                                    mods: { theme: 'alfa-on-color' },
                                                                    content: [
                                                                        'Какой-то подсказочный текст можно написать'
                                                                    ]
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test2',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test3',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block : 'input',
                                                                                mods : {
                                                                                    theme: 'alfa-on-color',
                                                                                    size : 'm',
                                                                                    'has-calendar' : true,
                                                                                    'readable-date' : true
                                                                                },
                                                                                earlierLimit : '20.03.2015',
                                                                                laterLimit : '20.06.2015',
                                                                                offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
                                                                                icon: {
                                                                                    block: 'icon',
                                                                                    mods: {
                                                                                        theme: 'alfa-on-color',
                                                                                        size: 'm',
                                                                                        tool: 'calendar'
                                                                                    }
                                                                                }

                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'fieldset',
                                                            mods: { view: 'line' },
                                                            legend: [
                                                                {
                                                                    block: 'paragraph',
                                                                    mods: { theme: 'alfa-on-color' },
                                                                    content: [
                                                                        'Какой-то подсказочный текст можно написать'
                                                                    ]
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test2',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test3',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block : 'input',
                                                                                mods : {
                                                                                    theme: 'alfa-on-color',
                                                                                    size : 'm',
                                                                                    'has-calendar' : true,
                                                                                    'readable-date' : true
                                                                                },
                                                                                earlierLimit : '20.03.2015',
                                                                                laterLimit : '20.06.2015',
                                                                                offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
                                                                                icon: {
                                                                                    block: 'icon',
                                                                                    mods: {
                                                                                        theme: 'alfa-on-color',
                                                                                        size: 'm',
                                                                                        tool: 'calendar'
                                                                                    }
                                                                                }

                                                                            }
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
                                                            block: 'button',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                view: 'extra',
                                                                type: 'submit',
                                                                size: 'm'
                                                            },
                                                            text: 'Кнопка'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                view: 'action',
                                                                size: 'm'
                                                            },
                                                            text: 'Кнопка'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                size: 'm'
                                                            },
                                                            text: 'Кнопка'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'form',
                                            mods: {
                                                'has-vaidation': true,
                                                message: 'text'
                                            },
                                            content: [
                                                {
                                                    elem: 'content',
                                                    content: [
                                                        {
                                                            block: 'fieldset',
                                                            legend: [
                                                                {
                                                                    block: 'link',
                                                                    mods: { theme: 'alfa-on-color', size: 'l' },
                                                                    text: 'Первая часть вторая строка'
                                                                },
                                                                { tag: 'br' },
                                                                { tag: 'br' },
                                                                {
                                                                    block: 'paragraph',
                                                                    mods: { theme: 'alfa-on-color' },
                                                                    content: [
                                                                        'Какой-то подсказочный текст можно написать'
                                                                    ]
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test2',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test3',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block : 'input',
                                                                                mods : {
                                                                                    theme: 'alfa-on-color',
                                                                                    size : 'm',
                                                                                    'has-calendar' : true,
                                                                                    'readable-date' : true
                                                                                },
                                                                                earlierLimit : '20.03.2015',
                                                                                laterLimit : '20.06.2015',
                                                                                offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
                                                                                icon: {
                                                                                    block: 'icon',
                                                                                    mods: {
                                                                                        theme: 'alfa-on-color',
                                                                                        size: 'm',
                                                                                        tool: 'calendar'
                                                                                    }
                                                                                }

                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'fieldset',
                                                            legend: [
                                                                {
                                                                    block: 'heading',
                                                                    mods: { theme: 'alfa-on-color', size: 's' },
                                                                    content: 'Первая часть вторая строка'
                                                                },
                                                                {
                                                                    block: 'paragraph',
                                                                    mods: { theme: 'alfa-on-color' },
                                                                    content: [
                                                                        'Какой-то подсказочный текст можно написать'
                                                                    ]
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test2',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test3',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block : 'input',
                                                                                mods : {
                                                                                    theme: 'alfa-on-color',
                                                                                    size : 'm',
                                                                                    'has-calendar' : true,
                                                                                    'readable-date' : true
                                                                                },
                                                                                earlierLimit : '20.03.2015',
                                                                                laterLimit : '20.06.2015',
                                                                                offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
                                                                                icon: {
                                                                                    block: 'icon',
                                                                                    mods: {
                                                                                        theme: 'alfa-on-color',
                                                                                        size: 'm',
                                                                                        tool: 'calendar'
                                                                                    }
                                                                                }

                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'fieldset',
                                                            legend: [
                                                                {
                                                                    block: 'paragraph',
                                                                    mods: { theme: 'alfa-on-color' },
                                                                    content: [
                                                                        'Какой-то подсказочный текст можно написать'
                                                                    ]
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test2',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test3',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block : 'input',
                                                                                mods : {
                                                                                    theme: 'alfa-on-color',
                                                                                    size : 'm',
                                                                                    'has-calendar' : true,
                                                                                    'readable-date' : true
                                                                                },
                                                                                earlierLimit : '20.03.2015',
                                                                                laterLimit : '20.06.2015',
                                                                                offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
                                                                                icon: {
                                                                                    block: 'icon',
                                                                                    mods: {
                                                                                        theme: 'alfa-on-color',
                                                                                        size: 'm',
                                                                                        tool: 'calendar'
                                                                                    }
                                                                                }

                                                                            }
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
                                                            block: 'button',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                view: 'extra',
                                                                type: 'submit',
                                                                size: 'm'
                                                            },
                                                            text: 'Кнопка'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                view: 'action',
                                                                size: 'm'
                                                            },
                                                            text: 'Кнопка'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                size: 'm'
                                                            },
                                                            text: 'Кнопка'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'form',
                                            mods: {
                                                'has-vaidation': true,
                                                message: 'text'
                                            },
                                            content: [
                                                {
                                                    elem: 'content',
                                                    content: [
                                                        {
                                                            block: 'fieldset',
                                                            legend: {
                                                                block: 'heading',
                                                                mods: { theme: 'alfa-on-color', size: 'm' },
                                                                content: 'Вторая часть'
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        view: 'line',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'form-field',
                                                                    mods: {
                                                                        theme: 'alfa-on-color',
                                                                        size: 'm',
                                                                        type: 'input',
                                                                        view: 'line',
                                                                        'has-validation': true,
                                                                        required: true,
                                                                        message: 'popup'
                                                                    },
                                                                    name: 'test2',
                                                                    js: {
                                                                        required: {
                                                                            message: 'Обязательное поле'
                                                                        }
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            content: {
                                                                                block: 'label',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm'
                                                                                },
                                                                                content: 'Лейбл'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            content: {
                                                                                block: 'input',
                                                                                mods: {
                                                                                    theme: 'alfa-on-color',
                                                                                    size: 'm',
                                                                                    width: 'available'
                                                                                }
                                                                            }
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
                                                            block: 'button',
                                                            mods: {
                                                                theme: 'alfa-on-color',
                                                                size: 'm',
                                                                type: 'submit'
                                                            },
                                                            text: 'Кнопка'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
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
