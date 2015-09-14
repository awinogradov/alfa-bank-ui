module.exports = {
    default: { size: 'm', theme: ['alfa-on-white', 'alfa-on-color'] },
    states: ['hovered', 'checked', ['hovered', 'checked'], 'focused', 'disabled', ['disabled', 'checked']],
    size: ['m', 'l'],
    type: ['button', 'line'],
    data: {
        val: 2,
        options: [
            {
                text: 'Default',
                name: 'radio1`',
                val: 1
            },
            {
                text: 'Checked',
                name: 'radio2',
                val: 2
            },
            {
                text: 'Checked',
                name: 'radio3',
                val: 3
            },
            {
                text: 'Default',
                name: 'radio4',
                val: 4,
                disabled: true
            }
        ]
    }
};
