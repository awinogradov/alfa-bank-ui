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
            type: [
                { 'link': {
                    data: { url: '#' }
                } }
            ],
            icon: [
                { false: {
                    data: { icon: { block: 'icon', mods: { tool: 'search' } } }
                } }
            ],
            spin: [
                { false: {
                    data: { icon: { block: 'spin', mods: { visible: true } } }
                } }
            ]
        };
    }

    default() {
        return {
            states: ['hovered', 'focused-hard', ['hovered', 'focused-hard'], 'pressed', 'disabled'],
            data: { text: 'Button' }
        };
    }
}
