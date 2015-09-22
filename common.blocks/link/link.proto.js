import { Component } from 'protein-kit';

export default class Link extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            view: ['pseudo'],
            icon: [
                { false: {
                    data: {
                        icon: { block: 'icon', mods: { tool: 'search' } },
                    }
                } }
            ]
        };
    }

    default() {
        return {
            states: ['hovered', 'disabled'],
            data: { text: 'Link' }
        };
    }
}
