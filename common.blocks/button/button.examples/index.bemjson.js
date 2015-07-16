({
    block: 'page',
    title: 'Button',
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
                                    block: 'button',
                                    mods: { theme: theme, size: size },
                                    text: 'Button'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'View Action',
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
                                    block: 'button',
                                    mods: { theme: theme, size: size, view: 'action' },
                                    text: 'Button'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'View Pseudo',
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
                                    block: 'button',
                                    mods: { theme: theme, size: size, view: 'pseudo' },
                                    text: 'Button'
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
                                    block: 'button',
                                    mods: { theme: theme, size: size, disabled: true },
                                    text: 'Button'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Type Link',
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
                                    block: 'button',
                                    mods: { theme: theme, size: size, type: 'link' },
                                    url: '#',
                                    text: 'Button'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'button',
                                    mods: { theme: theme, size: size, type: 'link', view: 'action' },
                                    url: '#',
                                    text: 'Button'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'button',
                                    mods: { theme: theme, size: size, type: 'link', view: 'pseudo' },
                                    url: '#',
                                    text: 'Button'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'button',
                                    mods: { theme: theme, size: size, type: 'link', disabled: true },
                                    url: '#',
                                    text: 'Button'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Icon',
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
                                    block: 'button',
                                    mods: { theme: theme, size: size },
                                    text: 'Button',
                                    icon: { block: 'icon', mods: { theme: theme, size: size, tool: 'search' } }
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Spin',
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
                                    block: 'button',
                                    mods: { theme: theme, size: size },
                                    text: 'Loading...',
                                    icon: {
                                        block: 'spin',
                                        mods: { theme: theme, size: size, visible: true }
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
