module.exports = {
    default: { size: 'm', theme: ['alfa-on-color', 'alfa-on-white'] },
    states: ['hovered', 'focused', 'disabled'],
    size: ['s', 'm', 'l', 'xl'],
    type: ['card', 'email', 'money', 'tel'],
    mode: ['link'],
    'has-calendar': true,
    options: {
        'has-calendar': {
            val: '22.07.2015',
            mods: { 'has-addon': true },
            earlierLimit: '20.06.2015',
            laterLimit: '20.08.2015'
        }
    },
    data: { val: 'Value' }
};
