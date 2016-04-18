({
    block: 'page',
    title: 'Card Number',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'card-number.min.css' }],
    scripts: [{ elem: 'js', url: 'card-number.min.js' }],
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
            title: 'Default 19',
            content: {
                elem: 'col',
                elemMods: { theme: 'alfa-on-white' },
                content: [
                    {
                        elem: 'item',
                        content: {
                            block: 'card-number',
                            val: '3333444422221111000'
                        }
                    }
                ]
            }
        },
        {
            block: 'example-section',
            title: 'Masked ',
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
