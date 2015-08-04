({
    block: 'page',
    title: 'Radio-group',
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
                                    block: 'radio-group',
                                    mods: { theme: theme, size: size },
                                    name: 'radio-sizes-s',
                                    options: [
                                        { val: 1, text: 'Один' },
                                        { val: 2, text: 'Два', checked: true },
                                        { val: 3, text: 'Три', disabled: true }
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
                                    block: 'radio-group',
                                    mods: { theme: theme, size: size, type: 'line' },
                                    name: 'radio-sizes-s',
                                    options: [
                                        { val: 1, text: 'Один' },
                                        { val: 2, text: 'Два', checked: true },
                                        { val: 3, text: 'Три', disabled: true }
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
                                    block: 'radio-group',
                                    mods: { theme: theme, size: size, type: 'button' },
                                    name: 'radio-sizes-s',
                                    options: [
                                        { val: 1, text: 'Один' },
                                        { val: 2, text: 'Два', checked: true },
                                        { val: 3, text: 'Три', disabled: true }
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
                                content: [
                                    {
                                        block: 'radio-group',
                                        mods: { theme: theme, size: size, disabled: true },
                                        name: 'radio-sizes-s',
                                        options: [
                                            { val: 1, text: 'Один' },
                                            { val: 2, text: 'Два', checked: true },
                                            { val: 3, text: 'Три', disabled: true }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        block: 'radio-group',
                                        mods: { theme: theme, size: size, type: 'button', disabled: true },
                                        name: 'radio-sizes-s',
                                        options: [
                                            { val: 1, text: 'Один' },
                                            { val: 2, text: 'Два', checked: true },
                                            { val: 3, text: 'Три', disabled: true }
                                        ]
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
