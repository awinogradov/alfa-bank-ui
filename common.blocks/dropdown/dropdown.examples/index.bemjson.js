({
    block: 'page',
    title: 'Dropdown',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'Switcher Link',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'dropdown',
                            mods: { switcher : 'link', theme : theme },
                            switcher: {
                                block: 'link',
                                mods: { theme: theme, size: 'm' },
                                content: 'Узнать об акциях на сайте'
                            },
                            popup: 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Switcher Button',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'dropdown',
                            mods: { switcher : 'button', theme : theme },
                            switcher: {
                                block: 'button',
                                mods: { theme: theme, size: 'm' },
                                text: 'Узнать об акциях на сайте'
                            },
                            popup: 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Mode Hover',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'dropdown',
                            mods: { mode: 'hover', switcher: 'link', theme: theme },
                            switcher: {
                                block: 'link',
                                mods: { theme: theme, size: 'm'},
                                content: 'Узнать об акциях на сайте'
                            },
                            popup: 'Скидка 30% на новую коллекцию. Для активации акции нужно ввести промокод.'
                        }
                    }
                };
            })
        }
    ]
});
