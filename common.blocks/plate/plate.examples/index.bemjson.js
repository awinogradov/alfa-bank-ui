({
    block: 'page',
    title: 'Plate',
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
                    content: {
                        elem: 'item',
                        content: {
                            block: 'plate',
                            mods: { theme: theme },
                            content: {
                                block: 'button',
                                mods: { theme: 'alfa-on-white', size: 'm' },
                                text: 'Content'
                            }
                        }
                    }
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
                    content: {
                        block: 'plate',
                        mods: { theme: theme, 'has-clear': true },
                        content: {
                            block: 'button',
                            mods: { theme: 'alfa-on-white', size: 'm' },
                            text: 'Content'
                        }
                    }
                };
            })
        }
    ]
});
