import { Component } from 'protein-kit';

export default class Link extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            view: ['pseudo'],
            icon: [
                { false: {
                    data: {
                        icon: { block: 'spin', mods: { visible: true, size: 'm' } },
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
