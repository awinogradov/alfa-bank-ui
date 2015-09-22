import { Component } from 'protein-kit';

export default class CheckboxGroup extends Component {
    types() {
        return {
            size: ['m', 'l'],
            type: ['button', 'line']
        };
    }

    default() {
        return {
            states: ['hovered', 'checked', ['hovered', 'checked'], 'focused', 'disabled', ['disabled', 'checked']],
            data: {
                val: [2, 3],
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
                    }
                ]
            }
        };
    }
}
