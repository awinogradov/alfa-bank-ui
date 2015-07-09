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
        {elem : 'css', url : 'forms.min.css'}
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
                        { block : 'header', mods: { theme: 'alfa', bkg: 'color' } }
                    ]
                },
                {
                    elem : 'content',
                    content : [
                        {
                            block : 'app',
                            mods : { theme : 'alfa-on-color' },
                            content : [
                                {
                                    elem : 'title',
                                    content : 'Формы'
                                },
                                {
                                    elem : 'menu',
                                    content : [
                                        {
                                            block : 'menu-item',
                                            mods : { theme : 'alfa-on-color', size : 'l' },
                                            content : 'Menu 1'
                                        },
                                        {
                                            block : 'menu-item',
                                            mods : { theme : 'alfa-on-color', size : 'l' },
                                            content : 'Menu 2'
                                        },
                                        {
                                            block : 'menu-item',
                                            mods : { theme : 'alfa-on-color', size : 'l' },
                                            content : 'Menu 3'
                                        }
                                    ]
                                },
                                {
                                    elem : 'content',
                                    content : [
                                        {
                                            block : 'form',
                                            mods : { theme : 'alfa-on-color' },
                                            content : [
                                                {
                                                    block : 'form-field',
                                                    id : 'input',
                                                    mods : {
                                                        type : 'input',
                                                        'has-validate' : true,
                                                        message : 'popup',
                                                        required : true,
                                                        theme : 'alfa-on-color',
                                                        size : 'm',
                                                        view : 'compact'
                                                    },
                                                    js : {
                                                        required : {
                                                            message : 'Super required field 1'
                                                        }
                                                    },
                                                    content : [
                                                        {
                                                            elem : 'label',
                                                            content : {
                                                                block : 'label',
                                                                mods : { theme : 'alfa-on-color', size : 'm' },
                                                                content : 'Label'
                                                            }
                                                        },
                                                        {
                                                            elem : 'control',
                                                            content : {
                                                                block : 'input',
                                                                mods : {
                                                                    'has-mask' : true,
                                                                    theme : 'alfa-on-color', size : 'm' },
                                                                js : {
                                                                    mask : '{{99}}-{{99}}-{{99}}'
                                                                },
                                                                name : 'firstName'
                                                            }
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
                                                        theme : 'alfa-on-color',
                                                        size : 'm',
                                                        view : 'compact'
                                                    },
                                                    js : {
                                                        required : {
                                                            message : 'Super required field 2'
                                                        }
                                                    },
                                                    content : [
                                                        {
                                                            elem : 'label',
                                                            content : {
                                                                block : 'label',
                                                                mods : { theme : 'alfa-on-color', size : 'm' },
                                                                content : 'Loooooong looooong looong looooong Label'
                                                            }
                                                        },
                                                        {
                                                            elem : 'control',
                                                            content : {
                                                                block : 'input',
                                                                mods : {
                                                                    theme : 'alfa-on-color',
                                                                    size : 'm',
                                                                    'has-autocomplete' : true
                                                                },
                                                                options : [
                                                                    { val : 'value 1', content : 'item 1' },
                                                                    { val : 'value 2', content : 'item 2' }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block : 'form-field',
                                                    id : 'input',
                                                    mods : {
                                                        type : 'input',
                                                        'has-validate' : true,
                                                        validate : 'date',
                                                        message : 'popup',
                                                        required : true,
                                                        theme : 'alfa-on-color',
                                                        size : 'm',
                                                        view : 'compact'
                                                    },
                                                    js : {
                                                        required : {
                                                            message : 'Super required field 1'
                                                        }
                                                    },
                                                    content : [
                                                        {
                                                            elem : 'label',
                                                            content : {
                                                                block : 'label',
                                                                mods : { theme : 'alfa-on-color', size : 'm' },
                                                                content : 'Date'
                                                            }
                                                        },
                                                        {
                                                            elem : 'control',
                                                            content : {
                                                                block : 'input',
                                                                mods : { theme : 'alfa-on-color', size : 'm', 'has-addon' : true, 'has-calendar' : true },
                                                                js : {
                                                                    date : {
                                                                        message : 'Укажите дату в правильном формате ДД.ММ.ГГГГ'
                                                                    },
                                                                    required : {
                                                                        message : 'Это поле должно быть заполнено'
                                                                    }
                                                                },
                                                                name : 'date'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag : 'hr'
                                                },
                                                // INPUTS
                                                {
                                                    block : 'heading',
                                                    mods : { theme : 'alfa-on-color' },
                                                    lvl : 2,
                                                    content : 'Sizes'
                                                },
                                                {
                                                    block : 'heading',
                                                    mods : { theme : 'alfa-on-color' },
                                                    lvl : 3,
                                                    content : 'Inputs'
                                                },
                                                ['color', 'white'].map(function(color) {
                                                    return {
                                                        tag : 'table',
                                                        attrs : { style : 'background:' + (color === 'white' ? 'white' : 'transparent') },
                                                        content : [
                                                            {
                                                                tag : 'tr',
                                                                content : [
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-right: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'input',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'compact'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'input',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                val : 'Super required field 1'
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    },
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-left: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'input',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'line'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'input',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                val : 'Super required field 1'
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                tag : 'tr',
                                                                content : [
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-right: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'input',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'compact'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Loooooong looooong looong looooong looong looooong Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'input',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                val : 'Super required field 1'
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    },
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-left: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'input',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'line'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Loooooong Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'input',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                val : 'Super required field 1'
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    };
                                                }),


                                                // SELECT
                                                {
                                                    block : 'heading',
                                                    mods : { theme : 'alfa-on-color' },
                                                    lvl : 2,
                                                    content : 'Sizes'
                                                },
                                                {
                                                    block : 'heading',
                                                    mods : { theme : 'alfa-on-color' },
                                                    lvl : 3,
                                                    content : 'Select'
                                                },
                                                ['color', 'white'].map(function(color) {
                                                    return {
                                                        tag : 'table',
                                                        attrs : { style : 'background:' + (color === 'white' ? 'white' : 'transparent') },
                                                        content : [
                                                            {
                                                                tag : 'tr',
                                                                content : [
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-right: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'select',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'compact'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'select',
                                                                                                mods : { mode : 'radio', theme : 'alfa-on-' + color, size : size },
                                                                                                optionsMaxHeight : 200,
                                                                                                name : 'select1',
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
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    },
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-left: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'select',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'line'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'select',
                                                                                                mods : { mode : 'radio', theme : 'alfa-on-' + color, size : size },
                                                                                                optionsMaxHeight : 200,
                                                                                                name : 'select2',
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
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                tag : 'tr',
                                                                content : [
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-right: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'select',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'compact'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Loooooong looooong looong looooong looong looooong Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'select',
                                                                                                mods : { mode : 'radio', theme : 'alfa-on-' + color, size : size },
                                                                                                optionsMaxHeight : 200,
                                                                                                name : 'select3',
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
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    },
                                                                    {
                                                                        tag : 'td',
                                                                        attrs : { style : 'vertical-align: top; padding-left: 10px; width: 45%' },
                                                                        content : [
                                                                            ['s', 'm', 'l', 'xl'].map(function(size) {
                                                                                return {
                                                                                    block : 'form-field',
                                                                                    id : 'input',
                                                                                    mods : {
                                                                                        type : 'select',
                                                                                        theme : 'alfa-on-' + color,
                                                                                        size : size,
                                                                                        view : 'line'
                                                                                    },
                                                                                    js : {
                                                                                        required : {
                                                                                            message : 'Super required field 1'
                                                                                        }
                                                                                    },
                                                                                    content : [
                                                                                        {
                                                                                            elem : 'label',
                                                                                            content : {
                                                                                                block : 'label',
                                                                                                mods : { theme : 'alfa-on-' + color, size : size },
                                                                                                content : 'Loooooong Label ' + size
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem : 'control',
                                                                                            content : {
                                                                                                block : 'select',
                                                                                                mods : { mode : 'radio', theme : 'alfa-on-' + color, size : size },
                                                                                                optionsMaxHeight : 200,
                                                                                                name : 'select4',
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
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                };
                                                                            })
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    };
                                                })
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
                { block : 'footer' }
            ]
        }
    ]
})
