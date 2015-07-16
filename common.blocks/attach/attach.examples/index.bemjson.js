({
    block: 'page',
    title: 'Attach',
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
                        return {
                            elem: 'item',
                            content: {
                                block: 'attach',
                                mods: { theme: theme, size: size },
                                button: 'Attach'
                            }
                        };
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
                        return {
                            elem: 'item',
                            content: {
                                block: 'attach',
                                mods: { theme: theme, size: size, disabled: true },
                                button: 'Attach'
                            }
                        };
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'noFileText',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return {
                            elem: 'item',
                            content: {
                                block: 'attach',
                                mods: { theme: theme, size: size },
                                button: 'Attach',
                                noFileText: 'Файл не выбран'
                            }
                        };
                    })
                };
            })
        }
    ]
});
