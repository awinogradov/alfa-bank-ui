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
            content: {
                elem: 'col',
                content: {
                    elem: 'item',
                    content: {
                        block: 'plate',
                        content: {
                            block: 'button',
                            mods: { theme: 'alfa-on-white', size: 'm' },
                            text: 'Content'
                        }
                    }
                }
            }
        },
        {
            block: 'example-section',
            title: 'Has Clear',
            content: {
                elem: 'col',
                content: {
                    block: 'plate',
                    mods: { 'has-clear': true },
                    content: {
                        block: 'button',
                        mods: { theme: 'alfa-on-white', size: 'm' },
                        text: 'Content'
                    }
                }
            }
        }
    ]
});
