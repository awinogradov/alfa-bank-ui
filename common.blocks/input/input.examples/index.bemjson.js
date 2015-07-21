({
    block: 'page',
    title: 'Input',
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
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size },
                                    val: 'Input'
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
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, disabled: true },
                                    val: 'Input'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Placeholder',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size },
                                    placeholder: 'Placeholder'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Type password',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, type: 'password' },
                                    val: 'Input'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Type search',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, type: 'search' },
                                    val: 'Input'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Mode link',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, mode: 'link' },
                                    val: 'Input'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Width Available',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, width: 'available' },
                                    val: 'Input'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Clear',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-clear': true },
                                    val: 'Input'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Addon',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-addon': true },
                                    addon: {
                                        block: 'icon',
                                        mods: { theme: theme, size: size, tool: 'help' }
                                    },
                                    val: 'Input'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Autocomplete Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-autocomplete': true },
                                    options: [
                                        { val: 'value 1', content: 'item 1' },
                                        { val: 'value 2', content: 'item 2' }
                                    ],
                                    val: 'value 1'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Autocomplete Group',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-autocomplete': true },
                                    options: [
                                        {
                                            title: 'Russia',
                                            group: [
                                                { val: 'MSC', content: 'Moscow' },
                                                { val: 'SPB', content: 'Saint-Petersburg' }
                                            ]
                                        },
                                        {
                                            group: [
                                                { val: 'PAR', content: 'Paris' },
                                                { val: 'MAR', content: 'Marseille' }
                                            ]
                                        },
                                        {
                                            title: 'Austria',
                                            group: []
                                        },
                                        { val: 'NYC', content: 'New York' }
                                    ],
                                    val: 'PAR'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Autocomplete Has Filter',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-autocomplete': true, 'has-filter': true },
                                    options: [
                                        { val: '111', data: { text: 'AAA' }, content: 'XXX' },
                                        { val: '222', data: { text: 'BBB' }, content: 'YYY' }
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
            title: 'Has Calendar Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-calendar': true, 'has-addon': true },
                                    val: '22.07.2015'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Calendar Set Limits',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-calendar': true, 'has-addon': true },
                                    val: '22.07.2015',
                                    earlierLimit : '20.06.2015',
                                    laterLimit : '20.08.2015',
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Calendar Set Weekdays',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-calendar': true, 'has-addon': true },
                                    val: '22.07.2015',
                                    weekdays : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Calendar Set Months',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-calendar': true, 'has-addon': true },
                                    val: '22.07.2015',
                                    months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Calendar Set Off Days',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-calendar': true, 'has-addon': true },
                                    val: '19.07.2015',
                                    offDays: ['21.07.2015', '2015.07.23', '2015-07-24', '2015-07-25']
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Calendar Set Directions',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    mods: { theme: theme, size: size, 'has-calendar': true, 'has-addon': true },
                                    val: '19.07.2015',
                                    directions : ['right-center']
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Has Mask',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'input',
                                    js: {
                                        mask: '{{99}}-{{99}}'
                                    },
                                    mods: { theme: theme, size: size, 'has-mask': true },
                                    val: '12-34'
                                }
                            }
                        ];
                    })
                };
            })
        }
    ]
});
