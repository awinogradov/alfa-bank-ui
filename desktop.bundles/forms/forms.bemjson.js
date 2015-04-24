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
    scripts : [
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
                                    title : 'Russia',
                                    group : [
                                        { val : 'MSC', content : 'Moscow' },
                                        { val : 'SPB', content : 'Saint-Petersburg' }
                                    ]
                                },
                                {
                                    title : 'USA',
                                    group : [
                                        { val : 'NYC', content : 'New York' },
                                        { val : 'BST', content : 'Boston' }
                                    ]
                                }
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
