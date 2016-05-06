({
    block: 'page',
    title: 'Notifications',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'notification.min.css' }],
    scripts: [{ elem: 'js', url: 'notification.min.js' }],
    mix: { block: 'test', js: true },
    content: [
        {
            block: 'example-header',
            title: 'Блок Message'
        },
        {
            block: 'example-section',
            title: 'Default',
            content: [
                {
                    block: 'input',
                    mix: { block: 'test', elem: 'input' },
                    mods: { theme: 'alfa-on-color', size: 'm' },
                    val: 'Input notification text'
                },
                {
                    block: 'button',
                    mix: { block: 'test', elem: 'default' },
                    mods: { theme: 'alfa-on-color', size: 'm', view: 'action' },
                    text: 'Show default notification'
                },
                {
                    block: 'button',
                    mix: { block: 'test', elem: 'ok' },
                    mods: { theme: 'alfa-on-color', size: 'm', view: 'action' },
                    text: 'Show OK notification'
                },
                {
                    block: 'button',
                    mix: { block: 'test', elem: 'error' },
                    mods: { theme: 'alfa-on-color', size: 'm', view: 'action' },
                    text: 'Show ERROR notification'
                },
                {
                    block: 'button',
                    mix: { block: 'test', elem: 'theme' },
                    mods: { theme: 'alfa-on-color', size: 'm' },
                    text: 'Change theme'
                }
            ],
        },
        {
            block: 'notification',
            mods: { theme: 'alfa-on-color' }
        }
    ]
});
