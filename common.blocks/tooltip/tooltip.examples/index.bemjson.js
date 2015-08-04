({
    block: 'page',
    title: 'Tooltip',
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
                    content: [
                        ['bottom-left', 'bottom-center', 'bottom-right'],
                        ['top-left', 'top-center', 'top-right'],
                        ['right-top', 'right-center', 'right-bottom'],
                        ['left-top', 'left-center', 'left-bottom']
                    ].map(function(directions) {
                        return {
                            block: 'tooltip',
                            mods: { theme: 'alfa-on-color' },
                            icon: {
                                block: 'icon',
                                mods: { theme: 'alfa-on-white', tool: 'help', size: 'm' }
                            },
                            directions: directions,
                            content: 'Tooltip'
                        };
                    })
                }
            }
        }
    ]
});
