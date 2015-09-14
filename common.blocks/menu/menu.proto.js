module.exports = {
    default: { size: 'm', visible: true, theme: ['alfa-on-color', 'alfa-on-white'] },
    view: ['horizontal'],
    size: ['s', 'm', 'l', 'xl'],
    data: {
        content: [
            {
                block: 'menu-item',
                mods: { type: 'link' },
                val: 1,
                url: '#',
                content: 'Отпуск на работе'
            },
            {
                block: 'menu-item',
                mods: { type: 'link', view: 'pseudo' },
                val: 2,
                url: '#',
                content: 'Отпуск в горах'
            },
            {
                block: 'menu-item',
                mods: { type: 'dropdown', view: 'pseudo' },
                popup: 'dropdown content',
                content: 'Отпуск на море'
            },
            {
                block: 'menu-item',
                mods: { type: 'link', checked: true },
                val: 4,
                url: '#',
                content: 'Отпуск на диване'
            }
        ],
    }
};
