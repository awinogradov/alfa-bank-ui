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
                'link',
                { 'icon': {
                    data: {
                        switcher: {
                            block: 'icon',
                            mods: { tool: 'help' }
                        },
                        popup: 'Some info from icon'
                    }
                } }
            ],
            mode: ['hover', 'focus'],
            view: ['error']
        };
    }

    default() {
        return {
            types: { switcher: 'link' },
            data: {
                switcher: {
                    block: 'link',
                    mods: { view: 'pseudo' },
                    text: 'default'
                },
                popup: 'Some default info from link'
            }
        };
    }
}
