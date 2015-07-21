({
    block: 'page',
    title: 'Message',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'default.min.css' }],
    scripts: [{ elem: 'js', url: 'default.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок Message'
        },
        {
            block: 'example-section',
            title: 'Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    mix: { block: 'message-test', js: true },
                    elemMods: { theme: theme },
                    content: [
                        {
                            block: 'input',
                            mix: { block: 'message-test', elem: 'input' },
                            mods: { theme: theme, size: 'm' },
                            val: 'Input message text'
                        },
                        {
                            block: 'button',
                            mix: { block: 'message-test', elem: 'show' },
                            mods: { theme: theme, size: 'm', view: 'action' },
                            text: 'Show message'
                        },
                        {
                            block: 'message',
                            mods: { theme: theme, type: 'text' }
                        },
                        {
                            block: 'message',
                            mods: { theme: theme, type: 'popup' }
                        },
                        {
                            block: 'button',
                            mix: { block: 'message-test', elem: 'hide' },
                            mods: { theme: theme, size: 'm' },
                            text: 'Hide message'
                        }
                    ]
                };
            })
        }
    ]
});
