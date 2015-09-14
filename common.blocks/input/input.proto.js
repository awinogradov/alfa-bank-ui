module.exports = {
    default: { size: 'm', theme: ['alfa-on-color', 'alfa-on-white'] },
    states: ['hovered', 'focused', 'disabled'],
    size: ['s', 'm', 'l', 'xl'],
    type: ['card', 'email', 'money', 'tel'],
    mode: ['link'],
    width: ['available'],
    'has-calendar': true,
    'has-autocomplete': true,
    'has-mask': true,
    'has-filter': true,
    'has-addon': true,
    options: {
        type: {
            card: {
                val: '4444 4444 4444 4444'
            },
            email: {
                val: 'username@domain.com'
            },
            money: {
                val: '100 000'
            },
            tel: {
                val: '+7 960 000-00-00',
                placeholder: '+7 960 000-00-00'
            }
        },
        'has-calendar': {
            val: '22.07.2015',
            earlierLimit: '20.06.2015',
            laterLimit: '20.08.2015',
            addon: { block: 'icon', mods: { tool: 'calendar' } }
        },
        'has-autocomplete': {
            options: [
                { val: 'MSC', content: 'Moscow' },
                { val: 'NYC', content: 'New York' }
            ]
        },
        'has-filter': {
            mods: {
                'has-autocomplete': true
            }
        },
        'has-addon': {
            addon: { block: 'icon', mods: { tool: 'help' } }
        }
    },
    data: { val: 'Value', placeholder: 'Placeholder' }
};
