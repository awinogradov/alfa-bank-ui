import { Component } from 'protein-kit';

export default class RadioGroup extends Component {
    types() {
        return {
            size: ['m', 'l'],
            type: [
                { 'button': {
                    types: { view: ['action', 'extra'] }
                } },
                'line'
            ]
        };
    }

    default() {
        return {
            data: {
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
                    },
                    {
                        text: 'Default',
                        name: 'radio3',
                        val: 3
                    },
                    {
                        text: 'Default',
                        name: 'radio4',
                        val: 4
                    },
                    {
                        text: 'Disabled',
                        name: 'radio5',
                        disabled: true,
                        val: 5
                    },
                    {
                        text: 'Default',
                        name: 'radio6',
                        val: 6
                    },
                    {
                        text: 'Default',
                        name: 'radio7',
                        val: 7
                    },
                    {
                        text: 'Disabled',
                        name: 'radio8',
                        disabled: true,
                        val: 8
                    }
                ]
            }
        };
    }
}
