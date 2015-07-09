({
    block : 'page',
    mods : { theme : 'alfa-on-color'},
    title : 'Demo Alfa-Bank UI',
    favicon : '/favicon.ico',
    head : [
        {elem : 'meta', attrs : { name : 'description', content : ''}},
        {elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1'}}
    ],
    styles : [
        {elem : 'css', url : 'icons.min.css'}
    ],
    scripts : [
        { elem : 'js', url : 'icons.min.js' }
    ],
    content : [
        {
            elem : 'inner',
            content : [
                {
                    elem : 'header',
                    content : [
                        { block : 'header' }
                    ]
                },
                {
                    elem : 'content',
                    content : {
                        block : 'app',
                        mods : { theme : 'alfa-on-color' },
                        content : [
                            {
                                elem : 'title',
                                content : 'Иконки'
                            },
                            {
                                elem : 'menu',
                                content : []
                            },
                            {
                                elem : 'content',
                                content : [
                                    ['s', 'm', 'l', 'xl'].map(function(size, index) {
                                        return [
                                            {
                                                block : 'heading',
                                                mods : { theme : 'alfa-on-color' },
                                                lvl : 2,
                                                content : 'Size ' + size
                                            },
                                            {
                                                block : 'select',
                                                mods : { mode : 'radio', theme : 'alfa-on-color', size : size },
                                                optionsMaxHeight : 200,
                                                val : 2,
                                                options : [
                                                    { val : 1, text : 'first' },
                                                    { val : 2, text : 'second' },
                                                    { val : 3, text : 'third' },
                                                    { val : 4, text : '4' },
                                                    { val : 5, text : '5' },
                                                    { val : 6, text : '6' },
                                                    { val : 7, text : '7' },
                                                    { val : 8, text : '8' },
                                                    { val : 9, text : '9' },
                                                    { val : 10, text : '10' },
                                                    { val : 11, text : '11' },
                                                    { val : 12, text : '12' },
                                                    { val : 13, text : '13' },
                                                    { val : 14, text : '14' }
                                                ]
                                            },
                                            {
                                                block : 'input',
                                                mods : { theme : 'alfa-on-color', size : size, 'has-clear' : true },
                                                val : 'С очисткой',
                                                placeholder : 'placeholder'
                                            },
                                            {
                                                block : 'input',
                                                mods : { theme : 'alfa-on-color', size : size, type : 'search', 'has-addon' : true },
                                                placeholder : 'Поиск',
                                                addon : {
                                                    block : 'icon',
                                                    mods : { theme : 'alfa-on-color', tool : 'search', size : size }
                                                }
                                            },
                                            {
                                                block : 'input',
                                                mods : { theme : 'alfa-on-color', size : size, 'has-addon' : true, 'has-calendar' : true },
                                                val : '07.05.2015',
                                                placeholder : 'Date'
                                            },
                                            {
                                                block : 'input',
                                                mods : { theme : 'alfa-on-color', size : size, 'has-addon' : true },
                                                val : '100500',
                                                addon : {
                                                    block : 'icon',
                                                    mods : { theme : 'alfa-on-color', currency : 'rub', size : size }
                                                }
                                            }
                                            // notification
                                        ];
                                    })
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            elem : 'footer',
            content : [
                { block : 'footer' }
            ]
        }
    ]
})
