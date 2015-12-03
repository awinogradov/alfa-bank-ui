import { Component } from 'protein-kit';

export default class Link extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            icon: [
                { false: {
                    data: {
                        icon: { block: 'icon', mods: { tool: 'pr' } },
                        text: 'Link'
                    }
                } }
            ]
        };
    }

    default() {
        return {
            states: ['hovered', 'disabled', 'pseudo'],
            data: { text: 'Link' }
        };
    }
}
