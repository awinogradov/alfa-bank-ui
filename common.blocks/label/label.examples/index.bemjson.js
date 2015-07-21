({
    block: 'page',
    title: 'Label',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок label'
        },
        {
            block: 'example-section',
            title: 'Default',
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
                                    block: 'label',
                                    mods: { theme: theme, size: size },
                                    content: 'Label'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-header',
            title: 'Блок label in Forms'
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
                                                            view: 'compact'
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
                                        mods: { size: 'm' },
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
