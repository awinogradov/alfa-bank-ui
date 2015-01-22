({
    block : 'page',
    mods : { theme : 'alfa', bkg : 'white' },
    title : 'Alfa-Bank UI',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
    styles : [
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
        { elem : 'js', url : 'index.min.js' }
    ],
    content : [
        {
            elem : 'header',
            content : [
                {
                    block : 'heading',
                    mix : [{ block : 'align', mods : { hor : 'center' }    }],
                    content : 'Компоненты интерфейса'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Логотипы'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Заголовки'
                        },
                        {
                            elem : 'examples',
                            content : [
                                {
                                    block : 'heading',
                                    content : 'h1. Заголовок первого уровня'
                                },
                                {
                                    block : 'heading',
                                    lvl : 2,
                                    content : 'h2. Заголовок второго уровня'
                                },
                                {
                                    block : 'heading',
                                    lvl : 3,
                                    content : 'h3. Заголовок третьего уровня'
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Параграфы'
                        },
                        {
                            elem : 'examples',
                            content : [
                                {
                                    block : 'paragraph',
                                    mods : { type : 'lead' },
                                    content : [
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mark : 'nb',
                                    content : [
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Списки'
                        },
                        {
                            block : 'row',
                            mix : [{ block: 'section', elem: 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3},
                                    content : [
                                        'Простой'
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 9},
                                    content : [
                                        'Нумерованный'
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mix : [{ block: 'section', elem: 'examples' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'list',
                                            mods : { theme : 'alfa', bkg : 'white' },
                                            items : [
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 9 },
                                    content : [
                                        {
                                            block : 'list',
                                            mods : { type : 'ordered' },
                                            items : [
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Кнопки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'examples' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', size: 's' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 's', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', view : 'pseudo', size: 's' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', size: 's', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 's' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 's' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa', bkg : 'white', size : 'xs', visible : true }
                                                    },
                                                    text : 'Loading...'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', size: 'm' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'm', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', view : 'pseudo', size: 'm' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', size: 'm', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'm' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'm' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa', bkg : 'white', size : 's', visible : true }
                                                    },
                                                    text : 'Loading...'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa', bkg : 'white', size: 'l' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'l', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', view : 'pseudo', size: 'l' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa', bkg : 'white', size: 'l', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'l' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'l' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa', bkg : 'white', size : 'm', visible : true }
                                                    },
                                                    text : 'Loading...'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa', bkg : 'white', size: 'xl' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'xl', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa', bkg : 'white', view : 'pseudo', size: 'xl' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa', bkg : 'white', size: 'xl', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'xl' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa', bkg : 'white', size : 'xl' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa', bkg : 'white', size : 'l', visible : true }
                                                    },
                                                    text : 'Loading...'
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Поля ввода'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa', bkg : 'white', size : 's' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa', bkg : 'white', size: 's' },
                                                    placeholder : 'текст'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa', bkg : 'white', size : 'm' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa', bkg : 'white', size: 'm' },
                                                    placeholder : 'текст'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa', bkg : 'white', size : 'l' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa', bkg : 'white', size: 'l' },
                                                    placeholder : 'текст'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa', bkg : 'white', size : 'xl' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa', bkg : 'white', size: 'xl' },
                                                    placeholder : 'текст'
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Радио'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', type : 'button' },
                                                    name : 'radio-sizes-s',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', type : 'button' },
                                                    name : 'radio-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', checked : true },
                                                    val : 1,
                                                    text : 'радио'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm' },
                                                    name : 'radio-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', type : 'button' },
                                                    name : 'radio-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', checked : true },
                                                    val : 1,
                                                    text : 'радио'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l' },
                                                    name : 'radio-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', type : 'button' },
                                                    name : 'radio-sizes-xl',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Чекбоксы'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', type : 'button' },
                                                    name : 'checkbox-sizes-s',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', type : 'button' },
                                                    name : 'checkbox-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', checked : true },
                                                    val : 1,
                                                    text : 'чекбокс'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm' },
                                                    name : 'checkbox-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', type : 'button' },
                                                    name : 'checkbox-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', checked : true },
                                                    val : 1,
                                                    text : 'чекбокс'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l' },
                                                    name : 'checkbox-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', type : 'button' },
                                                    name : 'checkbox-sizes-xl',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Выпадающие списки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 's' },
                                                    switcher : 'dropdown',
                                                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 's' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        mods : { theme : 'islands' },
                                                        content : {
                                                            block : 'menu',
                                                            mods : { theme : 'islands', size : 's' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 's' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 's' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 's' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 'm' },
                                                    switcher : 'dropdown',
                                                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 'm' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        mods : { theme : 'islands' },
                                                        content : {
                                                            block : 'menu',
                                                            mods : { theme : 'islands', size : 'm' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'm' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'm' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'm' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 'l' },
                                                    switcher : 'dropdown',
                                                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 'l' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        mods : { theme : 'islands' },
                                                        content : {
                                                            block : 'menu',
                                                            mods : { theme : 'islands', size : 'l' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'l' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'l' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'l' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 'xl' },
                                                    switcher : 'dropdown',
                                                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', theme : 'islands', size : 'xl' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        mods : { theme : 'islands' },
                                                        content : {
                                                            block : 'menu',
                                                            mods : { theme : 'islands', size : 'xl' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'xl' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'xl' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { theme : 'islands', size : 'xl' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Загрузчики'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', visible : true }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', visible : true }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', visible : true }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', visible : true }
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Ссылки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 's', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'm', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'l', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa', bkg : 'white', size : 'xl', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Пример формы'
                        },
                        {
                            elem: 'examples',
                            content: [

                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Что-то еще'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl', pseudo : true },
                          title : 'pseudo mod',
                          content : 'link'
                        }
                      ]
                    },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Пример формы'
                        },
                        {
                            elem: 'examples',
                            content: []
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Иконки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { bkg : 'color', theme : 'alfa', size: 's', network : 'facebook' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { bkg : 'color', theme : 'alfa', size: 'm', network : 'facebook' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { bkg : 'color', theme : 'alfa', size: 'l', network : 'facebook' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { bkg : 'color', theme : 'alfa', size: 'xl', network : 'facebook' }
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Что-то еще'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
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
            elem : 'footer',
            content : [
                {
                    block : 'copyright',
                    mods : { theme : 'alfa', bkg : 'color' },
                    content : [
                        {
                            block : 'social-links',
                            mods : { theme : 'alfa', bkg : 'color', size : 's' },
                            links : [
                                { network : 'vk', url : 'https://vk.com/alfabank' },
                                { network : 'facebook', url : 'https://facebook.com/alfabank' },
                                { network : 'twitter', url : 'https://twitter.com/alfabank' }
                            ],
                            content : [
                                {
                                    block : 'link',
                                    mods : { theme: 'alfa', bkg : 'color', pseudo : true },
                                    url : '#',
                                    content : 'Мы в соцмедиа'
                                }
                            ]
                        },
                        {
                            block : 'paragraph',
                            content : 'Copyright @ ' + new Date().getFullYear() + ' Alfabank'
                        }
                    ]
                }
            ]
        }
    ]
})
