({
    block: 'page',
    mods: {theme: 'alfa', bkg: 'color'},
    title: 'Demo Alfa-Bank UI',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}}
    ],
    styles: [
        {elem: 'css', url: 'demo.min.css'}
    ],
    scripts: [
        {elem: 'js', url: 'demo.min.js'}
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
                    content : [
                        {
                            block : 'app',
                            content : [
                                {
                                    block : 'heading',
                                    mods : { theme : 'alfa', bkg : 'color' },
                                    content : 'Логотипы'
                                },
                                {
                                    block : 'logos'
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
                { block : 'footer' }
            ]
        }
    ]
})
