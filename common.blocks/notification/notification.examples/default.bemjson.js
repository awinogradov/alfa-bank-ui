({
    block: 'page',
    title: 'Notifications',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'default.min.css' }],
    scripts: [{ elem: 'js', url: 'default.min.js' }],
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
                    val: 'Input notiofication text'
                },
                {
                    block: 'button',
                    mix: { block: 'test', elem: 'ok' },
                    mods: { theme: 'alfa-on-color', size: 'm', view: 'action' },
                    text: 'Show OK notiofication'
                },
                {
                    block: 'button',
                    mix: { block: 'test', elem: 'fail' },
                    mods: { theme: 'alfa-on-color', size: 'm', view: 'action' },
                    text: 'Show FAIL notiofication'
                }
            ],
        },
        {
            block: 'notification',
            mods: { theme: 'alfa-on-color' }
        }
    ]
});
