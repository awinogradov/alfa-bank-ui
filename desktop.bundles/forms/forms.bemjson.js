({
    block : 'page',
    mods : { theme : 'alfa', bkg : 'color' },
    title : 'Alfa-Bank UI',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
    styles : [
        { elem : 'css', url : 'forms.min.css' }
    ],
    scripts: [
        { elem : 'js', url : 'forms.min.js' }
    ],
    content : [
        {
            block : 'heading',
            content : 'Forms test'
        },
        {
            block : 'form',
            mods : {
                'has-validate' : true,
                message : 'popup'
            },
            method : 'GET',
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
                    content : [
                        {
                            block : 'label',
                            mods : { theme : 'alfa', bkg : 'color', size : 'm' },
                            content : 'Label'
                        },
                        {
                            block : 'input',
                            mods : { theme : 'alfa', bkg : 'color', size : 'm' },
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
                                autocomplete : true
                            },
                            options : [
                                { val : 'MSC', text : 'Moscow' },
                                { val : 'NYC', text : 'New York' }
                            ],
                            name : 'lastName'
                        }
                    ]
                },
                {
                    block : 'button',
                    mods : { theme : 'alfa', bkg : 'color', type : 'submit', size : 'm' },
                    text : 'Submit'
                }
            ]
        }
    ]
})
