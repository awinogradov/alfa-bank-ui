({
    block: 'page',
    title: 'Plate',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'plate.min.css' }],
    scripts: [{ elem: 'js', url: 'plate.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'Default',
            content: {
                elem: 'col',
                content: [
                    {
                        elem: 'item',
                        content: {
                            block: 'plate',
                            content: {
                                attrs: {
                                    style: 'padding: 0 40px 20px 20px'
                                },
                                content: [
                                    {
                                        block: 'heading',
                                        lvl: 3,
                                        content: 'Heading'
                                    },
                                    {
                                        block: 'paragraph',
                                        content: [
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ',
                                            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
                                            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ',
                                            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ',
                                            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ',
                                            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                        ]
                                    },
                                    {
                                        block: 'button',
                                        mods: { theme: 'alfa-on-white', size: 'm' },
                                        attrs: { style: 'margin-right: 15px' },
                                        text: 'Button'
                                    },
                                    {
                                        block: 'link',
                                        mods: { theme: 'alfa-on-white' },
                                        text: 'Link'
                                    }
                                ]
                            }
                        }
                    },
                    {
                        elem: 'item',
                        content: {
                            block: 'plate',
                            content: {
                                block: 'logo',
                                mods: {
                                    size: 'm',
                                    theme: 'alfa-on-white',
                                    view: 'full'
                                }
                            }
                        }
                    }
                ]
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
                        attrs: {
                            style: 'padding: 0 40px 20px 20px'
                        },
                        content: [
                            {
                                block: 'heading',
                                lvl: 3,
                                content: 'Heading'
                            },
                            {
                                block: 'paragraph',
                                content: [
                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ',
                                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
                                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ',
                                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ',
                                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ',
                                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                ]
                            },
                            {
                                block: 'button',
                                mods: { theme: 'alfa-on-white', size: 'm' },
                                attrs: { style: 'margin-right: 15px' },
                                text: 'Button'
                            },
                            {
                                block: 'link',
                                mods: { theme: 'alfa-on-white' },
                                text: 'Link'
                            }
                        ]
                    }
                }
            }
        }
    ]
});
