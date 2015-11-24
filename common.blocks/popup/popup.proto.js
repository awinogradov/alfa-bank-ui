import { Component } from 'protein-kit';

export default class Popup extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            view: ['error'],
            type: [
                {
                    'tooltip': {
                        types: {
                            target: 'anchor',
                            size: ['s', 'm', 'l', 'xl'],
                            view: ['', 'error']
                        }
                    }
                }
            ]
        };
    }

    default() {
        return {
            data: Array.prototype.concat.apply([], [
                'top-left',
                'top-center',
                'top-right',
                'left-top',
                'left-center',
                'left-bottom',
                'right-top',
                'right-center',
                'right-bottom',
                'bottom-left',
                'bottom-center',
                'bottom-right'
            ].map(direction => ([
                {
                    block: 'popup-test',
                    js: { anchor: 'link' },
                    anchor: { block: 'link', mods: { view: 'pseudo' }, text: 'Anchor Link' },
                    popup: {
                        block: 'popup',
                        mods: { target: 'anchor' },
                        content: 'Popup content <br>with two strings',
                        directions: [direction]
                    }
                },
                {
                    block: 'popup-test',
                    js: { anchor: 'button' },
                    anchor: { block: 'button', text: 'Anchor Button' },
                    popup: {
                        block: 'popup',
                        mods: { target: 'anchor' },
                        content: 'Popup content with one strings',
                        directions: [direction]
                    }
                },
                {
                    block: 'popup-test',
                    js: { anchor: 'button' },
                    anchor: { block: 'button', text: 'Anchor Button' },
                    popup: {
                        block: 'popup',
                        mods: { target: 'anchor' },
                        content: 'Popup content <br>with two strings',
                        directions: [direction]
                    }
                }
            ])))
        };
    }
}
