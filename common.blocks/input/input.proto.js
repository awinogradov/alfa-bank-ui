import { Component } from 'protein-kit';

export default class Input extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            type: [
                { card: {
                    data: { val: '4444 4444 4444 4444' }
                } },
                { email: {
                    data: { val: 'username@domain.com' }
                } },
                { money: {
                    data: { val: '100 000' }
                } },
                { tel: {
                    data: {
                        val: '+7 960 000-00-00',
                        placeholder: '+7 960 000-00-00'
                    }
                } }
            ],
            mode: ['link'],
            width: ['available'],
            'has-calendar': {
                data: {
                    val: '22.07.2015',
                    earlierLimit: '20.06.2015',
                    laterLimit: '20.08.2015',
                    addon: { block: 'icon', mods: { tool: 'calendar' } }
                }
            },
            'has-autocomplete': {
                data: {
                    options: [
                        { val: 'MSC', content: 'Moscow' },
                        { val: 'NYC', content: 'New York' }
                    ]
                }
            },
            // 'has-filter': {
            //     data: {
            //         mods: {
            //             'has-autocomplete': true
            //         }
            //     }
            // },
            'has-addon': {
                data: {
                    addon: { block: 'icon', mods: { tool: 'help' } }
                }
            },
            'has-mask': true,
            'has-filter': true
        };
    }

    default() {
        return {
            states: ['hovered', 'focused', 'disabled'],
            data: { val: 'Value', placeholder: 'Placeholder' }
        };
    }
}
