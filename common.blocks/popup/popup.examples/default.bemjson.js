({
    block: 'page',
    title: 'Popup',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'default.min.css' }],
    scripts: [{ elem: 'js', url: 'default.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'Default',
            content: [
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
                                    mods : { target : 'position', autoclosable : true, theme : 'alfa-on-color' },
                                    content : [
                                        'popup is opened at 100&times;100',
                                        {
                                            tag : 'p',
                                                content : [
                                                    {
                                                        block : 'input',
                                                        mods : { theme : 'alfa-on-color', size: 'l' },
                                                        val : 'islands'
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
                                    mods : { target : 'anchor', theme : 'alfa-on-color' },
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
                                    mods : { target : 'anchor', theme : 'alfa-on-color' },
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
                                    mods : { target : 'anchor', theme : 'alfa-on-color' },
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
                                    mods : { target : 'anchor', theme : 'alfa-on-color' },
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
                                    mods : { target : 'anchor', theme : 'alfa-on-color' },
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
});
