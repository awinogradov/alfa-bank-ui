({
    block: 'page',
    title: 'Select',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'index.min.css' }],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'mode Check',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'select',
                                    mods: { theme: theme, size: size, mode: 'check' },
                                    name: 'select1',
                                    val: [2, 3],
                                    text: 'Программа конференции',
                                    options: [
                                        { val: 1, text: 'Доклад' },
                                        { val: 2, text: 'Мастер-класс' },
                                        { val: 3, text: 'Круглый стол' }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'mode Radio',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'select',
                                    mods: { theme: theme, size: size, mode: 'radio' },
                                    name: 'select2',
                                    val: [2, 3],
                                    text: 'Программа конференции',
                                    options: [
                                        { val: 1, text: 'Доклад' },
                                        { val: 2, text: 'Мастер-класс' },
                                        { val: 3, text: 'Круглый стол' }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'mode Radio-Check',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'select',
                                    mods: { theme: theme, size: size, mode: 'radio-check' },
                                    name: 'select3',
                                    val: [2, 3],
                                    text: '—',
                                    options: [
                                        { val: 1, text: 'Доклад' },
                                        { val: 2, text: 'Мастер-класс' },
                                        { val: 3, text: 'Круглый стол' }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Width Available',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'select',
                                    mods: { theme: theme, size: size, mode: 'radio-check', width: 'available' },
                                    name: 'select4',
                                    val: [2, 3],
                                    text: '—',
                                    options: [
                                        { val: 1, text: 'Доклад' },
                                        { val: 2, text: 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем' },
                                        { val: 3, text: 'Круглый стол' }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Disabled',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'select',
                                    mods: { theme: theme, size: size, mode: 'radio', disabled: true },
                                    name: 'select5',
                                    val: [2, 3],
                                    text: 'Программа конференции',
                                    options: [
                                        { val: 1, text: 'Доклад' },
                                        { val: 2, text: 'Мастер-класс' },
                                        { val: 3, text: 'Круглый стол' }
                                    ]
                                }
                            },
                            {
                                block: 'select',
                                mods: { theme: theme, size: size, mode: 'radio-check' },
                                name: 'select6',
                                val: 2,
                                text: '—',
                                options: [
                                    { val: 1, text: 'Доклад', disabled: true },
                                    { val: 2, text: 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем' },
                                    { val: 3, text: 'Круглый стол' }
                                ]
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'Groups',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'select',
                                    mods: { theme: theme, size: size, mode: 'check' },
                                    name: 'select7',
                                    val: [2, 5],
                                    text: 'Программа конференции',
                                    options: [
                                        {
                                            title: 'Теория',
                                            group: [
                                                { val: 1, text: 'Доклад №1' },
                                                { val: 2, text: 'Доклад №2' },
                                                { val: 3, text: 'Доклад №3' },
                                            ]
                                        },
                                        {
                                            title: 'Практика',
                                            group: [
                                                { val: 4, text: 'Мастер-класс №1' },
                                                { val: 5, text: 'Мастер-класс №2' }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        },
        {
            block: 'example-section',
            title: 'optionsMaxHeight',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: ['s', 'm', 'l', 'xl'].map(function(size) {
                        return [
                            { elem: 'size', content: size },
                            {
                                elem: 'item',
                                content: {
                                    block: 'select',
                                    mods: { theme: theme, size: size, mode: 'check' },
                                    name: 'select8',
                                    val: [2, 5],
                                    optionsMaxHeight: 100,
                                    text: 'Программа конференции',
                                    options: [
                                        {
                                            title: 'Теория',
                                            group: [
                                                { val: 1, text: 'Доклад №1' },
                                                { val: 2, text: 'Доклад №2' },
                                                { val: 3, text: 'Доклад №3' },
                                            ]
                                        },
                                        {
                                            title: 'Практика',
                                            group: [
                                                { val: 4, text: 'Мастер-класс №1' },
                                                { val: 5, text: 'Мастер-класс №2' }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ];
                    })
                };
            })
        }
    ]
});
