({
    block: 'page',
    title: 'Checkbox Group',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['m', 'l'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size },
                                    name: 'group1',
                                    val : [],
                                    option3: [
                                        {
                                            text: 'Default',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Default',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Default',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size },
                                    name: 'group3',
                                    val : [2, 3],
                                    options: [
                                        {
                                            text: 'Default',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Type Line',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['m', 'l'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, type: 'line' },
                                    name: 'group5',
                                    val : [2, 3],
                                    options: [
                                        {
                                            text: 'Default',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Type Button',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['m', 'l'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, type: 'button' },
                                    name: 'group6',
                                    val : [2, 3],
                                    options: [
                                        {
                                            text: 'Default',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Disabled',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['m', 'l'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, disabled: true },
                                    name: 'group3',
                                    val : [],
                                    options: [
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, disabled: true },
                                    name: 'group3',
                                    val : [1, 2, 3],
                                    options: [
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size },
                                    name: 'group4',
                                    val : [2, 3],
                                    options: [
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox1',
                                            disabled: true,
                                            val: 1
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox2',
                                            disabled: true,
                                            val: 2
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Disabled Type Line',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['m', 'l'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, disabled: true, type: 'line' },
                                    name: 'group3',
                                    val : [],
                                    options: [
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, disabled: true, type: 'line' },
                                    name: 'group3',
                                    val : [1, 2, 3],
                                    options: [
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, type: 'line' },
                                    name: 'group4',
                                    val : [2, 3],
                                    options: [
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox1',
                                            disabled: true,
                                            val: 1
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox2',
                                            disabled: true,
                                            val: 2
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Disabled Type Button',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['m', 'l'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, disabled: true, type: 'button' },
                                    name: 'group3',
                                    val : [],
                                    options: [
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, disabled: true, type: 'button' },
                                    name: 'group3',
                                    val : [1, 2, 3],
                                    options: [
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox1',
                                            val: 1
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox2',
                                            val: 2
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox-group',
                                    mods: { theme: theme, size: size, type: 'button' },
                                    name: 'group4',
                                    val : [2, 3],
                                    options: [
                                        {
                                            text: 'Disabled',
                                            name: 'checkbox1',
                                            disabled: true,
                                            val: 1
                                        },
                                        {
                                            text: 'Checked-Disabled',
                                            name: 'checkbox2',
                                            disabled: true,
                                            val: 2
                                        },
                                        {
                                            text: 'Checked',
                                            name: 'checkbox3',
                                            val: 3
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        }
    ]
});
