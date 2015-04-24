({
    block: 'page',
    title: 'Datepicker',
    styles: [
        { elem: 'css', url: 'calendar.min.css' },
        '<!--[if IE]>',
            { elem: 'css', url: 'calendar.min.ie.css' },
        '<![endif]-->',
        '<!--[if IE 8]>',
            { elem: 'css', url: 'calendar.min.ie8.css' },
        '<![endif]-->',
        '<!--[if IE 9]>',
            { elem: 'css', url: 'calendar.min.ie9.css' },
        '<![endif]-->'
    ],
    scripts: [
        { elem: 'js', url: 'calendar.min.js' }
    ],
    content: [
        {
            attrs: {
                style: 'padding: 100px'
            },
            content: [{
                block: 'input',
                mods: {
                    theme: 'alfa',
                    size: 'm',
                    bkg : 'white',
                    'has-calendar': true
                },
                weekdays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            }]
        }
    ]
});
