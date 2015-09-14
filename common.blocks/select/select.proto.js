module.exports = {
    default: { mode: 'radio-check', size: 'm', theme: ['alfa-on-color', 'alfa-on-white'] },
    states: ['hovered', 'focused-hard', 'opened', ['hovered', 'focused-hard'], 'disabled'],
    size: ['s', 'm', 'l', 'xl'],
    mode: ['check', 'radio', 'radio-check'],
    options: {
        mode: {
            check: { val: [2, 3] },
            radio: { val: [2] },
            'radio-check': { val: [1] },
        }
    },
    data: {
        text: 'This is sparta!',
        options: [
            { val: 1, text: 'Доклад' },
            { val: 2, text: 'Мастер-класс', disabled: true },
            { val: 3, text: 'Круглый стол' },
            {
                title: 'Group',
                group: [
                    { val: 4, text: 'Доклад' },
                    { val: 5, text: 'Мастер-класс' },
                    { val: 6, text: 'Круглый стол' }
                ]
            }
        ],
        directions: ['bottom-left']
    }
};
