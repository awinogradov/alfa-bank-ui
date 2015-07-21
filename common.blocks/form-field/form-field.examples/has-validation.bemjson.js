({
    block: 'page',
    title: 'Form-Field Default',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'has-validation.min.css' }],
    scripts: [{ elem: 'js', url: 'has-validation.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок form-field. Has Validation, Message Text'
        },
        {
            block: 'example-section',
            title: 'View Compact',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'form-test',
                                    content: {
                                        block: 'form',
                                        mods: {
                                            'has-validation': true
                                        },
                                        method: 'GET',
                                        content: [
                                            {
                                                elem: 'content',
                                                content: [
                                                    {
                                                        block: 'form-field',
                                                        name: 'input1',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            'has-validation': true,
                                                            message: 'text',
                                                            required: true,
                                                            view: 'compact'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Input1'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName'
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'form-field',
                                                        name: 'input2',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            'has-validation': true,
                                                            message: 'text',
                                                            validate: 'email',
                                                            required: true,
                                                            view: 'compact'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Email'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName'
                                                                }
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
                                                        mods: { type: 'submit', theme: theme, size: size },
                                                        text: 'Button'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'View Line',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'form-test',
                                    content: {
                                        block: 'form',
                                        mods: {
                                            'has-validation': true
                                        },
                                        method: 'GET',
                                        content: [
                                            {
                                                elem: 'content',
                                                content: [
                                                    {
                                                        block: 'form-field',
                                                        name: 'input1',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            message: 'text',
                                                            required: true,
                                                            view: 'line'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Input1'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName',
                                                                    val: 'Input1'
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'form-field',
                                                        name: 'input2',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            message: 'text',
                                                            validate: 'email',
                                                            required: true,
                                                            view: 'line'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Input2'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName',
                                                                    val: 'Input2'
                                                                }
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
                                                        mods: { type: 'submit', theme: theme, size: size },
                                                        text: 'Button'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-header',
            title: 'Блок form-field. Has Validation, Message Popup'
        },
        {
            block: 'example-section',
            title: 'View Compact',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'form-test',
                                    content: {
                                        block: 'form',
                                        mods: {
                                            'has-validation': true
                                        },
                                        method: 'GET',
                                        content: [
                                            {
                                                elem: 'content',
                                                content: [
                                                    {
                                                        block: 'form-field',
                                                        name: 'input1',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            'has-validation': true,
                                                            message: 'popup',
                                                            required: true,
                                                            view: 'compact'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Input1'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName'
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'form-field',
                                                        name: 'input2',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            'has-validation': true,
                                                            message: 'popup',
                                                            validate: 'email',
                                                            required: true,
                                                            view: 'compact'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Email'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName'
                                                                }
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
                                                        mods: { type: 'submit', theme: theme, size: size },
                                                        text: 'Button'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'View Line',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            {
                                elem: 'size',
                                content: size
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'form-test',
                                    content: {
                                        block: 'form',
                                        mods: {
                                            'has-validation': true
                                        },
                                        method: 'GET',
                                        content: [
                                            {
                                                elem: 'content',
                                                content: [
                                                    {
                                                        block: 'form-field',
                                                        name: 'input1',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            required: true,
                                                            message: 'popup',
                                                            view: 'line'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Input1'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName',
                                                                    val: 'Input1'
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'form-field',
                                                        name: 'input2',
                                                        mods: {
                                                            theme: theme,
                                                            size: size,
                                                            type: 'input',
                                                            message: 'popup',
                                                            validate: 'email',
                                                            required: true,
                                                            view: 'line'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'label',
                                                                content: {
                                                                    block: 'label',
                                                                    mods: { theme: theme, size: size },
                                                                    content: 'Input2'
                                                                }
                                                            },
                                                            {
                                                                elem: 'control',
                                                                content: {
                                                                    block: 'input',
                                                                    mods: { theme: theme, size: size },
                                                                    name: 'firstName',
                                                                    val: 'Input2'
                                                                }
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
                                                        mods: { type: 'submit', theme: theme, size: size },
                                                        text: 'Button'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        ];
                    })
                };
            })
        }
    ]
});
