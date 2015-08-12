({
    block: 'page',
    title: 'Calendar',
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
                            block: 'calendar',
                            mods: { theme: theme }
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Default Set val in template',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'calendar',
                            mods: { theme: theme },
                            val: '22.07.2015'
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Set Limits',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'calendar',
                            mods: { theme: theme },
                            earlierLimit: '20.06.2015',
                            laterLimit: '20.08.2015',
                            val: '22.07.2015'
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Set Weekdays',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'calendar',
                            mods: { theme: theme },
                            weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                            val: '22.07.2015'
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Set Months',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'calendar',
                            mods: { theme: theme },
                            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                            val: '22.07.2015'
                        }
                    }
                };
            })
        },
        {
            block: 'example-section',
            title: 'Set Off Days',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'calendar',
                            mods: { theme: theme },
                            offDays: ['21.07.2015', '2015.07.23', '2015-07-24', '2015-07-25'],
                            val: '19.07.2015'
                        }
                    }
                };
            })
        }
    ]
});
