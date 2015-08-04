({
    block: 'page',
    title: 'Form has validation',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'has-validation.min.css' }],
    scripts: [{ elem: 'js', url: 'has-validation.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок Form',
            desc: 'Результат работы смотри в консоли'
        },
        {
            block: 'example-section',
            title: 'Has Validation',
            content: {
                block: 'form-test',
                content: {
                    block: 'form',
                    mods: {
                        'has-validation': true
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
