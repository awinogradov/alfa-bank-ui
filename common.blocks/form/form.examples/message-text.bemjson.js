({
    block: 'page',
    title: 'Form message text',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'message-text.min.css' }],
    scripts: [{ elem: 'js', url: 'message-text.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок Form'
        },
        {
            block: 'example-section',
            title: 'Message text',
            content: {
                block: 'form-test',
                content: {
                    block: 'form',
                    mods: {
                        'has-validation': true,
                        message: 'text'
                    },
                    method: 'GET',
                    content: [
                        {
                            elem: 'content',
                            content: [
                                {
                                    block: 'form-field',
                                    name: 'input1',
                                    mods: {
                                        theme: 'alfa-on-color',
                                        size: 'm',
                                        type: 'input',
                                        'has-validation': true,
                                        required: true,
                                        message: 'text',
                                        view: 'compact'
                                    },
                                    content: [
                                        {
                                            elem: 'label',
                                            content: {
                                                block: 'label',
                                                mods: { theme: 'alfa-on-color', size: 'm' },
                                                content: 'Input1'
                                            }
                                        },
                                        {
                                            elem: 'control',
                                            content: {
                                                block: 'input',
                                                mods: { theme: 'alfa-on-color', size: 'm' },
                                                name: 'firstName'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'form-field',
                                    name: 'input2',
                                    mods: {
                                        theme: 'alfa-on-color',
                                        size: 'm',
                                        type: 'input',
                                        'has-validation': true,
                                        required: true,
                                        message: 'text',
                                        view: 'compact'
                                    },
                                    content: [
                                        {
                                            elem: 'label',
                                            content: {
                                                block: 'label',
                                                mods: { theme: 'alfa-on-color', size: 'm' },
                                                content: 'Input2'
                                            }
                                        },
                                        {
                                            elem: 'control',
                                            content: {
                                                block: 'input',
                                                mods: { theme: 'alfa-on-color', size: 'm' },
                                                name: 'firstName'
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'footer',
                            content: [
                                {
                                    block: 'button',
                                    mods: { type: 'submit', view: 'action', theme: 'alfa-on-color', size: 'm' },
                                    text: 'Button'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ]
});
