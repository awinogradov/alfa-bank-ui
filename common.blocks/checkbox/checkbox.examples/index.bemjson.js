({
    block: 'page',
    title: 'Checkbox',
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
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size },
                                    text: 'Default',
                                    name: 'checkbox1',
                                    val: 'cool'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size, checked: true },
                                    text: 'Checked',
                                    name: 'checkbox2',
                                    val: 'cool'
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
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size, disabled: true },
                                    text: 'Default',
                                    name: 'checkbox3',
                                    val: 'cool'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size, checked: true, disabled: true },
                                    text: 'Checked',
                                    name: 'checkbox4',
                                    val: 'cool'
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
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size, type: 'button' },
                                    text: 'Default',
                                    name: 'checkbox5',
                                    val: 'cool'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size, type: 'button', checked: true },
                                    text: 'Checked',
                                    name: 'checkbox6',
                                    val: 'cool'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size, type: 'button', disabled: true },
                                    text: 'Disabled',
                                    name: 'checkbox7',
                                    val: 'cool'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox',
                                    mods: { theme: theme, size: size, type: 'button', checked: true, disabled: true },
                                    text: 'Checked-Disabled',
                                    name: 'checkbox8',
                                    val: 'cool'
                                }
                            }
                        ];
                    })
                };
            })
        },
    ]
});
