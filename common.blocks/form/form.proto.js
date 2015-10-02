import { Component } from 'protein-kit';

export default class Form extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            view: [{ 'line': {
                types: {
                    size: ['s', 'm', 'l', 'xl']
                }
            } }]
        };
    }

    default() {
        return {
            data: {
                method: 'GET',
                content: [
                    {
                        elem: 'header',
                        content: [
                            {
                                block: 'heading',
                                mods: { size: 'l' },
                                content: 'Заголовок формы'
                            }
                        ]
                    },
                    {
                        elem: 'content',
                        content: [
                            {
                                block: 'form-field',
                                name: 'input1',
                                mods: { type: 'input' },
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            block: 'label',
                                            content: 'Input with label and long text in it'
                                        }
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'input',
                                            name: 'firstName'
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'form-field',
                                name: 'input2',
                                mods: { type: 'select' },
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            block: 'label',
                                            content: 'select'
                                        }
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'select',
                                            mods: { mode: 'radio' },
                                            val: 1,
                                            options: [
                                                { val: 1, text: 'Доклад' },
                                                { val: 3, text: 'Круглый стол' }
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'form-field',
                                name: 'input3',
                                mods: { type: 'radio-group' },
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            block: 'label',
                                            content: 'Радиогруппа'
                                        }
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'radio-group',
                                            val: 2,
                                            options: [
                                                {
                                                    text: 'Default',
                                                    name: 'radio1`',
                                                    val: 1
                                                },
                                                {
                                                    text: 'Checked',
                                                    name: 'radio2',
                                                    val: 2
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'form-field',
                                name: 'input98',
                                mods: { type: 'radio-group' },
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            block: 'label',
                                            content: 'Радиогруппа'
                                        }
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'radio-group',
                                            mods: { type: 'line' },
                                            val: 2,
                                            options: [
                                                {
                                                    text: 'Default',
                                                    val: 1
                                                },
                                                {
                                                    text: 'Checked',
                                                    val: 2
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'form-field',
                                name: 'input88',
                                mods: { type: 'radio-group' },
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            block: 'label',
                                            content: 'Радиогруппа'
                                        }
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'radio-group',
                                            mods: { type: 'button' },
                                            val: 2,
                                            options: [
                                                {
                                                    text: 'Default',
                                                    val: 1
                                                },
                                                {
                                                    text: 'Checked',
                                                    val: 2
                                                }
                                            ]
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
                                mods: { type: 'submit', view: 'extra' },
                                text: 'Button'
                            },
                            {
                                block: 'button',
                                mods: { view: 'action' },
                                text: 'Button'
                            },
                            {
                                block: 'button',
                                text: 'Button'
                            }
                        ]
                    }
                ]
            }
        };
    }
}
