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
        {elem: 'css', url: 'forms.min.css'}
    ],
    scripts : [
        { elem : 'js', url : 'forms.min.js' }
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
                    block : 'form-field',
                    id : 'input',
                    mods : {
                        type : 'input',
                        'has-validate' : true,
                        message : 'popup',
                        required : true,
                        theme : 'alfa',
                        bkg : 'color'
                    },
                    js : {
                        required : {
                            message : 'Super required field 1'
                        }
                    },
                    content : [
                        {
                            block : 'label',
                            mods : { theme : 'alfa', bkg : 'color', size : 'm' },
                            content : 'Label'
                        },
                        {
                            block : 'input',
                            mods : {
                                'has-mask' : true,
                                theme : 'alfa', bkg : 'color', size : 'm' },
                            js : {
                                mask : '{{99}}-{{99}}-{{99}}'
                            },
                            name : 'firstName'
                        }
                    ]
                },
                {
                    block : 'form-field',
                    id : 'input2',
                    mods : {
                        type : 'input',
                        message : 'popup',
                        'has-validate' : true,
                        required : true,
                        theme : 'alfa',
                        bkg : 'color'
                    },
                    js : {
                        required : {
                            message : 'Super required field 2'
                        }
                    },
                    content : [
                        {
                            block : 'label',
                            mods : { theme : 'alfa', bkg : 'color', size : 'm' },
                            content : 'Loooooong looooong looong looooong Label'
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
                                    block : 'heading',
                                    mods : { theme : 'alfa', bkg : 'color' },
                                    content : 'Форма'
                                },
                                {
                                    block : 'forms'
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
