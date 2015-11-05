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
                    earlierLimit: '12.10.2015',
                    laterLimit: '20.11.2015',
                    val: '22.10.2015',
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
            states: ['hovered', 'focused', 'invalid', 'disabled'],
            data: { val: 'Value', placeholder: 'Placeholder' }
        };
    }
}
