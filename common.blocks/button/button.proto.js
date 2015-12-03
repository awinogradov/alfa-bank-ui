import { Component } from 'protein-kit';

export default class Button extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            view: [
                'action',
                { 'extra': {
                    data: { text: 'Extra' }
                } },
                'other',
                'pseudo'
            ],
            icon: [
                { false: {
                    data: {
                        icon: { block: 'icon', mods: { tool: 'calendar' } },
                        text: 'Button'
                    }
                } }
            ],
            spin: [
                { false: {
                    types: {
                        size: ['s', 'm', 'l', 'xl']
                    },
                    data: {
                        icon: { block: 'spin', mods: { visible: true } },
                        text: 'Button'
                    }
                } }
            ]
        };
    }

    default() {
        return {
            states: ['hovered', 'focused-hard', ['hovered', 'focused-hard'], 'pressed', 'disabled', 'checked'],
            data: { text: 'Button' }
        };
    }
}
