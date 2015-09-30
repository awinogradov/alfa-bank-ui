import { Component } from 'protein-kit';

export default class Radio extends Component {
    types() {
        return {
            size: ['m', 'l'],
            type: [{
                'button': {
                    types: { size: ['s', 'm', 'l', 'xl'] }
                }
            }]
        };
    }

    default() {
        return {
            states: [
                'hovered',
                'checked',
                ['hovered', 'checked'],
                'focused',
                ['focused', 'checked'],
                'disabled',
                ['disabled', 'checked']
            ],
            data: { text: 'Radio' }
        };
    }
}
