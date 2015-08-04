({
    block: 'page',
    title: 'Radio',
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
                                    block: 'radio',
                                    mods: { theme: theme, size: size },
                                    name: 'radio',
                                    val: 'BEMHTML',
                                    text: 'Использовать BEMHTML'
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
                                    block: 'radio',
                                    mods: { theme: theme, size: size, type: 'button' },
                                    name: 'radio',
                                    val: 'BEMHTML',
                                    text: 'Использовать BEMHTML'
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
                                content: [
                                    {
                                        block: 'radio',
                                        mods: { theme: theme, size: size, disabled: true },
                                        name: 'radio',
                                        val: 'BEMHTML',
                                        text: 'Использовать BEMHTML'
                                    },
                                    {
                                        block: 'radio',
                                        mods: { theme: theme, size: size, type: 'button', disabled: true },
                                        name: 'radio',
                                        val: 'BEMHTML',
                                        text: 'Использовать BEMHTML'
                                    },
                                    {
                                        block: 'radio',
                                        mods: { theme: theme, size: size, checked: true, disabled: true },
                                        name: 'radio',
                                        val: 'BEMHTML',
                                        text: 'Использовать BEMHTML'
                                    },
                                    {
                                        block: 'radio',
                                        mods: { theme: theme, size: size, type: 'button', checked: true, disabled: true },
                                        name: 'radio',
                                        val: 'BEMHTML',
                                        text: 'Использовать BEMHTML'
                                    }
                                ]
                            }
                        ];
                    })
                };
            })
        }
    ]
});
