import { Component } from 'protein-kit';

export default class CheckboxGroup extends Component {
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
                val: [2, 3, 7],
                options: [
                    {
                        text: 'Default',
                        name: 'checkbox1`',
                        val: 1
                    },
                    {
                        text: 'Checked',
                        name: 'checkbox2',
                        val: 2
                    },
                    {
                        text: 'Checked',
                        name: 'checkbox3',
                        val: 3
                    },
                    {
                        text: 'Default',
                        name: 'checkbox4',
                        val: 4
                    },
                    {
                        text: 'Disabled',
                        name: 'checkbox5',
                        disabled: true,
                        val: 5
                    },
                    {
                        text: 'Default',
                        name: 'checkbox6',
                        val: 6
                    },
                    {
                        text: 'Checked',
                        name: 'checkbox7',
                        val: 7
                    },
                    {
                        text: 'Disabled',
                        name: 'checkbox8',
                        // disabled: true,
                        val: 8
                    }
                ]
            }
        };
    }
}
