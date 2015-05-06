({
    block : 'page',
    mods : { theme : 'alfa', bkg : 'color'},
    title : 'Demo Alfa-Bank UI',
    favicon : '/favicon.ico',
    head : [
        {elem : 'meta', attrs : { name : 'description', content : ''}},
        {elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1'}}
    ],
    styles : [
        {elem : 'css', url : 'popups.min.css'}
    ],
    scripts : [
        { elem : 'js', url : 'popups.min.js' }
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
                        mods : { theme : 'alfa', bkg : 'color' },
                        content : [
                            {
                                elem : 'title',
                                content : 'Попапы'
                            },
                            {
                                elem : 'menu',
                                content : []
                            },
                            {
                                elem : 'content',
                                content : [
                                    {
                                        block : 'select',
                                        mods : { mode : 'radio', theme : 'alfa', bkg : 'color', size : 'm' },
                                        name : 'select1',
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
                                        mods : {
                                            theme : 'alfa',
                                            bkg : 'color',
                                            size : 'm',
                                            'has-autocomplete' : true
                                        },
                                        options : [
                                            {
                                                val : 'first',
                                                content : 'first'
                                            },
                                            {
                                                val : 'second',
                                                content : 'second'
                                            },
                                            {
                                                val : 'third',
                                                content : 'third'
                                            }
                                        ]
                                    },
                                    {
                                        block : 'test-wrap',
                                        attrs : { style : 'position: relative; height: 400px;' },
                                        content : [
                                            {
                                                block : 'test-popups',
                                                js : { target : [100, 100] },
                                                content : [
                                                    { block : 'link', mods : { pseudo : true }, content : 'open at 100&times;100' },
                                                    {
                                                        block : 'popup',
                                                        mods : { target : 'position', autoclosable : true, theme : 'alfa', bkg : 'color' },
                                                        content : [
                                                            'popup is opened at 100&times;100',
                                                            {
                                                                tag : 'p',
                                                                    content : [
                                                                        {
                                                                            block : 'input',
                                                                            mods : { theme : 'alfa', bkg : 'color' },
                                                                            val : 'islands'
                                                                        },
                                                                        {
                                                                            tag : 'select',
                                                                            content : [
                                                                                { tag : 'option', content : '1' },
                                                                                { tag : 'option', content : '2' }
                                                                            ]
                                                                        }
                                                                    ]

                                                            },
                                                            { block : 'link', mods : { pseudo : true }, content : 'update content' },
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block : 'test-popups',
                                                mods : { direction : 'all' },
                                                js : true,
                                                content : [
                                                    { block : 'link', mods : { pseudo : true }, content : 'all directions' },
                                                    {
                                                        block : 'popup',
                                                        mods : { target : 'anchor', theme : 'alfa', bkg : 'color' },
                                                        content : [
                                                            'There\'s content',
                                                            { tag : 'br' },
                                                            'There\'s content',
                                                            { tag : 'br' },
                                                            { block : 'link', mods : { pseudo : true }, content : 'update content' }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block : 'test-popups',
                                                mods : { direction : 'bottom' },
                                                js : true,
                                                content : [
                                                    { block : 'link', mods : { pseudo : true }, content : 'bottom-* directions' },
                                                    {
                                                        block : 'popup',
                                                        mods : { target : 'anchor', theme : 'alfa', bkg : 'color' },
                                                        directions : ['bottom-left', 'bottom-center', 'bottom-right'],
                                                        content : [
                                                            'There\'s content',
                                                            { tag : 'br' },
                                                            { block : 'link', mods : { pseudo : true }, content : 'update content' }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block : 'test-popups',
                                                mods : { direction : 'top' },
                                                js : true,
                                                content : [
                                                    { block : 'link', mods : { pseudo : true }, content : 'top-* directions' },
                                                    {
                                                        block : 'popup',
                                                        mods : { target : 'anchor', theme : 'alfa', bkg : 'color' },
                                                        directions : ['top-left', 'top-center', 'top-right'],
                                                        content : [
                                                            'There\'s content',
                                                            { tag : 'br' },
                                                            { block : 'link', mods : { pseudo : true }, content : 'update content' }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block : 'test-popups',
                                                mods : { direction : 'right' },
                                                js : true,
                                                content : [
                                                    { block : 'link', mods : { pseudo : true }, content : 'right-* directions' },
                                                    {
                                                        block : 'popup',
                                                        mods : { target : 'anchor', theme : 'alfa', bkg : 'color' },
                                                        directions : ['right-top', 'right-center', 'right-bottom'],
                                                        content : [
                                                            'There\'s content',
                                                            { tag : 'br' },
                                                            { block : 'link', mods : { pseudo : true }, content : 'update content' }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block : 'test-popups',
                                                mods : { direction : 'left' },
                                                js : true,
                                                content : [
                                                    { block : 'link', mods : { pseudo : true }, content : 'left-* directions' },
                                                    {
                                                        block : 'popup',
                                                        mods : { target : 'anchor', theme : 'alfa', bkg : 'color' },
                                                        directions : ['left-top', 'left-center', 'left-bottom'],
                                                        content : [
                                                            'There\'s content',
                                                            { tag : 'br' },
                                                            { block : 'link', mods : { pseudo : true }, content : 'update content' }
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
