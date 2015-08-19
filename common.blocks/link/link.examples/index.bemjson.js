({
    block: 'page',
    title: 'Link',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок Link'
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
                                    block: 'link',
                                    mods: { theme: theme, size: size },
                                    text: 'Интернет-банк'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Pseudo',
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
                                    block: 'link',
                                    mods: { theme: theme, size: size, pseudo: true },
                                    text: 'Интернет-банк'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Mode Icon',
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
                                    block: 'link',
                                    mods: { theme: theme, size: size },
                                    icon: {
                                        block: 'icon',
                                        mods: { theme: theme, size: size, tool: 'help' }
                                    },
                                    text: 'Интернет-банк'
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Custom content',
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
                                    block: 'link',
                                    mods: { theme: theme, size: size },
                                    content: [
                                        'custom ',
                                        {
                                            elem: 'text',
                                            content: [
                                                'content'
                                            ]
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
