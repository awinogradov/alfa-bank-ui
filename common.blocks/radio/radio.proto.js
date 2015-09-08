module.exports = {
    themes: ['alfa-on-color', 'alfa-on-white'],
    states: ['hovered', 'checked', ['hovered', 'checked'], 'focused', 'disabled', ['disabled', 'checked']],
    size: ['m', 'l'],
    type: ['button'],
    options: {
        default: {
            name: 'default'
        },
        size: {
            name: 'size',
            m: {
                name: 'sizeM',
            },
            l: {
                name: 'sizeL',
            }
        },
        type: {
            name: 'type'
        }
    },
    default: { size: 'm' },
    data: { text: 'Radio' }
};
