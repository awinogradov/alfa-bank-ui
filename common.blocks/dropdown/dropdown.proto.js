import { Component } from 'protein-kit';

export default class Dropdown extends Component {
    types() {
        return {
            // size: ['s', 'm', 'l', 'xl']
            switcher: [
                { 'button': {
                    data: {
                        switcher: {
                            block: 'button',
                            text: 'button'
                        },
                        directions: ['right-top'],
                        popup: 'Some info from button'
                    }
                } },
                { 'button': {
                    types: {
                        type: 'tooltip'
                    },
                    data: {
                        switcher: {
                            block: 'button',
                            text: 'button'
                        },
                        popup: 'Some info from button'
                    }
                } },
                'link'
            ],
            mode: ['hover', 'focus'],
            view: ['error'],
            type: ['tooltip']
        };
    }

    default() {
        return {
            types: { switcher: 'link' },
            data: {
                switcher: {
                    block: 'link',
                    mods: { pseudo: true },
                    text: 'default'
                },
                popup: 'Some default info from link'
            }
        };
    }
}
