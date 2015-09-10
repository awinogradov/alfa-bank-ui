module.exports = {
    default: { size: 'm', theme: ['alfa-on-color', 'alfa-on-white'] },
    states: ['hovered', 'focused-hard', 'pressed', 'disabled'],
    size: ['s', 'm', 'l', 'xl'],
    view: ['action', 'extra', 'other', 'pseudo'],
    type: ['link'],
    icon: false,
    spin: false,
    options: {
        type: {
            link: { url: '#' }
        },
        icon: { icon: { block: 'icon', mods: { tool: 'search' } } },
        spin: { icon: { block: 'spin', mods: { visible: true } } }
    },
    data: { text: 'Button' }
};
