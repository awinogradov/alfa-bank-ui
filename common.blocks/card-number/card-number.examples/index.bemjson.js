({
    block: 'page',
    title: 'Card Number',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'Default',
            content: {
                elem: 'col',
                elemMods: { theme: 'alfa-on-white' },
                content: [
                    {
                        elem: 'item',
                        content: {
                            block: 'card-number',
                            val: '3333444422221111'
                        }
                    }
                ]
            }
        },
        {
            block: 'example-section',
            title: 'Masked',
            content: {
                elem: 'col',
                elemMods: { theme: 'alfa-on-white' },
                content: {
                    elem: 'item',
                    content: [
                        {
                            block: 'card-number',
                            val: '3333 **** **** 1111'
                        }
                    ]
                }
            }
        }
    ]
});
