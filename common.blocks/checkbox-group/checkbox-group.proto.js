module.exports = {
    default: { size: 'm', theme: ['alfa-on-white', 'alfa-on-color'] },
    states: ['hovered', 'checked', ['hovered', 'checked'], 'focused', 'disabled', ['disabled', 'checked']],
    size: ['m', 'l'],
    type: ['button', 'line'],
    data: {
        val: [2, 3],
        options: [
            {
                text: 'Default',
                name: 'checkbox1`',
                val: 1
            },
            {
                text: 'Checked',
                name: 'checkbox2',
                val: 2
            },
            {
                text: 'Checked',
                name: 'checkbox3',
                val: 3
            },
            {
                text: 'Default',
                name: 'checkbox4',
                val: 4
            }
        ]
    }
};
